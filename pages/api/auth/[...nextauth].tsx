import NextAuth from 'next-auth';
import KeycloakProvider from 'next-auth/providers/keycloak';

export const authOptions = {
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_CLIENT_ID as string,
      issuer: `${process.env.KEYCLOAK_BASE_URL}/realms/${process.env.KEYCLOAK_REALM_ID}`,
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET as string,
      accessTokenUrl: `${process.env.KEYCLOAK_BASE_URL}/realms/${process.env.KEYCLOAK_REALM_ID}/protocol/openid-connect/token`,
      profileUrl: `${process.env.KEYCLOAK_BASE_URL}/realms/${process.env.KEYCLOAK_REALM_ID}/protocol/openid-connect/userinfo`,
    }),
  ],
};

export default NextAuth(authOptions);
