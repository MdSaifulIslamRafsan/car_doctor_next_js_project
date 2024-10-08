import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import {connectDb} from "@/lib/connectedDb"
import GitHubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
const bcrypt = require('bcrypt');

const handler = NextAuth({
  secret: process.env.CLIENT_SECRET,
session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60
},
providers: [
    CredentialsProvider({
        credentials:{
            email: {},
            password: {}
        },
        
        async authorize(credentials){
           const {email, password} = credentials;
           if(!email || !password){
            return null
           }

          const db = await connectDb();
          const currentUser = await db.collection('users').findOne({email})
          if(!currentUser){
            return null
          }
          const passwordMatched = bcrypt.compareSync(password, currentUser?.password);
          if(!passwordMatched){
            return null
          }
          return currentUser
           }
        
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      }),
      FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET
      }),
      GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
      })

],
pages: {
    signIn: '/login'
},

})

export {handler as GET, handler as POST}