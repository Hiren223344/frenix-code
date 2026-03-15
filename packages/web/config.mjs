const stage = process.env.SST_STAGE || "dev"

export default {
  url: stage === "production" ? "https://frenixcode.dev" : `https://${stage}.frenixcode.dev`,
  console: stage === "production" ? "https://frenixcode.dev/auth" : `https://${stage}.frenixcode.dev/auth`,
  email: "contact@anoma.ly",
  socialCard: "https://social-cards.sst.dev",
  github: "https://github.com/Hiren223344/frenix-code",
  discord: "https://frenixcode.dev/discord",
  headerLinks: [
    { name: "app.header.home", url: "/" },
    { name: "app.header.docs", url: "/docs/" },
  ],
}
