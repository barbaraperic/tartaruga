import { withAuth } from 'next-auth/middleware'

export default withAuth(function middleware(req) {}, {
  callbacks: {
    authorized: ({ req, token }) => {
      if (
        req.nextUrl.pathname.startsWith('/dashboard/home') &&
        token === null
      ) {
        return false
      }
      return true
    },
  },
})
