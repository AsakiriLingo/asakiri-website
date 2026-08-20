import type { LandingMessages } from "./types";

export const enMessages = {
  seo: {
    title: "Asakiri | Teach and learn languages",
    description:
      "Asakiri is a home for language learning: teach deep courses with rich media and exercises, then study them in a free learner app. Your work stays yours.",
    imageAlt: "Asakiri, a home for language learning",
  },
  localeName: "English",
  alternateLocaleName: "日本語",
  navigationLabel: "Primary navigation",
  communityLabel: "Community links",
  siteLinksLabel: "More pages",
  brand: "Asakiri",
  title: "Language learning, made to stay yours.",
  description:
    "Asakiri is a home for language learning. Teach deep, structured courses with rich media and exercises, then study them in a free learner app. Everything you make stays yours.",
  comingSoon: "Coming soon",
  githubLink: "View on GitHub",
  githubAriaLabel: "Open Asakiri Studio on GitHub",
  download: {
    label: "Download",
    ariaLabel: "Download Asakiri Studio",
    menuLabel: "Choose your platform",
    macos: "macOS",
    windows: "Windows",
    linux: "Linux",
  },
  aboutLink: "About",
  howItWorksLink: "How it works",
  teamLink: "Team",
  fundingLink: "Funding",
  sponsorLink: "Sponsors",
  contactLink: "Contact",
  brandLink: "Brand",
  docsLink: "Docs",
  privacyLink: "Privacy",
  termsLink: "Terms",
  legalLabel: "Legal",
  footer: "The open future of language learning.",
  howItWorks: {
    seo: {
      title: "How it works | Asakiri Studio",
      description:
        "See how a course is built in Asakiri Studio: fill a content library with what you teach, add media, then write lessons and exercises that pull from it.",
    },
    label: "Asakiri Studio",
    title: "How a course comes together",
    lede: "You build a course in Asakiri in a set order. Fill a library with the words and phrases you teach, add the audio and images, lay out the lessons, then write parts and exercises that draw from all of it. Each step feeds the next.",
    stepsHeading: "The five steps",
    steps: [
      {
        title: "Build the library first",
        body: "Before writing a lesson, collect what the course teaches. Vocabulary, phrases, grammar notes, each in its own collection. A collection is a table you design, and every entry is a row with the fields you pick, like a word, its translation, and a sound clip.",
        image: "/mocks/studio-content-library.webp",
        imageAlt:
          "The Asakiri Studio library listing Italian vocabulary entries with images and tags.",
      },
      {
        title: "Bring in the media",
        body: "Record your own audio, pull photos from Unsplash and sentences from Tatoeba, or import files you already have. Every asset stays in your project folder, so the course works offline and travels with you.",
        image: "/mocks/studio-media-library.webp",
        imageAlt:
          "The Asakiri Studio media library with photos and audio clips and an add media menu open.",
      },
      {
        title: "Lay out the course",
        body: "Group lessons into units and drag each lesson's parts into the order you want. The outline stays readable whether the course has ten lessons or two hundred.",
        image: "/mocks/studio-course-structure.webp",
        imageAlt:
          "An Asakiri Studio course outline showing a Beginner Italian course with units and lessons.",
      },
      {
        title: "Write the lessons",
        body: "Each lesson is a stack of parts: rich text, media, or an exercise. You write against a live learner preview, and you drop in library entries instead of retyping a word you already have.",
        image: "/mocks/studio-lesson-editor.webp",
        imageAlt:
          "The Asakiri Studio lesson editor with a rich text part and a learner preview panel.",
      },
      {
        title: "Add exercises that grade themselves",
        body: "Multiple choice, listening, matching, word order, and more. Each exercise reads from your library entries, so the answer key is the entry itself. Fix the entry and the exercise stays correct.",
        image: "/mocks/studio-exercise-editor.webp",
        imageAlt:
          "A multiple choice exercise being edited in Asakiri Studio with answer options and a preview.",
      },
    ],
    libraryHeading: "What the library is for",
    libraryLede: "The library is the part people misread, so here it is plainly. It is the one place a course keeps what it teaches. Lessons and exercises point at it. They never hold their own copy.",
    libraryPoints: [
      {
        title: "One source of truth",
        body: "Every word, phrase, and note lives in the library once. A lesson that uses a word borrows it from there rather than storing its own version.",
      },
      {
        title: "Fix it once, fixed everywhere",
        body: "Correct a translation or swap an audio clip in the library, and every lesson and exercise using it updates. There is nothing to hunt down across the course.",
      },
      {
        title: "It is not a spreadsheet",
        body: "It shows as a table, but the rows are live. Each entry has a stable ID, so renaming a column or editing a value never breaks the lessons that reference it.",
      },
      {
        title: "Exercises read from it",
        body: "A quiz checks the learner against the real entry, not against text typed into the question. The library is the answer key, which keeps grading and content in sync.",
      },
    ],
    ctaHeading: "Build one yourself",
    ctaBody: "Studio is free and runs on your own machine. Download it and start with a library, or read how the pieces fit together in the docs.",
    ctaDownload: "Download Studio",
    ctaDocs: "Read the docs",
  },
  about: {
    seo: {
      title: "Why Asakiri exists | Asakiri",
      description:
        "Why Asakiri exists: a project that pairs the depth of a textbook with the practice of a learning app, especially for smaller and overlooked languages.",
    },
    title: "Why Asakiri exists",
    lede: "Asakiri started with a language I wanted to learn and couldn't find a good way into.",
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
          "Asakiri is a home for language learning, and it has two sides. One is a place to teach a language with structured lessons, reusable content, rich media, and interactive exercises. The other is a free app to learn from them.",
          "Courses remain portable and under the control of the people who make them. The goal is to let anyone who cares about a language, especially smaller and overlooked languages, teach a course worth learning from, and to give learners a good way to study it.",
          "Asakiri is still early. If that idea interests you, follow along, try it out, or help build it.",
        ],
      },
    ],
  },
  mission: {
    seo: {
      title: "Mission | Asakiri",
      description:
        "Asakiri's mission: make every language fully learnable by putting the tools to create, own, and share deep courses in everyone's hands.",
    },
    label: "Mission",
    body:
      "Make every language fully learnable by putting the tools to create, own, and share deep courses in everyone's hands.",
  },
  vision: {
    seo: {
      title: "Vision | Asakiri",
      description:
        "Asakiri's vision: every language, endangered or overlooked, stays learnable and alive, passed on instead of lost.",
    },
    label: "Vision",
    body:
      "Every language, endangered or overlooked, stays learnable and alive, passed on instead of lost.",
  },
  team: {
    seo: {
      title: "Team | Asakiri",
      description:
        "Meet the small team behind Asakiri: one founder and two very opinionated cats.",
    },
    title: "The team",
    lede: "A small team building Asakiri. One human doing the typing, and two cats supervising closely.",
    members: [
      {
        name: "Alok",
        role: "Founder & Lead",
        bio: "Reports directly to Sole and Mio. Language learner.",
        image: "/team/alok.jpg",
        imageAlt: "Illustrated orange cat, Asakiri's mascot for Alok",
        linkedin: "https://www.linkedin.com/in/alekoi",
        email: "alok@asakiri.com",
      },
      {
        name: "Sole",
        role: "Chief Curiosity Officer",
        bio: "Inspects every new box, bug, and feature before it's allowed to ship.",
        image: "/team/sole.jpg",
        imageAlt: "White and tabby cat with wide green eyes looking at the camera",
      },
      {
        name: "Mio",
        role: "Director of Deep Focus",
        bio: "Holds the team record for the longest uninterrupted staring session.",
        image: "/team/mio.jpg",
        imageAlt: "Close-up of a brown tabby cat with green eyes",
      },
    ],
  },
  funding: {
    seo: {
      title: "Funding · Asakiri",
      description:
        "Why Asakiri is built as public goods, what exists today, and the milestones funding would pay for.",
    },
    label: "Funding",
    title: "Fund the tools, not the walled garden",
    lede: "Asakiri is an open authoring app, an open course format, and an open learner app. Funding goes to finishing that chain so a teacher never has to rent their own course back from a platform.",
    problemHeading: "The problem",
    problemBody: [
      "Most language-learning platforms own both halves: the software and the courses made with it. A teacher who spends a year building a course cannot take it elsewhere, cannot read it without the app, and cannot hand it to their community in a form that outlives the company.",
      "Small language communities come off worst. A language with ten thousand speakers is not a market, so no platform builds for it. Teachers end up with a folder of slides, a spreadsheet of vocabulary, and no way to turn either into something a learner can practise with.",
    ],
    chainHeading: "What Asakiri changes",
    chainIntro:
      "Every step is separable, and every step is replaceable. Nothing in the chain requires an Asakiri account, an Asakiri server, or Asakiri's permission.",
    chain: [
      { step: "Teacher", note: "Owns the course and picks its licence" },
      { step: "Asakiri Studio", note: "Open source desktop editor, works offline" },
      { step: "Open course format", note: "Plain JSON files, published schemas" },
      { step: "Git, GitHub, a USB stick", note: "Storage is the author's choice" },
      { step: "Asakiri Learner or any client", note: "Open format means anyone can build one" },
    ],
    chainNote:
      "A course is a directory of small JSON files on the author's own disk. It is readable in a text editor, diffable in Git, and valid against schemas anyone can check against.",
    goodsHeading: "The public goods",
    goodsIntro: "Five artefacts, each usable without the others.",
    goods: [
      {
        name: "Authoring software",
        body: "Asakiri Studio: content records, media, rich text, and seven kinds of graded exercise, on macOS, Windows, and Linux. MPL-2.0.",
        status: "Alpha, released",
      },
      {
        name: "Course format and schemas",
        body: "Version 1 of the on-disk format, with JSON Schemas so validators, editors, and players can be built against a contract rather than by reading our source.",
        status: "Published",
      },
      {
        name: "Learner application",
        body: "An open source client that reads the format, runs the exercises, and tracks progress by stable IDs so reordering a course never loses a learner's place.",
        status: "In development",
      },
      {
        name: "Documentation and tooling",
        body: "A docs site covering the data model and the wire format, a course validator, and the deterministic importers that turn spreadsheets and documents into courses.",
        status: "Partly shipped",
      },
      {
        name: "Freely distributable courses",
        body: "Authors choose their own open licence and publish a course as a Git tag anyone can clone. No registry gatekeeping, no revenue share.",
        status: "By design",
      },
    ],
    fundingHeading: "What funding enables",
    fundingIntro:
      "Studio is built and shipping. The gap is the other end of the chain, and the packaging work that makes both ends trustworthy to install.",
    milestoneColumns: { name: "Milestone", ships: "What ships", effort: "Effort" },
    milestones: [
      {
        name: "Learner application, first release",
        ships:
          "A client that opens any format-v1 course offline, runs all seven exercise types, and keeps progress keyed to stable IDs. Android and iOS from one Flutter codebase.",
        effort: "4 months",
      },
      {
        name: "Import from documents",
        ships:
          "Turn a PDF, Word file, or slide deck into lessons and rich text, with a mapping step the author confirms before anything is written. Deterministic parsing, no model involved.",
        effort: "2 months",
      },
      {
        name: "Multilingual course authoring",
        ships:
          "The format already stores text per language. This adds the editing surface, so one course can carry Japanese and English interface text and a translator can work without touching JSON.",
        effort: "1.5 months",
      },
      {
        name: "Signed, packaged, installable",
        ships:
          "Windows code signing so installs stop warning, plus Flathub and Snap packaging for Linux. Removes the largest install-time barrier for non-technical teachers.",
        effort: "1 month",
      },
      {
        name: "Format spec and reference tooling",
        ships:
          "A versioned spec site, a standalone command-line validator, and a reference reader library, so a third party can build a compatible client without reading Studio's source.",
        effort: "1.5 months",
      },
    ],
    ctaHeading: "Talk to us",
    ctaBody:
      "For grants, partnerships, or anything that needs a conversation, email is best. For ongoing support, Patreon funds the same work at whatever scale you like.",
    ctaEmail: "Email alok@asakiri.com",
    ctaPatreon: "Support on Patreon",
    ctaRepo: "Read the source",
  },

  sponsor: {
    seo: {
      title: "Sponsors | Asakiri",
      description:
        "Asakiri is built in the open and funded by the people who believe in it. No sponsors yet, so you could be the first.",
    },
    label: "Sponsors",
    title: "Be the first.",
    body:
      "Asakiri is built in the open and made possible by the people who believe in it. There are no sponsors here yet, so this space is wide open. Back the project on Patreon and you'll be the very first name on the list.",
    cta: "Sponsor on Patreon",
    partners: {
      title: "Partners",
      body:
        "Asakiri is open source and supported by companies that offer their tools to open-source projects for free.",
    },
  },
  privacy: {
    seo: {
      title: "Privacy Policy | Asakiri",
      description:
        "Asakiri's privacy policy. The short version: we don't collect your personal data.",
    },
    title: "Privacy Policy",
    updated: "Last updated 10 August 2026",
    lede: "The short version: Asakiri does not collect your personal data.",
    sections: [
      {
        heading: "What we collect",
        body: [
          "Nothing. Asakiri does not collect, store, or sell your personal information. You don't need an account to use the software, and we don't track you across the web.",
        ],
      },
      {
        heading: "Your courses and content",
        body: [
          "The courses and content you create belong to you. Asakiri is built to keep your work on your own device, so your material stays in your hands, not on our servers.",
        ],
      },
      {
        heading: "This website",
        body: [
          "This site is a set of plain, static pages. We don't use analytics, advertising, or tracking cookies.",
          "Our hosting provider may keep standard server logs for security and reliability, but we don't use them to identify or profile you.",
        ],
      },
      {
        heading: "Links to other services",
        body: [
          "Some links lead to other services, such as GitHub, Discord, and Patreon. Those services have their own privacy policies, and this policy doesn't cover them.",
        ],
      },
      {
        heading: "Changes to this policy",
        body: [
          "If this policy ever changes, we'll update this page along with the date above.",
        ],
      },
      {
        heading: "Contact",
        body: [
          "If you have any questions about privacy, reach out through our Discord or GitHub community.",
        ],
      },
    ],
  },
  terms: {
    seo: {
      title: "Terms of Service | Asakiri",
      description:
        "Plain-language terms for using Asakiri and this website.",
    },
    title: "Terms of Service",
    updated: "Last updated 10 August 2026",
    lede: "Plain-language terms for using Asakiri and this website.",
    sections: [
      {
        heading: "Using Asakiri",
        body: [
          "Asakiri is provided for you to create and learn from language courses. You're welcome to use it for personal, educational, and commercial projects.",
        ],
      },
      {
        heading: "Your content",
        body: [
          "You keep ownership of the courses and content you create with Asakiri. You're responsible for what you make and share, and for holding the rights to any material you include.",
        ],
      },
      {
        heading: "Open source",
        body: [
          "Asakiri Studio is open source. Your use of the source code is governed by the license published in the project repository.",
        ],
      },
      {
        heading: "No warranty",
        body: [
          "Asakiri is offered as-is, without warranties of any kind. We can't guarantee it will be error-free or always available.",
          "To the fullest extent allowed by law, we are not liable for any loss or damage arising from your use of Asakiri. Keep your own backups of work that matters to you.",
        ],
      },
      {
        heading: "Changes to these terms",
        body: [
          "We may update these terms as Asakiri grows. When we do, we'll revise this page along with the date above.",
        ],
      },
      {
        heading: "Contact",
        body: [
          "If you have any questions about these terms, reach out through our Discord or GitHub community.",
        ],
      },
    ],
  },
  brandKit: {
    seo: {
      title: "Brand | Asakiri",
      description:
        "How to use the Asakiri name, logo, colors, and type. A quick reference for contributors and anyone building on Asakiri.",
    },
    title: "Brand",
    lede: "A quick reference for using the Asakiri name, logo, colors, and type. If you're contributing or building on Asakiri, start here.",
    logoHeading: "Logo",
    logoBody:
      "Asakiri's mark is a green dew drop lit by a yellow sun, for the morning fog the name comes from. Keep it on its rounded tile, give it room to breathe, and pair it with the wordmark set in IBM Plex Sans. Don't recolor, rotate, or redraw it.",
    logoDownload: "Download logo",
    colorHeading: "Color",
    colorBody:
      "Green on paper. Brand green carries accents and calls to action, ink is for text, and paper is for backgrounds. Colors are defined in OKLCH, the source of truth; hex is provided for convenience.",
    typeHeading: "Typography",
    typeBody:
      "Two typefaces. Newsreader, a warm serif, carries display and headings; IBM Plex Sans handles body text and interface. For Japanese, these pair with Noto Serif JP and Noto Sans JP, falling back to the system Mincho and Gothic faces.",
    displayRole: "Display · headings",
    bodyRole: "Body · interface & long-form",
    japaneseLabel: "Japanese",
    voiceHeading: "Voice",
    voice: [
      {
        title: "Calm and plain",
        body: "Write simply. Prefer short, direct sentences over jargon and hype.",
      },
      {
        title: "Explain, don't sell",
        body: "Respect people's time and intelligence. We're here to teach and to help others teach.",
      },
      {
        title: "Quietly warm",
        body: "A little personality is welcome. Reach for restraint before exclamation marks.",
      },
    ],
    namingHeading: "Using the name",
    namingBody: "Asakiri, written 朝霧, means “morning fog” in Japanese. It's one word, with a capital A, and names both the project and the toolkit.",
    dosLabel: "Do",
    dontsLabel: "Don't",
    dos: [
      "Write it as “Asakiri”, with a capital A.",
      "Use the leaf mark and wordmark as provided.",
      "Link to asakiri.com when referencing the project.",
    ],
    donts: [
      "Restyle, recolor, or redraw the logo.",
      "Use the name or logo to imply endorsement or affiliation.",
      "Stretch, rotate, or add effects to the mark.",
    ],
  },
  contact: {
    seo: {
      title: "Contact | Asakiri",
      description: "Get in touch with Asakiri by email or through our community.",
    },
    title: "Get in touch",
    lede: "Questions, ideas, or feedback? Reach out by email, or find us in the community.",
    email: { label: "Email", value: "alok@asakiri.com" },
    discord: { label: "Discord", value: "Join the community" },
    github: { label: "GitHub", value: "AsakiriLingo/asakiri-studio" },
    linkedin: { label: "LinkedIn", value: "Follow Asakiri" },
  },
  notFound: {
    seo: {
      title: "Page not found | Asakiri",
      description: "The page you were looking for doesn't exist or has moved.",
    },
    label: "404",
    title: "This page wandered off.",
    body: "We couldn't find the page you were looking for. It may have moved, or never existed at all.",
    homeLink: "Back to home",
  },
} satisfies LandingMessages;
