import connectMongoDB from '@libs/mongodb'
import User from '@models/user'
import { v4 as uuidv4 } from 'uuid';


export async function POST(req, res){

  await connectMongoDB();

  const userData = await req.json();
  const userId = uuidv4();

  if (req.method === 'POST') {

        try {    
          const user = new User({
            userId,
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            password: userData.password,
            birthDate: userData.birthDate,
            bio: userData.bio,
            profilePicture: userData.profilePicture,
            registration_date: new Date("2022-03-25")
          });
    
          await user.save();
    
          return Response.json({message: "User Created"}, {status: 201})
        } catch (error) {
          console.log(error.message)

          return Response.json(error)
        }
      } else {
        return Response.json({error: "unknown??oka"})
      }

}
