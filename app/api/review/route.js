import connectMongoDB from '@libs/mongodb'
import Review from '@models/review'
import User from '@models/user';
import sanitizeHtml from 'sanitize-html';


export async function POST(req){

  await connectMongoDB();

  const reviewData = await req.json();

  const existingUser = await User.findOne({'email': reviewData.email});


  if (existingUser) {

    try {    
      const review = new Review({
        email: reviewData.email,
        rating: reviewData.rating,
        content: sanitizeHtml(reviewData.content),
        reviewType: reviewData.reviewType,
        createdAt: new Date("2022-03-25")
      });

      await review.save();

      return Response.json({message: "Review Created"}, {status: 200})
    } catch (error) {
      console.log(error.message)

      return Response.json(error)
    }
  } else {
    return Response.json({error: "unknown??oka"})
  }

}


export async function GET(){

  await connectMongoDB();

  const reviews = await Review.find();

  return Response.json({reviews}, {status: 200})


}