import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface User {
  name: string;
  email: string;
  role?: string;
}

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize(credentials, req) {
        const { name, email } = credentials as {
          name: string;
          email: string;
        };

        if (name !== "John Doe" || email !== "john.doe@example.com") {
          throw new Error("invalid credentials");
        }

        return {
          id: "1",
          name: "John Doe",
          email: "john.doe@example.com",
          role: "admin",
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },

  callbacks: {
    jwt(params) {
      if (params.user && "role" in params.user && params.user.role) {
        params.token.role = params.user.role;
      }

      return params.token;
    },
  },
};

export default NextAuth(authOptions);
