import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { apiLogin } from "../../../utils/axios";
import decodeJWT from "../../../utils/jwtdecode";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import ApiService from "../../../services/ApiService";
import notify from "../../../utils/toast";
import { setCookie } from "cookies-next";

export interface Credentials {
  username: string;
  password: string;
}

const handleSubmit = async (credentials: Credentials) => {
  try {
    const { data: response } = await apiLogin.post(
      `auth/login/local`,
      credentials
    );
    return response;
  } catch (error: any) {
    return error.response.data;
  }
};

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXT_JWT_SECRET || "secret",
  session: {
    strategy: "jwt",
    maxAge: 1 * 60 * 60, // 1 hour
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      type: "credentials",
      credentials: {},
      async authorize(credentials, req:any) {
        const res = await handleSubmit(credentials as Credentials);
        if (res.hasOwnProperty("access_token")) {
          const payload: any = decodeJWT(res.access_token);
          const myUser = {
            id: payload.id,
            name: payload.firstName + " " + payload.lastName,
            email: payload.email,
            a_token: payload.access_token,
            role: payload.roles[0],
          };
          return myUser;
        } else if (res.statusCode === 401)
          throw new Error("Invalid credentials");
        else throw new Error("Error logging in, please try again!");
      },
    }),
    GoogleProvider({
      id: "google",
      clientId: process.env.GOOGLE_CLIENTID as string,
      clientSecret: process.env.GOOGLE_CLIENTSECRET as string,
      authorization: {
        params: {
          prompt: "select_account",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    FacebookProvider({
      id: "facebook",
      clientId: process.env.FACEBOOK_CLIENTID as string,
      clientSecret: process.env.FACEBOOK_CLIENTSECRET as string,
    }),
  ],
  pages: {
    signIn: "/account/login",
  },
  callbacks: {
    session: async ({ session, token }:any) => {
      if (session?.user) {
        session.user.token = token.myToken;
      }
      return session;
    },
    jwt: async ({ user, token }:any) => {
      if (user) {
        token.myToken = user.a_token;
      }
      return token;
    },
    signIn : async ({ account, user }) => {
      if (account?.provider === "google" || account?.provider === "facebook") {
        var chars =
          "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var passwordLength = 12;
        var password = "";
        for (var i = 0; i <= passwordLength; i++) {
          var randomNumber = Math.floor(Math.random() * chars.length);
          password += chars.substring(randomNumber, randomNumber + 1);
        }
        const data: any = {
          password: password,
          firstName: user?.name?.split(" ")[0],
          lastName: user?.name?.split(" ")[1] || " ",
          email: user?.email,
          role: ["Customer", "buyers"],
          confirmPassword: password,
        };
        
        const url: string = `users/sign-up`;
        try {
          const response: any = await ApiService.postData({ url, data });
          setCookie("newUserID", 0)
          if (!response) {
            throw new Error("Server is failed");
          }
        } catch (error) {
          notify.error("Failed Request");
          return false;
        }

        notify.success("Failed Request");
        // resetForm(true);
      }
      return true;
    },
  },
};

export default NextAuth(authOptions);
