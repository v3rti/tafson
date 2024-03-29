'use client'


import '@styles/globalStyles.css';
import Image from 'next/image';

import {AiFillPlayCircle, AiFillLike, AiOutlineLike, AiOutlineDislike, AiFillDislike} from 'react-icons/ai';
import {BsStarFill, BsStarHalf, BsStar} from 'react-icons/bs';

import { useSession } from 'next-auth/react';

import Carousel from '@components/Carousel';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useStore } from '@app/store/stateStore';
import StarRating from '@components/StarRating';
import RatingDropdown from '@components/RatingDropdown';

export default function ReviewPage({params}){

  const {data, status} = useSession();

  const email = data?.user?.email;
  
  const [reviewsNumber, setReviewsNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [content, setContent] = useState("");
  const [rating, setRating] = useState();
  const [fetchedReview, setFetchedReview] = useState();

  const ratingOptions = [1, 2, 3, 4, 5];
  const [songRating, setSongRating] = useState('');
  
  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  useEffect(() => {
    getReviewInfos().then(setSong);
  }, []);

  useEffect(() => {
    fetchReviews().then(setFetchedReview);
  }, [])

  console.log("these are fetchedReview", fetchedReview);

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!content) {
      setError("Please write a review first!")
      return;
    }

    if (!rating){
      setError("Please pick a rating!");
      return;
    }

    setLoading(true);

    try {
      const reviewData = {
        email,
        rating,
        content,
        reviewType: "song",
        firstName: data.user.firstName, 
        reviewId: params.slug,
      };

      const response = await fetch('/api/review', {
        method: 'POST',
        body: JSON.stringify(reviewData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.status === 200) {
        setError("Review has been submitted successfully!")
        setContent("");
        setRating(0);
        fetchReviews().then(setFetchedReview);
      } else{

        const errorData = await response.json();
        setError(errorData.message); 
        setEmail("");
      }
    } catch (error) {
      console.log(error)
    }
      setLoading(false);
    };

    


  const apiKey = process.env.RAPID_API;

  const [song, setSong] = useState();
  const [artistInfo, setArtistInfo] = useState();


  const setReviewArtist = useStore((state) => state.setReviewArtist)
  const reviewArtist = useStore((state) => state.reviewArtist)
  
  const fetchReviews = async () => {
    
    const response = await fetch(`/api/review`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.json();
}


  const getReviewInfos = async () => {

      const url =
        `https://spotify23.p.rapidapi.com/tracks/?ids=${params.slug}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '26681d754fmsh3cb5cb5a73b9a6ap1500d6jsn1ab2e9d4d46e',
          'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();

        return data.tracks[0];
      } catch (error) {
        console.error(error);
      }
  }

  const setCurrentlyPlaying = useStore((state) => state.setCurrentlyPlaying);
  const setIsPlaying = useStore((state) => state.setIsPlaying);

  const setCurrentSongInfos = useStore((state) => state.setCurrentSongInfos);

  const handlePlayClick = (song) => {
    const previewLink = song?.preview_url;
    setCurrentlyPlaying(previewLink);
    setIsPlaying(true);
    const image = song?.album.images[0].url;
    const name = song?.name;
    const artist = song?.artists[0].name;
    setCurrentSongInfos({ image, name, artist });
    console.log('Setting currentlyPlaying:', previewLink);  
  };

  const millisecondsToMinutesAndSeconds = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
  
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
  
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  const formatDate = (inputDate) => {

    const dateParts = inputDate.split('-');

    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    const day = dateParts[2];
    const monthIndex = parseInt(dateParts[1]) - 1; 
    const year = dateParts[0];

    const monthName = monthNames[monthIndex];
    const formattedDate = `${day} ${monthName} ${year}`;
  
    return formattedDate;
  }

  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  

  const renderDivs = (count) => {
    const divs = [];
  
    for (let i = 0; i < count; i++) {
      const key = `div-${i}`;

      divs.push(<BsStarFill key={i}className='w-6 h-6' />);
    }
  
    return divs;
  };


  function calculateArtistRating(userRatings) {
    const totalRatings = userRatings.length;
  
    if (totalRatings === 0) {
      return 0;
    }

    const sumRatings = userRatings.reduce((sum, rating) => sum + rating, 0);
    const averageUserRating = sumRatings / totalRatings;

    const maxUserRating = 5;
    const maxArtistRating = 10;
    const artistRating = (averageUserRating / maxUserRating) * maxArtistRating;
  
    return artistRating;
  }

  useEffect(() => {
    if (fetchedReview) {
      const userRatings = fetchedReview.reviews
        .filter((review) => review.reviewId === params.slug)
        .map((review) => review.rating);

      const rating = calculateArtistRating(userRatings);
      setSongRating(rating);
      setReviewsNumber(fetchedReview.reviews.filter((review) => review.reviewId === params.slug).length);
    }
  }, [fetchedReview, params.slug]);



  console.log("these are the reviews i got" ,fetchedReview)  
  if(song){
    console.log("these are the artist infos:",artistInfo);
    return (
      <div className='mx-48 p-10 flex flex-col gap-8'>
        <div className='flex justify-between'>
          <div className='flex gap-4'>
            
            <div className='flex flex-col gap-3 w-fit'>
              <Image src={song?.album.images[0].url} width={280} height={280} className='rounded-xl'/>
              <div onClick={() => handlePlayClick(song)} className='relative border-primary-green border-2 px-4 py-2 text-primary-green flex rounded-2xl items-center justify-center cursor-pointer'>
                <div className='absolute left-2'><AiFillPlayCircle className='w-8 h-8'/></div>
                <div className='text-lg'>Play Demo</div>
              </div>
            </div>
            <div className='flex gap-36'>
              <div className='flex flex-col gap-4'>
              <div className='text-primary-green'>
                <div className='text-3xl font-semibold'>{song?.name}</div>
                <div className='flex gap-1'>By<Link className='font-semibold' href={song?.artists[0].external_urls.spotify}>{song?.artists[0].name}</Link></div>
                {song?.artists.length > 1 ? <div className='flex gap-1 text-sm'>Featuring:
                  <div className='flex gap-2'>
                    {song?.artists.slice(1).map(artist => {
                    return <Link href={artist.external_urls.spotify} className='font-semibold cursor-pointer'>{artist.name}</Link>
                  })}
                  </div>
                </div> : ""}
              </div>
              <div className='flex gap-3 items-center text-primary-green'>
                <div className='flex gap-1'>
                  <BsStarFill className='w-6 h-6' />
                  <BsStarFill className='w-6 h-6' />
                  <BsStarFill className='w-6 h-6' />
                  <BsStarFill className='w-6 h-6' />
                  <BsStarHalf className='w-6 h-6' />
                </div>
                <div className='flex text-lg gap-2'>
                  <div className='font-semibold'>{reviewsNumber || 0}</div>
                  <div>Ratings</div>
                </div>
              </div>
              <div className='bg-primary-green px-6 py-2 text-secondary-jetstream w-fit rounded-xl'>Rate & Review</div>
              <div className='mt-4 flex flex-col gap-2'>
                <div className='text-primary-green font-semibold text-lg'>Listen on:</div>
                <div className='flex gap-2 items-center'>
                  <div>
                    <Link href={song.external_urls.spotify}><Image src="/assets/spotify.png" width={50} height={50} className='rounded-full cursor-pointer'/></Link>
                  </div>
                </div>
              </div>
            </div>
            </div>
            
          </div>
          <div className='relative flex flex-col gap-2 w-3/12'>
          <div className={`${songRating ? 'absolute p-6 text-xl font-semibold rounded-full text-secondary-jetstream bg-primary-green h-fit top-0 -left-24' : 'hidden'}`}>{songRating ? Number(songRating?.toFixed(2)) : ""}</div>
          <div>
            {/* <fieldset className='border-2 border-primary-green rounded-2xl'>
              <legend className='ml-4 p-2 text-xl font-semibold'>Featured Reviews</legend>
              <div className='flex flex-col gap-2 p-4'>
                  <div className='flex gap-2'>
                    <Image src="/assets/user2.png" width={50} height={50} className='rounded-full'/>
                    <div className='flex flex-col'>
                      <div className='text-lg font-semibold'>Emily Johnson</div>
                      <div className='text-sm'>"Absolutely love this song! The melo.."</div>
                    </div>
                  </div>
                  <div className='flex gap-2'>
                    <Image src="/assets/user3.png" width={50} height={50} className='rounded-full'/>
                    <div className='flex flex-col'>
                      <div className='text-lg font-semibold'>Alex Rodriguez</div>
                      <div className='text-sm'>"Impressive work by the artist. The .."</div>
                    </div>
                  </div>
                  <div className='flex gap-2'>
                    <Image src="/assets/playboi.png" width={50} height={50} className='rounded-full'/>
                    <div className='flex flex-col'>
                      <div className='text-lg font-semibold'>Sarah Smith</div>
                      <div className='text-sm'>"This song takes me on a journey.."</div>
                    </div>
                  </div>
                  <div className='flex gap-2'>
                    <Image src="/assets/user1.png" width={50} height={50} className='rounded-full'/>
                    <div className='flex flex-col'>
                      <div className='text-lg font-semibold'>David Thompson</div>
                      <div className='text-sm'>"I've been a fan of the artist.."</div>
                    </div>
                  </div>
               </div>
            </fieldset> */}
          </div>
          
          </div>
        </div>
        <div>
          <div className=''>
            <div className='text-2xl font-semibold text-primary-green'>Song Details</div>
            <div className='flex flex-col gap-4 py-4'>
              <div className=''>
                <div className='mb-2 text-primary-green font-semibold text-xl'>Artist Name: {song?.artists[0].name}</div>
              </div>
              <div className='w-full flex justify-between gap-3 text-primary-green'>
                <div className="w-full">
                  <table className=''>
                    <tbody>
                      <tr>
                        <td className="pr-48 py-2 font-semibold">Title</td>
                        <td className="px-4 py-2">{song?.name}</td>
                      </tr>
                      <tr>
                        <td className="pr-48 py-2 font-semibold">Artist</td>
                        <td className="px-4 py-2">{song?.artists[0].name}</td>
                      </tr>
                      <tr>
                        <td className="pr-48 py-2 font-semibold">Duration</td>
                        <td className="px-4 py-2">{millisecondsToMinutesAndSeconds(song?.duration_ms)}</td>
                      </tr>
                      <tr>
                        <td className="pr-48 py-2 font-semibold">Album Type</td>
                        <td className="px-4 py-2">{capitalize(song?.album.album_type)}</td>
                      </tr>
                      <tr>
                        <td className="pr-48 py-2 font-semibold">Release Date</td>
                        <td className="px-4 py-2">{formatDate(song?.album.release_date)}</td>
                      </tr>
                      <tr>
                        <td className="pr-48 py-2 font-semibold">Explicit</td>
                        <td className="px-4 py-2">{song?.explicit ? <div className='text-red-700 font-semibold'>Yes</div> : <div className='text-green-600 font-semibold'>Safe</div>}</td>
                      </tr>
                      <tr>
                      {song?.artists.length > 1 ? <td className="pr-48 py-2 font-semibold">Featured Artists</td> : ""}
                        {song?.artists.length > 1 ? <td className='px-4 py-2 flex flex-row gap-5'>
                            {song?.artists.slice(1).map(artist => {
                            return <div className='font-semibold'>{artist.name}</div>
                          })}
                          </td>: ""}
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* <fieldset className='w-4/12 border-2 border-primary-green rounded-2xl'>
                  <legend className='ml-4 p-2 text-xl font-semibold'>Recommended Songs</legend>
                  <div className='px-4 py-2 flex gap-2 flex-col'>
                  
                  {song.artist.relatedContent.relatedArtists.items.slice(0, 4).map((item) =>{
                      return <div className='flex gap-2'>
                      <Image src={item.visuals.avatarImage.sources[0].url} width={45} height={45} className='rounded-lg'/>
                      <div className='flex flex-col'>
                        <Link href={`http://localhost:3000/review/artist/${item.id}`}><div className='cursor-pointer text-lg font-semibold'>{item.profile.name}</div></Link>
                        <div>0 Reviews</div>
                      </div>
                    </div>
                  })}
                  </div>
                </fieldset> */}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='text-2xl font-semibold text-primary-green mb-4'>Reviews</div>
          <div className={`"text-primary-green font-bold" ${error} ? "" : "hidden"`}> {error} </div>
          <div className=''>
            <div className='flex justify-between'>
              <div className='text-lg text-primary-green mb-3'>Leave your feedback: </div>
              <div className='className="rating-dropdown-container'>
              <label className="rating-label" htmlFor="ratingDropdown">
                Select a Rating:
              </label>
                <select className="rating-select"
                  id="ratingDropdown"
                  name="rating"
                  value={rating}
                  onChange={handleRatingChange}
                >
                  <option value=""></option>
                  {ratingOptions.map((rating) => (
                    <option key={rating} value={rating}>
                      {rating}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
            <textarea cols="30" rows="4" className='p-4 w-full rounded-xl text-primary-green outline-0 bg-secondary-jetstream border-2 border-primary-green placeholder:text-slate-500' placeholder='Leave your review here..'
            id="content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}>
            </textarea>
            <div className='flex justify-end'>
              <button disabled={loading ? true : false} className='px-6 py-2 bg-primary-green text-secondary-jetstream w-fit rounded-lg mt-2 text-left text-lg mr-4 cursor-pointer'>Post my review</button>
            </div>
            </form>
          </div>
          <div className='w-full border-b-4 border-primary-green py-3 mb-4'></div>
          <div className='mb-16'>
          {fetchedReview ? fetchedReview.reviews.filter((review) => review.reviewId === params.slug).map(review => {
            return <div className='flex flex-col gap-3'>
            <div className='flex gap-2 text-primary-green'>
              <Image src="/assets/default_profile.png" width={70} height={70} className='rounded-full'/>
              <div className='flex flex-col'>
                <div className='text-xl font-semibold'>{review.firstName}</div>
                <div className='text-sm'></div>
                <div className='flex gap-1 text-primary-green'>
                  {renderDivs(review.rating)}
                </div>
              </div>  
            </div>
            <div className='border-2 border-primary-green h-fit rounded-lg p-4 pr-16 text-primary-green'>
              {review.content}
            </div>
            <div className='mr-0 ml-auto text-primary-green'>
            </div>
          </div>
          }): "no reviews"}    
          </div>
        </div>
      </div>
    )
  }
}