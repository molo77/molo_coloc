import NextAuth from "next-auth";
import { authOptions } from "./config"; // Importez vos options NextAuth configurées.

// Initialisation de NextAuth avec les options fournies.
const authInstance = NextAuth(authOptions); // Instance de NextAuth.

// Extraction des fonctionnalités et handlers de NextAuth.
const { handlers, signIn, signOut } = authInstance;

// Export des fonctionnalités d'authentification.
export { authInstance as auth, handlers, signIn, signOut };
