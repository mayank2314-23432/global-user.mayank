// ============================================================
//  EDIT THIS FILE to update your portfolio. No other file needed.
// ============================================================

const SITE = {
  name: "Mayank Choudhary",
  role: "Game Developer",
  tagline: "I build games in Unity and Unreal Engine. Everything here is in active development.",
  github: "https://github.com/mayank2314-23432",        // e.g. "https://github.com/your-username"
  contactEmail: "",    // optional, shown as a contact button if filled in

  // TeatherLab Discord
  discordInvite: "https://discord.gg/dgrTyX7hv",  // e.g. "https://discord.gg/abc123"
  discordServerId: ""  // optional: shows live "members online" (enable Server Settings > Widget in Discord)
};

// status: "In development" | "Prototype" | "Demo available" | "Released"
// image:  path to a screenshot, e.g. "images/teatherlab.jpg" (leave "" for the generated cover)
// links:  any of { play, trailer, steam, itch, github }
const GAMES = [
  {
    title: "TeatherLab",
    engine: "Unreal Engine 5",
    genre: "Physics sandbox",
    status: "In development",
    blurb: "A first-person physics lab built around a custom soft-body damage system: targets deform, tear and break apart realistically under different weapons. Join the Discord to follow progress and give feedback.",
    accent: "#7c5cff",
    image: "",
    links: {},
    hasDiscord: true,
    featured: true
  },
  {
    title: "Borrowed",
    engine: "Unity 6",
    genre: "Puzzle adventure",
    status: "In development",
    blurb: "You are a spirit orb that survives by possessing hosts. Each host is won by solving its own puzzle, played with your voice, microphone and webcam, or with keyboard and mouse.",
    accent: "#ff8a3c",
    image: "",
    links: {}
  },
  {
    title: "Burned Lines",
    engine: "Unreal Engine 5",
    genre: "Survival FPS",
    status: "In development",
    blurb: "A dark, gritty first-person survival shooter. Fight through a collapsing facility with limited stamina and a flashlight, while fire, falling ceilings and sparking wires are as dangerous as the enemies.",
    accent: "#ff4d5e",
    image: "",
    links: {}
  },
  {
    title: "Havoworld",
    engine: "Unity",
    genre: "Destruction sandbox",
    status: "In development",
    blurb: "A physics destruction sandbox. Structures fracture into chunks and debris based on where and how hard they are hit, so every collapse plays out differently.",
    accent: "#2fd6a3",
    image: "",
    links: {}
  }
  // Add more games by copying a block above.
];
