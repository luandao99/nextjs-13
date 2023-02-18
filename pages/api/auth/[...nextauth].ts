import NextAuth from "next-auth/next";
import GithubProvider from 'next-auth/providers/github'

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.CLIENT_ID as string,
            clientSecret: process.env.CLIENT_SECRET as string
        })
    ],
secret: process.env.JWT_SECRET
})