import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
      authorization: {
        url: "https://www.facebook.com/v11.0/dialog/oauth",
        params: {
          client_id: process.env.FACEBOOK_ID,
          scope: "openid email",
          response_type: "code",
        },
      },
    }),
  ],
  jwt: {
    encryption: true,
  },
  secret: process.env.JWT_SECRET,
  callbacks: {
    async jwt({ token, account }) {
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
      }
      return token;
    },

    redirect: async (url, _baseUrl) => {
      if (url === "/profile") {
        return Promise.resolve("/");
      }

      return Promise.resolve("/");
    },
  },
});
