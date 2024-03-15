// import NextAuth from "next-auth"
// import GoogleProvider from "next-auth/providers/google";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import prisma from "@/prisma/client"

// export const authOptions = {
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!
//     })
//   ]
// }

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST}

//FROM CLAUDE
// app/api/auth/[...nextauth]/route.ts
import { NextResponse } from 'next/server';
import NextAuth from 'next-auth';
import { authOptions } from '../../../auth'; // Import authOptions from the auth.ts file

export const GET = NextAuth(authOptions);

export const POST = GET;