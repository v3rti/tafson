import connectMongoDB from "@libs/mongodb";
import User from "@models/user";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";


function firstWord(inputString) {
  const words = inputString.split(/\s+/);
  if (words.length > 0) {
    return words[0];
  } else {
    return '';
  }
}

// Example usage:
const inputString = 'This is a sample string';

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const {email, password} = credentials;
        await connectMongoDB();
        const user = await User.findOne({email});
        if(!user) throw Error("Email and password do not match. Please try again.");
        const passwordMatch = await user.comparePassword(password);
        if(!passwordMatch) throw Error("Email and password do not match. Please try again.");

        return {
          userId: user.userId,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        }
      }

    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
      version: "2.0", 
    })
  ],
  callbacks: {
    jwt(params) {
      if(params.user?.userId){
        params.token.firstName = params.user.firstName;
        params.token.name = params.user.name;
        params.token.email = params.user.email;
      }
      return params.token;
    },
    session({session, token}){
      if(session.user){
        session.user.firstName = token.firstName || firstWord(token.name);
        session.user.email = token.email
      }
      return session;
    }
  }
}

const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST};