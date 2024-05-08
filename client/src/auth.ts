import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        try {
          const res = await fetch("http://localhost:8080/api/users/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
          }).then((res) => res.json());

          if (res.success) {
            return res.data;
          }

          return null;
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
  pages: {
    newUser: "/register",
    signIn: "/login",
  },
});
