import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import GithubProvider from "next-auth/providers/github"
import TwitterProvider from "next-auth/providers/twitter"
import Auth0Provider from "next-auth/providers/auth0"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    GoogleProvider({
      id:"google",
      clientId: process.env.GOOGLE_CLIENTID,
      clientSecret: process.env.GOOGLE_CLIENTSECRET,
    }),
  ],
  pages: {
    signIn: '/',
    signOut: '/'
  },
  callbacks: {
    jwt : async ({ token }) => {
      token.userRole = "admin"
      return token
    },
    signIn: async (data) => {
      console.log(data)
      return true
    },
  },
}

export default NextAuth(authOptions)
