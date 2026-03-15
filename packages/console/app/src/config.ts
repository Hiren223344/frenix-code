/**
 * Application-wide constants and configuration
 */
export const config = {
  // Base URL
  baseUrl: "https://frenixcode.dev",

  // GitHub
  github: {
    repoUrl: "https://github.com/Hiren223344/frenix-code",
    starsFormatted: {
      compact: "120K",
      full: "120,000",
    },
  },

  // Social links
  social: {
    twitter: "https://x.com/frenixcode",
    discord: "https://discord.gg/frenixcode",
  },

  // Static stats (used on landing page)
  stats: {
    contributors: "800",
    commits: "10,000",
    monthlyUsers: "5M",
  },
} as const
