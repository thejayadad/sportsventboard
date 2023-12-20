import GoogleProvider from 'next-auth/providers/google';
import db from '@/lib/db';
import User from '@/models/User';

export const options = {
    providers: [
        GoogleProvider({
            profile(profile) {
              console.log("Profile Google: ", profile);
      
              let userRole = "Google User";
              
              if (profile?.email == "thejayadad@gmail.com") {
                userRole = "admin";
              }
              return {
                ...profile,
                id: profile.sub,
                role: userRole,
                name: profile.name.replace(" ", "").toLowerCase(),
                avatar: profile.picture,
                email: profile.email,             
       
              };
            },
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async session({ session }) {
          const sessionUser = await User.findOne({ email: session.user.email });

          const fullUserInfo = {
            ...sessionUser._doc,
            _id: sessionUser._id.toString(),
            role: sessionUser.userRole,
            name: sessionUser.name.replace(" ", "").toLowerCase(),
            email: sessionUser.email,
            avatar: sessionUser.picture,
          }
          session.user = fullUserInfo;
    
          return session;
        },
        async signIn({ account, profile, user, credentials }) {
          try {
            await db.connect();
    
            const userExists = await User.findOne({ email: profile.email });
    
            if (!userExists) {
              await User.create({
                email: profile.email,
                name: profile.name.replace(" ", "").toLowerCase(),
                avatar: profile.picture,
                role: profile.userRole,
                email: profile.email,             
       
              });
            }
    
            return true
          } catch (error) {
            console.log("Error checking if user exists: ", error.message);
            return false
          }
        },
      }
}