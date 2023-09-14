import connectMongoDB from '@libs/mongodb'
import User from '@models/user'
import { NextResponse } from 'next/server'
// import { v4 as uuidv4 } from 'uuid'; //


export async function POST(req){
  
  const {userId, firstName, lastName, email, password, birthDate, bio, profilePicture} = await req.json();

  await connectMongoDB();

  await User.create({userId, firstName, lastName, email, password, birthDate, bio, profilePicture});
  return Response.json({message: "User Created"}, {status: 201})


}
