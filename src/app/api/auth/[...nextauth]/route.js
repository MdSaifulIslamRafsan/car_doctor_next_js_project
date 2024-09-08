import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import {connectDb} from "@/lib/connectedDb"
const bcrypt = require('bcrypt');

const handler = NextAuth({
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
        
    })
],
pages: {
    signIn: '/login'
},

})

export {handler as GET, handler as POST}