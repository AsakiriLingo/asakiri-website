import type { LandingMessages } from "./types";

export const enMessages = {
  seo: {
    title: "Asakiri | Local-first language course editor",
    description:
      "Create thoughtful language courses with reusable content, rich media, and exercises in a calm, local-first editor that keeps your work under your control.",
    imageAlt: "Asakiri, a local-first language course editor",
  },
  localeName: "English",
  alternateLocaleName: "日本語",
  navigationLabel: "Primary navigation",
  communityLabel: "Community links",
  brand: "Asakiri",
  title: "Language learning, made to stay yours.",
  description:
    "Asakiri is a calm, local-first toolkit for creating thoughtful language courses with reusable content, rich media, and exercises that remain portable and under your control.",
  comingSoon: "Coming soon",
  githubLink: "View on GitHub",
  githubAriaLabel: "Open Asakiri Studio on GitHub",
  aboutLink: "About",
  footer: "Made for independent course makers.",
  about: {
    seo: {
      title: "Why Asakiri exists | Asakiri",
      description:
        "Why Asakiri exists: a local-first toolkit that pairs the depth of a textbook with the practice of a learning app, especially for smaller and overlooked languages.",
    },
    title: "Why Asakiri exists",
    lede: "Asakiri started with a language I wanted to learn and couldn't find a good way into.",
    missionLabel: "Mission",
    mission:
      "Make every language fully learnable by putting the tools to create, own, and share deep courses in everyone's hands.",
    visionLabel: "Vision",
    vision:
      "Every language, endangered or overlooked, stays learnable and alive, passed on instead of lost.",
    sections: [
      {
        heading: "The resources weren't there",
        body: [
          "A few years ago, I wanted to learn Georgian. I looked for a course the way I would for French or Spanish and found very little: a few textbooks, some videos, scattered forum posts.",
          "The problem became obvious pretty quickly. If a language doesn't have a large number of learners, it rarely gets the same quality of learning tools.",
          "For less commonly taught languages, learners are often left to assemble their own curriculum from whatever they can find. That always felt backwards to me. The languages with the fewest resources are often the ones that most need people willing to build them.",
        ],
      },
      {
        heading: "Depth and practice in one place",
        body: [
          "I also wanted a different kind of learning experience.",
          "I need the structure of a good textbook: concepts introduced in the right order, grammar explained properly, and lessons that build on what came before.",
          "But reading alone isn't enough. I also need frequent practice: short exercises, repetition, listening, writing, and opportunities to actually use what I've learned.",
          "Most language tools lean heavily toward one side. Textbooks have depth but little interaction. Apps are good at practice but often skip the explanation and structure behind it.",
          "Asakiri is an attempt to combine both: the depth of a textbook with the practice of a learning app.",
        ],
      },
      {
        heading: "What Asakiri is",
        body: [
          "Asakiri is a local-first toolkit for creating language courses with structured lessons, reusable content, rich media, and interactive exercises.",
          "Courses remain portable and under the control of the people who make them. The goal is to make it possible for anyone who cares about a language, especially smaller and overlooked languages, to build a course worth learning from.",
          "Asakiri is still early. If that idea interests you, follow along, try it out, or help build it.",
        ],
      },
    ],
  },
} satisfies LandingMessages;
