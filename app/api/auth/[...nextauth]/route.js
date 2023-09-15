import connectMongoDB from "@libs/mongodb";
import User from "@models/user";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
        if(!user) throw Error("Email or Password doesn't match!");
        const passwordMatch = await user.comparePassword(password);
        if(!passwordMatch) throw Error("Email or Password doesn't match");

        return {
          userId: user.userId,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        }
      }

    })
  ],
  callbacks: {
    jwt(params) {
      if(params.user?.userId){
        params.token.firstName = params.user.firstName;
        params.token.email = params.user.email;
      }
      return params.token;
    },
    session({session, token}){
      if(session.user){
        session.user.firstName = token.firstName
        session.user.email = token.email
      }
      return session;
    }
  }
}

const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST};