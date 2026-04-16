import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db/drizzle"; // your drizzle instance

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
    }),
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: false,
        minPasswordLength: 8,
        maxPasswordLength: 128,
    },
    advanced: {
        database: {
            generateId: "uuid",
        }
    },
});