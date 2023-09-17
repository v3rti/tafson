'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {BsStarFill} from 'react-icons/bs';

export default function ReviewsPage(){

  const [fetchedReviews,setFetchedReviews] = useState();

  useEffect(() => {
    fetchReviews().then(setFetchedReviews);
  }, [])

  const fetchReviews = async () => {
    const response = await fetch(`/api/review`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.json();
}

  const renderDivs = (count) => {
    const divs = [];

    for (let i = 0; i < count; i++) {
      const key = `div-${i}`;

      divs.push(<BsStarFill key={i}className='w-6 h-6' />);
    }

    return divs;
  };

  if(fetchedReviews)
  return (
    <div className="mx-40 p-10 pb-28">
      <div className="text-2xl font-semibold mb-4 text-primary-green">Latest Added Reviews: </div>
      {fetchedReviews ? fetchedReviews.reviews.map(review => {
            return <div className='flex flex-col gap-3 border-2 border-primary-green mt-8 p-4 rounded-lg'>
            <div className='flex gap-2 text-primary-green'>
              <Image src="/assets/default_profile.png" width={70} height={70} className='rounded-full'/>
              <div className="flex justify-between w-full">
                <div className='flex flex-col'>
                  <div className='text-xl font-semibold'>{review.firstName}</div>
                  <div className='text-sm'></div>
                  <div className='flex gap-1 text-primary-green'>
                    {renderDivs(review.rating)}
                  </div>
                </div>
                <div className="text-lg font-bold underline text-primary-green">
                  <Link href={`/review/${review.reviewType}/${review.reviewId}`}>Visit Review</Link>
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
  )
}