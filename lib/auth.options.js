import CredentialsProvider from 'next-auth/providers/credentials'
import UserService from '@/lib/api/user'


export const options = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            session: {
                strategy: "jwt"
            },
            credentials: {
                username: { type: "email" },
                password: { type: "password" }
            },

            async authorize(credentials, req) {
                const api = new UserService()

                const obj = {
                    username: credentials.username,
                    password: credentials.password,
                    scope: "read write"
                }

                const token = await api.loginUser(obj)
                
                if (token) {
                    return token
                }

                return null
            }
        })
    ],
    pages: {
        signIn: "/users/login",
        newUser: "/users/register",
    },

    callbacks: {
        async jwt({ token, user }) {

            if (user) {
                // console.log(user);
                token.accessToken = user.access_token
                token.tokenType = user.token_type
            }
            
            return token
        },
        async session({ session, token }) {

            session.token = token
            const api = new UserService(token.accessToken)
            const user = await api.getCurrentUserState()
            session.user = user
            // console.log(session);
            return session
        }
    }
}