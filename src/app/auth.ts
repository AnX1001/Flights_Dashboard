import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';

export const {
  auth,
  handlers: { GET, POST },
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  session: {
    maxAge: 60 * 10, // 10 minutes before session expires
  },
  secret: process.env.AUTH_SECRET,
});
