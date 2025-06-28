import type { NextAuthOptions } from "next-auth"

// ⚠️  Replace with real providers & callbacks when you wire-up authentication.
export const authOptions: NextAuthOptions = {
  providers: [],
  session: { strategy: "jwt" },
}
