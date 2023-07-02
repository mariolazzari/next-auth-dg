import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import User from "@/types/Uuser";

export const options: NextAuthOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "your username...",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "your password...",
        },
      },
      async authorize(credentials) {
        const res = await fetch("https://jsonplaceholder.typicode.com/users", {
          method: "GET",
          // body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const users = await res.json();

        // If no error and we have user data, return it
        if (res.ok && users) {
          return users.find(
            (u: User) =>
              u.username === "Bret" && credentials?.password === "test"
          );
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  /*
  pages: {
      signIn: "/signin",
  },
  */
};
