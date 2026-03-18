export type CatalogItem = {
  id: number;
  type: "podcast" | "newsletter";
  filename: string;
  title: string;
  tags: string[];
  date: string;
  description: string;
  guest: string | null;
  youtube_url: string | null;
};

export const CATALOG: CatalogItem[] = [
  {
    "id": 0,
    "type": "podcast",
    "filename": "podcasts/jenny-wen.md",
    "title": "Jenny Wen",
    "tags": [
      "design",
      "ai",
      "engineering",
      "leadership",
      "strategy",
      "b2b"
    ],
    "date": "2026-03-01",
    "description": "It's not just designers who are feeling like, \"Oh yeah, we have to keep up with engineers.\" I think even engineers are like, \"How do we keep up with ourselves?\", covering product design, AI product work, and engineering tradeoffs.",
    "guest": "Jenny Wen",
    "youtube_url": null
  },
  {
    "id": 1,
    "type": "podcast",
    "filename": "podcasts/jeetu-patel.md",
    "title": "Jeetu Patel",
    "tags": [
      "ai",
      "leadership",
      "design",
      "engineering",
      "b2b",
      "analytics"
    ],
    "date": "2026-02-26",
    "description": "And the reason we pulled this thing together, the goal was, what is happening in the industry and how can we help customers make sure that they can make the most of it, covering AI product work, team leadership, and product design.",
    "guest": "Jeetu Patel",
    "youtube_url": null
  },
  {
    "id": 2,
    "type": "podcast",
    "filename": "podcasts/boris-cherny.md",
    "title": "Boris Cherny",
    "tags": [
      "engineering",
      "design",
      "ai",
      "leadership",
      "go-to-market",
      "growth"
    ],
    "date": "2026-02-19",
    "description": "This is the world now.\" What's the next big shift to how software is written that either your team is already operating in or you think will head towards, covering engineering tradeoffs, product design, and AI product work.",
    "guest": "Boris Cherny",
    "youtube_url": null
  },
  {
    "id": 3,
    "type": "podcast",
    "filename": "podcasts/brian-halligan.md",
    "title": "Sequoia CEO coach: Why it’s never been easier to start a company, and never been harder to scale one | Brian Halligan (co-founder, HubSpot)",
    "tags": [
      "career",
      "leadership",
      "startups",
      "design",
      "engineering",
      "b2b"
    ],
    "date": "2026-02-15",
    "description": "Brian Halligan co-founded HubSpot, ran it as CEO for about 15 years, and now coaches Sequoia’s fastest-growing founders as their in-house CEO coach.",
    "guest": "Brian Halligan",
    "youtube_url": "https://www.youtube.com/watch?v=3UyitfSbY6c"
  },
  {
    "id": 4,
    "type": "podcast",
    "filename": "podcasts/sherwin-wu-v2.md",
    "title": "Sherwin Wu V2",
    "tags": [
      "engineering",
      "ai",
      "leadership",
      "design",
      "startups",
      "analytics"
    ],
    "date": "2026-02-12",
    "description": "If you talk to a lot of engineers, the thing that annoys them the most is after you've written your beautiful code, how do you get it into production, covering engineering tradeoffs, AI product work, and team leadership.",
    "guest": "Sherwin Wu V2",
    "youtube_url": null
  },
  {
    "id": 5,
    "type": "podcast",
    "filename": "podcasts/lazar-jovanovic.md",
    "title": "The rise of the professional vibe coder (a new AI-era job) | Lazar Jovanovic (Professional Vibe Coder)",
    "tags": [
      "design",
      "engineering",
      "ai",
      "leadership",
      "b2b",
      "b2c"
    ],
    "date": "2026-02-08",
    "description": "Lazar Jovanovic is a full-time professional vibe coder at Lovable. His job is to build both internal tools and customer-facing products purely using AI, while not having a coding background.",
    "guest": "Lazar Jovanovic",
    "youtube_url": "https://www.youtube.com/watch?v=0XNkUdzxiZI"
  },
  {
    "id": 6,
    "type": "podcast",
    "filename": "podcasts/dr-becky-kennedy.md",
    "title": "A child psychologist’s guide to working with difficult adults | Dr. Becky Kennedy",
    "tags": [
      "design",
      "leadership",
      "newsletter",
      "podcast",
      "strategy"
    ],
    "date": "2026-02-01",
    "description": "Working with difficult adults, covering product design, team leadership, and practical product lessons.",
    "guest": "Dr. Becky Kennedy",
    "youtube_url": "https://www.youtube.com/watch?v=Auxs8ZsHRI4"
  },
  {
    "id": 7,
    "type": "podcast",
    "filename": "podcasts/marc-andreessen.md",
    "title": "Marc Andreessen: The real AI boom hasn’t even started yet",
    "tags": [
      "ai",
      "design",
      "startups",
      "engineering",
      "growth",
      "leadership"
    ],
    "date": "2026-01-29",
    "description": "Marc Andreessen is a founder, investor, and co-founder of Netscape, as well as co-founder of the venture capital firm Andreessen Horowitz (a16z). In this conversation, we dig into why we’re living through a unique and one of the most incredible times in history, and what comes next.",
    "guest": "Marc Andreessen",
    "youtube_url": "https://www.youtube.com/watch?v=87Pm0SGTtN8"
  },
  {
    "id": 8,
    "type": "podcast",
    "filename": "podcasts/jason-cohen.md",
    "title": "5 questions to ask when your product stops growing | Jason Cohen (2x unicorn founder)",
    "tags": [
      "growth",
      "strategy",
      "startups",
      "design",
      "newsletter",
      "pricing"
    ],
    "date": "2026-01-25",
    "description": "Jason’s five-step framework: logo retention, pricing, NRR, marketing channels, target market.",
    "guest": "Jason Cohen",
    "youtube_url": "https://www.youtube.com/watch?v=8xLquwfx6p0"
  },
  {
    "id": 9,
    "type": "podcast",
    "filename": "podcasts/zevi-arnovitz.md",
    "title": "The non-technical PM’s guide to building with Cursor | Zevi Arnovitz (Meta)",
    "tags": [
      "ai",
      "engineering",
      "design",
      "product-management",
      "newsletter",
      "podcast"
    ],
    "date": "2026-01-18",
    "description": "The complete AI workflow that lets non-technical people build real products in Cursor.",
    "guest": "Zevi Arnovitz",
    "youtube_url": "https://www.youtube.com/watch?v=1em64iUFt3U"
  },
  {
    "id": 10,
    "type": "podcast",
    "filename": "podcasts/sam-lessin.md",
    "title": "How to show up in any room with a low heart rate: Silicon Valley’s missing etiquette playbook | Sam Lessin",
    "tags": [
      "startups",
      "design",
      "podcast",
      "b2c",
      "ai",
      "engineering"
    ],
    "date": "2026-01-15",
    "description": "Silicon Valley’s missing etiquette playbook, covering startup building, product design, and operator lessons.",
    "guest": "Sam Lessin",
    "youtube_url": "https://www.youtube.com/watch?v=KtKJ3A6DWTs"
  },
  {
    "id": 11,
    "type": "podcast",
    "filename": "podcasts/alexander-embiricos.md",
    "title": "The power user’s guide to Codex: parallelizing workflows, planning techniques, advanced context engineering tips, automating code reviews, and more | Alexander Embiricos",
    "tags": [
      "engineering",
      "design",
      "ai",
      "leadership",
      "startups",
      "organization"
    ],
    "date": "2026-01-12",
    "description": "How to set up and use Codex in VS Code and terminal environments for both simple and complex coding tasks.",
    "guest": "Alexander Embiricos",
    "youtube_url": "https://www.youtube.com/watch?v=xeZDHGjG5zM"
  },
  {
    "id": 12,
    "type": "podcast",
    "filename": "podcasts/aishwarya-naresh-reganti--kiriti-badam.md",
    "title": "Aishwarya Naresh Reganti + Kiriti Badam",
    "tags": [
      "ai",
      "design",
      "leadership",
      "podcast",
      "engineering",
      "go-to-market"
    ],
    "date": "2026-01-11",
    "description": "But if you make a bunch of practitioners sit together and ask them, \"Is it important to build an actionable feedback loop for AI products?\" I think all of them will agree, covering AI product work, product design, and team leadership.",
    "guest": "Aishwarya Naresh Reganti + Kiriti Badam",
    "youtube_url": null
  },
  {
    "id": 13,
    "type": "podcast",
    "filename": "podcasts/molly-graham.md",
    "title": "The high-growth handbook: Molly Graham’s frameworks for leading through chaos, change, and scale",
    "tags": [
      "design",
      "startups",
      "career",
      "growth",
      "leadership",
      "pricing"
    ],
    "date": "2026-01-04",
    "description": "Molly Graham has worked for some of tech’s most effective leaders, including Mark Zuckerberg, Sheryl Sandberg, Chamath Palihapitiya, and Bret Taylor. Today she leads Glue Club, a community for leaders navigating rapid scale, growth, and change.",
    "guest": "Molly Graham",
    "youtube_url": "https://www.youtube.com/watch?v=twzLDx9iers"
  },
  {
    "id": 14,
    "type": "podcast",
    "filename": "podcasts/jason-m-lemkin.md",
    "title": "We replaced our sales team with 20 AI agents—here’s what happened | Jason Lemkin (SaaStr)",
    "tags": [
      "b2b",
      "startups",
      "leadership",
      "design",
      "career",
      "pricing"
    ],
    "date": "2026-01-01",
    "description": "We replaced our sales team with 20 AI agents—here’s what happened, covering B2B products, startup building, and team leadership.",
    "guest": "Jason M Lemkin",
    "youtube_url": "https://www.youtube.com/watch?v=I-R1bc1rlFs"
  },
  {
    "id": 15,
    "type": "podcast",
    "filename": "podcasts/matt-macinnis.md",
    "title": "10 contrarian leadership truths every leader needs to hear | Matt MacInnis (Rippling)",
    "tags": [
      "leadership",
      "design",
      "startups",
      "strategy",
      "career",
      "growth"
    ],
    "date": "2025-12-28",
    "description": "Matt MacInnis is the chief product officer and former longtime COO at Rippling, a unified workforce management platform valued at over $16 billion.",
    "guest": "Matt MacInnis",
    "youtube_url": "https://www.youtube.com/watch?v=O_W76LR77Vw"
  },
  {
    "id": 16,
    "type": "podcast",
    "filename": "podcasts/elena-verna-40.md",
    "title": "Elena Verna 4.0",
    "tags": [
      "growth",
      "design",
      "pricing",
      "strategy",
      "b2b",
      "b2c"
    ],
    "date": "2025-12-18",
    "description": "Who would've thought that a head of growth, who is traditionally seen as data, metrics, spreadsheets, drive KPIs is like, \"Okay, how do we make this more lovable, covering growth systems, product design, and pricing decisions.",
    "guest": "Elena Verna 4.0",
    "youtube_url": null
  },
  {
    "id": 17,
    "type": "podcast",
    "filename": "podcasts/edwin-chen.md",
    "title": "The 100-person AI lab that became Anthropic and Google's secret weapon | Edwin Chen (Surge AI)",
    "tags": [
      "design",
      "ai",
      "pricing",
      "engineering",
      "startups",
      "leadership"
    ],
    "date": "2025-12-07",
    "description": "Edwin Chen is the founder and CEO of Surge AI, the company that teaches AI what’s good and bad, powering frontier labs with elite data, environments, and evaluations. Surge surpassed $1 billion in revenue with under 100 employees last year, completely bootstrapped—the fastest company in history to reach this milestone.",
    "guest": "Edwin Chen",
    "youtube_url": "https://www.youtube.com/watch?v=dduQeaqmpnI"
  },
  {
    "id": 18,
    "type": "podcast",
    "filename": "podcasts/tomer-cohen.md",
    "title": "Why LinkedIn is turning PMs into AI-powered \"full stack builders” | Tomer Cohen (LinkedIn CPO)",
    "tags": [
      "design",
      "leadership",
      "ai",
      "go-to-market",
      "startups",
      "b2c"
    ],
    "date": "2025-12-04",
    "description": "Why LinkedIn is turning PMs into AI-powered \"full stack builders”, covering product design, team leadership, and AI product work.",
    "guest": "Tomer Cohen",
    "youtube_url": "https://www.youtube.com/watch?v=R-zCfLQD_84"
  },
  {
    "id": 19,
    "type": "podcast",
    "filename": "podcasts/jeanne-grosser.md",
    "title": "What world-class GTM looks like in 2026 | Jeanne DeWitt Grosser (Vercel, Stripe, Google)",
    "tags": [
      "strategy",
      "go-to-market",
      "b2b",
      "ai",
      "design",
      "leadership"
    ],
    "date": "2025-11-30",
    "description": "Jeanne DeWitt Grosser built world-class GTM teams at Stripe, Google, and, most recently, Vercel, where she serves as COO and oversees marketing, sales, customer success, revenue operations, and field engineering. She transformed Stripe’s early sales organization from the ground up and advises founders on GTM strategy.",
    "guest": "Jeanne Grosser",
    "youtube_url": "https://www.youtube.com/watch?v=RmnWHz8HD74"
  },
  {
    "id": 20,
    "type": "podcast",
    "filename": "podcasts/rachel-lockett.md",
    "title": "A guide to difficult conversations, building high-trust teams, and designing a life you love | Rachel Lockett",
    "tags": [
      "leadership",
      "design",
      "b2c",
      "engineering",
      "strategy",
      "career"
    ],
    "date": "2025-11-23",
    "description": "A guide to difficult conversations, building high-trust teams, and designing a life you love, covering team leadership, product design, and consumer products.",
    "guest": "Rachel Lockett",
    "youtube_url": "https://www.youtube.com/watch?v=1GDVum5IarI"
  },
  {
    "id": 21,
    "type": "podcast",
    "filename": "podcasts/stewart-butterfield.md",
    "title": "Slack founder: Mental models for building products people love ft. Stewart Butterfield",
    "tags": [
      "design",
      "b2b",
      "b2c",
      "leadership",
      "startups",
      "career"
    ],
    "date": "2025-11-20",
    "description": "Mental models for building products people love ft. Stewart Butterfield, covering product design, B2B products, and consumer products.",
    "guest": "Stewart Butterfield",
    "youtube_url": "https://www.youtube.com/watch?v=kLe-zy5r0Mk"
  },
  {
    "id": 22,
    "type": "podcast",
    "filename": "podcasts/dr-fei-fei-li.md",
    "title": "The Godmother of AI on jobs, robots & why world models are next | Dr. Fei-Fei Li",
    "tags": [
      "ai",
      "design",
      "b2c",
      "strategy",
      "b2b",
      "career"
    ],
    "date": "2025-11-16",
    "description": "Jobs, robots & why world models are next, covering AI product work, product design, and consumer products.",
    "guest": "Dr. Fei Fei Li",
    "youtube_url": "https://www.youtube.com/watch?v=Ctjiatnd6Xk"
  },
  {
    "id": 23,
    "type": "podcast",
    "filename": "podcasts/grant-lee.md",
    "title": "“Dumbest idea I’ve heard” to $100M ARR: Inside the rise of Gamma | Grant Lee (CEO)",
    "tags": [
      "strategy",
      "design",
      "growth",
      "startups",
      "ai",
      "go-to-market"
    ],
    "date": "2025-11-13",
    "description": "Inside the rise of Gamma, covering strategic decision-making, product design, and growth systems.",
    "guest": "Grant Lee",
    "youtube_url": "https://www.youtube.com/watch?v=3H0ngGU5pbM"
  },
  {
    "id": 24,
    "type": "podcast",
    "filename": "podcasts/jen-abel.md",
    "title": "\"Sell the alpha, not the feature\": The enterprise sales playbook for $1M to $10M ARR | Jen Abel",
    "tags": [
      "b2b",
      "startups",
      "strategy",
      "design",
      "leadership",
      "podcast"
    ],
    "date": "2025-11-09",
    "description": "Jen Abel is GM of Enterprise at State Affairs and co-founded Jellyfish, a consultancy that helps founders learn zero-to-one enterprise sales. She’s one of the smartest people I’ve ever met on learning enterprise sales, and in this follow-up to our first chat two years ago (covering the zero to $1 million ARR.",
    "guest": "Jen Abel",
    "youtube_url": "https://www.youtube.com/watch?v=37fKFWdrMyA"
  },
  {
    "id": 25,
    "type": "podcast",
    "filename": "podcasts/melanie-perkins.md",
    "title": "The woman behind Canva shares how she built a $42B company from nothing | Melanie Perkins",
    "tags": [
      "design",
      "strategy",
      "startups",
      "ai",
      "leadership",
      "organization"
    ],
    "date": "2025-11-02",
    "description": "The woman behind Canva shares how she built a $42B company from nothing, covering product design, strategic decision-making, and startup building.",
    "guest": "Melanie Perkins",
    "youtube_url": "https://www.youtube.com/watch?v=-LywX3T5Scc"
  },
  {
    "id": 26,
    "type": "podcast",
    "filename": "podcasts/dhanji-r-prasanna.md",
    "title": "How Block is becoming the most AI-native enterprise in the world | Dhanji R. Prasanna",
    "tags": [
      "leadership",
      "design",
      "engineering",
      "ai",
      "podcast",
      "analytics"
    ],
    "date": "2025-10-26",
    "description": "Dhanji R. Prasanna is the chief technology officer at Block (formerly Square), where he’s managed more than 4,000 engineers over the past two years. Under his leadership, Block has become one of the most AI-native large companies in the world.",
    "guest": "Dhanji R. Prasanna",
    "youtube_url": "https://www.youtube.com/watch?v=JMeXWVw0r3E"
  },
  {
    "id": 27,
    "type": "podcast",
    "filename": "podcasts/chip-huyen.md",
    "title": "Al Engineering 101 with Chip Huyen (Nvidia, Stanford, Netflix)",
    "tags": [
      "ai",
      "design",
      "engineering",
      "leadership",
      "analytics",
      "strategy"
    ],
    "date": "2025-10-23",
    "description": "Al Engineering 101 with Chip Huyen (Nvidia, Stanford, Netflix), covering AI product work, product design, and engineering tradeoffs.",
    "guest": "Chip Huyen",
    "youtube_url": "https://www.youtube.com/watch?v=qbvY0dQgSJ4"
  },
  {
    "id": 28,
    "type": "podcast",
    "filename": "podcasts/nicole-forsgren.md",
    "title": "How to measure AI developer productivity in 2025 | Nicole Forsgren",
    "tags": [
      "engineering",
      "leadership",
      "design",
      "analytics",
      "b2b",
      "strategy"
    ],
    "date": "2025-10-19",
    "description": "Nicole Forsgren created the most widely used frameworks for measuring developer productivity—DORA and SPACE. She wrote the foundational book Accelerate and is about to release her newest book, Frictionless , a practical guide for helping teams move faster in the AI era.",
    "guest": "Nicole Forsgren",
    "youtube_url": "https://www.youtube.com/watch?v=SWcDfPVTizQ"
  },
  {
    "id": 29,
    "type": "podcast",
    "filename": "podcasts/robby-stein.md",
    "title": "Inside Google's AI turnaround: The rise of AI Mode, strategy behind AI Overviews, and their vision for AI-powered search | Robby Stein (VP of Product, Google Search)",
    "tags": [
      "ai",
      "design",
      "growth",
      "b2c",
      "go-to-market",
      "strategy"
    ],
    "date": "2025-10-10",
    "description": "Robby Stein is VP of Product at Google, where he oversees the core products of Google Search—including the new AI Overviews, AI Mode, search ranking, Google Lens, and more.",
    "guest": "Robby Stein",
    "youtube_url": "https://www.youtube.com/watch?v=kOnsqqVbIeY"
  },
  {
    "id": 30,
    "type": "podcast",
    "filename": "podcasts/jason-droege.md",
    "title": "First interview with Scale AI’s CEO: $14B Meta deal, what’s working in enterprise AI, and what frontier labs are building next | Jason Droege",
    "tags": [
      "ai",
      "career",
      "design",
      "startups",
      "strategy",
      "leadership"
    ],
    "date": "2025-10-09",
    "description": "Jason Droege is the CEO of Scale AI, a company that provides foundational training data to every major AI lab. He previously co-founded Scour with Travis Kalanick and built Uber Eats from idea to $20 billion in revenue.",
    "guest": "Jason Droege",
    "youtube_url": "https://www.youtube.com/watch?v=W99jdYZOlN0"
  },
  {
    "id": 31,
    "type": "podcast",
    "filename": "podcasts/albert-cheng.md",
    "title": "How to find hidden growth opportunities in your product | Albert Cheng (Duolingo, Grammarly, Chess.com)",
    "tags": [
      "growth",
      "analytics",
      "design",
      "b2c",
      "leadership",
      "product-management"
    ],
    "date": "2025-10-05",
    "description": "Finding hidden growth opportunities in your product, covering growth systems, measurement and analysis, and product design.",
    "guest": "Albert Cheng",
    "youtube_url": "https://www.youtube.com/watch?v=2BKmNmnEj9w"
  },
  {
    "id": 32,
    "type": "podcast",
    "filename": "podcasts/ravi-mehta.md",
    "title": "The secret to better AI prototypes: Why Tinder’s CPO starts with JSON, not design | Ravi Mehta (product advisor, previously EIR at Reforge)",
    "tags": [
      "leadership",
      "startups",
      "design",
      "career",
      "analytics",
      "b2c"
    ],
    "date": "2025-09-29",
    "description": "Why Tinder’s CPO starts with JSON, not design, covering team leadership, startup building, and product design.",
    "guest": "Ravi Mehta",
    "youtube_url": "https://www.youtube.com/watch?v=_yQMGHHl49g"
  },
  {
    "id": 33,
    "type": "podcast",
    "filename": "podcasts/hamel-husain--shreya-shankar.md",
    "title": "Why AI evals are the hottest new skill for product builders | Hamel Husain & Shreya Shankar (creators of the #1 eval course)",
    "tags": [
      "ai",
      "design",
      "analytics",
      "leadership",
      "engineering",
      "b2c"
    ],
    "date": "2025-09-25",
    "description": "Why AI evals are the hottest new skill for product builders, covering AI product work, product design, and measurement and analysis.",
    "guest": "Hamel Husain & Shreya Shankar",
    "youtube_url": "https://www.youtube.com/watch?v=BsWxPI9UM4c"
  },
  {
    "id": 34,
    "type": "podcast",
    "filename": "podcasts/brendan-foody.md",
    "title": "Why experts writing AI evals is creating the fastest-growing companies in history | Brendan Foody (CEO of Mercor)",
    "tags": [
      "ai",
      "design",
      "strategy",
      "pricing",
      "career",
      "startups"
    ],
    "date": "2025-09-18",
    "description": "Why experts writing AI evals is creating the fastest-growing companies in history, covering AI product work, product design, and strategic decision-making.",
    "guest": "Brendan Foody",
    "youtube_url": "https://www.youtube.com/watch?v=ja6fWTDPQl4"
  },
  {
    "id": 35,
    "type": "podcast",
    "filename": "podcasts/ethan-smith.md",
    "title": "The ultimate guide to AEO: How to get ChatGPT to recommend your product | Ethan Smith (Graphite)",
    "tags": [
      "ai",
      "design",
      "newsletter",
      "go-to-market",
      "podcast",
      "startups"
    ],
    "date": "2025-09-14",
    "description": "Getting ChatGPT to recommend your product, covering AI product work, product design, and practical product lessons.",
    "guest": "Ethan Smith",
    "youtube_url": "https://www.youtube.com/watch?v=iT7kq-R3Gjc"
  },
  {
    "id": 36,
    "type": "podcast",
    "filename": "podcasts/ben-horowitz.md",
    "title": "$46B of hard truths from Ben Horowitz: Why founders fail and why you need to run toward fear (a16z co-founder)",
    "tags": [
      "leadership",
      "design",
      "product-management",
      "startups",
      "engineering",
      "career"
    ],
    "date": "2025-09-11",
    "description": "Why founders fail and why you need to run toward fear (a16z co-founder), covering team leadership, product design, and product strategy and execution.",
    "guest": "Ben Horowitz",
    "youtube_url": "https://www.youtube.com/watch?v=KPxTekxQjzc"
  },
  {
    "id": 37,
    "type": "podcast",
    "filename": "podcasts/scott-wu.md",
    "title": "How Devin replaces your junior engineers with infinite AI interns that never sleep | Scott Wu (Cognition CEO)",
    "tags": [
      "ai",
      "design",
      "engineering",
      "leadership",
      "go-to-market",
      "startups"
    ],
    "date": "2025-09-08",
    "description": "How Devin replaces your junior engineers with infinite AI interns that never sleep, covering AI product work, product design, and engineering tradeoffs.",
    "guest": "Scott Wu",
    "youtube_url": "https://www.youtube.com/watch?v=7m_xKFqSxTo"
  },
  {
    "id": 38,
    "type": "podcast",
    "filename": "podcasts/howie-liu.md",
    "title": "How we restructured Airtable’s entire org for AI | Howie Liu (co-founder and CEO)",
    "tags": [
      "ai",
      "design",
      "strategy",
      "leadership",
      "engineering",
      "podcast"
    ],
    "date": "2025-08-31",
    "description": "How we restructured Airtable’s entire org for AI, covering AI product work, product design, and strategic decision-making.",
    "guest": "Howie Liu",
    "youtube_url": "https://www.youtube.com/watch?v=GT0jtVjRy2E"
  },
  {
    "id": 39,
    "type": "podcast",
    "filename": "podcasts/asha-sharma.md",
    "title": "How 80,000 companies build with AI: products as organisms, the death of org charts, and why agents will outnumber employees by 2026 | Asha Sharma (CVP of AI Platform at Microsoft)",
    "tags": [
      "ai",
      "design",
      "engineering",
      "b2b",
      "leadership",
      "growth"
    ],
    "date": "2025-08-28",
    "description": "Products as organisms, the death of org charts, and why agents will outnumber employees by 2026, covering AI product work, product design, and engineering tradeoffs.",
    "guest": "Asha Sharma",
    "youtube_url": "https://www.youtube.com/watch?v=J9UWaltU-7Q"
  },
  {
    "id": 40,
    "type": "podcast",
    "filename": "podcasts/garrett-lord.md",
    "title": "Inside the expert network training every frontier AI model | Garrett Lord (Handshake CEO)",
    "tags": [
      "ai",
      "design",
      "leadership",
      "strategy",
      "analytics",
      "b2b"
    ],
    "date": "2025-08-24",
    "description": "Inside the expert network training every frontier AI model, covering AI product work, product design, and team leadership.",
    "guest": "Garrett Lord",
    "youtube_url": "https://www.youtube.com/watch?v=0qdR-XwHJ9o"
  },
  {
    "id": 41,
    "type": "podcast",
    "filename": "podcasts/eoghan-mccabe.md",
    "title": "How Intercom rose from the ashes by betting everything on AI | Eoghan McCabe (founder and CEO)",
    "tags": [
      "ai",
      "pricing",
      "design",
      "startups",
      "b2b",
      "growth"
    ],
    "date": "2025-08-21",
    "description": "How Intercom rose from the ashes by betting everything on AI, covering AI product work, pricing decisions, and product design.",
    "guest": "Eoghan McCabe",
    "youtube_url": "https://www.youtube.com/watch?v=0_opWSfmN8M"
  },
  {
    "id": 42,
    "type": "podcast",
    "filename": "podcasts/matt-lemay.md",
    "title": "The one question that saves product careers | Matt LeMay",
    "tags": [
      "leadership",
      "design",
      "product-management",
      "career",
      "newsletter",
      "podcast"
    ],
    "date": "2025-08-14",
    "description": "The one question that saves product careers, covering team leadership, product design, and product strategy and execution.",
    "guest": "Matt LeMay",
    "youtube_url": "https://www.youtube.com/watch?v=ts9ZvlkeWGs"
  },
  {
    "id": 43,
    "type": "podcast",
    "filename": "podcasts/nick-turley.md",
    "title": "Inside ChatGPT: The fastest-growing product in history | Nick Turley (Head of ChatGPT at OpenAI)",
    "tags": [
      "ai",
      "design",
      "go-to-market",
      "strategy",
      "engineering",
      "newsletter"
    ],
    "date": "2025-08-09",
    "description": "The fastest-growing product in history, covering AI product work, product design, and go-to-market execution.",
    "guest": "Nick Turley",
    "youtube_url": "https://www.youtube.com/watch?v=ixY2PvQJ0To"
  },
  {
    "id": 44,
    "type": "podcast",
    "filename": "podcasts/chip-conley.md",
    "title": "Brian Chesky's secret mentor who died 9 times, started the Burning Man board, and built the world's first midlife wisdom school | Chip Conley (founder of MEA)",
    "tags": [
      "leadership",
      "design",
      "startups",
      "career",
      "product-management",
      "newsletter"
    ],
    "date": "2025-08-03",
    "description": "Brian Chesky's secret mentor who died 9 times, started the Burning Man board, and built the world's first midlife wisdom school, covering team leadership, product design, and startup building.",
    "guest": "Chip Conley",
    "youtube_url": "https://www.youtube.com/watch?v=R5_ypwiRIyo"
  },
  {
    "id": 45,
    "type": "podcast",
    "filename": "podcasts/bret-taylor.md",
    "title": "He saved OpenAI, invented the “Like” button, and built Google Maps: Bret Taylor on the future of careers, coding, agents, and more",
    "tags": [
      "design",
      "leadership",
      "product-management",
      "ai",
      "b2b",
      "startups"
    ],
    "date": "2025-07-31",
    "description": "The future of careers, coding, agents, and more, covering product design, team leadership, and product strategy and execution.",
    "guest": "Bret Taylor",
    "youtube_url": "https://www.youtube.com/watch?v=qImgGtnNbx0"
  },
  {
    "id": 46,
    "type": "podcast",
    "filename": "podcasts/madhavan-ramanujam.md",
    "title": "Pricing your AI product: Lessons from 400+ companies and 50 unicorns | Madhavan Ramanujam",
    "tags": [
      "pricing",
      "strategy",
      "design",
      "b2b",
      "startups",
      "leadership"
    ],
    "date": "2025-07-27",
    "description": "Lessons from 400+ companies and 50 unicorns, covering pricing decisions, strategic decision-making, and product design.",
    "guest": "Madhavan Ramanujam",
    "youtube_url": "https://www.youtube.com/watch?v=NR85H55eYkM"
  },
  {
    "id": 47,
    "type": "podcast",
    "filename": "podcasts/benjamin-mann.md",
    "title": "Benjamin Mann",
    "tags": [
      "ai",
      "design",
      "engineering",
      "leadership",
      "strategy",
      "newsletter"
    ],
    "date": "2025-07-20",
    "description": "Ultimately, people think about this as probably going to hit a wall because if the model isn't good enough to see its own mistakes, then how could it improve, covering AI product work, product design, and engineering tradeoffs.",
    "guest": "Benjamin Mann",
    "youtube_url": null
  },
  {
    "id": 48,
    "type": "podcast",
    "filename": "podcasts/dan-shipper.md",
    "title": "The AI-native startup: 5 products, 7-figure revenue, 100% AI-written code | Dan Shipper (co-founder/CEO of Every)",
    "tags": [
      "ai",
      "engineering",
      "design",
      "leadership",
      "startups",
      "career"
    ],
    "date": "2025-07-17",
    "description": "5 products, 7-figure revenue, 100% AI-written code, covering AI product work, engineering tradeoffs, and product design.",
    "guest": "Dan Shipper",
    "youtube_url": "https://www.youtube.com/watch?v=crMrVozp_h8"
  },
  {
    "id": 49,
    "type": "podcast",
    "filename": "podcasts/andrew-wilkinson.md",
    "title": "I’ve run 75+ businesses. Here’s why you’re probably chasing the wrong idea. | Andrew Wilkinson (co‑founder of Tiny)",
    "tags": [
      "design",
      "startups",
      "ai",
      "strategy",
      "b2b",
      "b2c"
    ],
    "date": "2025-07-03",
    "description": "I’ve run 75+ businesses. Here’s why you’re probably chasing the wrong idea., covering product design, startup building, and AI product work.",
    "guest": "Andrew Wilkinson",
    "youtube_url": "https://www.youtube.com/watch?v=VxAwUb86MUE"
  },
  {
    "id": 50,
    "type": "podcast",
    "filename": "podcasts/david-placek.md",
    "title": "Naming expert shares the process behind creating billion-dollar brand names like Azure, Vercel, Windsurf, Sonos, Blackberry, and Impossible Burger | David Placek (Lexicon Branding)",
    "tags": [
      "strategy",
      "leadership",
      "design",
      "startups",
      "go-to-market",
      "podcast"
    ],
    "date": "2025-06-29",
    "description": "Naming expert shares the process behind creating billion-dollar brand names like Azure, Vercel, Windsurf, Sonos, Blackberry, and Impossible Burger, covering strategic decision-making, team leadership, and product design.",
    "guest": "David Placek",
    "youtube_url": "https://www.youtube.com/watch?v=adyIaTopO6g"
  },
  {
    "id": 51,
    "type": "podcast",
    "filename": "podcasts/peter-deng.md",
    "title": "From ChatGPT to Instagram to Uber: The quiet architect behind the world’s most popular products | Peter Deng",
    "tags": [
      "ai",
      "design",
      "leadership",
      "b2b",
      "engineering",
      "product-management"
    ],
    "date": "2025-06-22",
    "description": "The quiet architect behind the world’s most popular products, covering AI product work, product design, and team leadership.",
    "guest": "Peter Deng",
    "youtube_url": "https://www.youtube.com/watch?v=8TpakBfsmcQ"
  },
  {
    "id": 52,
    "type": "podcast",
    "filename": "podcasts/sander-schulhoff.md",
    "title": "AI prompt engineering in 2025: What works and what doesn’t | Sander Schulhoff (Learn Prompting, HackAPrompt)",
    "tags": [
      "ai",
      "engineering",
      "leadership",
      "podcast",
      "design",
      "b2c"
    ],
    "date": "2025-06-19",
    "description": "What works and what doesn’t, covering AI product work, engineering tradeoffs, and team leadership.",
    "guest": "Sander Schulhoff",
    "youtube_url": "https://www.youtube.com/watch?v=eKuFqQKYRrA"
  },
  {
    "id": 53,
    "type": "podcast",
    "filename": "podcasts/hilary-gridley.md",
    "title": "How to build a team that can “take a punch”: A playbook for building resilient, high-performing teams | Hilary Gridley (Head of Core Product, Whoop)",
    "tags": [
      "leadership",
      "design",
      "career",
      "ai",
      "newsletter",
      "podcast"
    ],
    "date": "2025-06-15",
    "description": "A playbook for building resilient, high-performing teams, covering team leadership, product design, and career development.",
    "guest": "Hilary Gridley",
    "youtube_url": "https://www.youtube.com/watch?v=xm5QAzAlqEY"
  },
  {
    "id": 54,
    "type": "podcast",
    "filename": "podcasts/bob-baxley.md",
    "title": "35 years of product design wisdom from Apple, Disney, Pinterest, and beyond | Bob Baxley",
    "tags": [
      "design",
      "leadership",
      "startups",
      "career",
      "b2c",
      "engineering"
    ],
    "date": "2025-06-12",
    "description": "35 years of product design wisdom from Apple, Disney, Pinterest, and beyond, covering product design, team leadership, and startup building.",
    "guest": "Bob Baxley",
    "youtube_url": "https://www.youtube.com/watch?v=X-83gvgVaWc"
  },
  {
    "id": 55,
    "type": "podcast",
    "filename": "podcasts/mike-krieger.md",
    "title": "Anthropic’s CPO on what comes next | Mike Krieger (co-founder of Instagram)",
    "tags": [
      "ai",
      "design",
      "engineering",
      "strategy",
      "newsletter",
      "startups"
    ],
    "date": "2025-06-05",
    "description": "Anthropic’s CPO on what comes next, covering AI product work, product design, and engineering tradeoffs.",
    "guest": "Mike Krieger",
    "youtube_url": "https://www.youtube.com/watch?v=DKrBGOFs0GY"
  },
  {
    "id": 56,
    "type": "podcast",
    "filename": "podcasts/krithika-shankarraman.md",
    "title": "Growth tactics from OpenAI and Stripe’s first marketer | Krithika Shankarraman",
    "tags": [
      "strategy",
      "ai",
      "b2b",
      "growth",
      "startups",
      "go-to-market"
    ],
    "date": "2025-05-25",
    "description": "Growth tactics from OpenAI and Stripe’s first marketer, covering strategic decision-making, AI product work, and B2B products.",
    "guest": "Krithika Shankarraman",
    "youtube_url": "https://www.youtube.com/watch?v=QaDsk4iH1aw"
  },
  {
    "id": 57,
    "type": "podcast",
    "filename": "podcasts/mayur-kamat.md",
    "title": "Unconventional product lessons from Binance, N26, Google, more | Mayur Kamat (CPO at N26, ex-Binance Head of Product)",
    "tags": [
      "leadership",
      "product-management",
      "ai",
      "career",
      "design",
      "strategy"
    ],
    "date": "2025-05-22",
    "description": "Unconventional product lessons from Binance, N26, Google, more, covering team leadership, product strategy and execution, and AI product work.",
    "guest": "Mayur Kamat",
    "youtube_url": "https://www.youtube.com/watch?v=UVyfuSBwbNA"
  },
  {
    "id": 58,
    "type": "podcast",
    "filename": "podcasts/aparna-chennapragada.md",
    "title": "Microsoft CPO: If you aren’t prototyping with AI, you’re doing it wrong | Aparna Chennapragada",
    "tags": [
      "ai",
      "design",
      "b2b",
      "leadership",
      "strategy",
      "b2c"
    ],
    "date": "2025-05-18",
    "description": "If you aren’t prototyping with AI, you’re doing it wrong, covering AI product work, product design, and B2B products.",
    "guest": "Aparna Chennapragada",
    "youtube_url": "https://www.youtube.com/watch?v=HbbfXAWcuUo"
  },
  {
    "id": 59,
    "type": "podcast",
    "filename": "podcasts/dmitry-zlokazov.md",
    "title": "How Revolut trains world-class product managers: The “local CEO” model, raw intellect over experience, and a cultural obsession with building wow products | Dmitry Zlokazov (Head of Product)",
    "tags": [
      "leadership",
      "design",
      "product-management",
      "career",
      "go-to-market",
      "engineering"
    ],
    "date": "2025-05-15",
    "description": "Dmitry Zlokazov is the head of product at Revolut, the $45 billion fintech giant operating in over 50 countries, serving more than 50 million customers, and producing some of the world’s top product leaders.",
    "guest": "Dmitry Zlokazov",
    "youtube_url": "https://www.youtube.com/watch?v=-kPpd21bFrE"
  },
  {
    "id": 60,
    "type": "podcast",
    "filename": "podcasts/nabeel-s-qureshi.md",
    "title": "How Palantir built the ultimate founder factory | Nabeel S. Qureshi (founder, writer, ex-Palantir)",
    "tags": [
      "design",
      "startups",
      "leadership",
      "product-management",
      "career",
      "ai"
    ],
    "date": "2025-05-11",
    "description": "How Palantir built the ultimate founder factory, covering product design, startup building, and team leadership.",
    "guest": "Nabeel S. Qureshi",
    "youtube_url": "https://www.youtube.com/watch?v=xQkSenlJvwA"
  },
  {
    "id": 61,
    "type": "podcast",
    "filename": "podcasts/jerry-colonna.md",
    "title": "How have I been complicit in creating the conditions I say I don’t want? | Jerry Colonna (CEO of Reboot, executive coach, former VC)",
    "tags": [
      "design",
      "leadership",
      "b2c",
      "career",
      "startups",
      "growth"
    ],
    "date": "2025-05-08",
    "description": "How have I been complicit in creating the conditions I say I don’t want?, covering product design, team leadership, and consumer products.",
    "guest": "Jerry Colonna",
    "youtube_url": "https://www.youtube.com/watch?v=PJE7etZQ9us"
  },
  {
    "id": 62,
    "type": "podcast",
    "filename": "podcasts/michael-truell.md",
    "title": "The rise of Cursor: The $300M ARR AI tool that engineers can’t stop using | Michael Truell (co-founder and CEO)",
    "tags": [
      "design",
      "engineering",
      "ai",
      "strategy",
      "leadership",
      "startups"
    ],
    "date": "2025-05-01",
    "description": "Michael Truell is the co-founder and CEO of Anysphere, the company behind Cursor—the fastest-growing AI code editor in the world, reaching $300 million in annual recurring revenue just two years after its launch.",
    "guest": "Michael Truell",
    "youtube_url": "https://www.youtube.com/watch?v=En5cSXgGvZM"
  },
  {
    "id": 63,
    "type": "podcast",
    "filename": "podcasts/daniel-lereya.md",
    "title": "Inside monday.com’s transformation: radical transparency, impact over output, and their path to $1B ARR | Daniel Lereya (Chief Product and Technology Officer)",
    "tags": [
      "leadership",
      "design",
      "engineering",
      "go-to-market",
      "startups",
      "podcast"
    ],
    "date": "2025-04-27",
    "description": "Radical transparency, impact over output, and their path to $1B ARR, covering team leadership, product design, and engineering tradeoffs.",
    "guest": "Daniel Lereya",
    "youtube_url": "https://www.youtube.com/watch?v=L9qqwV8_rvY"
  },
  {
    "id": 64,
    "type": "podcast",
    "filename": "podcasts/varun-mohan.md",
    "title": "Building a magical AI code editor used by over 1 million developers in four months: The untold story of Windsurf | Varun Mohan (co-founder and CEO)",
    "tags": [
      "engineering",
      "design",
      "ai",
      "startups",
      "b2b",
      "pricing"
    ],
    "date": "2025-04-20",
    "description": "Building a magical AI code editor used by over 1 million developers in four months: The untold story of Windsurf, covering engineering tradeoffs, product design, and AI product work.",
    "guest": "Varun Mohan",
    "youtube_url": "https://www.youtube.com/watch?v=5Z0RCxDZdrE"
  },
  {
    "id": 65,
    "type": "podcast",
    "filename": "podcasts/guillermo-rauch.md",
    "title": "Everyone’s an engineer now: Inside v0’s mission to create a hundred million builders | Guillermo Rauch (founder and CEO of Vercel, creators of v0 and Next.js)",
    "tags": [
      "design",
      "ai",
      "engineering",
      "b2c",
      "leadership",
      "product-management"
    ],
    "date": "2025-04-13",
    "description": "Inside v0’s mission to create a hundred million builders, covering product design, AI product work, and engineering tradeoffs.",
    "guest": "Guillermo Rauch",
    "youtube_url": "https://www.youtube.com/watch?v=-QsTmu2CqhA"
  },
  {
    "id": 66,
    "type": "podcast",
    "filename": "podcasts/kevin-weil.md",
    "title": "OpenAI’s CPO on how AI changes must-have skills, moats, coding, startup playbooks, more | Kevin Weil (CPO at OpenAI, ex-Instagram, Twitter)",
    "tags": [
      "ai",
      "design",
      "go-to-market",
      "b2c",
      "career",
      "leadership"
    ],
    "date": "2025-04-10",
    "description": "How AI changes must-have skills, moats, coding, startup playbooks, more, covering AI product work, product design, and go-to-market execution.",
    "guest": "Kevin Weil",
    "youtube_url": "https://www.youtube.com/watch?v=scsW6_2SPC4"
  },
  {
    "id": 67,
    "type": "podcast",
    "filename": "podcasts/wes-kao.md",
    "title": "Become a better communicator: Specific frameworks to improve your clarity, influence, and impact | Wes Kao (coach, entrepreneur, advisor)",
    "tags": [
      "design",
      "startups",
      "career",
      "engineering",
      "analytics",
      "leadership"
    ],
    "date": "2025-04-06",
    "description": "Specific frameworks to improve your clarity, influence, and impact, covering product design, startup building, and career development.",
    "guest": "Wes Kao",
    "youtube_url": "https://www.youtube.com/watch?v=BIvVGhy_VxU"
  },
  {
    "id": 68,
    "type": "podcast",
    "filename": "podcasts/ryan-singer.md",
    "title": "A better way to plan, build, and ship products | Ryan Singer (creator of “Shape Up,” early employee at 37signals)",
    "tags": [
      "design",
      "leadership",
      "engineering",
      "startups",
      "podcast",
      "ai"
    ],
    "date": "2025-03-30",
    "description": "A better way to plan, build, and ship products, covering product design, team leadership, and engineering tradeoffs.",
    "guest": "Ryan Singer",
    "youtube_url": "https://www.youtube.com/watch?v=GF-yUANql0c"
  },
  {
    "id": 69,
    "type": "podcast",
    "filename": "podcasts/gaurav-misra.md",
    "title": "How to win in the AI era: Ship a feature every week, embrace technical debt, ruthlessly cut scope, and create magic your competitors can't copy | Gaurav Misra (CEO and co-founder of Captions)",
    "tags": [
      "design",
      "strategy",
      "ai",
      "engineering",
      "b2c",
      "product-management"
    ],
    "date": "2025-03-27",
    "description": "Gaurav Misra is the co-founder and CEO of Captions, an AI-powered video creation company and one of the most successful consumer AI products in the world today. Previously he was a product leader at Snap, where he created the design engineering function and spent years helping develop features used by hundreds of.",
    "guest": "Gaurav Misra",
    "youtube_url": "https://www.youtube.com/watch?v=PDobJV8wh1g"
  },
  {
    "id": 70,
    "type": "podcast",
    "filename": "podcasts/rahul-vohra.md",
    "title": "Superhuman's secret to success: Ignoring most customer feedback, manually onboarding every new user, obsessing over every detail, and positioning around a single attribute: speed | Rahul Vohra (CEO)",
    "tags": [
      "design",
      "strategy",
      "growth",
      "career",
      "leadership",
      "startups"
    ],
    "date": "2025-03-23",
    "description": "Rahul Vohra is the founder and CEO of Superhuman. Prior to Superhuman, Rahul founded Rapportive, the first Gmail plug-in to scale to millions of users, which he sold to LinkedIn in 2012.",
    "guest": "Rahul Vohra",
    "youtube_url": "https://www.youtube.com/watch?v=0igjSRZyX-w"
  },
  {
    "id": 71,
    "type": "podcast",
    "filename": "podcasts/eric-simons.md",
    "title": "Inside Bolt: From near-death to ~$40m ARR in 5 months—one of the fastest-growing products in history | Eric Simons (founder and CEO of StackBlitz)",
    "tags": [
      "design",
      "ai",
      "startups",
      "go-to-market",
      "pricing",
      "leadership"
    ],
    "date": "2025-03-13",
    "description": "Eric Simons is the founder and CEO of StackBlitz, the company behind Bolt—the #1 web-based AI coding agent and one of the fastest-growing products in history. After nearly shutting down, StackBlitz launched Bolt on Twitter and exploded from zero to $40 million ARR and 1 million monthly active users in about five.",
    "guest": "Eric Simons",
    "youtube_url": "https://www.youtube.com/watch?v=L22DtAHLmzs"
  },
  {
    "id": 72,
    "type": "podcast",
    "filename": "podcasts/anton-osika.md",
    "title": "Building Lovable: $10M ARR in 60 days with 15 people | Anton Osika (co-founder and CEO)",
    "tags": [
      "design",
      "ai",
      "engineering",
      "go-to-market",
      "leadership",
      "startups"
    ],
    "date": "2025-03-09",
    "description": "Anton Osika is the co-founder and CEO of Lovable, which is building what they call “the last piece of software”—an AI-powered tool that turns descriptions into working products without requiring any coding knowledge.",
    "guest": "Anton Osika",
    "youtube_url": "https://www.youtube.com/watch?v=DZtGxNs9AVg"
  },
  {
    "id": 73,
    "type": "podcast",
    "filename": "podcasts/ivan-zhao.md",
    "title": "Notion’s lost years, its near collapse during Covid, staying small to move fast, the joy and suffering of building horizontal, more | Ivan Zhao (CEO and co-founder)",
    "tags": [
      "design",
      "engineering",
      "strategy",
      "startups",
      "leadership",
      "b2b"
    ],
    "date": "2025-03-06",
    "description": "Ivan Zhao is the co-founder and CEO of Notion. Ivan shares the untold story of Notion, from nearly running out of database space during Covid to finding product-market fit after several “lost years,” and the hard-won lessons along the way.",
    "guest": "Ivan Zhao",
    "youtube_url": "https://www.youtube.com/watch?v=IIPKMixTMfE"
  },
  {
    "id": 74,
    "type": "podcast",
    "filename": "podcasts/matt-mullenweg.md",
    "title": "The creator of WordPress opens up about becoming an internet villain, why he’s taking a stand, and the future of open source | Matt Mullenweg (founder and CEO, Automattic)",
    "tags": [
      "design",
      "b2c",
      "ai",
      "engineering",
      "startups",
      "strategy"
    ],
    "date": "2025-03-02",
    "description": "Why products like Meta’s Llama are “fake open source”.",
    "guest": "Matt Mullenweg",
    "youtube_url": "https://www.youtube.com/watch?v=Fves5chVZRA"
  },
  {
    "id": 75,
    "type": "podcast",
    "filename": "podcasts/keith-coleman--jay-baxter.md",
    "title": "An inside look at X’s Community Notes | Keith Coleman (VP of Product) and Jay Baxter (ML Lead)",
    "tags": [
      "b2c",
      "design",
      "ai",
      "leadership",
      "podcast",
      "newsletter"
    ],
    "date": "2025-02-27",
    "description": "An inside look at X’s Community Notes, covering consumer products, product design, and AI product work.",
    "guest": "Keith Coleman & Jay Baxter",
    "youtube_url": "https://www.youtube.com/watch?v=8dgyqYHLcCI"
  },
  {
    "id": 76,
    "type": "podcast",
    "filename": "podcasts/karina-nguyen.md",
    "title": "OpenAI researcher on why soft skills are the future of work | Karina Nguyen (Research at OpenAI, ex-Anthropic)",
    "tags": [
      "ai",
      "design",
      "engineering",
      "go-to-market",
      "leadership",
      "startups"
    ],
    "date": "2025-02-09",
    "description": "Why soft skills are the future of work, covering AI product work, product design, and engineering tradeoffs.",
    "guest": "Karina Nguyen",
    "youtube_url": "https://www.youtube.com/watch?v=DeskgjrLxxs"
  },
  {
    "id": 77,
    "type": "podcast",
    "filename": "podcasts/tobi-lutke.md",
    "title": "Tobi Lutke",
    "tags": [
      "design",
      "career",
      "growth",
      "leadership",
      "startups",
      "analytics"
    ],
    "date": "2025-02-02",
    "description": "Yeah, again, I only lived one life, so I can't Monte Carlo all the decisions I make and just figure out which ones ended up being load baring, right, covering product design, career development, and growth systems.",
    "guest": "Tobi Lutke",
    "youtube_url": null
  },
  {
    "id": 78,
    "type": "podcast",
    "filename": "podcasts/nan-yu.md",
    "title": "Linear’s secret to building beloved B2B products | Nan Yu (Head of Product)",
    "tags": [
      "design",
      "b2b",
      "leadership",
      "career",
      "engineering",
      "strategy"
    ],
    "date": "2025-01-30",
    "description": "Linear’s secret to building beloved B2B products, covering product design, B2B products, and team leadership.",
    "guest": "Nan Yu",
    "youtube_url": "https://www.youtube.com/watch?v=nTr21kgCFF4"
  },
  {
    "id": 79,
    "type": "podcast",
    "filename": "podcasts/chandra-janakiraman.md",
    "title": "An operator’s guide to product strategy | Chandra Janakiraman (CPO at VRChat, ex-Meta, Headspace, Zynga)",
    "tags": [
      "strategy",
      "design",
      "leadership",
      "product-management",
      "b2c",
      "organization"
    ],
    "date": "2025-01-26",
    "description": "The difference between “small s” and “big S” strategy.",
    "guest": "Chandra Janakiraman",
    "youtube_url": "https://www.youtube.com/watch?v=WFLH8Af2f30"
  },
  {
    "id": 80,
    "type": "podcast",
    "filename": "podcasts/graham-weaver.md",
    "title": "How to break out of autopilot and create the life you want | Graham Weaver (Stanford GSB professor, founder of Alpine Investors)",
    "tags": [
      "design",
      "career",
      "b2b",
      "startups",
      "b2c",
      "engineering"
    ],
    "date": "2025-01-16",
    "description": "Break out of autopilot and creating the life you want, covering product design, career development, and B2B products.",
    "guest": "Graham Weaver",
    "youtube_url": "https://www.youtube.com/watch?v=UpGR9P0Ufts"
  },
  {
    "id": 81,
    "type": "podcast",
    "filename": "podcasts/drew-houston.md",
    "title": "Behind the founder: Drew Houston (Dropbox)",
    "tags": [
      "design",
      "startups",
      "go-to-market",
      "growth",
      "b2c",
      "engineering"
    ],
    "date": "2025-01-09",
    "description": "Drew Houston (Dropbox), covering product design, startup building, and go-to-market execution.",
    "guest": "Drew Houston",
    "youtube_url": "https://www.youtube.com/watch?v=egdYKLBswgk"
  },
  {
    "id": 82,
    "type": "podcast",
    "filename": "podcasts/alisa-cohn.md",
    "title": "Scripts for difficult conversations: Giving hard feedback, navigating defensiveness, the three questions you should end every meeting with, more | Alisa Cohn (executive coach)",
    "tags": [
      "leadership",
      "career",
      "design",
      "startups",
      "podcast",
      "strategy"
    ],
    "date": "2025-01-05",
    "description": "Giving hard feedback, navigating defensiveness, the three questions you should end every meeting with, more, covering team leadership, career development, and product design.",
    "guest": "Alisa Cohn",
    "youtube_url": "https://www.youtube.com/watch?v=bvF0ZM8DjuI"
  },
  {
    "id": 83,
    "type": "podcast",
    "filename": "podcasts/shaun-clowes.md",
    "title": "Why great AI products are all about the data | Shaun Clowes (CPO Confluent, ex-Salesforce, Atlassian)",
    "tags": [
      "product-management",
      "leadership",
      "ai",
      "design",
      "career",
      "b2b"
    ],
    "date": "2024-12-29",
    "description": "Why great AI products are all about the data, covering product strategy and execution, team leadership, and AI product work.",
    "guest": "Shaun Clowes",
    "youtube_url": "https://www.youtube.com/watch?v=yVS1gTAQYSU"
  },
  {
    "id": 84,
    "type": "podcast",
    "filename": "podcasts/marc-benioff.md",
    "title": "Behind the founder: Marc Benioff",
    "tags": [
      "b2b",
      "design",
      "leadership",
      "ai",
      "strategy",
      "podcast"
    ],
    "date": "2024-12-22",
    "description": "Number two is I need to find more fuel in the company to fuel this idea because this is clearly a breakthrough product, so how do I get everyone focused on it, covering B2B products, product design, and team leadership.",
    "guest": "Marc Benioff",
    "youtube_url": "https://www.youtube.com/watch?v=tOGK1nlHdFo"
  },
  {
    "id": 85,
    "type": "podcast",
    "filename": "podcasts/farhan-thawar.md",
    "title": "How Shopify builds a high-intensity culture | Farhan Thawar (VP and Head of Eng)",
    "tags": [
      "design",
      "engineering",
      "career",
      "leadership",
      "strategy",
      "b2b"
    ],
    "date": "2024-12-19",
    "description": "How Shopify builds a high-intensity culture, covering product design, engineering tradeoffs, and career development.",
    "guest": "Farhan Thawar",
    "youtube_url": "https://www.youtube.com/watch?v=C_lhMOjG7PE"
  },
  {
    "id": 86,
    "type": "podcast",
    "filename": "podcasts/jackson-shuttleworth.md",
    "title": "Behind the product: Duolingo streaks | Jackson Shuttleworth (Group PM, Retention Team)",
    "tags": [
      "growth",
      "design",
      "analytics",
      "leadership",
      "go-to-market",
      "product-management"
    ],
    "date": "2024-12-15",
    "description": "Duolingo streaks, covering growth systems, product design, and measurement and analysis.",
    "guest": "Jackson Shuttleworth",
    "youtube_url": "https://www.youtube.com/watch?v=_CCwoQZH5hI"
  },
  {
    "id": 87,
    "type": "podcast",
    "filename": "podcasts/seth-godin.md",
    "title": "Seth Godin's best tactics for building remarkable products, strategies, brands and more",
    "tags": [
      "design",
      "leadership",
      "strategy",
      "product-management",
      "engineering",
      "ai"
    ],
    "date": "2024-12-08",
    "description": "Seth Godin's best tactics for building remarkable products, strategies, brands and more, covering product design, team leadership, and strategic decision-making.",
    "guest": "Seth Godin",
    "youtube_url": "https://www.youtube.com/watch?v=UyWTDmDjNy4"
  },
  {
    "id": 88,
    "type": "podcast",
    "filename": "podcasts/jonathan-lowenhar.md",
    "title": "How a great founder becomes a great CEO | Jonathan Lowenhar (co-founder of Enjoy The Work)",
    "tags": [
      "startups",
      "design",
      "leadership",
      "strategy",
      "engineering",
      "go-to-market"
    ],
    "date": "2024-12-05",
    "description": "How a great founder becomes a great CEO, covering startup building, product design, and team leadership.",
    "guest": "Jonathan Lowenhar",
    "youtube_url": "https://www.youtube.com/watch?v=s0jn7eE33nk"
  },
  {
    "id": 89,
    "type": "podcast",
    "filename": "podcasts/amjad-masad.md",
    "title": "Behind the product: Replit | Amjad Masad (co-founder and CEO)",
    "tags": [
      "design",
      "ai",
      "engineering",
      "leadership",
      "product-management",
      "startups"
    ],
    "date": "2024-11-21",
    "description": "Behind the product: Replit, covering product design, AI product work, and engineering tradeoffs.",
    "guest": "Amjad Masad",
    "youtube_url": "https://www.youtube.com/watch?v=Bp_h674oIhw"
  },
  {
    "id": 90,
    "type": "podcast",
    "filename": "podcasts/raaz-herzberg.md",
    "title": "Building Wiz: the fastest-growing startup in history | Raaz Herzberg (CMO and VP Product Strategy)",
    "tags": [
      "design",
      "leadership",
      "strategy",
      "startups",
      "product-management",
      "b2b"
    ],
    "date": "2024-11-17",
    "description": "The fastest-growing startup in history, covering product design, team leadership, and strategic decision-making.",
    "guest": "Raaz Herzberg",
    "youtube_url": "https://www.youtube.com/watch?v=vnW3zIkrOvY"
  },
  {
    "id": 91,
    "type": "podcast",
    "filename": "podcasts/archie-abrams.md",
    "title": "Breaking the rules of growth: Why Shopify bans KPIs, optimizes for churn, prioritizes intuition, and builds toward a 100-year vision | Archie Abrams (VP Product, Head of Growth at Shopify)",
    "tags": [
      "analytics",
      "growth",
      "design",
      "pricing",
      "strategy",
      "b2b"
    ],
    "date": "2024-11-07",
    "description": "Why Shopify bans KPIs, optimizes for churn, prioritizes intuition, and builds toward a 100-year vision, covering measurement and analysis, growth systems, and product design.",
    "guest": "Archie Abrams",
    "youtube_url": "https://www.youtube.com/watch?v=Vlph3dn4jnU"
  },
  {
    "id": 92,
    "type": "podcast",
    "filename": "podcasts/shreyas-doshi-live.md",
    "title": "Shreyas Doshi Live",
    "tags": [
      "organization",
      "design",
      "product-management",
      "b2b",
      "career",
      "leadership"
    ],
    "date": "2024-10-31",
    "description": "How is it doing?\" And you want to be able to say, you are the PM leader, you want to be able to say something smart, and something that makes you look competent, covering cross-functional alignment, product design, and product strategy and execution.",
    "guest": "Shreyas Doshi Live",
    "youtube_url": null
  },
  {
    "id": 93,
    "type": "podcast",
    "filename": "podcasts/shreyas-doshi.md",
    "title": "4 questions Shreyas Doshi wishes he’d asked himself sooner | Former PM leader at Stripe, Twitter, Google",
    "tags": [
      "leadership",
      "design",
      "engineering",
      "product-management",
      "b2b",
      "career"
    ],
    "date": "2024-10-31",
    "description": "4 questions Shreyas Doshi wishes he’d asked himself sooner, covering team leadership, product design, and engineering tradeoffs.",
    "guest": "Shreyas Doshi",
    "youtube_url": "https://www.youtube.com/watch?v=atS060bNpE0"
  },
  {
    "id": 94,
    "type": "podcast",
    "filename": "podcasts/naomi-gleit.md",
    "title": "Meta’s Head of Product (and 29th employee) on working with Mark Zuckerberg, early growth tactics, why PMs are like conductors, and more | Naomi Gleit",
    "tags": [
      "product-management",
      "leadership",
      "strategy",
      "design",
      "career",
      "engineering"
    ],
    "date": "2024-10-27",
    "description": "Meta’s Head of Product (and 29th employee) on working with Mark Zuckerberg, early growth tactics, why PMs are like conductors, and more, covering product strategy and execution, team leadership, and strategic decision-making.",
    "guest": "Naomi Gleit",
    "youtube_url": "https://www.youtube.com/watch?v=sTYuKgzZoL8"
  },
  {
    "id": 95,
    "type": "podcast",
    "filename": "podcasts/jessica-hische.md",
    "title": "How to see like a designer: The hidden power of typography and logos | Jessica Hische (Lettering Artist, Author)",
    "tags": [
      "design",
      "leadership",
      "go-to-market",
      "newsletter",
      "strategy",
      "podcast"
    ],
    "date": "2024-10-20",
    "description": "The hidden power of typography and logos, covering product design, team leadership, and go-to-market execution.",
    "guest": "Jessica Hische",
    "youtube_url": "https://www.youtube.com/watch?v=tLLqE6Ia8-U"
  },
  {
    "id": 96,
    "type": "podcast",
    "filename": "podcasts/anneka-gupta.md",
    "title": "Becoming more strategic, navigating difficult colleagues, harnessing founder mode, and more | Anneka Gupta (Chief Product Officer at Rubrik)",
    "tags": [
      "startups",
      "leadership",
      "strategy",
      "design",
      "career",
      "product-management"
    ],
    "date": "2024-10-17",
    "description": "Becoming more strategic, navigating difficult colleagues, harnessing founder mode, and more, covering startup building, team leadership, and strategic decision-making.",
    "guest": "Anneka Gupta",
    "youtube_url": "https://www.youtube.com/watch?v=E3dUveqt9Bw"
  },
  {
    "id": 97,
    "type": "podcast",
    "filename": "podcasts/tristan-de-montebello.md",
    "title": "Why most public speaking advice is wrong—and how to finally overcome your speaking anxiety | Tristan de Montebello (CEO & co-founder of Ultraspeaking)",
    "tags": [
      "design",
      "podcast",
      "b2c",
      "newsletter",
      "startups"
    ],
    "date": "2024-10-13",
    "description": "Why most public speaking advice is wrong—and how to finally overcome your speaking anxiety, covering product design, operator lessons, and consumer products.",
    "guest": "Tristan de Montebello",
    "youtube_url": "https://www.youtube.com/watch?v=BQM3Yq93nVc"
  },
  {
    "id": 98,
    "type": "podcast",
    "filename": "podcasts/john-mark-nickels.md",
    "title": "Becoming a conscious leader: Leading without fear, finding your life’s objective function, and getting better at vision and strategy | John Mark Nickels (Uber, Waymo, DoorDash)",
    "tags": [
      "leadership",
      "design",
      "pricing",
      "career",
      "product-management",
      "engineering"
    ],
    "date": "2024-10-06",
    "description": "Leading without fear, finding your life’s objective function, and getting better at vision and strategy, covering team leadership, product design, and pricing decisions.",
    "guest": "John Mark Nickels",
    "youtube_url": "https://www.youtube.com/watch?v=W7o40qcYHlM"
  },
  {
    "id": 99,
    "type": "podcast",
    "filename": "podcasts/alex-komoroske.md",
    "title": "Thinking like a gardener not a builder, organizing teams like slime mold, the adjacent possible, and other unconventional product advice | Alex Komoroske (Stripe, Google)",
    "tags": [
      "design",
      "ai",
      "leadership",
      "startups",
      "strategy",
      "career"
    ],
    "date": "2024-10-03",
    "description": "Thinking like a gardener not a builder, organizing teams like slime mold, the adjacent possible, and other unconventional product advice, covering product design, AI product work, and team leadership.",
    "guest": "Alex Komoroske",
    "youtube_url": "https://www.youtube.com/watch?v=PoWRYBWSqpU"
  },
  {
    "id": 100,
    "type": "podcast",
    "filename": "podcasts/benjamin-lauzier.md",
    "title": "How marketplaces win: Liquidity, growth levers, quality, and more | Benjamin Lauzier (Lyft, Thumbtack, Reforge)",
    "tags": [
      "strategy",
      "design",
      "growth",
      "leadership",
      "startups",
      "career"
    ],
    "date": "2024-09-29",
    "description": "Liquidity, growth levers, quality, and more, covering strategic decision-making, product design, and growth systems.",
    "guest": "Benjamin Lauzier",
    "youtube_url": "https://www.youtube.com/watch?v=CYwgStMln6U"
  },
  {
    "id": 101,
    "type": "podcast",
    "filename": "podcasts/tamar-yehoshua.md",
    "title": "Lessons in product leadership and AI strategy from Glean, Google, Amazon, and Slack | Tamar Yehoshua (Product at Glean, ex-Google and Slack)",
    "tags": [
      "leadership",
      "design",
      "career",
      "strategy",
      "b2b",
      "engineering"
    ],
    "date": "2024-09-26",
    "description": "Lessons in product leadership and AI strategy from Glean, Google, Amazon, and Slack, covering team leadership, product design, and career development.",
    "guest": "Tamar Yehoshua",
    "youtube_url": "https://www.youtube.com/watch?v=ZoSeOltKqQk"
  },
  {
    "id": 102,
    "type": "podcast",
    "filename": "podcasts/eli-schwartz.md",
    "title": "Rethinking SEO in the age of AI | Eli Schwartz (SEO advisor, author)",
    "tags": [
      "ai",
      "go-to-market",
      "growth",
      "newsletter",
      "design",
      "podcast"
    ],
    "date": "2024-09-19",
    "description": "Rethinking SEO in the age of AI, covering AI product work, go-to-market execution, and growth systems.",
    "guest": "Eli Schwartz",
    "youtube_url": "https://www.youtube.com/watch?v=Z71yGshPTwk"
  },
  {
    "id": 103,
    "type": "podcast",
    "filename": "podcasts/camille-fournier.md",
    "title": "The things engineers are desperate for PMs to understand | Camille Fournier (author of “The Manager’s Path,” ex-CTO at Rent the Runway)",
    "tags": [
      "leadership",
      "design",
      "engineering",
      "product-management",
      "career",
      "podcast"
    ],
    "date": "2024-09-15",
    "description": "The things engineers are desperate for PMs to understand, covering team leadership, product design, and engineering tradeoffs.",
    "guest": "Camille Fournier",
    "youtube_url": "https://www.youtube.com/watch?v=hZSh0rs20uI"
  },
  {
    "id": 104,
    "type": "podcast",
    "filename": "podcasts/phyl-terry.md",
    "title": "Land your dream job in today’s market: negotiation tactics, job search councils, and more | Phyl Terry (Author, “Never Search Alone”)",
    "tags": [
      "strategy",
      "career",
      "b2c",
      "design",
      "leadership",
      "b2b"
    ],
    "date": "2024-09-12",
    "description": "Negotiation tactics, job search councils, and more, covering strategic decision-making, career development, and consumer products.",
    "guest": "Phyl Terry",
    "youtube_url": "https://www.youtube.com/watch?v=OH3nzRdwYPA"
  },
  {
    "id": 105,
    "type": "podcast",
    "filename": "podcasts/sean-ellis.md",
    "title": "The original growth hacker reveals his secrets | Sean Ellis (author of “Hacking Growth”)",
    "tags": [
      "growth",
      "strategy",
      "design",
      "startups",
      "analytics",
      "leadership"
    ],
    "date": "2024-09-05",
    "description": "The original growth hacker reveals his secrets, covering growth systems, strategic decision-making, and product design.",
    "guest": "Sean Ellis",
    "youtube_url": "https://www.youtube.com/watch?v=VjJ6xcv7e8s"
  },
  {
    "id": 106,
    "type": "podcast",
    "filename": "podcasts/nikita-bier.md",
    "title": "How to consistently go viral: Nikita Bier’s playbook for winning at consumer apps (co-founder of TBH, Gas, advisor, investor)",
    "tags": [
      "design",
      "b2c",
      "go-to-market",
      "product-management",
      "leadership",
      "startups"
    ],
    "date": "2024-08-25",
    "description": "Nikita Bier’s playbook for winning at consumer apps (co-founder of TBH, Gas, advisor, investor), covering product design, consumer products, and go-to-market execution.",
    "guest": "Nikita Bier",
    "youtube_url": "https://www.youtube.com/watch?v=bhnfZhJWCWY"
  },
  {
    "id": 107,
    "type": "podcast",
    "filename": "podcasts/kevin-yien.md",
    "title": "Unorthodox PM wisdom: Automating user insights, unselling job candidates, logging every decision, more | Kevin Yien (Stripe, Square, Mutiny)",
    "tags": [
      "design",
      "product-management",
      "leadership",
      "b2b",
      "career",
      "organization"
    ],
    "date": "2024-08-18",
    "description": "Automating user insights, unselling job candidates, logging every decision, more, covering product design, product strategy and execution, and team leadership.",
    "guest": "Kevin Yien",
    "youtube_url": "https://www.youtube.com/watch?v=xOTO98MXG9o"
  },
  {
    "id": 108,
    "type": "podcast",
    "filename": "podcasts/evan-lapointe.md",
    "title": "Improve strategy, influence, and decision-making by understanding your brain | Evan LaPointe (founder of CORE Sciences)",
    "tags": [
      "design",
      "leadership",
      "analytics",
      "startups",
      "podcast",
      "growth"
    ],
    "date": "2024-08-11",
    "description": "Improve strategy, influence, and decision-making by understanding your brain, covering product design, team leadership, and measurement and analysis.",
    "guest": "Evan LaPointe",
    "youtube_url": "https://www.youtube.com/watch?v=GECtyEj9UPA"
  },
  {
    "id": 109,
    "type": "podcast",
    "filename": "podcasts/joe-hudson.md",
    "title": "How embracing emotions will accelerate your career | Joe Hudson (executive coach, Art of Accomplishment)",
    "tags": [
      "analytics",
      "design",
      "leadership",
      "career",
      "newsletter",
      "podcast"
    ],
    "date": "2024-08-08",
    "description": "How embracing emotions will accelerate your career, covering measurement and analysis, product design, and team leadership.",
    "guest": "Joe Hudson",
    "youtube_url": "https://www.youtube.com/watch?v=DYkE1gf37ts"
  },
  {
    "id": 110,
    "type": "podcast",
    "filename": "podcasts/brian-tolkin.md",
    "title": "Lessons from scaling Uber and Opendoor | Brian Tolkin (Head of Product at Opendoor, ex-Uber)",
    "tags": [
      "design",
      "leadership",
      "go-to-market",
      "product-management",
      "strategy",
      "pricing"
    ],
    "date": "2024-08-04",
    "description": "Lessons from scaling Uber and Opendoor, covering product design, team leadership, and go-to-market execution.",
    "guest": "Brian Tolkin",
    "youtube_url": "https://www.youtube.com/watch?v=sRukk520Fds"
  },
  {
    "id": 111,
    "type": "podcast",
    "filename": "podcasts/timothy-davis.md",
    "title": "The ultimate guide to performance marketing | Timothy Davis (Shopify)",
    "tags": [
      "strategy",
      "growth",
      "design",
      "analytics",
      "leadership",
      "go-to-market"
    ],
    "date": "2024-07-28",
    "description": "Performance marketing, covering strategic decision-making, growth systems, and product design.",
    "guest": "Timothy Davis",
    "youtube_url": "https://www.youtube.com/watch?v=zNJyb3R_Pnc"
  },
  {
    "id": 112,
    "type": "podcast",
    "filename": "podcasts/roger-martin.md",
    "title": "5 essential questions to craft a winning strategy | Roger Martin (author, advisor, speaker)",
    "tags": [
      "strategy",
      "design",
      "leadership",
      "b2b",
      "go-to-market",
      "podcast"
    ],
    "date": "2024-07-25",
    "description": "5 essential questions to craft a winning strategy, covering strategic decision-making, product design, and team leadership.",
    "guest": "Roger Martin",
    "youtube_url": "https://www.youtube.com/watch?v=y7SN4FK8noY"
  },
  {
    "id": 113,
    "type": "podcast",
    "filename": "podcasts/jess-lachs.md",
    "title": "Building a world-class data org | Jessica Lachs (VP of Analytics and Data Science at DoorDash)",
    "tags": [
      "leadership",
      "analytics",
      "design",
      "strategy",
      "growth",
      "b2b"
    ],
    "date": "2024-07-14",
    "description": "Building a world-class data org, covering team leadership, measurement and analysis, and product design.",
    "guest": "Jess Lachs",
    "youtube_url": "https://www.youtube.com/watch?v=D4PDb_C8Dww"
  },
  {
    "id": 114,
    "type": "podcast",
    "filename": "podcasts/jeff-weinstein.md",
    "title": "Building product at Stripe: craft, metrics, and customer obsession | Jeff Weinstein (Product lead)",
    "tags": [
      "design",
      "engineering",
      "strategy",
      "podcast",
      "analytics",
      "leadership"
    ],
    "date": "2024-07-11",
    "description": "Craft, metrics, and customer obsession, covering product design, engineering tradeoffs, and strategic decision-making.",
    "guest": "Jeff Weinstein",
    "youtube_url": "https://www.youtube.com/watch?v=qbZQjprTnrU"
  },
  {
    "id": 115,
    "type": "podcast",
    "filename": "podcasts/mike-maples-jr.md",
    "title": "Pattern Breakers: How to find a breakthrough startup idea | Mike Maples, Jr. (Founding Partner at Floodgate, ex-Product at Silicon Graphics)",
    "tags": [
      "startups",
      "design",
      "career",
      "leadership",
      "b2c",
      "growth"
    ],
    "date": "2024-07-07",
    "description": "Finding a breakthrough startup idea, covering startup building, product design, and career development.",
    "guest": "Mike Maples Jr",
    "youtube_url": "https://www.youtube.com/watch?v=h9o6gPQA6LA"
  },
  {
    "id": 116,
    "type": "podcast",
    "filename": "podcasts/dylan-field.md",
    "title": "Dylan Field live at Config: Intuition, simplicity, and the future of design",
    "tags": [
      "design",
      "leadership",
      "engineering",
      "b2b",
      "podcast",
      "b2c"
    ],
    "date": "2024-06-30",
    "description": "Intuition, simplicity, and the future of design, covering product design, team leadership, and engineering tradeoffs.",
    "guest": "Dylan Field",
    "youtube_url": "https://www.youtube.com/watch?v=yJQYBjto41s"
  },
  {
    "id": 117,
    "type": "podcast",
    "filename": "podcasts/jessica-livingston.md",
    "title": "The social radar: Y Combinator’s secret weapon | Jessica Livingston (co-founder of Y Combinator, author, podcast host)",
    "tags": [
      "startups",
      "b2c",
      "design",
      "career",
      "leadership",
      "engineering"
    ],
    "date": "2024-06-27",
    "description": "Y Combinator’s secret weapon, covering startup building, consumer products, and product design.",
    "guest": "Jessica Livingston",
    "youtube_url": "https://www.youtube.com/watch?v=h9MUuhsDJOM"
  },
  {
    "id": 118,
    "type": "podcast",
    "filename": "podcasts/ami-vora.md",
    "title": "Making an impact through authenticity and curiosity | Ami Vora (CPO at Faire, ex-WhatsApp, FB, IG)",
    "tags": [
      "design",
      "engineering",
      "go-to-market",
      "b2b",
      "career",
      "growth"
    ],
    "date": "2024-06-23",
    "description": "Making an impact through authenticity and curiosity, covering product design, engineering tradeoffs, and go-to-market execution.",
    "guest": "Ami Vora",
    "youtube_url": "https://www.youtube.com/watch?v=6UHAop9fhNU"
  },
  {
    "id": 119,
    "type": "podcast",
    "filename": "podcasts/tanguy-crusson.md",
    "title": "Hard-won lessons building 0 to 1 inside Atlassian | Tanguy Crusson (Head of Jira Product Discovery)",
    "tags": [
      "design",
      "leadership",
      "startups",
      "strategy",
      "product-management",
      "b2b"
    ],
    "date": "2024-06-16",
    "description": "Why large companies with so many advantages still fail at creating new products.",
    "guest": "Tanguy Crusson",
    "youtube_url": "https://www.youtube.com/watch?v=cZqpqb5qR5A"
  },
  {
    "id": 120,
    "type": "podcast",
    "filename": "podcasts/jeffrey-pfeffer.md",
    "title": "The paths to power: How to grow your influence and advance your career | Jeffrey Pfeffer (author of 7 Rules of Power, professor at Stanford GSB)",
    "tags": [
      "design",
      "career",
      "startups",
      "b2c",
      "leadership",
      "podcast"
    ],
    "date": "2024-06-13",
    "description": "Grow your influence and advance your career, covering product design, career development, and startup building.",
    "guest": "Jeffrey Pfeffer",
    "youtube_url": "https://www.youtube.com/watch?v=etVCBDRXUH8"
  },
  {
    "id": 121,
    "type": "podcast",
    "filename": "podcasts/uri-levine.md",
    "title": "Lessons from a two-time unicorn builder, 50-time startup advisor, and 20-time company board member | Uri Levine (co-founder of Waze)",
    "tags": [
      "startups",
      "design",
      "career",
      "ai",
      "b2c",
      "leadership"
    ],
    "date": "2024-06-09",
    "description": "Lessons from a two-time unicorn builder, 50-time startup advisor, and 20-time company board member, covering startup building, product design, and career development.",
    "guest": "Uri Levine",
    "youtube_url": "https://www.youtube.com/watch?v=Cj4ORGGEJcA"
  },
  {
    "id": 122,
    "type": "podcast",
    "filename": "podcasts/cam-adams.md",
    "title": "Inside Canva: Coaches not managers, giving away your Legos, and running profitably | Cameron Adams (co-founder and CPO)",
    "tags": [
      "leadership",
      "design",
      "strategy",
      "startups",
      "go-to-market",
      "product-management"
    ],
    "date": "2024-06-02",
    "description": "Coaches not managers, giving away your Legos, and running profitably, covering team leadership, product design, and strategic decision-making.",
    "guest": "Cam Adams",
    "youtube_url": "https://www.youtube.com/watch?v=wgrJNHlYUA8"
  },
  {
    "id": 123,
    "type": "podcast",
    "filename": "podcasts/matt-dixon.md",
    "title": "The surprising truth about what closes deals: Insights from 2.5m sales conversations | Matt Dixon (author of The Challenger Sale and The JOLT Effect)",
    "tags": [
      "b2b",
      "design",
      "leadership",
      "podcast",
      "strategy",
      "go-to-market"
    ],
    "date": "2024-05-30",
    "description": "Insights from 2.5m sales conversations, covering B2B products, product design, and team leadership.",
    "guest": "Matt Dixon",
    "youtube_url": "https://www.youtube.com/watch?v=cUzEgRetmC4"
  },
  {
    "id": 124,
    "type": "podcast",
    "filename": "podcasts/bangaly-kaba.md",
    "title": "Unorthodox frameworks for growing your product, career, and impact | Bangaly Kaba (YouTube, Instagram, Facebook, Instacart)",
    "tags": [
      "leadership",
      "growth",
      "product-management",
      "career",
      "design",
      "strategy"
    ],
    "date": "2024-05-26",
    "description": "Unorthodox frameworks for growing your product, career, and impact, covering team leadership, growth systems, and product strategy and execution.",
    "guest": "Bangaly Kaba",
    "youtube_url": "https://www.youtube.com/watch?v=Ub9UkWByFIQ"
  },
  {
    "id": 125,
    "type": "podcast",
    "filename": "podcasts/kenneth-berger.md",
    "title": "Why not asking for what you want is holding you back | Kenneth Berger (exec coach, first PM at Slack)",
    "tags": [
      "leadership",
      "strategy",
      "product-management",
      "startups",
      "career",
      "design"
    ],
    "date": "2024-05-19",
    "description": "Kenneth Berger coaches startup leaders on how to prevent burnout, advocate for their desired lifestyle, and make a meaningful impact on the world. He’s spent more than 20 years in the tech industry, is a former founder backed by top investors, and was the first product manager at Slack.",
    "guest": "Kenneth Berger",
    "youtube_url": "https://www.youtube.com/watch?v=KSCjl_VIdak"
  },
  {
    "id": 126,
    "type": "podcast",
    "filename": "podcasts/jag-duggal.md",
    "title": "Be fundamentally different, not incrementally better | Jag Duggal (Nubank, Facebook, Google, Quantcast)",
    "tags": [
      "design",
      "go-to-market",
      "strategy",
      "leadership",
      "growth",
      "career"
    ],
    "date": "2024-05-16",
    "description": "Be fundamentally different, not incrementally better, covering product design, go-to-market execution, and strategic decision-making.",
    "guest": "Jag Duggal",
    "youtube_url": "https://www.youtube.com/watch?v=8A7wXK2MncQ"
  },
  {
    "id": 127,
    "type": "podcast",
    "filename": "podcasts/vikrama-dhiman.md",
    "title": "A framework for PM skill development | Vikrama Dhiman (Gojek)",
    "tags": [
      "leadership",
      "strategy",
      "product-management",
      "career",
      "design",
      "growth"
    ],
    "date": "2024-05-12",
    "description": "A framework for PM skill development, covering team leadership, strategic decision-making, and product strategy and execution.",
    "guest": "Vikrama Dhiman",
    "youtube_url": "https://www.youtube.com/watch?v=ImSvm11GR0Y"
  },
  {
    "id": 128,
    "type": "podcast",
    "filename": "podcasts/hamilton-helmer.md",
    "title": "Business strategy with Hamilton Helmer (author of 7 Powers)",
    "tags": [
      "strategy",
      "startups",
      "design",
      "go-to-market",
      "b2b",
      "leadership"
    ],
    "date": "2024-05-05",
    "description": "Business strategy with Hamilton Helmer (author of 7 Powers), covering strategic decision-making, startup building, and product design.",
    "guest": "Hamilton Helmer",
    "youtube_url": "https://www.youtube.com/watch?v=hKq1_KPSqy0"
  },
  {
    "id": 129,
    "type": "podcast",
    "filename": "podcasts/annie-duke.md",
    "title": "This will make you a better decision-maker | Annie Duke (author of “Thinking in Bets” and “Quit,” former pro poker player)",
    "tags": [
      "design",
      "newsletter",
      "career",
      "podcast"
    ],
    "date": "2024-05-02",
    "description": "This will make you a better decision-maker, covering product design, practical product lessons, and career development.",
    "guest": "Annie Duke",
    "youtube_url": "https://www.youtube.com/watch?v=svQMODvIGAE"
  },
  {
    "id": 130,
    "type": "podcast",
    "filename": "podcasts/kayvon-beykpour.md",
    "title": "Twitter’s former Head of Product opens up: being fired, meeting Elon, changing stagnant culture, building consumer product, more | Kayvon Beykpour",
    "tags": [
      "leadership",
      "design",
      "b2c",
      "engineering",
      "product-management",
      "growth"
    ],
    "date": "2024-04-28",
    "description": "Being fired, meeting Elon, changing stagnant culture, building consumer product, more, covering team leadership, product design, and consumer products.",
    "guest": "Kayvon Beykpour",
    "youtube_url": "https://www.youtube.com/watch?v=MKDnDueTvKk"
  },
  {
    "id": 131,
    "type": "podcast",
    "filename": "podcasts/carole-robin.md",
    "title": "How to build deeper, more robust relationships | Carole Robin (Stanford GSB professor, “Touchy Feely”)",
    "tags": [
      "design",
      "leadership",
      "engineering",
      "podcast",
      "startups",
      "growth"
    ],
    "date": "2024-04-25",
    "description": "Building deeper, more robust relationships, covering product design, team leadership, and engineering tradeoffs.",
    "guest": "Carole Robin",
    "youtube_url": "https://www.youtube.com/watch?v=Cew9-GlC_yk"
  },
  {
    "id": 132,
    "type": "podcast",
    "filename": "podcasts/mihika-kapoor.md",
    "title": "Vision, conviction, and hype: How to build 0 to 1 inside a company | Mihika Kapoor (Product at Figma)",
    "tags": [
      "design",
      "leadership",
      "strategy",
      "product-management",
      "engineering",
      "go-to-market"
    ],
    "date": "2024-04-21",
    "description": "Building 0 to 1 inside a company, covering product design, team leadership, and strategic decision-making.",
    "guest": "Mihika Kapoor",
    "youtube_url": "https://www.youtube.com/watch?v=uDq6_CPaRjM"
  },
  {
    "id": 133,
    "type": "podcast",
    "filename": "podcasts/dalton-caldwell.md",
    "title": "Lessons from 1,000+ YC startups: Resilience, tar pit ideas, pivoting, more | Dalton Caldwell (Y Combinator, Managing Director)",
    "tags": [
      "startups",
      "design",
      "analytics",
      "career",
      "podcast"
    ],
    "date": "2024-04-18",
    "description": "Resilience, tar pit ideas, pivoting, more, covering startup building, product design, and measurement and analysis.",
    "guest": "Dalton Caldwell",
    "youtube_url": "https://www.youtube.com/watch?v=m7LvNTbaqSI"
  },
  {
    "id": 134,
    "type": "podcast",
    "filename": "podcasts/todd-jackson.md",
    "title": "A framework for finding product-market fit | Todd Jackson (First Round Capital)",
    "tags": [
      "startups",
      "strategy",
      "b2b",
      "design",
      "leadership",
      "podcast"
    ],
    "date": "2024-04-11",
    "description": "A framework for finding product-market fit, covering startup building, strategic decision-making, and B2B products.",
    "guest": "Todd Jackson",
    "youtube_url": "https://www.youtube.com/watch?v=yc1Uwhfxacs"
  },
  {
    "id": 135,
    "type": "podcast",
    "filename": "podcasts/claire-vo.md",
    "title": "Bending the universe in your favor | Claire Vo (LaunchDarkly, Color, Optimizely, ChatPRD)",
    "tags": [
      "career",
      "design",
      "leadership",
      "engineering",
      "growth",
      "strategy"
    ],
    "date": "2024-04-07",
    "description": "Bending the universe in your favor, covering career development, product design, and team leadership.",
    "guest": "Claire Vo",
    "youtube_url": "https://www.youtube.com/watch?v=aXGo1o_baBo"
  },
  {
    "id": 136,
    "type": "podcast",
    "filename": "podcasts/dharmesh-shah.md",
    "title": "Zigging vs. zagging: How HubSpot built a $30B company | Dharmesh Shah (co-founder/CTO)",
    "tags": [
      "design",
      "startups",
      "leadership",
      "product-management",
      "podcast",
      "analytics"
    ],
    "date": "2024-04-04",
    "description": "How HubSpot built a $30B company, covering product design, startup building, and team leadership.",
    "guest": "Dharmesh Shah",
    "youtube_url": "https://www.youtube.com/watch?v=dpw9Ue1HU48"
  },
  {
    "id": 137,
    "type": "podcast",
    "filename": "podcasts/matt-abrahams.md",
    "title": "How to speak more confidently and persuasively | Matt Abrahams (professor, podcast host, author, speaker)",
    "tags": [
      "career",
      "podcast",
      "design",
      "leadership",
      "strategy",
      "newsletter"
    ],
    "date": "2024-03-31",
    "description": "Speak more confidently and persuasively, covering career development, operator lessons, and product design.",
    "guest": "Matt Abrahams",
    "youtube_url": "https://www.youtube.com/watch?v=LpbBzmXrzEY"
  },
  {
    "id": 138,
    "type": "podcast",
    "filename": "podcasts/kunal-shah.md",
    "title": "Kunal Shah on winning in India, second-order thinking, the philosophy of startups, and more",
    "tags": [
      "design",
      "startups",
      "pricing",
      "strategy",
      "b2b",
      "go-to-market"
    ],
    "date": "2024-03-24",
    "description": "Winning in India, second-order thinking, the philosophy of startups, and more, covering product design, startup building, and pricing decisions.",
    "guest": "Kunal Shah",
    "youtube_url": "https://www.youtube.com/watch?v=EgBOVDzUUAA"
  },
  {
    "id": 139,
    "type": "podcast",
    "filename": "podcasts/emilie-gerber.md",
    "title": "The ultimate guide to PR | Emilie Gerber (founder of Six Eastern)",
    "tags": [
      "b2b",
      "design",
      "growth",
      "startups",
      "strategy",
      "b2c"
    ],
    "date": "2024-03-21",
    "description": "PR, covering B2B products, product design, and growth systems.",
    "guest": "Emilie Gerber",
    "youtube_url": "https://www.youtube.com/watch?v=jW9GzaaRPxk"
  },
  {
    "id": 140,
    "type": "podcast",
    "filename": "podcasts/noam-lovinsky.md",
    "title": "The happiness and pain of product management | Noam Lovinsky (Grammarly, Facebook, YouTube, Thumbtack)",
    "tags": [
      "leadership",
      "career",
      "design",
      "b2c",
      "product-management",
      "growth"
    ],
    "date": "2024-03-17",
    "description": "The happiness and pain of product management, covering team leadership, career development, and product design.",
    "guest": "Noam Lovinsky",
    "youtube_url": "https://www.youtube.com/watch?v=a_W5Rn0bJWE"
  },
  {
    "id": 141,
    "type": "podcast",
    "filename": "podcasts/ray-cao.md",
    "title": "Inside TikTok: Culture, strategy, monetization, and more | Ray Cao (Global Head of Monetization Product Strategy and Operations)",
    "tags": [
      "strategy",
      "leadership",
      "b2c",
      "design",
      "go-to-market",
      "pricing"
    ],
    "date": "2024-03-07",
    "description": "Culture, strategy, monetization, and more, covering strategic decision-making, team leadership, and consumer products.",
    "guest": "Ray Cao",
    "youtube_url": "https://www.youtube.com/watch?v=RJ3iPWo3-8M"
  },
  {
    "id": 142,
    "type": "podcast",
    "filename": "podcasts/boz.md",
    "title": "Making Meta | Andrew ‘Boz’ Bosworth (CTO)",
    "tags": [
      "startups",
      "design",
      "leadership",
      "b2c",
      "career",
      "engineering"
    ],
    "date": "2024-03-03",
    "description": "Making Meta, covering startup building, product design, and team leadership.",
    "guest": "Boz",
    "youtube_url": "https://www.youtube.com/watch?v=_XqDB2Upr3s"
  },
  {
    "id": 143,
    "type": "podcast",
    "filename": "podcasts/donna-lichaw.md",
    "title": "How to discover your superpowers, own your story, and unlock personal growth | Donna Lichaw (author of The Leader’s Journey)",
    "tags": [
      "leadership",
      "design",
      "strategy",
      "startups",
      "career",
      "podcast"
    ],
    "date": "2024-02-25",
    "description": "Discover your superpowers, own your story, and unlock personal growth, covering team leadership, product design, and strategic decision-making.",
    "guest": "Donna Lichaw",
    "youtube_url": "https://www.youtube.com/watch?v=7fA8DMMUNPI"
  },
  {
    "id": 144,
    "type": "podcast",
    "filename": "podcasts/elizabeth-stone.md",
    "title": "How Netflix builds a culture of excellence | Elizabeth Stone (CTO)",
    "tags": [
      "leadership",
      "engineering",
      "design",
      "career",
      "strategy",
      "newsletter"
    ],
    "date": "2024-02-22",
    "description": "How Netflix builds a culture of excellence, covering team leadership, engineering tradeoffs, and product design.",
    "guest": "Elizabeth Stone",
    "youtube_url": "https://www.youtube.com/watch?v=2XgU6T4DalY"
  },
  {
    "id": 145,
    "type": "podcast",
    "filename": "podcasts/jake-knapp--john-zeratsky.md",
    "title": "Making time for what matters | Jake Knapp and John Zeratsky (authors of Sprint and Make Time, co-founders of Character Capital)",
    "tags": [
      "design",
      "startups",
      "leadership",
      "strategy",
      "career",
      "analytics"
    ],
    "date": "2024-02-11",
    "description": "Making time for what matters, covering product design, startup building, and team leadership.",
    "guest": "Jake Knapp + John Zeratsky",
    "youtube_url": "https://www.youtube.com/watch?v=cuce7zvOFHY"
  },
  {
    "id": 146,
    "type": "podcast",
    "filename": "podcasts/logan-kilpatrick.md",
    "title": "Inside OpenAI | Logan Kilpatrick (head of developer relations)",
    "tags": [
      "ai",
      "design",
      "engineering",
      "leadership",
      "go-to-market",
      "b2b"
    ],
    "date": "2024-02-08",
    "description": "Inside OpenAI, covering AI product work, product design, and engineering tradeoffs.",
    "guest": "Logan Kilpatrick",
    "youtube_url": "https://www.youtube.com/watch?v=XkMbkWG2ca4"
  },
  {
    "id": 147,
    "type": "podcast",
    "filename": "podcasts/megan-cook.md",
    "title": "Lessons from Atlassian: Launching new products, getting buy-in, and staying ahead of the competition | Megan Cook (head of product, Jira)",
    "tags": [
      "leadership",
      "product-management",
      "design",
      "strategy",
      "engineering",
      "go-to-market"
    ],
    "date": "2024-02-04",
    "description": "Launching new products, getting buy-in, and staying ahead of the competition, covering team leadership, product strategy and execution, and product design.",
    "guest": "Megan Cook",
    "youtube_url": "https://www.youtube.com/watch?v=MQQ1wohqArk"
  },
  {
    "id": 148,
    "type": "podcast",
    "filename": "podcasts/jonny-miller.md",
    "title": "Managing nerves, anxiety, and burnout | Jonny Miller (Nervous System Mastery)",
    "tags": [
      "podcast",
      "startups",
      "leadership",
      "newsletter"
    ],
    "date": "2024-01-28",
    "description": "Jonny’s five-week boot camp, Nervous System Mastery, will equip you with evidence-backed protocols to cultivate greater calm and agency over your internal state. Learn to rewire maladaptive stress responses and improve your sleep ( use code LENNY for $250 discount ). Apply here .",
    "guest": "Jonny Miller",
    "youtube_url": "https://www.youtube.com/watch?v=-kN8Agqee4w"
  },
  {
    "id": 149,
    "type": "podcast",
    "filename": "podcasts/geoffrey-moore.md",
    "title": "Geoffrey Moore on finding your beachhead, crossing the chasm, and dominating a market",
    "tags": [
      "strategy",
      "design",
      "go-to-market",
      "pricing",
      "b2b",
      "b2c"
    ],
    "date": "2024-01-25",
    "description": "The “chasm” is the gap between success with early adopters and success with the mainstream market. Crossing the chasm requires selling to “pragmatist customers” who, unlike early adopters, will not buy on the basis of a vision.",
    "guest": "Geoffrey Moore",
    "youtube_url": "https://www.youtube.com/watch?v=RBbINB5HSHk"
  },
  {
    "id": 150,
    "type": "podcast",
    "filename": "podcasts/richard-rumelt.md",
    "title": "Good Strategy, Bad Strategy | Richard Rumelt",
    "tags": [
      "strategy",
      "design",
      "growth",
      "newsletter",
      "ai",
      "engineering"
    ],
    "date": "2024-01-21",
    "description": "Good Strategy, Bad Strategy, covering strategic decision-making, product design, and growth systems.",
    "guest": "Richard Rumelt",
    "youtube_url": "https://www.youtube.com/watch?v=4uWKEG0s9Kc"
  },
  {
    "id": 151,
    "type": "podcast",
    "filename": "podcasts/heidi-helfand.md",
    "title": "The art and wisdom of changing teams | Heidi Helfand (author of Dynamic Reteaming)",
    "tags": [
      "leadership",
      "design",
      "strategy",
      "career",
      "engineering",
      "startups"
    ],
    "date": "2024-01-18",
    "description": "Change and growth are natural parts of company evolution. Don’t fear reteaming or reorgs; instead, embrace these changes, actively plan for them, and leverage the five reteaming patterns to create a dynamic and adaptive organizational culture.",
    "guest": "Heidi Helfand",
    "youtube_url": "https://www.youtube.com/watch?v=0wN5wSImUdY"
  },
  {
    "id": 152,
    "type": "podcast",
    "filename": "podcasts/ethan-evans-20.md",
    "title": "Taking control of your career | Ethan Evans (Amazon)",
    "tags": [
      "leadership",
      "career",
      "newsletter",
      "design",
      "b2c",
      "growth"
    ],
    "date": "2024-01-14",
    "description": "The Magic Loop framework: a five-step process to grow your career.",
    "guest": "Ethan Evans 2.0",
    "youtube_url": "https://www.youtube.com/watch?v=GB0P0_nFPTA"
  },
  {
    "id": 153,
    "type": "podcast",
    "filename": "podcasts/sam-schillace.md",
    "title": "How to be more innovative | Sam Schillace (Microsoft deputy CTO, creator of Google Docs)",
    "tags": [
      "design",
      "engineering",
      "ai",
      "b2c",
      "career",
      "newsletter"
    ],
    "date": "2024-01-11",
    "description": "The importance of taking risks, embracing failure, and finding joy in your work.",
    "guest": "Sam Schillace",
    "youtube_url": "https://www.youtube.com/watch?v=IOWDoDpQ7Xg"
  },
  {
    "id": 154,
    "type": "podcast",
    "filename": "podcasts/will-larson.md",
    "title": "The engineering mindset | Will Larson (Carta, Stripe, Uber, Calm, Digg)",
    "tags": [
      "leadership",
      "career",
      "engineering",
      "design",
      "b2b",
      "newsletter"
    ],
    "date": "2024-01-07",
    "description": "The engineering mindset, covering team leadership, career development, and engineering tradeoffs.",
    "guest": "Will Larson",
    "youtube_url": "https://www.youtube.com/watch?v=Z9ftpRhRiJE"
  },
  {
    "id": 155,
    "type": "podcast",
    "filename": "podcasts/judd-antin.md",
    "title": "The UX research reckoning is here | Judd Antin (Airbnb, Meta)",
    "tags": [
      "design",
      "leadership",
      "strategy",
      "career",
      "b2c",
      "growth"
    ],
    "date": "2024-01-04",
    "description": "The UX research reckoning is here, covering product design, team leadership, and strategic decision-making.",
    "guest": "Judd Antin",
    "youtube_url": "https://www.youtube.com/watch?v=L6RKi9ZvkT4"
  },
  {
    "id": 156,
    "type": "podcast",
    "filename": "podcasts/nir-eyal.md",
    "title": "Strategies for becoming less distracted and improving focus | Nir Eyal (author of Indistractable and Hooked)",
    "tags": [
      "strategy",
      "design",
      "b2c",
      "career",
      "growth",
      "podcast"
    ],
    "date": "2023-12-29",
    "description": "Strategies for becoming less distracted and improving focus, covering strategic decision-making, product design, and consumer products.",
    "guest": "Nir Eyal",
    "youtube_url": "https://www.youtube.com/watch?v=WSscIIY609c"
  },
  {
    "id": 157,
    "type": "podcast",
    "filename": "podcasts/sarah-tavel.md",
    "title": "The hierarchy of engagement | Sarah Tavel (Benchmark, Greylock, Pinterest)",
    "tags": [
      "design",
      "b2c",
      "growth",
      "strategy",
      "leadership",
      "startups"
    ],
    "date": "2023-12-27",
    "description": "Sarah’s Hierarchy of Engagement framework for growing a consumer startup.",
    "guest": "Sarah Tavel",
    "youtube_url": "https://www.youtube.com/watch?v=H9g4pzcz6Tk"
  },
  {
    "id": 158,
    "type": "podcast",
    "filename": "podcasts/christian-idiodi.md",
    "title": "The essence of product management | Christian Idiodi (SVPG)",
    "tags": [
      "leadership",
      "product-management",
      "design",
      "b2b",
      "career",
      "growth"
    ],
    "date": "2023-12-21",
    "description": "The essence of product management, covering team leadership, product strategy and execution, and product design.",
    "guest": "Christian Idiodi",
    "youtube_url": "https://www.youtube.com/watch?v=SXYc5RoU3Lg"
  },
  {
    "id": 159,
    "type": "podcast",
    "filename": "podcasts/jason-fried.md",
    "title": "Jason Fried challenges your thinking on fundraising, goals, growth, and more",
    "tags": [
      "design",
      "startups",
      "b2b",
      "growth",
      "leadership",
      "analytics"
    ],
    "date": "2023-12-17",
    "description": "Fundraising, goals, growth, and more, covering product design, startup building, and B2B products.",
    "guest": "Jason Fried",
    "youtube_url": "https://www.youtube.com/watch?v=dAnF0tk0di8"
  },
  {
    "id": 160,
    "type": "podcast",
    "filename": "podcasts/matthew-dicks.md",
    "title": "How to tell better stories | Matthew Dicks (Storyworthy)",
    "tags": [
      "design",
      "strategy",
      "b2b",
      "podcast"
    ],
    "date": "2023-12-15",
    "description": "Tell better stories, covering product design, strategic decision-making, and B2B products.",
    "guest": "Matthew Dicks",
    "youtube_url": "https://www.youtube.com/watch?v=J4wguyJZI6A"
  },
  {
    "id": 161,
    "type": "podcast",
    "filename": "podcasts/failure.md",
    "title": "Failure",
    "tags": [
      "design",
      "leadership",
      "career",
      "podcast",
      "b2c",
      "growth"
    ],
    "date": "2023-12-13",
    "description": "In this special compilation episode, we delve into failure—an overlooked source of wisdom. From freezing onstage in front of thousands of people, to coworkers staging an intervention, to huge product investments that went to zero, we’ve pulled our favorite stories of failure from 100+ podcast episodes.",
    "guest": "Failure",
    "youtube_url": "https://www.youtube.com/watch?v=9euy9gC48lc"
  },
  {
    "id": 162,
    "type": "podcast",
    "filename": "podcasts/kim-scott.md",
    "title": "Radical Candor: From theory to practice with author Kim Scott",
    "tags": [
      "leadership",
      "design",
      "startups",
      "career",
      "podcast",
      "ai"
    ],
    "date": "2023-12-10",
    "description": "From theory to practice with author Kim Scott, covering team leadership, product design, and startup building.",
    "guest": "Kim Scott",
    "youtube_url": "https://www.youtube.com/watch?v=V7tnbx-6Ayc"
  },
  {
    "id": 163,
    "type": "podcast",
    "filename": "podcasts/anuj-rathi.md",
    "title": "The full-stack PM | Anuj Rathi (Swiggy, Jupiter Money, Flipkart)",
    "tags": [
      "design",
      "product-management",
      "b2c",
      "leadership",
      "strategy",
      "b2b"
    ],
    "date": "2023-12-07",
    "description": "The full-stack PM, covering product design, product strategy and execution, and consumer products.",
    "guest": "Anuj Rathi",
    "youtube_url": "https://www.youtube.com/watch?v=1sClhfuCxP0"
  },
  {
    "id": 164,
    "type": "podcast",
    "filename": "podcasts/ebi-atawodi.md",
    "title": "Crafting a compelling product vision | Ebi Atawodi (YouTube, Netflix, Uber)",
    "tags": [
      "strategy",
      "leadership",
      "design",
      "product-management",
      "analytics",
      "go-to-market"
    ],
    "date": "2023-12-03",
    "description": "Crafting a compelling product vision, covering strategic decision-making, team leadership, and product design.",
    "guest": "Ebi Atawodi",
    "youtube_url": "https://www.youtube.com/watch?v=tBPTwUmaxDs"
  },
  {
    "id": 165,
    "type": "podcast",
    "filename": "podcasts/inbal-s.md",
    "title": "The future of AI in software development | Inbal Shani (CPO of GitHub)",
    "tags": [
      "engineering",
      "ai",
      "design",
      "leadership",
      "product-management",
      "growth"
    ],
    "date": "2023-12-01",
    "description": "The future of AI in software development, covering engineering tradeoffs, AI product work, and product design.",
    "guest": "Inbal S",
    "youtube_url": "https://www.youtube.com/watch?v=f10s3rxKaJw"
  },
  {
    "id": 166,
    "type": "podcast",
    "filename": "podcasts/interview-q-compilation.md",
    "title": "Interview Q Compilation",
    "tags": [
      "career",
      "analytics",
      "design",
      "growth",
      "leadership",
      "podcast"
    ],
    "date": "2023-11-29",
    "description": "Because I think humble people will always say \"luck\" in some way, and I always kind of want to know, how self-aware are you, basically, and how curious are you, covering career development, measurement and analysis, and product design.",
    "guest": "Interview Q Compilation",
    "youtube_url": null
  },
  {
    "id": 167,
    "type": "podcast",
    "filename": "podcasts/tom-conrad.md",
    "title": "Billion dollar failures, and billion dollar success | Tom Conrad (Quibi, Pandora, Pets.com, Snap, Zero)",
    "tags": [
      "design",
      "leadership",
      "career",
      "engineering",
      "product-management",
      "startups"
    ],
    "date": "2023-11-26",
    "description": "Billion dollar failures, and billion dollar success, covering product design, team leadership, and career development.",
    "guest": "Tom Conrad",
    "youtube_url": "https://www.youtube.com/watch?v=maK0XD9ARoI"
  },
  {
    "id": 168,
    "type": "podcast",
    "filename": "podcasts/paul-millerd.md",
    "title": "Redefining success, money, and belonging | Paul Millerd (The Pathless Path)",
    "tags": [
      "b2c",
      "design",
      "leadership",
      "b2b",
      "newsletter",
      "startups"
    ],
    "date": "2023-11-19",
    "description": "Redefining success, money, and belonging, covering consumer products, product design, and team leadership.",
    "guest": "Paul Millerd",
    "youtube_url": "https://www.youtube.com/watch?v=yFckwBtiCUM"
  },
  {
    "id": 169,
    "type": "podcast",
    "filename": "podcasts/ramesh-johari.md",
    "title": "Marketplace lessons from Uber, Airbnb, Bumble, and more | Ramesh Johari (Stanford professor, startup advisor)",
    "tags": [
      "strategy",
      "design",
      "analytics",
      "career",
      "startups",
      "leadership"
    ],
    "date": "2023-11-09",
    "description": "Marketplace lessons from Uber, Airbnb, Bumble, and more, covering strategic decision-making, product design, and measurement and analysis.",
    "guest": "Ramesh Johari",
    "youtube_url": "https://www.youtube.com/watch?v=BVzTfsUMaK8"
  },
  {
    "id": 170,
    "type": "podcast",
    "filename": "podcasts/maggie-crowley.md",
    "title": "Mastering product strategy and growing as a PM | Maggie Crowley (Toast, Drift, Tripadvisor)",
    "tags": [
      "strategy",
      "product-management",
      "leadership",
      "design",
      "startups",
      "b2b"
    ],
    "date": "2023-11-05",
    "description": "Mastering product strategy and growing as a PM, covering strategic decision-making, product strategy and execution, and team leadership.",
    "guest": "Maggie Crowley",
    "youtube_url": "https://www.youtube.com/watch?v=4LjddcccYIo"
  },
  {
    "id": 171,
    "type": "podcast",
    "filename": "podcasts/bill-carr.md",
    "title": "Unpacking Amazon’s unique ways of working | Bill Carr (author of Working Backwards)",
    "tags": [
      "leadership",
      "analytics",
      "design",
      "engineering",
      "growth",
      "product-management"
    ],
    "date": "2023-11-02",
    "description": "Unpacking Amazon’s unique ways of working, covering team leadership, measurement and analysis, and product design.",
    "guest": "Bill Carr",
    "youtube_url": "https://www.youtube.com/watch?v=S9WHQa_AJQo"
  },
  {
    "id": 172,
    "type": "podcast",
    "filename": "podcasts/eric-ries.md",
    "title": "Reflections on a movement | Eric Ries (creator of the Lean Startup methodology)",
    "tags": [
      "startups",
      "design",
      "leadership",
      "analytics",
      "career",
      "ai"
    ],
    "date": "2023-10-29",
    "description": "Reflections on a movement, covering startup building, product design, and team leadership.",
    "guest": "Eric Ries",
    "youtube_url": "https://www.youtube.com/watch?v=xzebbzIntFc"
  },
  {
    "id": 173,
    "type": "podcast",
    "filename": "podcasts/paul-adams.md",
    "title": "What AI means for your product strategy | Paul Adams (CPO of Intercom)",
    "tags": [
      "design",
      "ai",
      "b2c",
      "leadership",
      "strategy",
      "career"
    ],
    "date": "2023-10-26",
    "description": "What AI means for your product strategy, covering product design, AI product work, and consumer products.",
    "guest": "Paul Adams",
    "youtube_url": "https://www.youtube.com/watch?v=R-Geamq9xc0"
  },
  {
    "id": 174,
    "type": "podcast",
    "filename": "podcasts/gina-gotthilf.md",
    "title": "Scaling Duolingo, embracing failure, and insight into Latin America’s tech scene | Gina Gotthilf (Latitud, Duolingo)",
    "tags": [
      "startups",
      "design",
      "growth",
      "strategy",
      "b2c",
      "career"
    ],
    "date": "2023-10-19",
    "description": "Scaling Duolingo, embracing failure, and insight into Latin America’s tech scene, covering startup building, product design, and growth systems.",
    "guest": "Gina Gotthilf",
    "youtube_url": "https://www.youtube.com/watch?v=sWClFYdbkRA"
  },
  {
    "id": 175,
    "type": "podcast",
    "filename": "podcasts/katie-dill.md",
    "title": "Building beautiful products with Stripe’s Head of Design | Katie Dill (Stripe, Airbnb, Lyft)",
    "tags": [
      "design",
      "leadership",
      "growth",
      "product-management",
      "b2c",
      "startups"
    ],
    "date": "2023-10-15",
    "description": "Building beautiful products with Stripe’s Head of Design, covering product design, team leadership, and growth systems.",
    "guest": "Katie Dill",
    "youtube_url": "https://www.youtube.com/watch?v=gfEEcssu304"
  },
  {
    "id": 176,
    "type": "podcast",
    "filename": "podcasts/jason-feifer.md",
    "title": "How to get press for your product | Jason Feifer (editor in chief of Entrepreneur magazine)",
    "tags": [
      "startups",
      "newsletter",
      "strategy",
      "b2b",
      "growth",
      "career"
    ],
    "date": "2023-10-12",
    "description": "Getting press for your product, covering startup building, practical product lessons, and strategic decision-making.",
    "guest": "Jason Feifer",
    "youtube_url": "https://www.youtube.com/watch?v=LZLdoAq3R7Y"
  },
  {
    "id": 177,
    "type": "podcast",
    "filename": "podcasts/karri-saarinen.md",
    "title": "Inside Linear: Building with taste, craft, and focus | Karri Saarinen (co-founder, designer, CEO)",
    "tags": [
      "design",
      "leadership",
      "startups",
      "go-to-market",
      "career",
      "product-management"
    ],
    "date": "2023-10-08",
    "description": "Building with taste, craft, and focus, covering product design, team leadership, and startup building.",
    "guest": "Karri Saarinen",
    "youtube_url": "https://www.youtube.com/watch?v=4muxFVZ4XfM"
  },
  {
    "id": 178,
    "type": "podcast",
    "filename": "podcasts/brian-balfour.md",
    "title": "Brian Balfour: 10 lessons on career, growth, and life",
    "tags": [
      "ai",
      "growth",
      "startups",
      "design",
      "b2c",
      "career"
    ],
    "date": "2023-10-05",
    "description": "Career, growth, and life, covering AI product work, growth systems, and startup building.",
    "guest": "Brian Balfour",
    "youtube_url": "https://www.youtube.com/watch?v=ZG3iNH4vvMA"
  },
  {
    "id": 179,
    "type": "podcast",
    "filename": "podcasts/lane-shackleton.md",
    "title": "What sets great teams apart | Lane Shackleton (CPO of Coda)",
    "tags": [
      "design",
      "leadership",
      "product-management",
      "career",
      "ai",
      "engineering"
    ],
    "date": "2023-10-01",
    "description": "What sets great teams apart, covering product design, team leadership, and product strategy and execution.",
    "guest": "Lane Shackleton",
    "youtube_url": "https://www.youtube.com/watch?v=XmgetFMgQZ0"
  },
  {
    "id": 180,
    "type": "podcast",
    "filename": "podcasts/maya-prohovnik.md",
    "title": "Building Anchor, selling to Spotify, and lessons learned | Maya Prohovnik (Spotify’s Head of Podcast Product)",
    "tags": [
      "leadership",
      "design",
      "b2c",
      "podcast",
      "strategy",
      "b2b"
    ],
    "date": "2023-09-28",
    "description": "Building Anchor, selling to Spotify, and lessons learned, covering team leadership, product design, and consumer products.",
    "guest": "Maya Prohovnik",
    "youtube_url": "https://www.youtube.com/watch?v=1gXNOJEWajU"
  },
  {
    "id": 181,
    "type": "podcast",
    "filename": "podcasts/nilan-peiris.md",
    "title": "How to drive word of mouth | Nilan Peiris (CPO of Wise)",
    "tags": [
      "design",
      "strategy",
      "growth",
      "leadership",
      "b2b",
      "go-to-market"
    ],
    "date": "2023-09-24",
    "description": "Driving word of mouth, covering product design, strategic decision-making, and growth systems.",
    "guest": "Nilan Peiris",
    "youtube_url": "https://www.youtube.com/watch?v=xZifSLGOrrw"
  },
  {
    "id": 182,
    "type": "podcast",
    "filename": "podcasts/itamar-gilad.md",
    "title": "Becoming evidence-guided | Itamar Gilad (Gmail, YouTube, Microsoft)",
    "tags": [
      "design",
      "leadership",
      "b2c",
      "career",
      "startups",
      "strategy"
    ],
    "date": "2023-09-21",
    "description": "Becoming evidence-guided, covering product design, team leadership, and consumer products.",
    "guest": "Itamar Gilad",
    "youtube_url": "https://www.youtube.com/watch?v=aJWSn-tz3jQ"
  },
  {
    "id": 183,
    "type": "podcast",
    "filename": "podcasts/christopher-lochhead.md",
    "title": "How to become a category pirate | Christopher Lochhead (author of Play Bigger, Niche Down, Category Pirates, more)",
    "tags": [
      "strategy",
      "design",
      "b2c",
      "startups",
      "leadership",
      "podcast"
    ],
    "date": "2023-09-17",
    "description": "Becoming a category pirate, covering strategic decision-making, product design, and consumer products.",
    "guest": "Christopher Lochhead",
    "youtube_url": "https://www.youtube.com/watch?v=mS4B541m9xg"
  },
  {
    "id": 184,
    "type": "podcast",
    "filename": "podcasts/oji-udezue.md",
    "title": "Picking sharp problems, increasing virality, and unique product frameworks | Oji Udezue (Typeform, Twitter, Calendly, Atlassian)",
    "tags": [
      "b2b",
      "design",
      "growth",
      "startups",
      "strategy",
      "leadership"
    ],
    "date": "2023-09-14",
    "description": "Picking sharp problems, increasing virality, and unique product frameworks, covering B2B products, product design, and growth systems.",
    "guest": "Oji Udezue",
    "youtube_url": "https://www.youtube.com/watch?v=T8TQGbJhv6Q"
  },
  {
    "id": 185,
    "type": "podcast",
    "filename": "podcasts/andy-johns.md",
    "title": "When enough is enough | Andy Johns (ex-FB, Twitter, Quora)",
    "tags": [
      "career",
      "design",
      "startups",
      "growth",
      "podcast",
      "b2c"
    ],
    "date": "2023-09-10",
    "description": "When enough is enough, covering career development, product design, and startup building.",
    "guest": "Andy Johns",
    "youtube_url": "https://www.youtube.com/watch?v=_93m4PriHyc"
  },
  {
    "id": 186,
    "type": "podcast",
    "filename": "podcasts/claire-butler.md",
    "title": "An inside look at Figma’s unique GTM motion | Claire Butler (first GTM hire)",
    "tags": [
      "design",
      "go-to-market",
      "strategy",
      "b2c",
      "growth",
      "startups"
    ],
    "date": "2023-09-07",
    "description": "An inside look at Figma’s unique GTM motion, covering product design, go-to-market execution, and strategic decision-making.",
    "guest": "Claire Butler",
    "youtube_url": "https://www.youtube.com/watch?v=UmirRfy-gzA"
  },
  {
    "id": 187,
    "type": "podcast",
    "filename": "podcasts/tim-holley.md",
    "title": "Inside Etsy’s product, growth, and marketplace evolution | Tim Holley (VP of Product)",
    "tags": [
      "design",
      "b2b",
      "leadership",
      "strategy",
      "go-to-market",
      "growth"
    ],
    "date": "2023-09-03",
    "description": "Inside Etsy’s product, growth, and marketplace evolution, covering product design, B2B products, and team leadership.",
    "guest": "Tim Holley",
    "youtube_url": "https://www.youtube.com/watch?v=n4hRs2FsRug"
  },
  {
    "id": 188,
    "type": "podcast",
    "filename": "podcasts/meltem-kuran.md",
    "title": "An inside look at Deel’s unprecedented growth | Meltem Kuran Berkowitz (Head of Growth)",
    "tags": [
      "growth",
      "leadership",
      "b2c",
      "career",
      "design",
      "startups"
    ],
    "date": "2023-08-27",
    "description": "An inside look at Deel’s unprecedented growth, covering growth systems, team leadership, and consumer products.",
    "guest": "Meltem Kuran",
    "youtube_url": "https://www.youtube.com/watch?v=C1_sM0_ds2c"
  },
  {
    "id": 189,
    "type": "podcast",
    "filename": "podcasts/bob-moesta.md",
    "title": "The ultimate guide to JTBD | Bob Moesta (co-creator of the framework)",
    "tags": [
      "design",
      "b2b",
      "product-management",
      "startups",
      "podcast",
      "ai"
    ],
    "date": "2023-08-24",
    "description": "A guide to JTBD, covering product design, B2B products, and product strategy and execution.",
    "guest": "Bob Moesta",
    "youtube_url": "https://www.youtube.com/watch?v=xQV7HVyAJjc"
  },
  {
    "id": 190,
    "type": "podcast",
    "filename": "podcasts/camille-hearst.md",
    "title": "Monetizing passions, scaling marketplaces, and stories from a creator economy vet | Camille Hearst (Spotify, Patreon, Apple, YouTube)",
    "tags": [
      "b2c",
      "pricing",
      "design",
      "strategy",
      "podcast",
      "leadership"
    ],
    "date": "2023-08-20",
    "description": "Monetizing passions, scaling marketplaces, and stories from a creator economy vet, covering consumer products, pricing decisions, and product design.",
    "guest": "Camille Hearst",
    "youtube_url": null
  },
  {
    "id": 191,
    "type": "podcast",
    "filename": "podcasts/austin-hay.md",
    "title": "The ultimate guide to Martech | Austin Hay (Reforge, Ramp, Runway)",
    "tags": [
      "growth",
      "strategy",
      "design",
      "leadership",
      "b2b",
      "b2c"
    ],
    "date": "2023-08-13",
    "description": "Martech, covering growth systems, strategic decision-making, and product design.",
    "guest": "Austin Hay",
    "youtube_url": "https://www.youtube.com/watch?v=B79p85DHLkU"
  },
  {
    "id": 192,
    "type": "podcast",
    "filename": "podcasts/christopher-miller.md",
    "title": "Relentless curiosity, radical accountability, and HubSpot’s winning growth formula | Christopher Miller (VP of Product, Growth and AI)",
    "tags": [
      "growth",
      "leadership",
      "pricing",
      "product-management",
      "strategy",
      "design"
    ],
    "date": "2023-08-10",
    "description": "Relentless curiosity, radical accountability, and HubSpot’s winning growth formula, covering growth systems, team leadership, and pricing decisions.",
    "guest": "Christopher Miller",
    "youtube_url": "https://www.youtube.com/watch?v=SzKKJwuRFZI"
  },
  {
    "id": 193,
    "type": "podcast",
    "filename": "podcasts/geoff-charles.md",
    "title": "Velocity over everything: How Ramp became the fastest-growing SaaS startup of all time | Geoff Charles (VP of Product)",
    "tags": [
      "leadership",
      "design",
      "strategy",
      "b2b",
      "newsletter",
      "pricing"
    ],
    "date": "2023-08-06",
    "description": "How Ramp became the fastest-growing SaaS startup of all time, covering team leadership, product design, and strategic decision-making.",
    "guest": "Geoff Charles",
    "youtube_url": "https://www.youtube.com/watch?v=aNJDZ_RzTVk"
  },
  {
    "id": 194,
    "type": "podcast",
    "filename": "podcasts/ronny-kohavi.md",
    "title": "The ultimate guide to A/B testing | Ronny Kohavi (Airbnb, Microsoft, Amazon)",
    "tags": [
      "analytics",
      "pricing",
      "design",
      "leadership",
      "go-to-market",
      "engineering"
    ],
    "date": "2023-07-27",
    "description": "A/B testing, covering measurement and analysis, pricing decisions, and product design.",
    "guest": "Ronny Kohavi",
    "youtube_url": "https://www.youtube.com/watch?v=hEzpiDuYFoE"
  },
  {
    "id": 195,
    "type": "podcast",
    "filename": "podcasts/noah-weiss.md",
    "title": "The 10 traits of great PMs, how AI will impact your product, and Slack’s product development process | Noah Weiss (Slack, Foursquare, Google)",
    "tags": [
      "design",
      "startups",
      "leadership",
      "strategy",
      "b2c",
      "b2b"
    ],
    "date": "2023-07-23",
    "description": "The 10 traits of great PMs, how AI will impact your product, and Slack’s product development process, covering product design, startup building, and team leadership.",
    "guest": "Noah Weiss",
    "youtube_url": "https://www.youtube.com/watch?v=XrRlVOWe5GE"
  },
  {
    "id": 196,
    "type": "podcast",
    "filename": "podcasts/hari-srinivasan.md",
    "title": "LinkedIn’s product evolution and the art of building complex systems | Hari Srinivasan (LinkedIn)",
    "tags": [
      "design",
      "strategy",
      "career",
      "leadership",
      "podcast",
      "product-management"
    ],
    "date": "2023-07-16",
    "description": "LinkedIn’s product evolution and the art of building complex systems, covering product design, strategic decision-making, and career development.",
    "guest": "Hari Srinivasan",
    "youtube_url": "https://www.youtube.com/watch?v=ZUwkTs_QWqg"
  },
  {
    "id": 197,
    "type": "podcast",
    "filename": "podcasts/julia-schottenstein.md",
    "title": "M&A, competition, pricing, and investing | Julia Schottenstein (dbt Labs)",
    "tags": [
      "design",
      "strategy",
      "startups",
      "analytics",
      "b2b",
      "engineering"
    ],
    "date": "2023-07-13",
    "description": "M&A, competition, pricing, and investing, covering product design, strategic decision-making, and startup building.",
    "guest": "Julia Schottenstein",
    "youtube_url": "https://www.youtube.com/watch?v=y9hmrMBRPDI"
  },
  {
    "id": 198,
    "type": "podcast",
    "filename": "podcasts/paige-costello.md",
    "title": "How to ask the right questions, project confidence, and win over skeptics | Paige Costello (Asana, Intercom, Intuit)",
    "tags": [
      "leadership",
      "design",
      "analytics",
      "organization",
      "strategy",
      "b2b"
    ],
    "date": "2023-07-09",
    "description": "Ask the right questions, project confidence, and win over skeptics, covering team leadership, product design, and measurement and analysis.",
    "guest": "Paige Costello",
    "youtube_url": "https://www.youtube.com/watch?v=N7S6nSmOsUI"
  },
  {
    "id": 199,
    "type": "podcast",
    "filename": "podcasts/jiaona-zhang.md",
    "title": "Building minimum lovable products, stories from WeWork and Airbnb, and thriving as a PM | Jiaona Zhang (Webflow, WeWork, Airbnb, Dropbox)",
    "tags": [
      "leadership",
      "design",
      "product-management",
      "strategy",
      "startups",
      "career"
    ],
    "date": "2023-07-02",
    "description": "Building minimum lovable products, stories from WeWork and Airbnb, and thriving as a PM, covering team leadership, product design, and product strategy and execution.",
    "guest": "Jiaona Zhang",
    "youtube_url": "https://www.youtube.com/watch?v=gLFZNzeylCc"
  },
  {
    "id": 200,
    "type": "podcast",
    "filename": "podcasts/sri-batchu.md",
    "title": "Lessons from scaling Ramp | Sri Batchu (Ramp, Instacart, Opendoor)",
    "tags": [
      "leadership",
      "growth",
      "b2b",
      "startups",
      "strategy",
      "design"
    ],
    "date": "2023-06-25",
    "description": "Lessons from scaling Ramp, covering team leadership, growth systems, and B2B products.",
    "guest": "Sri Batchu",
    "youtube_url": "https://www.youtube.com/watch?v=RcYCU5UAZOk"
  },
  {
    "id": 201,
    "type": "podcast",
    "filename": "podcasts/melissa-tan.md",
    "title": "Building high-performing teams | Melissa Tan (Webflow, Dropbox, Canva)",
    "tags": [
      "growth",
      "leadership",
      "b2b",
      "design",
      "strategy",
      "career"
    ],
    "date": "2023-06-18",
    "description": "Building high-performing teams, covering growth systems, team leadership, and B2B products.",
    "guest": "Melissa Tan",
    "youtube_url": "https://www.youtube.com/watch?v=DoEfXj1b_ko"
  },
  {
    "id": 202,
    "type": "podcast",
    "filename": "podcasts/luc-levesque.md",
    "title": "Leveraging growth advisors, hiring well, mastering SEO, and honing your craft | Luc Levesque (Shopify, Meta, TripAdvisor)",
    "tags": [
      "leadership",
      "design",
      "strategy",
      "career",
      "growth",
      "podcast"
    ],
    "date": "2023-06-15",
    "description": "Leveraging growth advisors, hiring well, mastering SEO, and honing your craft, covering team leadership, product design, and strategic decision-making.",
    "guest": "Luc Levesque",
    "youtube_url": "https://www.youtube.com/watch?v=Xf_ZXIGCQb0"
  },
  {
    "id": 203,
    "type": "podcast",
    "filename": "podcasts/nikhyl-singhal.md",
    "title": "Building a long and meaningful career | Nikhyl Singhal (Meta, Google)",
    "tags": [
      "career",
      "design",
      "leadership",
      "growth",
      "b2c",
      "product-management"
    ],
    "date": "2023-06-11",
    "description": "Building a long and meaningful career, covering career development, product design, and team leadership.",
    "guest": "Nikhyl Singhal",
    "youtube_url": "https://www.youtube.com/watch?v=U_WQuUIYnJg"
  },
  {
    "id": 204,
    "type": "podcast",
    "filename": "podcasts/jeremy-henrickson.md",
    "title": "Moving fast and navigating uncertainty | Jeremy Henrickson (Rippling, Coinbase)",
    "tags": [
      "design",
      "leadership",
      "growth",
      "strategy",
      "career",
      "engineering"
    ],
    "date": "2023-06-04",
    "description": "Moving fast and navigating uncertainty, covering product design, team leadership, and growth systems.",
    "guest": "Jeremy Henrickson",
    "youtube_url": "https://www.youtube.com/watch?v=CsruQYKISYI"
  },
  {
    "id": 205,
    "type": "podcast",
    "filename": "podcasts/nancy-duarte.md",
    "title": "Storytelling with Nancy Duarte: How to craft compelling presentations and tell a story that sticks",
    "tags": [
      "design",
      "leadership",
      "b2b",
      "startups",
      "ai",
      "b2c"
    ],
    "date": "2023-06-01",
    "description": "Craft compelling presentations and tell a story that sticks, covering product design, team leadership, and B2B products.",
    "guest": "Nancy Duarte",
    "youtube_url": "https://www.youtube.com/watch?v=-kHkWgjGD7U"
  },
  {
    "id": 206,
    "type": "podcast",
    "filename": "podcasts/andy-raskin-.md",
    "title": "The power of strategic narrative | Andy Raskin",
    "tags": [
      "b2b",
      "strategy",
      "design",
      "leadership",
      "career",
      "podcast"
    ],
    "date": "2023-05-28",
    "description": "The power of strategic narrative, covering B2B products, strategic decision-making, and product design.",
    "guest": "Andy Raskin",
    "youtube_url": "https://www.youtube.com/watch?v=dkVJnaxDlXE"
  },
  {
    "id": 207,
    "type": "podcast",
    "filename": "podcasts/gustav-soderstrom.md",
    "title": "Gustav Söderström",
    "tags": [
      "design",
      "leadership",
      "strategy",
      "ai",
      "career",
      "podcast"
    ],
    "date": "2023-05-21",
    "description": "Next question, what's something relatively minor you've changed in your product development process that's had a tremendous impact on your team's ability to execute, covering product design, team leadership, and strategic decision-making.",
    "guest": "Gustav Söderström",
    "youtube_url": null
  },
  {
    "id": 208,
    "type": "podcast",
    "filename": "podcasts/scott-belsky.md",
    "title": "Lessons on building product sense, navigating AI, optimizing the first mile, and making it through the messy middle | Scott Belsky (Adobe, Behance)",
    "tags": [
      "design",
      "growth",
      "strategy",
      "leadership",
      "b2b",
      "b2c"
    ],
    "date": "2023-05-18",
    "description": "Building product sense, navigating AI, optimizing the first mile, and making it through the messy middle, covering product design, growth systems, and strategic decision-making.",
    "guest": "Scott Belsky",
    "youtube_url": "https://www.youtube.com/watch?v=HCKosdV1J-8"
  },
  {
    "id": 209,
    "type": "podcast",
    "filename": "podcasts/ayo-omojola.md",
    "title": "Frameworks for product differentiation, team building, and thinking from first principles | Ayo Omojola (Carbon Health, Cash App)",
    "tags": [
      "design",
      "b2c",
      "leadership",
      "podcast",
      "startups",
      "strategy"
    ],
    "date": "2023-05-14",
    "description": "Frameworks for product differentiation, team building, and thinking from first principles, covering product design, consumer products, and team leadership.",
    "guest": "Ayo Omojola",
    "youtube_url": "https://www.youtube.com/watch?v=EW6K8ZOWoIs"
  },
  {
    "id": 210,
    "type": "podcast",
    "filename": "podcasts/jonathan-becker.md",
    "title": "Mastering paid growth | Jonathan Becker (Thrive Digital)",
    "tags": [
      "strategy",
      "growth",
      "design",
      "ai",
      "b2c",
      "engineering"
    ],
    "date": "2023-05-07",
    "description": "Mastering paid growth, covering strategic decision-making, growth systems, and product design.",
    "guest": "Jonathan Becker",
    "youtube_url": "https://www.youtube.com/watch?v=mmxTeS0AVMo"
  },
  {
    "id": 211,
    "type": "podcast",
    "filename": "podcasts/david-singleton.md",
    "title": "Building a culture of excellence | David Singleton (CTO of Stripe)",
    "tags": [
      "design",
      "leadership",
      "career",
      "engineering",
      "podcast",
      "product-management"
    ],
    "date": "2023-05-04",
    "description": "Building a culture of excellence, covering product design, team leadership, and career development.",
    "guest": "David Singleton",
    "youtube_url": "https://www.youtube.com/watch?v=F0_IKKY3HCk"
  },
  {
    "id": 212,
    "type": "podcast",
    "filename": "podcasts/carilu-dietrich.md",
    "title": "How to achieve hypergrowth in your business and career | Carilu Dietrich (Atlassian, Miro, Segment, 1Password)",
    "tags": [
      "career",
      "growth",
      "leadership",
      "design",
      "strategy",
      "pricing"
    ],
    "date": "2023-04-30",
    "description": "Achieve hypergrowth in your business and career, covering career development, growth systems, and team leadership.",
    "guest": "Carilu Dietrich",
    "youtube_url": "https://www.youtube.com/watch?v=Pm7QSWDIEUc"
  },
  {
    "id": 213,
    "type": "podcast",
    "filename": "podcasts/varun-parmar.md",
    "title": "An inside look at how Miro builds product: Lessons on outmaneuvering competitors, team structure, product quality, and moving fast | Varun Parmar (CPO of Miro)",
    "tags": [
      "design",
      "leadership",
      "strategy",
      "engineering",
      "b2c",
      "organization"
    ],
    "date": "2023-04-20",
    "description": "Outmaneuvering competitors, team structure, product quality, and moving fast, covering product design, team leadership, and strategic decision-making.",
    "guest": "Varun Parmar",
    "youtube_url": "https://www.youtube.com/watch?v=furNg4njlsg"
  },
  {
    "id": 214,
    "type": "podcast",
    "filename": "podcasts/ada-chen-rekhi.md",
    "title": "How to make better decisions and build a joyful career | Ada Chen Rekhi (Notejoy, LinkedIn, SurveyMonkey)",
    "tags": [
      "design",
      "strategy",
      "career",
      "leadership",
      "startups",
      "growth"
    ],
    "date": "2023-04-16",
    "description": "Making better decisions and building a joyful career, covering product design, strategic decision-making, and career development.",
    "guest": "Ada Chen Rekhi",
    "youtube_url": "https://www.youtube.com/watch?v=N64vIY2nJQo"
  },
  {
    "id": 215,
    "type": "podcast",
    "filename": "podcasts/laura-modi.md",
    "title": "How to build a cult-like brand | Laura Modi (Bobbie)",
    "tags": [
      "design",
      "leadership",
      "strategy",
      "career",
      "growth",
      "b2c"
    ],
    "date": "2023-04-13",
    "description": "Building a cult-like brand, covering product design, team leadership, and strategic decision-making.",
    "guest": "Laura Modi",
    "youtube_url": "https://www.youtube.com/watch?v=hzBo5c7p7VU"
  },
  {
    "id": 216,
    "type": "podcast",
    "filename": "podcasts/shweta-shriva.md",
    "title": "Product lessons from Waymo | Shweta Shrivastava (Waymo, Amazon, Cisco)",
    "tags": [
      "design",
      "product-management",
      "leadership",
      "podcast",
      "b2b",
      "b2c"
    ],
    "date": "2023-04-09",
    "description": "Product lessons from Waymo, covering product design, product strategy and execution, and team leadership.",
    "guest": "Shweta Shriva",
    "youtube_url": "https://www.youtube.com/watch?v=VtNmAjNF3Tc"
  },
  {
    "id": 217,
    "type": "podcast",
    "filename": "podcasts/nikita-miller.md",
    "title": "Driving alignment and urgency within teams, work-life balance, and the changing PM landscape | Nikita Miller (The Knot, Trello)",
    "tags": [
      "leadership",
      "design",
      "organization",
      "product-management",
      "strategy",
      "growth"
    ],
    "date": "2023-04-06",
    "description": "Driving alignment and urgency within teams, work-life balance, and the changing PM landscape, covering team leadership, product design, and cross-functional alignment.",
    "guest": "Nikita Miller",
    "youtube_url": "https://www.youtube.com/watch?v=4PhfAbRQpbI"
  },
  {
    "id": 218,
    "type": "podcast",
    "filename": "podcasts/hila-qu.md",
    "title": "The ultimate guide to adding a PLG motion | Hila Qu (Reforge, GitLab)",
    "tags": [
      "b2b",
      "growth",
      "leadership",
      "design",
      "podcast",
      "b2c"
    ],
    "date": "2023-04-02",
    "description": "Adding a PLG motion, covering B2B products, growth systems, and team leadership.",
    "guest": "Hila Qu",
    "youtube_url": "https://www.youtube.com/watch?v=7l1fIxk7SnA"
  },
  {
    "id": 219,
    "type": "podcast",
    "filename": "podcasts/kevin-aluwi.md",
    "title": "Taxi mafias, cash vaults, and 100% MoM growth: The story behind Southeast Asia’s biggest startup | Kevin Aluwi (Gojek)",
    "tags": [
      "design",
      "growth",
      "startups",
      "b2c",
      "go-to-market",
      "leadership"
    ],
    "date": "2023-03-26",
    "description": "The story behind Southeast Asia’s biggest startup, covering product design, growth systems, and startup building.",
    "guest": "Kevin Aluwi",
    "youtube_url": "https://www.youtube.com/watch?v=HVB-dqjUJks"
  },
  {
    "id": 220,
    "type": "podcast",
    "filename": "podcasts/lulu-cheng-meservey.md",
    "title": "Navigating comms and PR | Lulu Cheng Meservey (Substack, Activision Blizzard)",
    "tags": [
      "design",
      "startups",
      "strategy",
      "go-to-market",
      "podcast",
      "career"
    ],
    "date": "2023-03-23",
    "description": "Navigating comms and PR, covering product design, startup building, and strategic decision-making.",
    "guest": "Lulu Cheng Meservey",
    "youtube_url": "https://www.youtube.com/watch?v=LTSEOeKV_Hs"
  },
  {
    "id": 221,
    "type": "podcast",
    "filename": "podcasts/josh-miller.md",
    "title": "Competing with giants: An inside look at how The Browser Company builds product | Josh Miller (CEO)",
    "tags": [
      "growth",
      "design",
      "analytics",
      "leadership",
      "career",
      "product-management"
    ],
    "date": "2023-03-19",
    "description": "Josh Miller is the CEO and co-founder of The Browser Company, where he helped build Arc, my go-to web browser. In today’s episode, we get an inside look at the unique structure and values of The Browser Company and how their company culture has helped them land some of the best talent in tech.",
    "guest": "Josh Miller",
    "youtube_url": "https://www.youtube.com/watch?v=AZpo5785v8A"
  },
  {
    "id": 222,
    "type": "podcast",
    "filename": "podcasts/christina-wodtke.md",
    "title": "The ultimate guide to OKRs | Christina Wodtke (Stanford)",
    "tags": [
      "design",
      "strategy",
      "newsletter",
      "product-management",
      "growth",
      "leadership"
    ],
    "date": "2023-03-16",
    "description": "OKRs, covering product design, strategic decision-making, and practical product lessons.",
    "guest": "Christina Wodtke",
    "youtube_url": "https://www.youtube.com/watch?v=kvkL18Ue0dE"
  },
  {
    "id": 223,
    "type": "podcast",
    "filename": "podcasts/sriram-and-aarthi.md",
    "title": "Hot takes and techno-optimism from tech’s top power couple | Sriram and Aarthi",
    "tags": [
      "growth",
      "b2c",
      "design",
      "startups",
      "strategy",
      "career"
    ],
    "date": "2023-03-12",
    "description": "Hot takes and techno-optimism from tech’s top power couple, covering growth systems, consumer products, and product design.",
    "guest": "Sriram and Aarthi",
    "youtube_url": "https://www.youtube.com/watch?v=HsD5ycT_umw"
  },
  {
    "id": 224,
    "type": "podcast",
    "filename": "podcasts/laura-schaffer.md",
    "title": "Career frameworks, A/B testing mistakes, counterintuitive onboarding tips, selling to developers | Laura Schaffer (VP of Growth at Amplitude)",
    "tags": [
      "leadership",
      "growth",
      "career",
      "design",
      "engineering",
      "strategy"
    ],
    "date": "2023-03-09",
    "description": "Career frameworks, A/B testing mistakes, counterintuitive onboarding tips, selling to developers, covering team leadership, growth systems, and career development.",
    "guest": "Laura Schaffer",
    "youtube_url": "https://www.youtube.com/watch?v=UMAmj1bciww"
  },
  {
    "id": 225,
    "type": "podcast",
    "filename": "podcasts/claire-hughes-johnson.md",
    "title": "Lessons from scaling Stripe | Claire Hughes Johnson (former COO of Stripe)",
    "tags": [
      "design",
      "leadership",
      "career",
      "b2b",
      "newsletter",
      "startups"
    ],
    "date": "2023-03-05",
    "description": "Lessons from scaling Stripe, covering product design, team leadership, and career development.",
    "guest": "Claire Hughes Johnson",
    "youtube_url": "https://www.youtube.com/watch?v=Mv0o9o4MRh0"
  },
  {
    "id": 226,
    "type": "podcast",
    "filename": "podcasts/gustaf-alstromer.md",
    "title": "Gustaf Alstromer",
    "tags": [
      "startups",
      "career",
      "design",
      "leadership",
      "strategy",
      "growth"
    ],
    "date": "2023-03-02",
    "description": "It's sort of like when you ask a founder the question, \"How are things going?\", it's so emotional for them to answer that question because it's never going well, right, covering startup building, career development, and product design.",
    "guest": "Gustaf Alstromer",
    "youtube_url": null
  },
  {
    "id": 227,
    "type": "podcast",
    "filename": "podcasts/annie-pearl.md",
    "title": "Behind the scenes of Calendly’s rapid growth | Annie Pearl (CPO)",
    "tags": [
      "product-management",
      "leadership",
      "design",
      "strategy",
      "growth",
      "career"
    ],
    "date": "2023-02-26",
    "description": "Behind the scenes of Calendly’s rapid growth, covering product strategy and execution, team leadership, and product design.",
    "guest": "Annie Pearl",
    "youtube_url": "https://www.youtube.com/watch?v=-tUIGpgmsZw"
  },
  {
    "id": 228,
    "type": "podcast",
    "filename": "podcasts/upasna-gautam.md",
    "title": "An inside look at how CNN builds product | Upasna Gautam",
    "tags": [
      "design",
      "leadership",
      "product-management",
      "podcast",
      "b2b",
      "organization"
    ],
    "date": "2023-02-23",
    "description": "An inside look at how CNN builds product, covering product design, team leadership, and product strategy and execution.",
    "guest": "Upasna Gautam",
    "youtube_url": "https://www.youtube.com/watch?v=gRiCzfFEd7c"
  },
  {
    "id": 229,
    "type": "podcast",
    "filename": "podcasts/patrick-campbell.md",
    "title": "10 lessons on bootstrapping a $200m business | Patrick Campbell (ProfitWell)",
    "tags": [
      "leadership",
      "design",
      "startups",
      "career",
      "organization",
      "pricing"
    ],
    "date": "2023-02-19",
    "description": "Bootstrapping a $200m business, covering team leadership, product design, and startup building.",
    "guest": "Patrick Campbell",
    "youtube_url": "https://www.youtube.com/watch?v=FjLSCrSg5QY"
  },
  {
    "id": 230,
    "type": "podcast",
    "filename": "podcasts/christine-itwaru.md",
    "title": "Understanding the role of product ops | Christine Itwaru (Pendo)",
    "tags": [
      "leadership",
      "product-management",
      "growth",
      "strategy",
      "b2b",
      "design"
    ],
    "date": "2023-02-16",
    "description": "Understanding the role of product ops, covering team leadership, product strategy and execution, and growth systems.",
    "guest": "Christine Itwaru",
    "youtube_url": "https://www.youtube.com/watch?v=tGS-NhxrN_Q"
  },
  {
    "id": 231,
    "type": "podcast",
    "filename": "podcasts/lauryn-isford.md",
    "title": "Mastering onboarding | Lauryn Isford (Head of Growth at Airtable)",
    "tags": [
      "growth",
      "analytics",
      "leadership",
      "design",
      "b2c",
      "b2b"
    ],
    "date": "2023-02-12",
    "description": "Mastering onboarding, covering growth systems, measurement and analysis, and team leadership.",
    "guest": "Lauryn Isford",
    "youtube_url": "https://www.youtube.com/watch?v=dLku0AiGPVA"
  },
  {
    "id": 232,
    "type": "podcast",
    "filename": "podcasts/keith-yandell.md",
    "title": "Leading with empathy | Keith Yandell (DoorDash, Uber)",
    "tags": [
      "leadership",
      "startups",
      "career",
      "design",
      "podcast",
      "engineering"
    ],
    "date": "2023-02-09",
    "description": "Leading with empathy, covering team leadership, startup building, and career development.",
    "guest": "Keith Yandell",
    "youtube_url": "https://www.youtube.com/watch?v=tlCK9TuALtk"
  },
  {
    "id": 233,
    "type": "podcast",
    "filename": "podcasts/marily-nika.md",
    "title": "AI and product management | Marily Nika (Meta, Google)",
    "tags": [
      "ai",
      "design",
      "analytics",
      "leadership",
      "product-management",
      "growth"
    ],
    "date": "2023-02-05",
    "description": "AI and product management, covering AI product work, product design, and measurement and analysis.",
    "guest": "Marily Nika",
    "youtube_url": "https://www.youtube.com/watch?v=qNPPoj1qUG0"
  },
  {
    "id": 234,
    "type": "podcast",
    "filename": "podcasts/eeke-de-milliano.md",
    "title": "How to foster innovation and big thinking | Eeke de Milliano (Retool, Stripe)",
    "tags": [
      "design",
      "leadership",
      "product-management",
      "strategy",
      "b2b",
      "engineering"
    ],
    "date": "2023-02-02",
    "description": "Foster innovation and big thinking, covering product design, team leadership, and product strategy and execution.",
    "guest": "Eeke de Milliano",
    "youtube_url": "https://www.youtube.com/watch?v=2ezz4KJe7kA"
  },
  {
    "id": 235,
    "type": "podcast",
    "filename": "podcasts/zoelle-egner.md",
    "title": "Lessons from Airtable’s unconventional growth strategy | Zoelle Egner",
    "tags": [
      "design",
      "strategy",
      "startups",
      "b2b",
      "growth",
      "leadership"
    ],
    "date": "2023-01-29",
    "description": "Lessons from Airtable’s unconventional growth strategy, covering product design, strategic decision-making, and startup building.",
    "guest": "Zoelle Egner",
    "youtube_url": "https://www.youtube.com/watch?v=0P8LMyeYl1U"
  },
  {
    "id": 236,
    "type": "podcast",
    "filename": "podcasts/vijay.md",
    "title": "An inside look at Mixpanel’s product journey | Vijay Iyengar (Head of Product)",
    "tags": [
      "design",
      "leadership",
      "analytics",
      "engineering",
      "growth",
      "podcast"
    ],
    "date": "2023-01-26",
    "description": "An inside look at Mixpanel’s product journey, covering product design, team leadership, and measurement and analysis.",
    "guest": "Vijay",
    "youtube_url": "https://www.youtube.com/watch?v=t-2oXtZrlEc"
  },
  {
    "id": 237,
    "type": "podcast",
    "filename": "podcasts/john-cutler.md",
    "title": "What differentiates the highest-performing product teams | John Cutler (Amplitude, The Beautiful Mess)",
    "tags": [
      "leadership",
      "strategy",
      "growth",
      "podcast",
      "career",
      "design"
    ],
    "date": "2023-01-15",
    "description": "What differentiates the highest-performing product teams, covering team leadership, strategic decision-making, and growth systems.",
    "guest": "John Cutler",
    "youtube_url": "https://www.youtube.com/watch?v=Y4PdUItyXUk"
  },
  {
    "id": 238,
    "type": "podcast",
    "filename": "podcasts/naomi-ionita.md",
    "title": "How to price your product | Naomi Ionita (Menlo Ventures)",
    "tags": [
      "design",
      "pricing",
      "growth",
      "startups",
      "leadership",
      "b2b"
    ],
    "date": "2023-01-12",
    "description": "Price your product, covering product design, pricing decisions, and growth systems.",
    "guest": "Naomi Ionita",
    "youtube_url": "https://www.youtube.com/watch?v=xvQadImf568"
  },
  {
    "id": 239,
    "type": "podcast",
    "filename": "podcasts/yuhki-yamashata.md",
    "title": "Yuhki Yamashata",
    "tags": [
      "design",
      "leadership",
      "product-management",
      "career",
      "strategy",
      "growth"
    ],
    "date": "2023-01-08",
    "description": "And so it's our quick way of being like, we're doing a product review, we on a pulse check, we drop it in and we're like, how are people feeling aligned, not aligned, covering product design, team leadership, and product strategy and execution.",
    "guest": "Yuhki Yamashata",
    "youtube_url": null
  },
  {
    "id": 240,
    "type": "podcast",
    "filename": "podcasts/jules-walter.md",
    "title": "Leveraging mentors to uplevel your career | Jules Walter (YouTube, Slack)",
    "tags": [
      "career",
      "product-management",
      "growth",
      "leadership",
      "design",
      "startups"
    ],
    "date": "2023-01-05",
    "description": "Leveraging mentors to uplevel your career, covering career development, product strategy and execution, and growth systems.",
    "guest": "Jules Walter",
    "youtube_url": "https://www.youtube.com/watch?v=zn2JNbZwf00"
  },
  {
    "id": 241,
    "type": "podcast",
    "filename": "podcasts/eoy-review.md",
    "title": "EOY Review",
    "tags": [
      "design",
      "go-to-market",
      "strategy",
      "analytics",
      "podcast",
      "b2b"
    ],
    "date": "2022-12-29",
    "description": "I'd love to hear your broad overview of why do most analytics efforts fail and then how do teams avoid this, maybe what are two to three things they can do, covering product design, go-to-market execution, and strategic decision-making.",
    "guest": "EOY Review",
    "youtube_url": null
  },
  {
    "id": 242,
    "type": "podcast",
    "filename": "podcasts/chris-hutchins.md",
    "title": "Launching and growing a podcast | Chris Hutchins (All the Hacks, Wealthfront, Google)",
    "tags": [
      "design",
      "startups",
      "strategy",
      "product-management",
      "b2b",
      "podcast"
    ],
    "date": "2022-12-18",
    "description": "Launching and growing a podcast, covering product design, startup building, and strategic decision-making.",
    "guest": "Chris Hutchins",
    "youtube_url": "https://www.youtube.com/watch?v=kc1XhB4k0Eg"
  },
  {
    "id": 243,
    "type": "podcast",
    "filename": "podcasts/pete-kazanjy.md",
    "title": "Founder-led sales | Pete Kazanjy (Founding Sales, Atrium)",
    "tags": [
      "b2b",
      "startups",
      "design",
      "leadership",
      "strategy",
      "analytics"
    ],
    "date": "2022-12-15",
    "description": "Founder-led sales, covering B2B products, startup building, and product design.",
    "guest": "Pete Kazanjy",
    "youtube_url": "https://www.youtube.com/watch?v=cZd5234Eem0"
  },
  {
    "id": 244,
    "type": "podcast",
    "filename": "podcasts/camille-ricketts.md",
    "title": "How Notion leveraged community to build a $10B business | Camille Ricketts (Notion, First Round Capital)",
    "tags": [
      "design",
      "b2c",
      "strategy",
      "growth",
      "leadership",
      "career"
    ],
    "date": "2022-12-11",
    "description": "How Notion leveraged community to build a $10B business, covering product design, consumer products, and strategic decision-making.",
    "guest": "Camille Ricketts",
    "youtube_url": "https://www.youtube.com/watch?v=bY5KC9Gguz8"
  },
  {
    "id": 245,
    "type": "podcast",
    "filename": "podcasts/sahil-mansuri.md",
    "title": "How to hit revenue targets in a recession | Sahil Mansuri (Bravado)",
    "tags": [
      "b2b",
      "leadership",
      "strategy",
      "b2c",
      "design",
      "startups"
    ],
    "date": "2022-12-04",
    "description": "Hit revenue targets in a recession, covering B2B products, team leadership, and strategic decision-making.",
    "guest": "Sahil Mansuri",
    "youtube_url": "https://www.youtube.com/watch?v=pYZ0S7a72po"
  },
  {
    "id": 246,
    "type": "podcast",
    "filename": "podcasts/petra-wille.md",
    "title": "How to be the best coach to product people | Petra Wille (Strong Product People)",
    "tags": [
      "leadership",
      "product-management",
      "career",
      "design",
      "strategy",
      "b2c"
    ],
    "date": "2022-11-27",
    "description": "Be the best coach to product people, covering team leadership, product strategy and execution, and career development.",
    "guest": "Petra Wille",
    "youtube_url": "https://www.youtube.com/watch?v=4n3ybRqU5mU"
  },
  {
    "id": 247,
    "type": "podcast",
    "filename": "podcasts/ian-mcallister.md",
    "title": "What it takes to become a top 1% PM | Ian McAllister (Uber, Amazon, Airbnb)",
    "tags": [
      "leadership",
      "product-management",
      "career",
      "design",
      "engineering",
      "startups"
    ],
    "date": "2022-11-20",
    "description": "What it takes to become a top 1% PM, covering team leadership, product strategy and execution, and career development.",
    "guest": "Ian McAllister",
    "youtube_url": "https://www.youtube.com/watch?v=7gaPPrAd7nc"
  },
  {
    "id": 248,
    "type": "podcast",
    "filename": "podcasts/gergely.md",
    "title": "Leaving big tech to build the #1 technology newsletter | Gergely Orosz (The Pragmatic Engineer)",
    "tags": [
      "newsletter",
      "design",
      "leadership",
      "startups",
      "career",
      "growth"
    ],
    "date": "2022-11-17",
    "description": "Leaving big tech to build the #1 technology newsletter, covering practical product lessons, product design, and team leadership.",
    "guest": "Gergely",
    "youtube_url": "https://www.youtube.com/watch?v=CtB0O0M7YS0"
  },
  {
    "id": 249,
    "type": "podcast",
    "filename": "podcasts/alex-hardimen.md",
    "title": "Alex Hardimen",
    "tags": [
      "design",
      "career",
      "leadership",
      "b2c",
      "product-management",
      "go-to-market"
    ],
    "date": "2022-11-13",
    "description": "Is it our homes?\" You have to help people understand, \"Okay, when we talk product, we mean the website and app.\" What do you think of the product at The New York Times, covering product design, career development, and team leadership.",
    "guest": "Alex Hardimen",
    "youtube_url": null
  },
  {
    "id": 250,
    "type": "podcast",
    "filename": "podcasts/matt-mochary.md",
    "title": "How to fire people with grace, work through fear, and nurture innovation | Matt Mochary (CEO coach)",
    "tags": [
      "leadership",
      "startups",
      "b2c",
      "podcast",
      "career",
      "design"
    ],
    "date": "2022-11-10",
    "description": "Fire people with grace, work through fear, and nurture innovation, covering team leadership, startup building, and consumer products.",
    "guest": "Matt Mochary",
    "youtube_url": "https://www.youtube.com/watch?v=bCel0X2Ta7U"
  },
  {
    "id": 251,
    "type": "podcast",
    "filename": "podcasts/ben-williams.md",
    "title": "How Snyk built a product-led growth juggernaut | Ben Williams (VP of Product at Snyk)",
    "tags": [
      "engineering",
      "design",
      "growth",
      "b2c",
      "strategy",
      "leadership"
    ],
    "date": "2022-11-06",
    "description": "How Snyk built a product-led growth juggernaut, covering engineering tradeoffs, product design, and growth systems.",
    "guest": "Ben Williams",
    "youtube_url": "https://www.youtube.com/watch?v=21sFTZzIfUk"
  },
  {
    "id": 252,
    "type": "podcast",
    "filename": "podcasts/lauren-ipsen.md",
    "title": "Lessons from one of the world’s top executive recruiters | Lauren Ipsen (Daversa Partners, General Catalyst)",
    "tags": [
      "design",
      "leadership",
      "career",
      "startups",
      "strategy",
      "podcast"
    ],
    "date": "2022-11-03",
    "description": "Lessons from one of the world’s top executive recruiters, covering product design, team leadership, and career development.",
    "guest": "Lauren Ipsen",
    "youtube_url": "https://www.youtube.com/watch?v=v3pofqabzhs"
  },
  {
    "id": 253,
    "type": "podcast",
    "filename": "podcasts/sachin-monga.md",
    "title": "Building Substack | Sachin Monga (Substack, Facebook)",
    "tags": [
      "leadership",
      "design",
      "growth",
      "startups",
      "product-management",
      "strategy"
    ],
    "date": "2022-10-30",
    "description": "Building Substack, covering team leadership, product design, and growth systems.",
    "guest": "Sachin Monga",
    "youtube_url": "https://www.youtube.com/watch?v=zKP2HrMc23s"
  },
  {
    "id": 254,
    "type": "podcast",
    "filename": "podcasts/barbra-gago.md",
    "title": "Category creation and brand building | Barbra Gago (Pando, Miro, Greenhouse, Culture Amp)",
    "tags": [
      "design",
      "strategy",
      "leadership",
      "b2b",
      "engineering",
      "growth"
    ],
    "date": "2022-10-27",
    "description": "Category creation and brand building, covering product design, strategic decision-making, and team leadership.",
    "guest": "Barbra Gago",
    "youtube_url": "https://www.youtube.com/watch?v=gCEaUfZUuI0"
  },
  {
    "id": 255,
    "type": "podcast",
    "filename": "podcasts/fareed-mosavat.md",
    "title": "How to build trust and grow as a product leader | Fareed Mosavat (Reforge, Slack, Instacart, Zynga, Pixar)",
    "tags": [
      "leadership",
      "design",
      "growth",
      "analytics",
      "career",
      "engineering"
    ],
    "date": "2022-10-23",
    "description": "Building trust and grow as a product leader, covering team leadership, product design, and growth systems.",
    "guest": "Fareed Mosavat",
    "youtube_url": "https://www.youtube.com/watch?v=oo0jSep7pzc"
  },
  {
    "id": 256,
    "type": "podcast",
    "filename": "podcasts/adriel-frederick.md",
    "title": "Humanizing product development | Adriel Frederick (Reddit, Lyft, Facebook)",
    "tags": [
      "leadership",
      "design",
      "growth",
      "product-management",
      "strategy",
      "podcast"
    ],
    "date": "2022-10-20",
    "description": "Humanizing product development, covering team leadership, product design, and growth systems.",
    "guest": "Adriel Frederick",
    "youtube_url": "https://www.youtube.com/watch?v=4avaVEAa64Y"
  },
  {
    "id": 257,
    "type": "podcast",
    "filename": "podcasts/janna-bastow.md",
    "title": "Building better product roadmaps | Janna Bastow (Mind the Product, ProdPad)",
    "tags": [
      "design",
      "b2c",
      "product-management",
      "leadership",
      "startups",
      "strategy"
    ],
    "date": "2022-10-16",
    "description": "Janna Bastow is a former product manager, and currently the CEO and co-founder of ProdPad. She also co-founded Mind the Product, a community for PMs, which has grown to 300,000 members across the world.",
    "guest": "Janna Bastow",
    "youtube_url": "https://www.youtube.com/watch?v=W3cvqPCGcck"
  },
  {
    "id": 258,
    "type": "podcast",
    "filename": "podcasts/adam-fishman.md",
    "title": "How to build a high-performing growth team | Adam Fishman (Patreon, Lyft, Imperfect Foods)",
    "tags": [
      "growth",
      "leadership",
      "career",
      "startups",
      "strategy",
      "design"
    ],
    "date": "2022-10-13",
    "description": "Building a high-performing growth team, covering growth systems, team leadership, and career development.",
    "guest": "Adam Fishman",
    "youtube_url": "https://www.youtube.com/watch?v=wP8YyWH524A"
  },
  {
    "id": 259,
    "type": "podcast",
    "filename": "podcasts/dan-hockenmaier.md",
    "title": "Developing a growth model + marketplace growth strategy | Dan Hockenmaier (Faire, Thumbtack, Reforge)",
    "tags": [
      "growth",
      "design",
      "strategy",
      "b2b",
      "analytics",
      "leadership"
    ],
    "date": "2022-10-09",
    "description": "Developing a growth model + marketplace growth strategy, covering growth systems, product design, and strategic decision-making.",
    "guest": "Dan Hockenmaier",
    "youtube_url": "https://www.youtube.com/watch?v=AlTQ6O2qooI"
  },
  {
    "id": 260,
    "type": "podcast",
    "filename": "podcasts/kristen-berman.md",
    "title": "Using behavioral science to improve your product | Kristen Berman (Irrational Labs)",
    "tags": [
      "design",
      "leadership",
      "b2b",
      "growth",
      "podcast",
      "analytics"
    ],
    "date": "2022-10-02",
    "description": "Using behavioral science to improve your product, covering product design, team leadership, and B2B products.",
    "guest": "Kristen Berman",
    "youtube_url": "https://www.youtube.com/watch?v=u53fplD_C30"
  },
  {
    "id": 261,
    "type": "podcast",
    "filename": "podcasts/gia-laudi.md",
    "title": "Customer-led growth | Georgiana Laudi (Forget The Funnel)",
    "tags": [
      "growth",
      "strategy",
      "go-to-market",
      "design",
      "b2b",
      "analytics"
    ],
    "date": "2022-09-29",
    "description": "Customer-led growth, covering growth systems, strategic decision-making, and go-to-market execution.",
    "guest": "Gia Laudi",
    "youtube_url": "https://www.youtube.com/watch?v=0FgZ1VVxEBo"
  },
  {
    "id": 262,
    "type": "podcast",
    "filename": "podcasts/julian-shapiro.md",
    "title": "Growth tactics, retention strategies, and becoming a better writer | Julian Shapiro (Demand Curve, Hyper, Webflow, TechCrunch)",
    "tags": [
      "design",
      "growth",
      "analytics",
      "newsletter",
      "startups",
      "strategy"
    ],
    "date": "2022-09-25",
    "description": "Growth tactics, retention strategies, and becoming a better writer, covering product design, growth systems, and measurement and analysis.",
    "guest": "Julian Shapiro",
    "youtube_url": "https://www.youtube.com/watch?v=9cNRDWEXnrQ"
  },
  {
    "id": 263,
    "type": "podcast",
    "filename": "podcasts/jason-shah.md",
    "title": "Building a meaningful career | Jason Shah (Airbnb, Amazon, Microsoft, Alchemy)",
    "tags": [
      "design",
      "leadership",
      "product-management",
      "go-to-market",
      "career",
      "podcast"
    ],
    "date": "2022-09-18",
    "description": "Building a meaningful career, covering product design, team leadership, and product strategy and execution.",
    "guest": "Jason Shah",
    "youtube_url": "https://www.youtube.com/watch?v=nMsA5VeLoOM"
  },
  {
    "id": 264,
    "type": "podcast",
    "filename": "podcasts/adam-grenier.md",
    "title": "When and how to invest in new acquisition channels | Adam Grenier (Uber, MasterClass)",
    "tags": [
      "design",
      "strategy",
      "growth",
      "leadership",
      "career",
      "b2b"
    ],
    "date": "2022-09-15",
    "description": "Deciding when and how to invest in new acquisition channels, covering product design, strategic decision-making, and growth systems.",
    "guest": "Adam Grenier",
    "youtube_url": "https://www.youtube.com/watch?v=-PDsvl2WCZU"
  },
  {
    "id": 265,
    "type": "podcast",
    "filename": "podcasts/emily-kramer.md",
    "title": "How to build a powerful marketing machine | Emily Kramer (Asana, Carta, MKT1)",
    "tags": [
      "strategy",
      "leadership",
      "design",
      "career",
      "startups",
      "growth"
    ],
    "date": "2022-09-11",
    "description": "Building a powerful marketing machine, covering strategic decision-making, team leadership, and product design.",
    "guest": "Emily Kramer",
    "youtube_url": "https://www.youtube.com/watch?v=gzs61z9Fekw"
  },
  {
    "id": 266,
    "type": "podcast",
    "filename": "podcasts/ryan-j-salva.md",
    "title": "The role of AI in product development | Ryan J. Salva (VP of Product at GitHub, Copilot)",
    "tags": [
      "engineering",
      "design",
      "ai",
      "b2c",
      "startups",
      "go-to-market"
    ],
    "date": "2022-09-04",
    "description": "The role of AI in product development, covering engineering tradeoffs, product design, and AI product work.",
    "guest": "Ryan J. Salva",
    "youtube_url": "https://www.youtube.com/watch?v=awcd3P1DnX4"
  },
  {
    "id": 267,
    "type": "podcast",
    "filename": "podcasts/yuriy-timen.md",
    "title": "How to grow a subscription business | Yuriy Timen (Grammarly, Canva, Airtable)",
    "tags": [
      "growth",
      "b2c",
      "design",
      "strategy",
      "startups",
      "b2b"
    ],
    "date": "2022-09-01",
    "description": "Grow a subscription business, covering growth systems, consumer products, and product design.",
    "guest": "Yuriy Timen",
    "youtube_url": null
  },
  {
    "id": 268,
    "type": "podcast",
    "filename": "podcasts/marty-cagan.md",
    "title": "The nature of product | Marty Cagan, Silicon Valley Product Group",
    "tags": [
      "leadership",
      "design",
      "product-management",
      "b2b",
      "engineering",
      "organization"
    ],
    "date": "2022-08-21",
    "description": "The nature of product, covering team leadership, product design, and product strategy and execution.",
    "guest": "Marty Cagan",
    "youtube_url": "https://www.youtube.com/watch?v=h-KVGHoQ_98"
  },
  {
    "id": 269,
    "type": "podcast",
    "filename": "podcasts/arielle-jackson.md",
    "title": "The art of building legendary brands | Arielle Jackson (Google, Square, Marketer in Residence at First Round Capital)",
    "tags": [
      "strategy",
      "startups",
      "go-to-market",
      "design",
      "leadership",
      "career"
    ],
    "date": "2022-08-18",
    "description": "What makes a great brand? After working at Google and Square, Arielle Jackson has spent the past eight years consulting startups on how to create powerful messaging that works.",
    "guest": "Arielle Jackson",
    "youtube_url": null
  },
  {
    "id": 270,
    "type": "podcast",
    "filename": "podcasts/shishir-mehrotra.md",
    "title": "The rituals of great teams | Shishir Mehrotra of Coda, YouTube, Microsoft",
    "tags": [
      "design",
      "leadership",
      "growth",
      "startups",
      "career",
      "podcast"
    ],
    "date": "2022-08-14",
    "description": "The rituals of great teams, covering product design, team leadership, and growth systems.",
    "guest": "Shishir Mehrotra",
    "youtube_url": "https://www.youtube.com/watch?v=7uSuMIJhONA"
  },
  {
    "id": 271,
    "type": "podcast",
    "filename": "podcasts/ryan-hoover.md",
    "title": "How to launch and grow your product | Ryan Hoover of Product Hunt and Weekend Fund",
    "tags": [
      "pricing",
      "startups",
      "design",
      "growth",
      "strategy",
      "ai"
    ],
    "date": "2022-08-07",
    "description": "Hey there! Did you know I have a podcast ? I do! Below you’ll find a peek at today’s episode.",
    "guest": "Ryan Hoover",
    "youtube_url": null
  },
  {
    "id": 272,
    "type": "podcast",
    "filename": "podcasts/deb-liu.md",
    "title": "How to own your career growth and become a powerful product leader | Deb Liu, Ancestry (ex-Facebook, PayPal)",
    "tags": [
      "career",
      "design",
      "leadership",
      "product-management",
      "strategy",
      "startups"
    ],
    "date": "2022-08-04",
    "description": "Own your career growth and becoming a powerful product leader, covering career development, product design, and team leadership.",
    "guest": "Deb Liu",
    "youtube_url": null
  },
  {
    "id": 273,
    "type": "podcast",
    "filename": "podcasts/crystal-w.md",
    "title": "How to scrappily hire for, measure, and unlock growth | Crystal Widjaja, Gojek and Kumu",
    "tags": [
      "design",
      "growth",
      "startups",
      "b2c",
      "strategy",
      "leadership"
    ],
    "date": "2022-07-31",
    "description": "Scrappily hire for, measure, and unlock growth, covering product design, growth systems, and startup building.",
    "guest": "Crystal W",
    "youtube_url": null
  },
  {
    "id": 274,
    "type": "podcast",
    "filename": "podcasts/melissa-perri.md",
    "title": "How to create a winning product strategy | Melissa Perri",
    "tags": [
      "design",
      "product-management",
      "leadership",
      "engineering",
      "strategy",
      "go-to-market"
    ],
    "date": "2022-07-28",
    "description": "Every company wants to develop a winning strategy—but what are signs your strategy isn’t working, and how do you change course? Melissa Perri has worked trained PMs and product leaders at nearly all the Fortune 100 companies, and in this conversation shares how to reset a struggling strategy, align your team, and.",
    "guest": "Melissa Perri",
    "youtube_url": null
  },
  {
    "id": 275,
    "type": "podcast",
    "filename": "podcasts/ken-norton.md",
    "title": "How to unlock your product leadership skills | Ken Norton, Ex-Google",
    "tags": [
      "leadership",
      "design",
      "startups",
      "career",
      "product-management",
      "analytics"
    ],
    "date": "2022-07-24",
    "description": "Advancing as a product leader requires new skills and a new mindset. Ken Norton is an executive coach who works with some of the top people in product to help them get unstuck and find creativity again in their approach to problems and their careers.",
    "guest": "Ken Norton",
    "youtube_url": null
  },
  {
    "id": 276,
    "type": "podcast",
    "filename": "podcasts/casey-winters.md",
    "title": "How to sell your ideas and rise within your company | Casey Winters, Eventbrite",
    "tags": [
      "leadership",
      "growth",
      "design",
      "strategy",
      "startups",
      "newsletter"
    ],
    "date": "2022-07-21",
    "description": "Sell your ideas and rise within your company, covering team leadership, growth systems, and product design.",
    "guest": "Casey Winters",
    "youtube_url": null
  },
  {
    "id": 277,
    "type": "podcast",
    "filename": "podcasts/nickey-skarstad.md",
    "title": "Nickey Skarstad (Airbnb, Etsy, Shopify, Duolingo) on translating vision into goals, operationalizing product quality, second-order decisions, brainstorming, influence, and much more",
    "tags": [
      "leadership",
      "strategy",
      "design",
      "growth",
      "analytics",
      "product-management"
    ],
    "date": "2022-07-18",
    "description": "Translating vision into goals, operationalizing product quality, second-order decisions, brainstorming, influence, and much more, covering team leadership, strategic decision-making, and product design.",
    "guest": "Nickey Skarstad",
    "youtube_url": null
  },
  {
    "id": 278,
    "type": "podcast",
    "filename": "podcasts/manik-gupta.md",
    "title": "Manik Gupta (ex-CPO Uber, Google Maps) on how to build consumer apps, why it’s useful to be optimistic about technology, creating inflections in your PM career, the changing CPO role, and more",
    "tags": [
      "career",
      "design",
      "leadership",
      "b2c",
      "strategy",
      "podcast"
    ],
    "date": "2022-07-14",
    "description": "Manik Gupta has led two of the most successful consumer products in history—Google Maps, where he was Director of product for the Maps team, and Uber, where he was CPO.",
    "guest": "Manik Gupta",
    "youtube_url": null
  },
  {
    "id": 279,
    "type": "podcast",
    "filename": "podcasts/merci-grace.md",
    "title": "Merci Grace (ex-Head of Growth at Slack) on PLG, interviewing, storytelling, building a diverse team, hiring salespeople, building a growth team, and much more",
    "tags": [
      "startups",
      "design",
      "leadership",
      "b2c",
      "growth",
      "strategy"
    ],
    "date": "2022-07-11",
    "description": "Merci Grace has been a founder, an investor (at Lightspeed Ventures), head of product and growth (at Slack), and is now a founder again (Panobi). She’s also one of the co-founders of Women in Product, and Fast Company named her one of the Most Creative People in 2017.",
    "guest": "Merci Grace",
    "youtube_url": null
  },
  {
    "id": 280,
    "type": "podcast",
    "filename": "podcasts/sanchan-saxena.md",
    "title": "Sanchan Saxena (VP of Product at Coinbase) on the inside story of how Airbnb made it through Covid; what he’s learned from Brian Chesky, Brian Armstrong, and Kevin Systrom; much more",
    "tags": [
      "design",
      "product-management",
      "career",
      "startups",
      "leadership",
      "engineering"
    ],
    "date": "2022-07-05",
    "description": "Sanchan Saxena is VP of Product at Coinbase. Before Coinbase, Sanchan was Head of Product and GM at Airbnb, founder and Head of Product of Instagram Shopping, Director of Product Management at Yahoo, and Lead PM at Microsoft.",
    "guest": "Sanchan Saxena",
    "youtube_url": null
  },
  {
    "id": 281,
    "type": "podcast",
    "filename": "podcasts/teresa-torres.md",
    "title": "Teresa Torres on how to interview customers, automating continuous discovery, the opportunity solution tree framework, making the case for user research, common interviewing mistakes, and much more",
    "tags": [
      "design",
      "leadership",
      "career",
      "product-management",
      "strategy",
      "b2c"
    ],
    "date": "2022-06-30",
    "description": "Interview customers, automating continuous discovery, the opportunity solution tree framework, making the case for user research, common interviewing mistakes, and much more, covering product design, team leadership, and career development.",
    "guest": "Teresa Torres",
    "youtube_url": null
  },
  {
    "id": 282,
    "type": "podcast",
    "filename": "podcasts/brandon-chu.md",
    "title": "Brandon Chu on building product at Shopify, how writing changed the trajectory of his career, the habits that make you a great PM, pros and cons of being a platform PM, how Shopify got through Covid",
    "tags": [
      "leadership",
      "design",
      "product-management",
      "engineering",
      "startups",
      "career"
    ],
    "date": "2022-06-27",
    "description": "Building product at Shopify, how writing changed the trajectory of his career, the habits that make you a great PM, pros and cons of being a platform PM, how Shopify got through Covid, covering team leadership, product design, and product strategy and execution.",
    "guest": "Brandon Chu",
    "youtube_url": null
  },
  {
    "id": 283,
    "type": "podcast",
    "filename": "podcasts/elena-verna-30.md",
    "title": "Elena Verna on how B2B growth is changing, product-led growth, product-led sales, why you should go freemium not trial, what features to make free, and much more",
    "tags": [
      "growth",
      "leadership",
      "b2b",
      "strategy",
      "startups",
      "career"
    ],
    "date": "2022-06-23",
    "description": "Elena Verna has led growth at some of today’s most successful B2B businesses, including Miro as CMO, Surveymonkey as SVP of Growth, and now at Amplitude as interim Head of Growth.",
    "guest": "Elena Verna 3.0",
    "youtube_url": null
  },
  {
    "id": 284,
    "type": "podcast",
    "filename": "podcasts/gibson-biddle.md",
    "title": "Gibson Biddle on his DHM product strategy framework, GEM roadmap prioritization framework, 5 Netflix strategy mini case studies, building a personal board of directors, and much more",
    "tags": [
      "strategy",
      "design",
      "startups",
      "growth",
      "newsletter",
      "analytics"
    ],
    "date": "2022-06-20",
    "description": "Before getting into teaching full-time, Gibson Biddle was VP of Product at Netflix and CPO at Chegg (a textbook rental and homework help company). He now spends his days speaking, writing, and hosting workshops on product leadership, strategy, and culture.",
    "guest": "Gibson Biddle",
    "youtube_url": null
  },
  {
    "id": 285,
    "type": "podcast",
    "filename": "podcasts/jackie-bavaro.md",
    "title": "Jackie Bavaro on getting better at product strategy, what exactly is strategy, PM pitfalls to avoid, advancing your career, getting into management, and much more",
    "tags": [
      "product-management",
      "career",
      "leadership",
      "design",
      "strategy",
      "analytics"
    ],
    "date": "2022-06-16",
    "description": "Jackie Bavaro is the author of the best-selling books Cracking the PM Interview and Cracking the PM Career . She was most recently at Asana, where she joined as its first product manager and later became the head of product.",
    "guest": "Jackie Bavaro",
    "youtube_url": null
  },
  {
    "id": 286,
    "type": "podcast",
    "filename": "podcasts/gokul-rajaram.md",
    "title": "Gokul Rajaram on designing your product development process, when and how to hire your first PM, a playbook for hiring leaders, getting ahead in you career, how to get started angel investing, more",
    "tags": [
      "design",
      "startups",
      "career",
      "leadership",
      "product-management",
      "strategy"
    ],
    "date": "2022-06-13",
    "description": "Designing your product development process, when and how to hire your first PM, a playbook for hiring leaders, getting ahead in you career, how to get started angel investing, more, covering product design, startup building, and career development.",
    "guest": "Gokul Rajaram",
    "youtube_url": "https://www.youtube.com/watch?v=5p0VK_-BoJI"
  },
  {
    "id": 287,
    "type": "podcast",
    "filename": "podcasts/april-dunford.md",
    "title": "April Dunford on product positioning, segmentation, and optimizing your sales process",
    "tags": [
      "go-to-market",
      "strategy",
      "b2b",
      "startups",
      "leadership",
      "design"
    ],
    "date": "2022-06-09",
    "description": "April Dunford is the author of the best-selling book Obviously Awesome , a definitive guide to product positioning. She spent 25 years leading marketing, product, and sales teams and now runs her own consulting firm, helping companies of all shapes and sizes nail their positioning.",
    "guest": "April Dunford",
    "youtube_url": null
  },
  {
    "id": 288,
    "type": "podcast",
    "filename": "podcasts/julie-zhuo.md",
    "title": "Julie Zhuo on accelerating your career, impostor syndrome, writing, building product sense, using intuition vs. data, hiring designers, and moving into management",
    "tags": [
      "design",
      "career",
      "leadership",
      "startups",
      "engineering",
      "strategy"
    ],
    "date": "2022-06-07",
    "description": "Julie Zhuo is the co-founder of Sundial, a company that helps builders make meaningful use of data to fulfill their mission. With over 400K followers across social media, she is one of the most influential leaders in product design, and product thinking broadly.",
    "guest": "Julie Zhuo",
    "youtube_url": "https://www.youtube.com/watch?v=YLsxHa1dhSw"
  },
  {
    "id": 289,
    "type": "newsletter",
    "filename": "newsletters/how-to-build-your-pm-second-brain-with-chatgpt.md",
    "title": "How to build your PM second brain with ChatGPT",
    "tags": [
      "ai",
      "design",
      "product-management",
      "newsletter",
      "leadership",
      "strategy"
    ],
    "date": "2025-12-16",
    "description": "Use AI to amplify your craft, not replace it",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 290,
    "type": "newsletter",
    "filename": "newsletters/how-to-spot-a-top-1-startup-early.md",
    "title": "How to spot a top 1% startup early",
    "tags": [
      "design",
      "startups",
      "leadership",
      "strategy",
      "career",
      "newsletter"
    ],
    "date": "2025-12-09",
    "description": "Three key lessons from people who picked multiple iconic companies before they were obvious",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 291,
    "type": "newsletter",
    "filename": "newsletters/a-year-free-of-posthog-16500-value-the-all-in-one-analytics-experimentation-feat.md",
    "title": "A year free of PostHog ($16,500 value): The all-in-one analytics, experimentation, feature flag, surveys, session replay, error tracking, data warehouse, LLM analytics platform",
    "tags": [
      "newsletter",
      "design",
      "analytics",
      "startups",
      "b2b",
      "career"
    ],
    "date": "2025-12-02",
    "description": "A deal you won’t find anywhere else—bringing the total value of the Product Pass to over $25,000",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 292,
    "type": "newsletter",
    "filename": "newsletters/a-holiday-gift-guide-for-tech-people-with-taste.md",
    "title": "A holiday gift guide for tech people with taste 🤌",
    "tags": [
      "design",
      "newsletter",
      "startups",
      "b2c",
      "career",
      "growth"
    ],
    "date": "2025-11-18",
    "description": "No slop here",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 293,
    "type": "newsletter",
    "filename": "newsletters/ecosystem-is-the-next-big-growth-channel.md",
    "title": "Ecosystem is the next big growth channel",
    "tags": [
      "growth",
      "design",
      "b2c",
      "strategy",
      "leadership",
      "ai"
    ],
    "date": "2025-11-11",
    "description": "How to stand out in a noisy landscape by leveraging partners who already have access and trust with your target audience",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 294,
    "type": "newsletter",
    "filename": "newsletters/part-2-of-how-to-get-the-most-out-of-your-product-pass-and-welcome-stripe-atlas.md",
    "title": "Part 2 of how to get the most out of your product pass—and welcome, Stripe Atlas, to the bundle!",
    "tags": [
      "design",
      "ai",
      "leadership",
      "newsletter",
      "startups",
      "engineering"
    ],
    "date": "2025-11-04",
    "description": "Tips for taking full advantage of the 17+ free premium products you have access to as a paid subscriber",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 295,
    "type": "newsletter",
    "filename": "newsletters/a-builders-guide-to-living-a-long-and-healthy-life.md",
    "title": "A builder’s guide to living a long and healthy life",
    "tags": [
      "design",
      "newsletter",
      "career",
      "analytics",
      "strategy",
      "ai"
    ],
    "date": "2025-10-28",
    "description": "For something a little different",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 296,
    "type": "newsletter",
    "filename": "newsletters/everyone-should-be-using-claude-code-more.md",
    "title": "Everyone should be using Claude Code more",
    "tags": [
      "ai",
      "engineering",
      "design",
      "newsletter",
      "career",
      "leadership"
    ],
    "date": "2025-10-14",
    "description": "How to get started, and 50 ways non-technical people are using Claude Code in their work and life",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 297,
    "type": "newsletter",
    "filename": "newsletters/a-free-year-of-devin-the-worlds-most-advanced-autonomous-ai-software-engineer.md",
    "title": "A free year of Devin: the world’s most advanced autonomous AI software engineer",
    "tags": [
      "newsletter",
      "design",
      "ai",
      "engineering",
      "leadership",
      "b2b"
    ],
    "date": "2025-10-07",
    "description": "Insider subscribers now get $1,350/year of Devin, on top of 15 additional premium products. All the advice, community, and tools you need to build and grow a world-class product (and career).",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 298,
    "type": "newsletter",
    "filename": "newsletters/introducing-the-gain-framework-for-feedback-an-evidence-based-approach-to-giving.md",
    "title": "Introducing the GAIN framework for feedback: an evidence-based approach to giving feedback that people love, appreciate, and act on",
    "tags": [
      "leadership",
      "startups",
      "design",
      "newsletter",
      "ai",
      "growth"
    ],
    "date": "2025-09-30",
    "description": "A step-by-step guide to crafting feedback you’ll want to give and people will want to get",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 299,
    "type": "newsletter",
    "filename": "newsletters/how-to-get-the-most-out-of-your-product-pass-part-1.md",
    "title": "How to get the most out of your product pass, part 1",
    "tags": [
      "design",
      "leadership",
      "ai",
      "podcast",
      "newsletter",
      "engineering"
    ],
    "date": "2025-09-23",
    "description": "Tips for taking full advantage of the 15+ free premium products you have access to as a paid subscriber",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 300,
    "type": "newsletter",
    "filename": "newsletters/building-eval-systems-that-improve-your-ai-product.md",
    "title": "Building eval systems that improve your AI product",
    "tags": [
      "design",
      "ai",
      "analytics",
      "leadership",
      "newsletter",
      "engineering"
    ],
    "date": "2025-09-09",
    "description": "A practical guide to moving beyond generic scores and measuring what matters",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 301,
    "type": "newsletter",
    "filename": "newsletters/how-to-find-the-perfect-name.md",
    "title": "How to find the perfect name",
    "tags": [
      "design",
      "leadership",
      "newsletter",
      "career",
      "strategy",
      "b2c"
    ],
    "date": "2025-09-02",
    "description": "A step-by-step playbook for naming in a noisy and AI-driven product landscape",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 302,
    "type": "newsletter",
    "filename": "newsletters/taking-the-week-off--a-newsletter-cadence-update.md",
    "title": "Taking the week off + a newsletter cadence update",
    "tags": [
      "newsletter",
      "podcast",
      "analytics",
      "b2c"
    ],
    "date": "2025-08-26",
    "description": "Back next week!",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 303,
    "type": "newsletter",
    "filename": "newsletters/why-your-ai-product-needs-a-different-development-lifecycle.md",
    "title": "Why your AI product needs a different development lifecycle",
    "tags": [
      "ai",
      "design",
      "leadership",
      "newsletter",
      "engineering",
      "b2b"
    ],
    "date": "2025-08-19",
    "description": "Introducing the Continuous Calibration/Continuous Development (CC/CD) framework",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 304,
    "type": "newsletter",
    "filename": "newsletters/essential-reading-for-product-builders-part-2.md",
    "title": "Essential reading for product builders—part 2",
    "tags": [
      "design",
      "newsletter",
      "startups",
      "strategy",
      "leadership",
      "growth"
    ],
    "date": "2025-08-12",
    "description": "10 more timeless essays you probably haven’t read but should",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 305,
    "type": "newsletter",
    "filename": "newsletters/25-proven-tactics-to-accelerate-ai-adoption-at-your-company.md",
    "title": "25 proven tactics to accelerate AI adoption at your company",
    "tags": [
      "ai",
      "leadership",
      "design",
      "b2b",
      "newsletter",
      "engineering"
    ],
    "date": "2025-08-05",
    "description": "Practical advice from AI-forward companies like Shopify, Ramp, Zapier, Duolingo, Intercom, and Whoop",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 306,
    "type": "newsletter",
    "filename": "newsletters/lennys-product-pass-20-free-premium-products-available-exclusively-for-paid-annu.md",
    "title": "Lenny's Product Pass: 20+ free premium products, available exclusively for paid annual subscribers",
    "tags": [
      "newsletter",
      "engineering",
      "design",
      "b2c",
      "b2b",
      "career"
    ],
    "date": "2025-07-29",
    "description": "Over $25,000 in value for just $350. All the tools, community, and advice you need to build and grow a world-class product and career.",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 307,
    "type": "newsletter",
    "filename": "newsletters/build-your-personal-ai-copilot.md",
    "title": "Build your personal AI copilot",
    "tags": [
      "ai",
      "leadership",
      "design",
      "strategy",
      "newsletter",
      "engineering"
    ],
    "date": "2025-07-22",
    "description": "A guide to using AI as a long-term thinking partner (including prompts to get you started)",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 308,
    "type": "newsletter",
    "filename": "newsletters/essential-reading-for-product-builders-part-1.md",
    "title": "Essential reading for product builders—part 1",
    "tags": [
      "leadership",
      "design",
      "strategy",
      "newsletter",
      "startups",
      "career"
    ],
    "date": "2025-07-15",
    "description": "7 timeless essays you likely haven’t read but should",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 309,
    "type": "newsletter",
    "filename": "newsletters/what-people-are-vibe-coding-and-actually-using.md",
    "title": "What people are vibe coding (and actually using)",
    "tags": [
      "design",
      "ai",
      "engineering",
      "newsletter",
      "b2c",
      "career"
    ],
    "date": "2025-07-08",
    "description": "50+ useful/fun/clever examples of what non-technical people are building—to inspire your own vibe-coding journey",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 310,
    "type": "newsletter",
    "filename": "newsletters/the-definitive-guide-to-mastering-analytical-thinking-interviews.md",
    "title": "The definitive guide to mastering analytical thinking interviews",
    "tags": [
      "career",
      "strategy",
      "design",
      "analytics",
      "b2c",
      "newsletter"
    ],
    "date": "2025-07-01",
    "description": "A step-by-step playbook to help you ace your PM interviews",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 311,
    "type": "newsletter",
    "filename": "newsletters/an-ai-glossary.md",
    "title": "An AI glossary",
    "tags": [
      "ai",
      "engineering",
      "design",
      "newsletter",
      "b2b",
      "b2c"
    ],
    "date": "2025-06-24",
    "description": "The most common AI terms explained, simply",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 312,
    "type": "newsletter",
    "filename": "newsletters/how-techs-most-resilient-workers-handle-burnout.md",
    "title": "How tech’s most resilient workers handle burnout",
    "tags": [
      "newsletter",
      "design",
      "ai",
      "career",
      "engineering",
      "b2c"
    ],
    "date": "2025-06-17",
    "description": "Introducing ARMOR: a new framework building on our tech worker sentiment survey insights",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 313,
    "type": "newsletter",
    "filename": "newsletters/how-to-get-your-entire-team-prototyping-with-ai.md",
    "title": "How to get your entire team prototyping with AI",
    "tags": [
      "design",
      "ai",
      "leadership",
      "engineering",
      "newsletter",
      "organization"
    ],
    "date": "2025-06-10",
    "description": "A guide to creating AI prototypes that match your brand and are integrated into every step of your development lifecycle",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 314,
    "type": "newsletter",
    "filename": "newsletters/taking-the-week-off-6.md",
    "title": "Taking the week off",
    "tags": [
      "newsletter",
      "career",
      "leadership",
      "product-management",
      "startups",
      "strategy"
    ],
    "date": "2025-06-03",
    "description": "Back next week!",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 315,
    "type": "newsletter",
    "filename": "newsletters/how-tech-workers-really-feel-about-work-right-now.md",
    "title": "How tech workers really feel about work right now",
    "tags": [
      "leadership",
      "career",
      "design",
      "startups",
      "growth",
      "newsletter"
    ],
    "date": "2025-05-27",
    "description": "Results from our first-ever large-scale tech worker sentiment survey",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 316,
    "type": "newsletter",
    "filename": "newsletters/five-principles-for-successfully-managing-managers.md",
    "title": "Five principles for successfully managing managers",
    "tags": [
      "leadership",
      "design",
      "newsletter",
      "startups",
      "strategy",
      "analytics"
    ],
    "date": "2025-05-20",
    "description": "Why skip leads are the load-bearing pillars of your organization",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 317,
    "type": "newsletter",
    "filename": "newsletters/state-of-the-product-job-market-in-2025.md",
    "title": "State of the product job market in 2025",
    "tags": [
      "product-management",
      "newsletter",
      "ai",
      "career",
      "engineering",
      "strategy"
    ],
    "date": "2025-05-13",
    "description": "There’s a lot to be optimistic about",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 318,
    "type": "newsletter",
    "filename": "newsletters/the-ultimate-guide-to-negotiating-your-comp.md",
    "title": "The ultimate guide to negotiating your comp",
    "tags": [
      "leadership",
      "design",
      "strategy",
      "career",
      "organization",
      "newsletter"
    ],
    "date": "2025-05-06",
    "description": "The step-by-step guide that’s helped hundreds of leaders secure life-changing compensation",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 319,
    "type": "newsletter",
    "filename": "newsletters/make-product-management-fun-again-with-ai-agents.md",
    "title": "Make product management fun again with AI agents",
    "tags": [
      "ai",
      "design",
      "leadership",
      "product-management",
      "newsletter",
      "go-to-market"
    ],
    "date": "2025-04-29",
    "description": "A guide to AI agents for product managers",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 320,
    "type": "newsletter",
    "filename": "newsletters/a-new-perk-for-annual-subscribers-a-free-year-of-some-of-the-worlds-most-beloved.md",
    "title": "A new perk for annual subscribers: A free year of some of the world's most beloved products (while supplies last)",
    "tags": [
      "newsletter",
      "engineering",
      "b2c",
      "leadership"
    ],
    "date": "2025-04-15",
    "description": "And new products will continue to be added to this deal over time",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 321,
    "type": "newsletter",
    "filename": "newsletters/beyond-vibe-checks-a-pms-complete-guide-to-evals.md",
    "title": "Beyond vibe checks: A PM’s complete guide to evals",
    "tags": [
      "ai",
      "design",
      "engineering",
      "leadership",
      "organization",
      "analytics"
    ],
    "date": "2025-04-08",
    "description": "How to master the emerging skill that can make or break an AI product",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 322,
    "type": "newsletter",
    "filename": "newsletters/the-definitive-guide-to-mastering-product-sense-interviews.md",
    "title": "The definitive guide to mastering product sense interviews",
    "tags": [
      "career",
      "design",
      "product-management",
      "leadership",
      "ai",
      "newsletter"
    ],
    "date": "2025-04-01",
    "description": "A step-by-step playbook to help you ace your PM interview",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 323,
    "type": "newsletter",
    "filename": "newsletters/how-to-ship-like-a-startup.md",
    "title": "How to ship like a startup",
    "tags": [
      "design",
      "leadership",
      "go-to-market",
      "startups",
      "newsletter",
      "strategy"
    ],
    "date": "2025-03-25",
    "description": "Seven lessons from the story of Figma Slides",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 324,
    "type": "newsletter",
    "filename": "newsletters/which-companies-produce-the-best-product-managers.md",
    "title": "Which companies produce the best product managers",
    "tags": [
      "design",
      "startups",
      "career",
      "product-management",
      "leadership",
      "newsletter"
    ],
    "date": "2025-03-18",
    "description": "Part two in my exploration of the companies that find and develop the best PMs",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 325,
    "type": "newsletter",
    "filename": "newsletters/why-youre-so-angry-at-work-and-what-to-do-about-it.md",
    "title": "Why you’re so angry at work (and what to do about it)",
    "tags": [
      "design",
      "leadership",
      "newsletter",
      "career",
      "product-management",
      "go-to-market"
    ],
    "date": "2025-03-11",
    "description": "A practical framework for transforming big feelings into wisdom",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 326,
    "type": "newsletter",
    "filename": "newsletters/1000000-taking-a-moment-to-celebrate-and-reflect-and-then-back-to-work.md",
    "title": "1,000,000",
    "tags": [
      "newsletter",
      "growth",
      "design",
      "leadership",
      "b2c",
      "podcast"
    ],
    "date": "2025-03-04",
    "description": "Taking a moment to celebrate and reflect—and then back to work",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 327,
    "type": "newsletter",
    "filename": "newsletters/strategy-blocks-an-operators-guide-to-product-strategy.md",
    "title": "Strategy Blocks: An operator’s guide to product strategy",
    "tags": [
      "strategy",
      "leadership",
      "design",
      "career",
      "newsletter",
      "product-management"
    ],
    "date": "2025-02-25",
    "description": "Five steps to map out and build alignment around the future of your company",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 328,
    "type": "newsletter",
    "filename": "newsletters/how-much-product-managers-make-in-the-us-europe-and-canada.md",
    "title": "How much product managers make in the U.S., Europe, and Canada",
    "tags": [
      "leadership",
      "design",
      "product-management",
      "newsletter",
      "growth",
      "career"
    ],
    "date": "2025-02-18",
    "description": "Comprehensive salary, equity, and total comp benchmarks for product managers",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 329,
    "type": "newsletter",
    "filename": "newsletters/pulling-back-the-curtain-on-the-magic-of-y-combinator.md",
    "title": "Pulling back the curtain on the magic of Y Combinator",
    "tags": [
      "startups",
      "design",
      "b2c",
      "b2b",
      "strategy",
      "growth"
    ],
    "date": "2025-02-11",
    "description": "A first-of-its-kind deep dive into the data to see what’s really working for the industry’s biggest incubator",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 330,
    "type": "newsletter",
    "filename": "newsletters/announcing-the-greatest-product-bundle-ever-get-a-year-free-of-granola-notion-su.md",
    "title": "Announcing the greatest product bundle ever: Get a year free of Granola, Notion, Superhuman, Linear, and Perplexity with an annual subscription",
    "tags": [
      "newsletter",
      "engineering",
      "leadership",
      "pricing",
      "ai",
      "b2c"
    ],
    "date": "2025-02-04",
    "description": "New perk for paid subscribers of Lenny’s Newsletter",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 331,
    "type": "newsletter",
    "filename": "newsletters/introducing-the-foundation-sprint-from-the-creators-of-the-design-sprint.md",
    "title": "Introducing the Foundation Sprint: From the creators of the Design Sprint",
    "tags": [
      "design",
      "leadership",
      "startups",
      "strategy",
      "career",
      "newsletter"
    ],
    "date": "2025-01-28",
    "description": "An exclusive first look at Jake Knapp and John Zeratsky’s new book, Click, and the new 2-day process for jump-starting big projects right",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 332,
    "type": "newsletter",
    "filename": "newsletters/whats-in-your-stack-the-state-of-tech-tools-in-2025.md",
    "title": "What’s in your stack: The state of tech tools in 2025",
    "tags": [
      "design",
      "ai",
      "leadership",
      "newsletter",
      "strategy",
      "engineering"
    ],
    "date": "2025-01-21",
    "description": "Insights from 6,500 tech professionals on their favorite and least favorite tools",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 333,
    "type": "newsletter",
    "filename": "newsletters/introducing-core-4-the-best-way-to-measure-and-improve-your-product-velocity.md",
    "title": "Introducing Core 4: The best way to measure and improve your product velocity",
    "tags": [
      "engineering",
      "analytics",
      "leadership",
      "design",
      "newsletter",
      "career"
    ],
    "date": "2025-01-14",
    "description": "A unified developer productivity framework from the creators of DORA, SPACE, and DevEx",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 334,
    "type": "newsletter",
    "filename": "newsletters/a-guide-to-ai-prototyping-for-product-managers.md",
    "title": "A guide to AI prototyping for product managers",
    "tags": [
      "design",
      "ai",
      "engineering",
      "leadership",
      "newsletter",
      "product-management"
    ],
    "date": "2025-01-07",
    "description": "How to turn your idea into a working prototype in minutes",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 335,
    "type": "newsletter",
    "filename": "newsletters/taking-the-week-off-5.md",
    "title": "Taking the week off 🎄🕎🎁",
    "tags": [
      "newsletter"
    ],
    "date": "2024-12-31",
    "description": "Back next week!",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 336,
    "type": "newsletter",
    "filename": "newsletters/top-angel-investors-in-the-us.md",
    "title": "Top angel investors in the U.S.",
    "tags": [
      "startups",
      "design",
      "b2b",
      "ai",
      "leadership",
      "b2c"
    ],
    "date": "2024-12-24",
    "description": "Inspiration for who to raise from when you’re raising your early rounds",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 337,
    "type": "newsletter",
    "filename": "newsletters/the-best-of-lennys-newsletter-2024-edition.md",
    "title": "The Best of Lenny’s Newsletter—2024 Edition",
    "tags": [
      "newsletter",
      "growth",
      "design",
      "leadership",
      "career",
      "strategy"
    ],
    "date": "2024-12-17",
    "description": "My all-time best posts and podcast episodes, categorized by the problem you need solved",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 338,
    "type": "newsletter",
    "filename": "newsletters/which-companies-accelerate-pm-careers-most.md",
    "title": "Which companies accelerate PM careers most",
    "tags": [
      "career",
      "design",
      "startups",
      "product-management",
      "leadership",
      "newsletter"
    ],
    "date": "2024-12-10",
    "description": "A first-ever deep dive into the impact 50+ companies have had on alumni trajectories",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 339,
    "type": "newsletter",
    "filename": "newsletters/how-givedirectly-increased-donations-by-over-3-millionyear-through-experimentati.md",
    "title": "How GiveDirectly increased donations by over $3 million/year through experimentation",
    "tags": [
      "design",
      "strategy",
      "analytics",
      "growth",
      "leadership",
      "ai"
    ],
    "date": "2024-12-03",
    "description": "Wins, misses, and lessons from GiveDirectly’s donation-optimizing journey",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 340,
    "type": "newsletter",
    "filename": "newsletters/lennys-newsletter-holiday-gift-guide-2024.md",
    "title": "Lenny’s Newsletter holiday gift guide 2024",
    "tags": [
      "design",
      "newsletter",
      "leadership",
      "engineering",
      "ai",
      "growth"
    ],
    "date": "2024-11-26",
    "description": "Art, gadgets, household items, health and wellness ideas, kids’ stuff, and more",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 341,
    "type": "newsletter",
    "filename": "newsletters/how-to-become-a-supermanager-with-ai.md",
    "title": "How to become a supermanager with AI",
    "tags": [
      "leadership",
      "ai",
      "design",
      "product-management",
      "strategy",
      "newsletter"
    ],
    "date": "2024-11-19",
    "description": "AI is ushering in an era of “super ICs.” What about managers?",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 342,
    "type": "newsletter",
    "filename": "newsletters/product-manager-is-an-unfair-role-so-work-unfairly.md",
    "title": "Product manager is an unfair role. So work unfairly.",
    "tags": [
      "leadership",
      "design",
      "product-management",
      "newsletter",
      "organization",
      "ai"
    ],
    "date": "2024-11-12",
    "description": "How to thrive in “the great flattening” by redefining work norms",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 343,
    "type": "newsletter",
    "filename": "newsletters/on-being-funny-at-work.md",
    "title": "On being funny at work",
    "tags": [
      "design",
      "strategy",
      "newsletter",
      "career",
      "go-to-market",
      "b2b"
    ],
    "date": "2024-11-05",
    "description": "Seven strategies (and some stories) to help you harness the power of humor",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 344,
    "type": "newsletter",
    "filename": "newsletters/five-proven-prompt-engineering-techniques-and-a-few-more-advanced-tactics.md",
    "title": "Five proven prompt engineering techniques (and a few more-advanced tactics)",
    "tags": [
      "ai",
      "engineering",
      "design",
      "leadership",
      "product-management",
      "career"
    ],
    "date": "2024-10-29",
    "description": "How to get exactly what you want when working with AI",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 345,
    "type": "newsletter",
    "filename": "newsletters/how-much-do-us-product-managers-really-make.md",
    "title": "How much do U.S. product managers really make?",
    "tags": [
      "leadership",
      "design",
      "newsletter",
      "product-management",
      "career",
      "strategy"
    ],
    "date": "2024-10-22",
    "description": "The rise of ICs, the unexpected salary dip for managers, why salary only moderately impacts satisfaction, and more revealing insights from our recent compensation survey.",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 346,
    "type": "newsletter",
    "filename": "newsletters/why-no-productivity-hack-will-solve-your-overwhelm.md",
    "title": "Why no productivity hack will solve your overwhelm",
    "tags": [
      "design",
      "leadership",
      "newsletter",
      "startups",
      "career",
      "product-management"
    ],
    "date": "2024-10-15",
    "description": "How the Internal Family Systems model can help you listen to your inner wisdom and get unstuck",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 347,
    "type": "newsletter",
    "filename": "newsletters/why-cash-is-king.md",
    "title": "Why cash is king",
    "tags": [
      "design",
      "startups",
      "leadership",
      "growth",
      "career",
      "newsletter"
    ],
    "date": "2024-10-08",
    "description": "The first set of results from our inaugural compensation survey reveals the need for stable income above all else",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 348,
    "type": "newsletter",
    "filename": "newsletters/a-pms-guide-to-influence.md",
    "title": "A PM’s guide to influence",
    "tags": [
      "leadership",
      "organization",
      "newsletter",
      "pricing",
      "strategy",
      "design"
    ],
    "date": "2024-10-01",
    "description": "How to align stakeholders so decisions go your way",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 349,
    "type": "newsletter",
    "filename": "newsletters/state-of-the-product-job-market-part-2.md",
    "title": "State of the product job market, part 2",
    "tags": [
      "product-management",
      "career",
      "leadership",
      "ai",
      "newsletter",
      "strategy"
    ],
    "date": "2024-09-24",
    "description": "Which companies are hiring PMs, what hard skills are most in demand, trends in remote work, whether there’s been a shift to senior hires, what roles AI companies are hiring for, and so much more",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 350,
    "type": "newsletter",
    "filename": "newsletters/get-perplexity-pro-free-for-1-year.md",
    "title": "Get Perplexity Pro free for 1 year",
    "tags": [
      "newsletter"
    ],
    "date": "2024-09-23",
    "description": "An exciting new perk for paid subscribers",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 351,
    "type": "newsletter",
    "filename": "newsletters/raising-a-seed-round-101.md",
    "title": "Raising a seed round 101",
    "tags": [
      "startups",
      "design",
      "newsletter",
      "strategy",
      "b2b",
      "b2c"
    ],
    "date": "2024-09-17",
    "description": "The whys, whats, and hows of seed funding, with advice from the founders of Notion, Linear, Figma, Ramp, Instacart, 37signals, and more",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 352,
    "type": "newsletter",
    "filename": "newsletters/how-to-communicate-tradeoffs-so-leaders-will-listen.md",
    "title": "How to communicate tradeoffs so leaders will listen",
    "tags": [
      "leadership",
      "product-management",
      "newsletter",
      "design",
      "strategy",
      "organization"
    ],
    "date": "2024-09-10",
    "description": "Tactical tips for teeing up critical decisions without pissing leaders off",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 353,
    "type": "newsletter",
    "filename": "newsletters/the-subscription-value-loop-a-framework-for-growing-consumer-subscription-busine.md",
    "title": "The Subscription Value Loop: A framework for growing consumer subscription businesses",
    "tags": [
      "b2c",
      "growth",
      "design",
      "b2b",
      "pricing",
      "startups"
    ],
    "date": "2024-09-03",
    "description": "Including case studies, templates, and 10 proven growth tactics from top consumer subscription apps like Duolingo, Spotify, Tinder, and Calm",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 354,
    "type": "newsletter",
    "filename": "newsletters/part-2-time-management-techniques-that-actually-work.md",
    "title": "Part 2: Time management techniques that actually work",
    "tags": [
      "newsletter",
      "design",
      "career",
      "leadership",
      "startups",
      "growth"
    ],
    "date": "2024-08-27",
    "description": "Seven more tactics for making the most of your precious time",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 355,
    "type": "newsletter",
    "filename": "newsletters/why-pms-are-best-positioned-to-thrive-in-an-ai-world.md",
    "title": "Why PMs are best positioned to thrive in an AI world",
    "tags": [
      "design",
      "ai",
      "product-management",
      "newsletter",
      "leadership",
      "strategy"
    ],
    "date": "2024-08-20",
    "description": "An optimistic case for the future of product management",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 356,
    "type": "newsletter",
    "filename": "newsletters/time-management-techniques-that-actually-work.md",
    "title": "Time management techniques that actually work",
    "tags": [
      "design",
      "newsletter",
      "leadership",
      "career",
      "product-management",
      "strategy"
    ],
    "date": "2024-08-13",
    "description": "Ten tactics I use every single day",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 357,
    "type": "newsletter",
    "filename": "newsletters/summary-lessons-from-working-with-600-yc-startups--gustaf-alströmer-y-combinator.md",
    "title": "Summary: Lessons from working with 600+ YC startups | Gustaf Alströmer (Y Combinator, Airbnb)",
    "tags": [
      "startups",
      "engineering",
      "design",
      "strategy",
      "leadership",
      "podcast"
    ],
    "date": "2024-08-13",
    "description": "Gustaf Alströmer is a Group Partner at Y Combinator, where he has worked with over 600 startups",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 358,
    "type": "newsletter",
    "filename": "newsletters/summary-april-dunford-on-product-positioning-segmentation-and-optimizing-your-sa.md",
    "title": "Summary: April Dunford on product positioning, segmentation, and optimizing your sales process",
    "tags": [
      "go-to-market",
      "b2b",
      "strategy",
      "podcast",
      "startups",
      "design"
    ],
    "date": "2024-08-13",
    "description": "April Dunford is an expert at nailing positioning for scaling tech companies and wrote Obviously Awesome, a definitive guide to product",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 359,
    "type": "newsletter",
    "filename": "newsletters/summary-ai-and-product-management--marily-nika-meta-google.md",
    "title": "Summary: AI and product management | Marily Nika (Meta, Google)",
    "tags": [
      "ai",
      "product-management",
      "career",
      "design",
      "leadership",
      "engineering"
    ],
    "date": "2024-08-13",
    "description": "She has a PhD in ML from Imperial College London, spoke at TED AI SF and she writes about AI Product Management at:",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 360,
    "type": "newsletter",
    "filename": "newsletters/summary-the-ultimate-guide-to-adding-a-plg-motion--hila-qu-reforge-gitlab.md",
    "title": "Summary: The ultimate guide to adding a PLG motion | Hila Qu (Reforge, GitLab)",
    "tags": [
      "growth",
      "b2b",
      "design",
      "leadership",
      "strategy",
      "pricing"
    ],
    "date": "2024-08-12",
    "description": "### Why companies should have PLG and sales ▶️",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 361,
    "type": "newsletter",
    "filename": "newsletters/on-asking-for-help-even-when-you-really-dont-want-to.md",
    "title": "On asking for help (even when you really don’t want to)",
    "tags": [
      "leadership",
      "design",
      "newsletter",
      "career",
      "analytics",
      "product-management"
    ],
    "date": "2024-08-06",
    "description": "Step-by-step tactics for facing your fears and making the ask—including templates and example scripts",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 362,
    "type": "newsletter",
    "filename": "newsletters/ethan-smith-the-power-of-internal-linking-for-seo.md",
    "title": "Ethan Smith: The power of internal linking for SEO",
    "tags": [
      "design",
      "growth",
      "ai",
      "strategy",
      "engineering",
      "b2b"
    ],
    "date": "2024-08-06",
    "description": "SEO expert Ethan Smith shares actionable tips for using internal linking to improve your website's search rankings and drive traffic to your business.",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 363,
    "type": "newsletter",
    "filename": "newsletters/how-should-you-monetize-your-ai-features.md",
    "title": "How should you monetize your AI features?",
    "tags": [
      "ai",
      "pricing",
      "strategy",
      "design",
      "newsletter",
      "b2b"
    ],
    "date": "2024-07-30",
    "description": "What we can learn from the monetization strategies of leading tech companies, including GitHub, Zapier, Adobe, Loom, and Microsoft",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 364,
    "type": "newsletter",
    "filename": "newsletters/announcing-the-lenny--friends-summit.md",
    "title": "Announcing the Lenny & Friends Summit 🙌",
    "tags": [
      "growth",
      "career",
      "design",
      "leadership",
      "ai",
      "newsletter"
    ],
    "date": "2024-07-29",
    "description": "A one-day in-person event for senior product leaders",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 365,
    "type": "newsletter",
    "filename": "newsletters/new-data-on-the-product-job-market.md",
    "title": "New data on the product job market",
    "tags": [
      "growth",
      "leadership",
      "strategy",
      "design",
      "b2b",
      "product-management"
    ],
    "date": "2024-07-23",
    "description": "Who’s hiring, what roles are growing, the one role that’s disappearing, and more surprising insights",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 366,
    "type": "newsletter",
    "filename": "newsletters/taking-the-week-off-4.md",
    "title": "Taking the week off",
    "tags": [
      "b2c",
      "podcast",
      "startups",
      "design",
      "newsletter"
    ],
    "date": "2024-07-16",
    "description": "Back next week!",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 367,
    "type": "newsletter",
    "filename": "newsletters/how-close-is-ai-to-replacing-product-managers.md",
    "title": "How close is AI to replacing product managers?",
    "tags": [
      "ai",
      "strategy",
      "product-management",
      "newsletter",
      "design",
      "career"
    ],
    "date": "2024-07-09",
    "description": "Closer than you think",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 368,
    "type": "newsletter",
    "filename": "newsletters/counterintuitive-advice-for-building-ai-products.md",
    "title": "Counterintuitive advice for building AI products",
    "tags": [
      "design",
      "ai",
      "startups",
      "growth",
      "newsletter",
      "analytics"
    ],
    "date": "2024-07-02",
    "description": "Lessons from 20+ top product builders, including Scott Belsky, Elad Gil, Rahul Vohra, and Sarah Guo",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 369,
    "type": "newsletter",
    "filename": "newsletters/meet-your-lennys-newsletter-fellows.md",
    "title": "Meet your Lenny’s Newsletter Fellows ✨",
    "tags": [
      "design",
      "leadership",
      "newsletter",
      "go-to-market",
      "startups",
      "ai"
    ],
    "date": "2024-07-01",
    "description": "Welcome Tara Seshan, Natalie Rothfels, and Jules Walter 👏",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 370,
    "type": "newsletter",
    "filename": "newsletters/general-management-functional-and-hybrid-models-which-org-design-works-best-for.md",
    "title": "General management, functional, and hybrid models: Which org design works best for top companies?",
    "tags": [
      "design",
      "growth",
      "leadership",
      "strategy",
      "engineering",
      "analytics"
    ],
    "date": "2024-06-25",
    "description": "How stage, North Star metrics, and talent can impact this critical decision",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 371,
    "type": "newsletter",
    "filename": "newsletters/when-and-how-to-run-a-billboard-campaign.md",
    "title": "When and how to run a billboard campaign",
    "tags": [
      "b2b",
      "startups",
      "strategy",
      "b2c",
      "growth",
      "newsletter"
    ],
    "date": "2024-06-18",
    "description": "Is $20K for a spot on Highway 101 worth it?",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 372,
    "type": "newsletter",
    "filename": "newsletters/how-to-use-perplexity-in-your-pm-work.md",
    "title": "How to use Perplexity in your PM work",
    "tags": [
      "newsletter",
      "ai",
      "leadership",
      "strategy",
      "design",
      "product-management"
    ],
    "date": "2024-06-11",
    "description": "27 examples (with actual prompts) of how product managers are using the AI-powered search engine today",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 373,
    "type": "newsletter",
    "filename": "newsletters/in-defense-of-feature-team-product-managers.md",
    "title": "In defense of feature team product managers",
    "tags": [
      "leadership",
      "product-management",
      "design",
      "startups",
      "strategy",
      "newsletter"
    ],
    "date": "2024-06-04",
    "description": "Why feature team PMs are real PMs",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 374,
    "type": "newsletter",
    "filename": "newsletters/taking-the-week-off-3.md",
    "title": "Taking the week off",
    "tags": [
      "newsletter",
      "career",
      "podcast"
    ],
    "date": "2024-05-28",
    "description": "Back next week!",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 375,
    "type": "newsletter",
    "filename": "newsletters/on-saying-no.md",
    "title": "On saying no",
    "tags": [
      "design",
      "newsletter",
      "startups",
      "career",
      "podcast",
      "ai"
    ],
    "date": "2024-05-21",
    "description": "Strategies, templates, and advice on how to stay focused while still being kind",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 376,
    "type": "newsletter",
    "filename": "newsletters/the-art-of-the-pivot-part-2-how-why-and-when-to-pivot.md",
    "title": "The art of the pivot, part 2: How, why, and when to pivot",
    "tags": [
      "startups",
      "design",
      "growth",
      "go-to-market",
      "strategy",
      "newsletter"
    ],
    "date": "2024-05-14",
    "description": "Strategies from the data for your “pivotal” decision",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 377,
    "type": "newsletter",
    "filename": "newsletters/the-art-of-the-pivot-part-1-the-definitive-list-of-successful-pivots.md",
    "title": "The art of the pivot, part 1: The definitive list of successful pivots",
    "tags": [
      "newsletter",
      "startups",
      "b2b",
      "career",
      "design",
      "leadership"
    ],
    "date": "2024-05-07",
    "description": "Details behind 30+ pivots, including how they knew it was time to pivot, how long it took them to pivot, and much more",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 378,
    "type": "newsletter",
    "filename": "newsletters/how-perplexity-builds-product.md",
    "title": "How Perplexity builds product",
    "tags": [
      "design",
      "leadership",
      "newsletter",
      "product-management",
      "ai",
      "career"
    ],
    "date": "2024-04-30",
    "description": "Johnny Ho, co-founder and head of product, explains how he organizes his teams like slime mold, uses AI to build their AI company, and much more",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 379,
    "type": "newsletter",
    "filename": "newsletters/how-to-make-an-impact-in-your-first-90-days.md",
    "title": "How to make an impact in your first 90 days",
    "tags": [
      "design",
      "growth",
      "strategy",
      "pricing",
      "leadership",
      "newsletter"
    ],
    "date": "2024-04-23",
    "description": "25 quick wins from top leaders at Ramp, Canva, HubSpot, Wiz, Google Gemini, Dropbox, and more",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 380,
    "type": "newsletter",
    "filename": "newsletters/how-to-accelerate-growth-by-focusing-on-the-features-you-already-have.md",
    "title": "How to accelerate growth by focusing on the features you already have",
    "tags": [
      "growth",
      "design",
      "analytics",
      "leadership",
      "b2b",
      "newsletter"
    ],
    "date": "2024-04-16",
    "description": "Introducing the ARIA framework",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 381,
    "type": "newsletter",
    "filename": "newsletters/how-ai-will-impact-product-management.md",
    "title": "How AI will impact product management",
    "tags": [
      "ai",
      "design",
      "strategy",
      "product-management",
      "leadership",
      "newsletter"
    ],
    "date": "2024-04-09",
    "description": "Which skills will be affected or replaced, and which will become even more valuable",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 382,
    "type": "newsletter",
    "filename": "newsletters/the-secret-to-duolingos-exponential-growth.md",
    "title": "The secret to Duolingo’s exponential growth",
    "tags": [
      "analytics",
      "growth",
      "go-to-market",
      "strategy",
      "design",
      "leadership"
    ],
    "date": "2024-04-02",
    "description": "Don’t kill the golden goose, maintain a sense of urgency to drive compounding growth, copy first, and more of their biggest growth lessons",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 383,
    "type": "newsletter",
    "filename": "newsletters/become-a-more-technical-product-manager.md",
    "title": "Become a more technical product manager",
    "tags": [
      "engineering",
      "design",
      "leadership",
      "newsletter",
      "product-management",
      "ai"
    ],
    "date": "2024-03-26",
    "description": "Technical foundations for product managers",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 384,
    "type": "newsletter",
    "filename": "newsletters/taking-the-week-off-2.md",
    "title": "Taking the week off",
    "tags": [
      "newsletter",
      "organization"
    ],
    "date": "2024-03-19",
    "description": "Back next week!",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 385,
    "type": "newsletter",
    "filename": "newsletters/my-podcast-tech-stack-workflows-and-lessons.md",
    "title": "My podcast tech stack, workflows, and lessons",
    "tags": [
      "career",
      "design",
      "newsletter",
      "podcast",
      "product-management",
      "go-to-market"
    ],
    "date": "2024-03-12",
    "description": "Celebrating 10 million downloads 🎉",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 386,
    "type": "newsletter",
    "filename": "newsletters/how-to-successfully-launch-on-product-hunt-when-its-right-for-your-startup.md",
    "title": "How to successfully launch on Product Hunt (when it’s right for your startup)",
    "tags": [
      "go-to-market",
      "startups",
      "b2c",
      "growth",
      "design",
      "b2b"
    ],
    "date": "2024-03-05",
    "description": "Seven tips and five myths",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 387,
    "type": "newsletter",
    "filename": "newsletters/how-to-learn-the-most-about-a-candidate-from-a-single-interview-question.md",
    "title": "How to learn the most about a candidate from a single interview question",
    "tags": [
      "design",
      "career",
      "leadership",
      "product-management",
      "growth",
      "newsletter"
    ],
    "date": "2024-02-27",
    "description": "High-signal-to-noise interview questions inspired by my 150+ podcast guests",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 388,
    "type": "newsletter",
    "filename": "newsletters/you-should-be-playing-with-gpts-at-work.md",
    "title": "You should be playing with GPTs at work",
    "tags": [
      "ai",
      "design",
      "leadership",
      "analytics",
      "newsletter",
      "product-management"
    ],
    "date": "2024-02-20",
    "description": "20 examples of how people are using custom GPTs to make their teams more productive",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 389,
    "type": "newsletter",
    "filename": "newsletters/the-ultimate-guide-to-willingness-to-pay.md",
    "title": "The ultimate guide to willingness-to-pay",
    "tags": [
      "pricing",
      "design",
      "newsletter",
      "leadership",
      "growth",
      "strategy"
    ],
    "date": "2024-02-13",
    "description": "How to effectively run your own WTP study, with templates, guides, examples, and more",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 390,
    "type": "newsletter",
    "filename": "newsletters/my-favorite-decision-making-frameworks.md",
    "title": "My favorite decision-making frameworks",
    "tags": [
      "design",
      "leadership",
      "newsletter",
      "career",
      "b2b",
      "b2c"
    ],
    "date": "2024-02-06",
    "description": "Templates and guides to help you make better decisions with less drama",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 391,
    "type": "newsletter",
    "filename": "newsletters/adding-a-work-trial-to-your-interview-process.md",
    "title": "Adding a work trial to your interview process",
    "tags": [
      "career",
      "design",
      "leadership",
      "engineering",
      "startups",
      "newsletter"
    ],
    "date": "2024-01-30",
    "description": "Lessons from Linear, Automattic, 37signals, Gumroad, Auth0, and PostHog",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 392,
    "type": "newsletter",
    "filename": "newsletters/how-gong-builds-product.md",
    "title": "How Gong builds product",
    "tags": [
      "design",
      "leadership",
      "b2b",
      "organization",
      "newsletter",
      "analytics"
    ],
    "date": "2024-01-23",
    "description": "Co-founder and chief product officer Eilon Reshef on autonomy, OKRs, design partners, prioritizing, interviewing, and more",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 393,
    "type": "newsletter",
    "filename": "newsletters/how-to-describe-your-business-as-an-equation.md",
    "title": "How to describe your business as an equation",
    "tags": [
      "b2b",
      "growth",
      "b2c",
      "strategy",
      "newsletter",
      "pricing"
    ],
    "date": "2024-01-16",
    "description": "And why you don’t fully understand your business until you can",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 394,
    "type": "newsletter",
    "filename": "newsletters/what-to-do-if-your-product-isnt-taking-off.md",
    "title": "What to do if your product isn’t taking off",
    "tags": [
      "newsletter",
      "design",
      "startups",
      "b2c",
      "go-to-market",
      "growth"
    ],
    "date": "2024-01-09",
    "description": "Seven steps you can take today to try to turn things around",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 395,
    "type": "newsletter",
    "filename": "newsletters/inspiration-for-the-year-ahead.md",
    "title": "Inspiration for the year ahead",
    "tags": [
      "design",
      "strategy",
      "product-management",
      "startups",
      "growth",
      "leadership"
    ],
    "date": "2024-01-02",
    "description": "Powerful life mottos shared by my podcast guests",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 396,
    "type": "newsletter",
    "filename": "newsletters/taking-the-week-off-and-thank-you.md",
    "title": "Taking the week off (and thank you!)",
    "tags": [
      "newsletter",
      "engineering",
      "podcast"
    ],
    "date": "2023-12-26",
    "description": "Happy holidays, happy new year, and back next year (a.k.a. next week)!",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 397,
    "type": "newsletter",
    "filename": "newsletters/first-principles-thinking.md",
    "title": "First-principles thinking",
    "tags": [
      "design",
      "career",
      "ai",
      "b2c",
      "growth",
      "newsletter"
    ],
    "date": "2023-12-19",
    "description": "What it means, how to apply it, and tons of examples of first-principles thinking in action",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 398,
    "type": "newsletter",
    "filename": "newsletters/the-best-of-lennys-newsletter-2023.md",
    "title": "The Best of Lenny’s Newsletter 2023",
    "tags": [
      "newsletter",
      "design",
      "growth",
      "strategy",
      "product-management",
      "career"
    ],
    "date": "2023-12-12",
    "description": "The single best way to discover my all-time best stuff across both the newsletter and podcast",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 399,
    "type": "newsletter",
    "filename": "newsletters/lessons-on-building-a-viral-consumer-app-the-story-of-saturn.md",
    "title": "Lessons on building a viral consumer app: The story of Saturn",
    "tags": [
      "design",
      "b2c",
      "go-to-market",
      "growth",
      "startups",
      "strategy"
    ],
    "date": "2023-12-05",
    "description": "How single-player utility, hyper-personalization, doing things unscalably, and thinking long-term helped us bootstrap a brand-new social network",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 400,
    "type": "newsletter",
    "filename": "newsletters/lessons-from-going-freemium-a-decision-that-broke-our-business.md",
    "title": "Lessons from going freemium: a decision that broke our business",
    "tags": [
      "design",
      "b2b",
      "growth",
      "startups",
      "pricing",
      "analytics"
    ],
    "date": "2023-11-28",
    "description": "How freemium and no-friction onboarding reversed our growth, and how we got back on track",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 401,
    "type": "newsletter",
    "filename": "newsletters/a-new-parent-gift-guide.md",
    "title": "A new-parent gift guide",
    "tags": [
      "design",
      "newsletter",
      "engineering",
      "career",
      "ai",
      "b2c"
    ],
    "date": "2023-11-21",
    "description": "My favorite products for early parenthood to help your kid hit their KPIs",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 402,
    "type": "newsletter",
    "filename": "newsletters/when-they-hired-their-first-pm.md",
    "title": "When they hired their first PM",
    "tags": [
      "product-management",
      "startups",
      "leadership",
      "design",
      "strategy",
      "career"
    ],
    "date": "2023-11-14",
    "description": "Lessons, timelines, and stories from Pinterest, Looker, Instagram, Segment, Snap, Notion, and 25+ other top companies",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 403,
    "type": "newsletter",
    "filename": "newsletters/introducing-drice-a-modern-prioritization-framework.md",
    "title": "Introducing DRICE: a modern prioritization framework",
    "tags": [
      "leadership",
      "engineering",
      "design",
      "product-management",
      "growth",
      "pricing"
    ],
    "date": "2023-11-07",
    "description": "Boost your experiment win rate and help your team drive more impact",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 404,
    "type": "newsletter",
    "filename": "newsletters/lessons-learned-from-a-startup-that-didnt-make-it.md",
    "title": "Lessons learned from a startup that didn’t make it",
    "tags": [
      "strategy",
      "leadership",
      "design",
      "startups",
      "newsletter",
      "b2b"
    ],
    "date": "2023-10-31",
    "description": "What not to do when building a B2B startup",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 405,
    "type": "newsletter",
    "filename": "newsletters/scaling-your-b2b-growth-engine.md",
    "title": "Scaling your B2B growth engine",
    "tags": [
      "b2b",
      "growth",
      "newsletter",
      "startups",
      "design",
      "pricing"
    ],
    "date": "2023-10-24",
    "description": "Part seven of my seven-part series on kickstarting and scaling a B2B business",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 406,
    "type": "newsletter",
    "filename": "newsletters/how-to-build-a-killer-sales-pitch.md",
    "title": "How to build a killer sales pitch",
    "tags": [
      "b2b",
      "design",
      "go-to-market",
      "startups",
      "strategy",
      "newsletter"
    ],
    "date": "2023-10-17",
    "description": "And why your real competition is “no decision”",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 407,
    "type": "newsletter",
    "filename": "newsletters/skipping-newsletter-today.md",
    "title": "Skipping newsletter today",
    "tags": [
      "newsletter",
      "podcast"
    ],
    "date": "2023-10-10",
    "description": "Given what is happening in the world, we’ve got more important things to focus on right now",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 408,
    "type": "newsletter",
    "filename": "newsletters/hiring-your-early-team.md",
    "title": "Hiring your early team",
    "tags": [
      "startups",
      "design",
      "leadership",
      "engineering",
      "b2b",
      "career"
    ],
    "date": "2023-10-03",
    "description": "Part six of my seven-part series on kickstarting and scaling a B2B business",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 409,
    "type": "newsletter",
    "filename": "newsletters/how-linear-builds-product.md",
    "title": "How Linear builds product",
    "tags": [
      "leadership",
      "design",
      "product-management",
      "engineering",
      "organization",
      "strategy"
    ],
    "date": "2023-09-26",
    "description": "Karri Saarinen, co-founder and CEO, on taste over metrics, product teams over product managers, strategy over OKRs—and the importance of craft, profitability, and good judgment",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 410,
    "type": "newsletter",
    "filename": "newsletters/the-magic-loop.md",
    "title": "The Magic Loop",
    "tags": [
      "leadership",
      "career",
      "design",
      "growth",
      "engineering",
      "newsletter"
    ],
    "date": "2023-09-19",
    "description": "A framework for rapid career growth",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 411,
    "type": "newsletter",
    "filename": "newsletters/a-guide-for-finding-product-market-fit-in-b2b.md",
    "title": "A guide for finding product-market fit in B2B",
    "tags": [
      "startups",
      "strategy",
      "design",
      "b2b",
      "newsletter",
      "leadership"
    ],
    "date": "2023-09-12",
    "description": "Part five of my seven-part series on kickstarting and scaling a B2B business",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 412,
    "type": "newsletter",
    "filename": "newsletters/500000-ten-lessons-learned-from-building-this-newsletter.md",
    "title": "500,000",
    "tags": [
      "newsletter",
      "design",
      "career",
      "growth",
      "leadership",
      "strategy"
    ],
    "date": "2023-09-11",
    "description": "Ten lessons learned from building this newsletter",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 413,
    "type": "newsletter",
    "filename": "newsletters/how-to-find-and-win-your-first-10-b2b-customers.md",
    "title": "How to find and win your first 10 B2B customers",
    "tags": [
      "startups",
      "design",
      "b2b",
      "newsletter",
      "leadership",
      "growth"
    ],
    "date": "2023-09-05",
    "description": "Part four of my seven-part series on kickstarting and scaling a B2B business",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 414,
    "type": "newsletter",
    "filename": "newsletters/how-to-identify-your-ideal-customer-profile-icp.md",
    "title": "How to identify your ideal customer profile (ICP)",
    "tags": [
      "startups",
      "b2b",
      "leadership",
      "design",
      "engineering",
      "b2c"
    ],
    "date": "2023-08-29",
    "description": "Part three of my seven-part series on kickstarting and scaling a B2B business",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 415,
    "type": "newsletter",
    "filename": "newsletters/how-to-hire-your-first-growth-team.md",
    "title": "How to hire your first growth team",
    "tags": [
      "growth",
      "leadership",
      "design",
      "startups",
      "strategy",
      "b2b"
    ],
    "date": "2023-08-22",
    "description": "Practical advice from 12 world-class growth experts, including Lauryn Isford, Casey Winters, Melissa Tan, Adam Fishman, Laura Schaffer, John Egan, Hila Qu, Adam Grenier, and Ben Williams",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 416,
    "type": "newsletter",
    "filename": "newsletters/how-to-validate-your-b2b-startup-idea.md",
    "title": "How to validate your B2B startup idea",
    "tags": [
      "startups",
      "design",
      "b2b",
      "newsletter",
      "career",
      "engineering"
    ],
    "date": "2023-08-15",
    "description": "Part two of my seven-part series on how to kickstart and scale a B2B business",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 417,
    "type": "newsletter",
    "filename": "newsletters/how-the-most-successful-b2b-startups-came-up-with-their-original-idea.md",
    "title": "How the most successful B2B startups came up with their original idea",
    "tags": [
      "startups",
      "design",
      "b2b",
      "newsletter",
      "strategy",
      "leadership"
    ],
    "date": "2023-08-08",
    "description": "Part one of my seven-part series on kickstarting and scaling a B2B business",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 418,
    "type": "newsletter",
    "filename": "newsletters/what-is-good-free-to-paid-conversion.md",
    "title": "What is good free-to-paid conversion",
    "tags": [
      "b2b",
      "growth",
      "design",
      "newsletter",
      "pricing",
      "strategy"
    ],
    "date": "2023-08-01",
    "description": "Benchmarks of good and great free-to-paid conversion rates based on a survey of 1,000+ products",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 419,
    "type": "newsletter",
    "filename": "newsletters/how-shopify-builds-product.md",
    "title": "How Shopify builds product",
    "tags": [
      "design",
      "leadership",
      "newsletter",
      "organization",
      "engineering",
      "strategy"
    ],
    "date": "2023-07-25",
    "description": "VP of Product Glen Coates on how Shopify plans around yearly themes, organizes around jobs to be done, tracks using a homegrown tool, why they shifted away from a GM structure, and much more",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 420,
    "type": "newsletter",
    "filename": "newsletters/how-todays-top-consumer-brands-measure-marketings-impact.md",
    "title": "How today’s top consumer brands measure marketing’s impact",
    "tags": [
      "strategy",
      "analytics",
      "design",
      "growth",
      "b2c",
      "leadership"
    ],
    "date": "2023-07-18",
    "description": "Lessons from how 40+ brands measure their marketing impact, including McDonald’s, H&M, TikTok, Amazon, Airbnb, and Uber",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 421,
    "type": "newsletter",
    "filename": "newsletters/how-snowflake-builds-product.md",
    "title": "How Snowflake builds product",
    "tags": [
      "leadership",
      "design",
      "engineering",
      "organization",
      "strategy",
      "newsletter"
    ],
    "date": "2023-07-11",
    "description": "An interview with Jeff Hollan, Director of Product for Snowflake’s Developer Platform and Ecosystem",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 422,
    "type": "newsletter",
    "filename": "newsletters/how-to-pass-any-first-round-interview-even-in-a-terrible-talent-market.md",
    "title": "How to pass any first-round interview (even in a terrible talent market)",
    "tags": [
      "career",
      "design",
      "leadership",
      "newsletter",
      "strategy",
      "engineering"
    ],
    "date": "2023-07-04",
    "description": "Learn how to get that strong yes without burning yourself out with interview prep",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 423,
    "type": "newsletter",
    "filename": "newsletters/what-5-years-at-reddit-taught-us-about-building-for-a-highly-opinionated-user-ba.md",
    "title": "What 5 years at Reddit taught us about building for a highly opinionated user base",
    "tags": [
      "leadership",
      "design",
      "b2c",
      "go-to-market",
      "newsletter",
      "product-management"
    ],
    "date": "2023-06-27",
    "description": "A framework, from the front lines of Reddit, for turning a sometimes combative relationship with users into a strong, productive partnership",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 424,
    "type": "newsletter",
    "filename": "newsletters/how-to-create-an-exceptional-coverage-plan-for-your-parental-leave.md",
    "title": "How to create an exceptional coverage plan for your parental leave",
    "tags": [
      "leadership",
      "design",
      "career",
      "newsletter",
      "organization",
      "b2c"
    ],
    "date": "2023-06-20",
    "description": "A step-by-step guide and plug-and-play template for going on leave with peace of mind",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 425,
    "type": "newsletter",
    "filename": "newsletters/the-unconventional-palantir-principles-that-catalyzed-a-generation-of-startups.md",
    "title": "The unconventional Palantir principles that catalyzed a generation of startups",
    "tags": [
      "design",
      "leadership",
      "startups",
      "b2b",
      "career",
      "growth"
    ],
    "date": "2023-06-13",
    "description": "How the principles we learned at Palantir spawned nine unicorns and 100+ venture-backed companies",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 426,
    "type": "newsletter",
    "filename": "newsletters/how-a-traumatic-brain-injury-made-me-a-better-pm-and-person.md",
    "title": "How a traumatic brain injury made me a better PM—and person",
    "tags": [
      "design",
      "newsletter",
      "product-management",
      "growth",
      "leadership",
      "organization"
    ],
    "date": "2023-06-06",
    "description": "Takeaways from a period of extreme adversity",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 427,
    "type": "newsletter",
    "filename": "newsletters/what-working-at-figma-taught-me-about-customer-obsession.md",
    "title": "What working at Figma taught me about customer obsession",
    "tags": [
      "design",
      "leadership",
      "newsletter",
      "b2b",
      "b2c",
      "startups"
    ],
    "date": "2023-06-02",
    "description": "VP of Product Sho Kuwamoto on the importance of feel, service, and staying close to customers",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 428,
    "type": "newsletter",
    "filename": "newsletters/how-notion-builds-product.md",
    "title": "How Notion builds product",
    "tags": [
      "leadership",
      "design",
      "organization",
      "product-management",
      "newsletter",
      "engineering"
    ],
    "date": "2023-05-30",
    "description": "Chief Product and Technology Officer Michael Manapat on Notion’s evolving internal processes, product reviews, planning cadences, and increasing shift to synchronous communication",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 429,
    "type": "newsletter",
    "filename": "newsletters/how-ramp-builds-product.md",
    "title": "How Ramp builds product",
    "tags": [
      "design",
      "leadership",
      "strategy",
      "organization",
      "b2b",
      "engineering"
    ],
    "date": "2023-05-23",
    "description": "Geoff Charles, VP of Product, on Ramp's unique culture of velocity, efficiency, and empowerment",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 430,
    "type": "newsletter",
    "filename": "newsletters/your-startup-idea-probably-isnt-venture-scale.md",
    "title": "Your startup idea probably isn’t venture-scale",
    "tags": [
      "startups",
      "design",
      "strategy",
      "pricing",
      "growth",
      "leadership"
    ],
    "date": "2023-05-16",
    "description": "And that’s OK",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 431,
    "type": "newsletter",
    "filename": "newsletters/how-miro-builds-product.md",
    "title": "How Miro builds product",
    "tags": [
      "leadership",
      "design",
      "strategy",
      "organization",
      "growth",
      "analytics"
    ],
    "date": "2023-05-09",
    "description": "Varun Parmar, Chief Product Officer at Miro, shares what they've learned about OKRs, planning, design reviews, prioritization, rituals—plus tons of plug-and-play templates you can start using today",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 432,
    "type": "newsletter",
    "filename": "newsletters/how-to-do-linear-regression-and-correlation-analysis.md",
    "title": "How to do linear regression and correlation analysis",
    "tags": [
      "growth",
      "analytics",
      "newsletter",
      "design",
      "ai",
      "product-management"
    ],
    "date": "2023-05-02",
    "description": "Steps, methods, tools, and use cases for locating predictable user actions and improving retention",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 433,
    "type": "newsletter",
    "filename": "newsletters/what-jury-duty-taught-me-about-product-management.md",
    "title": "What jury duty taught me about product management",
    "tags": [
      "leadership",
      "organization",
      "design",
      "newsletter",
      "career",
      "product-management"
    ],
    "date": "2023-04-25",
    "description": "Unexpected parallels and hidden lessons about leadership and product management from my experience on a jury",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 434,
    "type": "newsletter",
    "filename": "newsletters/how-to-use-chatgpt-in-your-pm-work.md",
    "title": "How to use ChatGPT in your PM work",
    "tags": [
      "ai",
      "newsletter",
      "product-management",
      "design",
      "engineering",
      "career"
    ],
    "date": "2023-04-11",
    "description": "Real-life examples (and actual prompts) of how PMs are already using ChatGPT day-to-day",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 435,
    "type": "newsletter",
    "filename": "newsletters/taking-the-week-off.md",
    "title": "Taking the week off",
    "tags": [
      "newsletter",
      "design"
    ],
    "date": "2023-04-04",
    "description": "Back next week!",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 436,
    "type": "newsletter",
    "filename": "newsletters/product-led-marketing.md",
    "title": "Product-led marketing",
    "tags": [
      "design",
      "growth",
      "strategy",
      "b2b",
      "newsletter",
      "engineering"
    ],
    "date": "2023-03-28",
    "description": "How to get traffic and users for your product at a near-$0 CAC",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 437,
    "type": "newsletter",
    "filename": "newsletters/how-duolingo-builds-product.md",
    "title": "How Duolingo builds product",
    "tags": [
      "leadership",
      "design",
      "growth",
      "organization",
      "product-management",
      "engineering"
    ],
    "date": "2023-03-21",
    "description": "Cem Kansu on Duolingo’s unique team structure, steady planning cadence, design review process, OKR templates, team rituals, and more",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 438,
    "type": "newsletter",
    "filename": "newsletters/growth-ideas.md",
    "title": "Growth ideas",
    "tags": [
      "newsletter",
      "design",
      "growth",
      "b2b",
      "go-to-market",
      "leadership"
    ],
    "date": "2023-03-14",
    "description": "A long and growing list of ideas to inspire your team’s thinking on increasing top-of-funnel, monetization, conversion, retention, and velocity",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 439,
    "type": "newsletter",
    "filename": "newsletters/how-duolingo-reignited-user-growth.md",
    "title": "How Duolingo reignited user growth",
    "tags": [
      "growth",
      "leadership",
      "design",
      "newsletter",
      "strategy",
      "analytics"
    ],
    "date": "2023-02-28",
    "description": "The story behind Duolingo's 350% growth acceleration, leaderboards, streaks, notifications, and innovative growth model",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 440,
    "type": "newsletter",
    "filename": "newsletters/how-to-be-prepared-for-layoffs.md",
    "title": "How to be prepared for layoffs",
    "tags": [
      "career",
      "design",
      "newsletter",
      "b2b",
      "b2c",
      "growth"
    ],
    "date": "2023-02-21",
    "description": "What you can do today to avoid getting caught off guard in case layoffs come for you",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 441,
    "type": "newsletter",
    "filename": "newsletters/growth-inflections.md",
    "title": "Growth inflections",
    "tags": [
      "growth",
      "go-to-market",
      "design",
      "strategy",
      "leadership",
      "newsletter"
    ],
    "date": "2023-02-14",
    "description": "Stories behind growth unlocks for Figma, Facebook, Airbnb, YouTube, Tinder, DoorDash, and others",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 442,
    "type": "newsletter",
    "filename": "newsletters/i-built-a-lenny-chatbot-using-gpt-3-heres-how-to-build-your-own.md",
    "title": "I built a Lenny chatbot using GPT-3. Here’s how to build your own.",
    "tags": [
      "ai",
      "design",
      "newsletter",
      "b2c",
      "startups",
      "growth"
    ],
    "date": "2023-02-07",
    "description": "A step-by-step guide to building an AI chatbot",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 443,
    "type": "newsletter",
    "filename": "newsletters/how-coda-builds-product.md",
    "title": "How Coda builds product",
    "tags": [
      "leadership",
      "design",
      "organization",
      "strategy",
      "analytics",
      "newsletter"
    ],
    "date": "2023-01-31",
    "description": "Lane Shackleton, CPO at Coda, shares his team’s templates, day-to-day processes, and hard-earned lessons",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 444,
    "type": "newsletter",
    "filename": "newsletters/five-steps-to-starting-your-product-led-growth-motion-part-2.md",
    "title": "Five steps to starting your product-led growth motion, part 2",
    "tags": [
      "growth",
      "leadership",
      "b2b",
      "design",
      "engineering",
      "analytics"
    ],
    "date": "2023-01-17",
    "description": "A guide to setting up your PLG infrastructure, tool stack, and team",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 445,
    "type": "newsletter",
    "filename": "newsletters/five-steps-to-starting-your-product-led-growth-motion.md",
    "title": "Five steps to starting your product-led growth motion",
    "tags": [
      "growth",
      "b2b",
      "design",
      "leadership",
      "strategy",
      "engineering"
    ],
    "date": "2023-01-10",
    "description": "An in-depth guide to getting started with PLG",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 446,
    "type": "newsletter",
    "filename": "newsletters/virality-is-a-myth-mostly.md",
    "title": "Virality is a myth (mostly)",
    "tags": [
      "growth",
      "design",
      "strategy",
      "b2c",
      "career",
      "startups"
    ],
    "date": "2023-01-03",
    "description": "And why you are probably under-investing in influencers and PR",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 447,
    "type": "newsletter",
    "filename": "newsletters/the-best-of-lennys-newsletter-2022.md",
    "title": "The Best of Lenny’s Newsletter 2022",
    "tags": [
      "newsletter",
      "growth",
      "strategy",
      "leadership",
      "design",
      "product-management"
    ],
    "date": "2022-12-27",
    "description": "If you read one post this year, read this one—my most popular posts and podcasts, categorized and organized",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 448,
    "type": "newsletter",
    "filename": "newsletters/my-favorite-pm-courses.md",
    "title": "My favorite PM courses",
    "tags": [
      "product-management",
      "design",
      "growth",
      "career",
      "leadership",
      "analytics"
    ],
    "date": "2022-12-20",
    "description": "Five courses for senior PMs, and five for up-and-coming PMs",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 449,
    "type": "newsletter",
    "filename": "newsletters/how-to-activate-your-investor-network.md",
    "title": "How to activate your investor network",
    "tags": [
      "startups",
      "design",
      "leadership",
      "strategy",
      "b2b",
      "b2c"
    ],
    "date": "2022-12-06",
    "description": "Examples and tactics for getting the most out of your investors",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 450,
    "type": "newsletter",
    "filename": "newsletters/lennys-newsletter-holiday-gift-guide-2022.md",
    "title": "Lenny’s Newsletter Holiday Gift Guide 2022",
    "tags": [
      "design",
      "newsletter",
      "engineering",
      "analytics",
      "career",
      "growth"
    ],
    "date": "2022-11-29",
    "description": "Last year, I experimented with a holiday gift guide, and it proved to be quite popular (and really fun to do)",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 451,
    "type": "newsletter",
    "filename": "newsletters/startup-to-exit-lessons-from-a-first-time-founder.md",
    "title": "Startup to exit: Lessons from a first-time founder",
    "tags": [
      "startups",
      "design",
      "strategy",
      "leadership",
      "newsletter",
      "growth"
    ],
    "date": "2022-11-22",
    "description": "Why VC funding is a drug, when building in stealth is a mistake, what to do when you lose conviction, how to approach selling your company, and more",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 452,
    "type": "newsletter",
    "filename": "newsletters/how-figma-builds-product.md",
    "title": "How Figma builds product",
    "tags": [
      "design",
      "leadership",
      "product-management",
      "organization",
      "b2c",
      "career"
    ],
    "date": "2022-11-15",
    "description": "Yuhki Yamashita, Chief Product Officer at Figma, shares lessons learned, plug-and-play templates, and fresh insights into how Figma builds product",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 453,
    "type": "newsletter",
    "filename": "newsletters/how-to-determine-your-activation-metric.md",
    "title": "How to determine your activation metric",
    "tags": [
      "growth",
      "leadership",
      "b2b",
      "analytics",
      "design",
      "newsletter"
    ],
    "date": "2022-11-08",
    "description": "Including a deep dive into multi-player B2B SaaS products featuring Figma, Linear, Snyk, Airtable, Slack, Asana, and Sprig",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 454,
    "type": "newsletter",
    "filename": "newsletters/what-is-a-good-activation-rate.md",
    "title": "What is a good activation rate",
    "tags": [
      "growth",
      "design",
      "b2b",
      "newsletter",
      "strategy",
      "leadership"
    ],
    "date": "2022-10-25",
    "description": "Benchmarks and advice for increasing your activation rate, based on a survey of 500+ products",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 455,
    "type": "newsletter",
    "filename": "newsletters/mission--vision--strategy--goals--roadmap--task.md",
    "title": "Mission → Vision → Strategy → Goals → Roadmap → Task",
    "tags": [
      "strategy",
      "newsletter",
      "product-management",
      "design",
      "leadership",
      "go-to-market"
    ],
    "date": "2022-10-18",
    "description": "As taught to us by Oceans Eleven",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 456,
    "type": "newsletter",
    "filename": "newsletters/the-racecar-growth-framework-expanded-and-illustrated.md",
    "title": "The Racecar Growth Framework—expanded and illustrated",
    "tags": [
      "growth",
      "newsletter",
      "b2b",
      "strategy",
      "b2c",
      "go-to-market"
    ],
    "date": "2022-10-11",
    "description": "The culmination of all my GTM and growth research in one image",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 457,
    "type": "newsletter",
    "filename": "newsletters/taking-the-week-off-9.md",
    "title": "Taking the week off",
    "tags": [
      "newsletter",
      "career",
      "growth",
      "leadership",
      "product-management",
      "strategy"
    ],
    "date": "2022-10-04",
    "description": "Back next week!",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 458,
    "type": "newsletter",
    "filename": "newsletters/how-to-get-your-marketing-team-to-drive-more-impact.md",
    "title": "How to get your marketing team to drive more impact",
    "tags": [
      "strategy",
      "leadership",
      "organization",
      "design",
      "newsletter",
      "growth"
    ],
    "date": "2022-09-27",
    "description": "GACCS: A framework for aligning your marketing, product, and sales teams",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 459,
    "type": "newsletter",
    "filename": "newsletters/how-to-get-better-at-influence.md",
    "title": "How to get better at influence",
    "tags": [
      "leadership",
      "strategy",
      "design",
      "growth",
      "newsletter",
      "analytics"
    ],
    "date": "2022-09-20",
    "description": "What Frodo Baggins from Lord of the Rings can teach us about influence",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 460,
    "type": "newsletter",
    "filename": "newsletters/when-to-sunset-a-feature.md",
    "title": "When to sunset a feature",
    "tags": [
      "design",
      "leadership",
      "strategy",
      "go-to-market",
      "growth",
      "newsletter"
    ],
    "date": "2022-09-13",
    "description": "A handy checklist to help decide when it’s time to sunset a product or feature",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 461,
    "type": "newsletter",
    "filename": "newsletters/how-to-measure-cohort-retention.md",
    "title": "How to measure cohort retention",
    "tags": [
      "growth",
      "analytics",
      "b2c",
      "newsletter",
      "design",
      "b2b"
    ],
    "date": "2022-08-30",
    "description": "A deep dive into the formulas, visualizations, and SQL you need to accurately measure and report on cohort retention—a guest post by Olga Berezovsky",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 462,
    "type": "newsletter",
    "filename": "newsletters/all-the-ways-to-grow-your-product.md",
    "title": "All the ways to grow your product",
    "tags": [
      "growth",
      "newsletter",
      "strategy",
      "startups",
      "go-to-market",
      "design"
    ],
    "date": "2022-08-23",
    "description": "Growth engines, turbo boosts, lubricants, kickstarts, and mid-stage accelerants",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 463,
    "type": "newsletter",
    "filename": "newsletters/kickstarting-and-scaling-a-consumer-business-step-6-scale-build-your-growth-engi.md",
    "title": "Kickstarting and scaling a consumer business—Step 6: SCALE: Build your growth engine",
    "tags": [
      "growth",
      "startups",
      "b2c",
      "design",
      "strategy",
      "go-to-market"
    ],
    "date": "2022-08-16",
    "description": "How products grow, how your product will grow, and the GTM motions of today’s biggest consumer apps",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 464,
    "type": "newsletter",
    "filename": "newsletters/how-to-kickstart-and-scale-a-consumer-business-step-5-retain-iterate-until-enoug.md",
    "title": "How to kickstart and scale a consumer business—Step 5: RETAIN: Iterate until enough people stick around",
    "tags": [
      "growth",
      "startups",
      "strategy",
      "b2c",
      "design",
      "analytics"
    ],
    "date": "2022-08-09",
    "description": "How to know if you’ve got product-market fit, how to iterate toward product-market fit, and how long it usually takes",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 465,
    "type": "newsletter",
    "filename": "newsletters/how-to-kickstart-and-scale-a-consumer-business-step-4-find-your-early-adopters-b.md",
    "title": "How to kickstart and scale a consumer business—Step 4: Find your early adopters by doing things that don’t scale",
    "tags": [
      "startups",
      "b2c",
      "newsletter",
      "design",
      "growth",
      "strategy"
    ],
    "date": "2022-07-26",
    "description": "Also, how today’s biggest consumer products got their first 1,000 users",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 466,
    "type": "newsletter",
    "filename": "newsletters/how-to-kickstart-and-scale-a-consumer-business-step-3-craft-your-pitch.md",
    "title": "How to kickstart and scale a consumer business—Step 3: Craft your pitch",
    "tags": [
      "design",
      "go-to-market",
      "strategy",
      "b2c",
      "newsletter",
      "growth"
    ],
    "date": "2022-07-19",
    "description": "Lessons from Pinterest, Netflix, Tinder, Dropbox, DoorDash, Robinhood, Amazon, WhatsApp, and dozens of today’s most successful consumer businesses",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 467,
    "type": "newsletter",
    "filename": "newsletters/how-to-kickstart-and-scale-a-consumer-business-step-2-identify-your-super-specif.md",
    "title": "How to kickstart and scale a consumer business—Step 2: Identify your super-specific who",
    "tags": [
      "design",
      "startups",
      "b2c",
      "newsletter",
      "growth",
      "strategy"
    ],
    "date": "2022-07-12",
    "description": "Lessons from Substack, Netflix, Yelp, Discord, TikTok, Instagram, Cameo, DoorDash, and dozens of others",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 468,
    "type": "newsletter",
    "filename": "newsletters/how-to-kickstart-and-scale-a-consumer-business.md",
    "title": "How to kickstart and scale a consumer business",
    "tags": [
      "startups",
      "design",
      "b2c",
      "newsletter",
      "strategy",
      "growth"
    ],
    "date": "2022-07-05",
    "description": "Step 1: Come up with an idea",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 469,
    "type": "newsletter",
    "filename": "newsletters/what-covid-taught-me-about-product-management.md",
    "title": "What COVID taught me about product management",
    "tags": [
      "strategy",
      "leadership",
      "product-management",
      "growth",
      "design",
      "career"
    ],
    "date": "2022-06-21",
    "description": "I caught COVID over the weekend and I’m taking the week off",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 470,
    "type": "newsletter",
    "filename": "newsletters/how-to-build-trust-in-a-marketplace.md",
    "title": "How to build trust in a marketplace",
    "tags": [
      "design",
      "strategy",
      "b2c",
      "startups",
      "growth",
      "career"
    ],
    "date": "2022-06-14",
    "description": "Lessons from Lyft, Thumbtack, Rover, Snackpass, Peerspace, Shef, Good Dog, and Udemy",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 471,
    "type": "newsletter",
    "filename": "newsletters/ive-launched-a-podcast.md",
    "title": "I’ve launched a podcast!",
    "tags": [
      "design",
      "leadership",
      "career",
      "growth",
      "newsletter",
      "podcast"
    ],
    "date": "2022-06-07",
    "description": "And the first two episodes with Julie Zhuo and Shreyas Doshi are now live!",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 472,
    "type": "newsletter",
    "filename": "newsletters/product-management-career-ladders.md",
    "title": "Product management career ladders",
    "tags": [
      "leadership",
      "product-management",
      "career",
      "newsletter",
      "strategy",
      "design"
    ],
    "date": "2022-05-24",
    "description": "Examples, templates, titles, and attributes from 20+ companies, including Facebook, Google, DoorDash, Airbnb, Instacart, Lyft, Uber, and many more",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 473,
    "type": "newsletter",
    "filename": "newsletters/how-to-win-in-consumer-subscription.md",
    "title": "How to win in consumer subscription",
    "tags": [
      "growth",
      "design",
      "b2c",
      "leadership",
      "strategy",
      "startups"
    ],
    "date": "2022-05-17",
    "description": "Learnings from Noom, Duolingo, Grammarly, Calm, Spotify, Future, Flo, and others",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 474,
    "type": "newsletter",
    "filename": "newsletters/how-to-validate-your-startup-idea.md",
    "title": "How to validate your startup idea",
    "tags": [
      "startups",
      "design",
      "strategy",
      "career",
      "go-to-market",
      "engineering"
    ],
    "date": "2022-05-10",
    "description": "Lessons learned from Flexport, Vanta, Rec Room, LaunchDarkly, Pinwheel, Snackpass, Good Dog, and Cocoon—a guest post by Todd Jackson",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 475,
    "type": "newsletter",
    "filename": "newsletters/what-is-a-good-growth-rate.md",
    "title": "What is a good growth rate",
    "tags": [
      "growth",
      "b2c",
      "startups",
      "go-to-market",
      "pricing",
      "design"
    ],
    "date": "2022-04-26",
    "description": "Benchmarks and insights from the world’s best investors",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 476,
    "type": "newsletter",
    "filename": "newsletters/preparing-for-a-pm-interview.md",
    "title": "Preparing for a PM interview",
    "tags": [
      "career",
      "product-management",
      "leadership",
      "strategy",
      "newsletter",
      "design"
    ],
    "date": "2022-04-19",
    "description": "My favorite resources for getting ready for product interviews",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 477,
    "type": "newsletter",
    "filename": "newsletters/how-to-know-when-to-stop.md",
    "title": "How to know when to stop",
    "tags": [
      "design",
      "newsletter",
      "career",
      "leadership",
      "startups",
      "growth"
    ],
    "date": "2022-04-12",
    "description": "A guide to avoiding burnout and establishing balance in your life—by guest author Andy Johns",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 478,
    "type": "newsletter",
    "filename": "newsletters/the-most-important-marketplace-metrics-to-track.md",
    "title": "The most important marketplace metrics to track",
    "tags": [
      "strategy",
      "growth",
      "design",
      "analytics",
      "newsletter",
      "leadership"
    ],
    "date": "2022-03-29",
    "description": "> ## Q: I’m building a marketplace and am wondering, what KPIs should I focus on and track?",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 479,
    "type": "newsletter",
    "filename": "newsletters/how-to-interview-product-managers.md",
    "title": "How to interview product managers",
    "tags": [
      "career",
      "leadership",
      "product-management",
      "design",
      "newsletter",
      "growth"
    ],
    "date": "2022-03-22",
    "description": "Interview structure, skills to test, questions to ask, project examples, and more",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 480,
    "type": "newsletter",
    "filename": "newsletters/how-to-develop-product-sense.md",
    "title": "How to develop product sense",
    "tags": [
      "design",
      "b2c",
      "newsletter",
      "product-management",
      "analytics",
      "growth"
    ],
    "date": "2022-03-15",
    "description": "With guest author Jules Walter",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 481,
    "type": "newsletter",
    "filename": "newsletters/freemium-vs-trial.md",
    "title": "Freemium vs. trial",
    "tags": [
      "pricing",
      "design",
      "leadership",
      "b2b",
      "growth",
      "strategy"
    ],
    "date": "2022-03-08",
    "description": "Going freemium, adding a trial, business model disruption, and more",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 482,
    "type": "newsletter",
    "filename": "newsletters/what-is-good-waitlist-conversion.md",
    "title": "What is good waitlist conversion",
    "tags": [
      "design",
      "leadership",
      "growth",
      "product-management",
      "newsletter",
      "startups"
    ],
    "date": "2022-03-01",
    "description": "Benchmarks and advice for making the most of your waitlist",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 483,
    "type": "newsletter",
    "filename": "newsletters/reforge-applications-open-and-taking-a-sick-day.md",
    "title": "Reforge applications open (and taking a sick day)",
    "tags": [
      "leadership",
      "product-management",
      "strategy",
      "growth",
      "design",
      "engineering"
    ],
    "date": "2022-02-22",
    "description": "So I’m going to take a sick day (my first) and instead focus on resting and making next week’s post that much better",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 484,
    "type": "newsletter",
    "filename": "newsletters/a-product-managers-guide-to-web3.md",
    "title": "A product manager’s guide to web3",
    "tags": [
      "design",
      "product-management",
      "leadership",
      "strategy",
      "b2c",
      "engineering"
    ],
    "date": "2022-02-15",
    "description": "How PM'ing in web3 is different, the pros and cons of going web3, how to break in, and how to be successful—by guest author Jason Shah, head of product at Alchemy",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 485,
    "type": "newsletter",
    "filename": "newsletters/what-is-good-monthly-churn.md",
    "title": "What is good monthly churn",
    "tags": [
      "growth",
      "b2b",
      "design",
      "newsletter",
      "b2c",
      "analytics"
    ],
    "date": "2022-02-08",
    "description": "Benchmarks for good and great monthly churn, broken down by segment and price point",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 486,
    "type": "newsletter",
    "filename": "newsletters/how-to-get-promoted.md",
    "title": "How to get promoted",
    "tags": [
      "leadership",
      "career",
      "product-management",
      "design",
      "newsletter",
      "strategy"
    ],
    "date": "2022-02-01",
    "description": "7 concrete actions you can take to increase your odds",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 487,
    "type": "newsletter",
    "filename": "newsletters/lessons-from-140-angel-investments.md",
    "title": "Lessons from 140+ angel investments",
    "tags": [
      "startups",
      "design",
      "strategy",
      "growth",
      "career",
      "leadership"
    ],
    "date": "2022-01-25",
    "description": "Biggest surprises, how to get started, what to look for when evaluating companies, plus a ton of advice from many smart investors",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 488,
    "type": "newsletter",
    "filename": "newsletters/the-inside-story-of-facebook-marketplace.md",
    "title": "The inside story of Facebook Marketplace",
    "tags": [
      "strategy",
      "design",
      "go-to-market",
      "leadership",
      "newsletter",
      "growth"
    ],
    "date": "2022-01-18",
    "description": "A guest post by Deb Liu",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 489,
    "type": "newsletter",
    "filename": "newsletters/differentiating-your-product.md",
    "title": "Differentiating your product",
    "tags": [
      "strategy",
      "design",
      "go-to-market",
      "newsletter",
      "leadership",
      "product-management"
    ],
    "date": "2022-01-11",
    "description": "> ## Q: I know differentiation is important, but why is that, and what are ways we can differentiate our product?",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 490,
    "type": "newsletter",
    "filename": "newsletters/prioritizing-at-startups.md",
    "title": "Prioritizing at startups",
    "tags": [
      "design",
      "startups",
      "newsletter",
      "b2b",
      "product-management",
      "strategy"
    ],
    "date": "2022-01-04",
    "description": "A guide for prioritizing at an early-stage B2B startup",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 491,
    "type": "newsletter",
    "filename": "newsletters/the-best-of-2021.md",
    "title": "The Best of 2021",
    "tags": [
      "newsletter",
      "b2c",
      "growth",
      "design",
      "b2b",
      "go-to-market"
    ],
    "date": "2021-12-28",
    "description": "The most popular posts of the year, and a brief look back",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 492,
    "type": "newsletter",
    "filename": "newsletters/taking-the-week-off-8.md",
    "title": "Taking the week off",
    "tags": [
      "newsletter",
      "strategy"
    ],
    "date": "2021-12-21",
    "description": "Back next week!",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 493,
    "type": "newsletter",
    "filename": "newsletters/the-top-5-things-pms-should-know-about-engineering.md",
    "title": "The top 5 things PMs should know about engineering",
    "tags": [
      "engineering",
      "design",
      "leadership",
      "newsletter",
      "product-management",
      "analytics"
    ],
    "date": "2021-12-16",
    "description": "Guest post by Justin Gage, writer of Technically and growth at Retool",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 494,
    "type": "newsletter",
    "filename": "newsletters/what-is-a-good-payback-period.md",
    "title": "What is a good payback period?",
    "tags": [
      "growth",
      "design",
      "b2b",
      "pricing",
      "strategy",
      "b2c"
    ],
    "date": "2021-12-14",
    "description": "Benchmarks for good, great, and exceptional payback periods based on guidance from 16 growth experts",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 495,
    "type": "newsletter",
    "filename": "newsletters/the-atomic-network.md",
    "title": "The Atomic Network",
    "tags": [
      "design",
      "leadership",
      "strategy",
      "product-management",
      "go-to-market",
      "growth"
    ],
    "date": "2021-12-09",
    "description": "Exclusive excerpt from Andrew Chen’s new book, The Cold Start Problem",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 496,
    "type": "newsletter",
    "filename": "newsletters/the-most-common-pitfalls-of-new-product-managers.md",
    "title": "The most common pitfalls of new product managers",
    "tags": [
      "leadership",
      "product-management",
      "strategy",
      "design",
      "newsletter",
      "organization"
    ],
    "date": "2021-12-07",
    "description": "The Coordinator, The Dictator, The Dreamer, The Feature Factory, and The Busted Umbrella",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 497,
    "type": "newsletter",
    "filename": "newsletters/a-founders-guide-to-community.md",
    "title": "A founder’s guide to community",
    "tags": [
      "b2c",
      "design",
      "growth",
      "startups",
      "leadership",
      "b2b"
    ],
    "date": "2021-11-30",
    "description": "When to invest in community, how to get started, setting goals, crafting a strategy, hiring, scaling, and much more—guest post by David Spinks",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 498,
    "type": "newsletter",
    "filename": "newsletters/lennys-holiday-gift-guide.md",
    "title": "Lenny’s holiday gift guide",
    "tags": [
      "design",
      "engineering",
      "newsletter",
      "leadership",
      "b2c",
      "growth"
    ],
    "date": "2021-11-25",
    "description": "50+ gift ideas for your friends, family, and coworkers",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 499,
    "type": "newsletter",
    "filename": "newsletters/the-most-important-consumer-metrics-to-track.md",
    "title": "The most important consumer metrics to track",
    "tags": [
      "growth",
      "analytics",
      "design",
      "b2c",
      "leadership",
      "newsletter"
    ],
    "date": "2021-11-23",
    "description": "Which metrics matter most when building a B2C product",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 500,
    "type": "newsletter",
    "filename": "newsletters/what-is-product-management.md",
    "title": "What is product management",
    "tags": [
      "product-management",
      "leadership",
      "newsletter",
      "career",
      "strategy",
      "startups"
    ],
    "date": "2021-11-16",
    "description": "My take on the PM role",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 501,
    "type": "newsletter",
    "filename": "newsletters/six-rules-of-hiring-for-growth.md",
    "title": "Six rules of hiring for growth",
    "tags": [
      "growth",
      "leadership",
      "design",
      "strategy",
      "pricing",
      "b2b"
    ],
    "date": "2021-11-09",
    "description": "How to hire and build your growth team—guest post by Elena Verna",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 502,
    "type": "newsletter",
    "filename": "newsletters/applications-now-open-for-my-live-course-product-management-fundamentals.md",
    "title": "🚨 Applications now open for my live course—Product Management Fundamentals",
    "tags": [
      "product-management",
      "analytics",
      "career",
      "design",
      "leadership",
      "strategy"
    ],
    "date": "2021-11-05",
    "description": "A three-week part-time live course with in-depth lectures, real-world assignments, special guests, and much more",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 503,
    "type": "newsletter",
    "filename": "newsletters/breaking-into-growth.md",
    "title": "Breaking into growth",
    "tags": [
      "growth",
      "design",
      "newsletter",
      "leadership",
      "analytics",
      "product-management"
    ],
    "date": "2021-11-02",
    "description": "## ✨ Announcement: Applications for my PM course now open ✨",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 504,
    "type": "newsletter",
    "filename": "newsletters/picking-a-wedge.md",
    "title": "Picking a wedge",
    "tags": [
      "strategy",
      "design",
      "startups",
      "engineering",
      "b2b",
      "go-to-market"
    ],
    "date": "2021-10-26",
    "description": "When, why, and how to pick a wedge for your product",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 505,
    "type": "newsletter",
    "filename": "newsletters/taking-the-week-off-7.md",
    "title": "Taking the week off",
    "tags": [
      "newsletter",
      "strategy"
    ],
    "date": "2021-10-19",
    "description": "OOTO",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 506,
    "type": "newsletter",
    "filename": "newsletters/60-ideas-to-boost-your-growth.md",
    "title": "60 ideas to boost your growth",
    "tags": [
      "growth",
      "engineering",
      "go-to-market",
      "newsletter",
      "design",
      "b2c"
    ],
    "date": "2021-10-12",
    "description": "A motherload of growth inspiration by guest author Ali Abouelatta, creator of the First 1000 newsletter",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 507,
    "type": "newsletter",
    "filename": "newsletters/my-all-time-favorite-reads-on-product-growth-leadership-writing-investing-and-mu.md",
    "title": "My all-time favorite reads on product, growth, leadership, writing, investing, and much more",
    "tags": [
      "startups",
      "strategy",
      "b2b",
      "growth",
      "design",
      "newsletter"
    ],
    "date": "2021-10-05",
    "description": "200+ links to the most actionable, highest signal-to-noise content",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 508,
    "type": "newsletter",
    "filename": "newsletters/saying-no.md",
    "title": "Saying no",
    "tags": [
      "leadership",
      "design",
      "strategy",
      "newsletter",
      "organization",
      "go-to-market"
    ],
    "date": "2021-09-28",
    "description": "A three-step framework for saying no effectively",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 509,
    "type": "newsletter",
    "filename": "newsletters/the-10-commandments-of-salary-negotiation.md",
    "title": "The 10 commandments of salary negotiation",
    "tags": [
      "design",
      "career",
      "leadership",
      "startups",
      "newsletter",
      "b2b"
    ],
    "date": "2021-09-24",
    "description": "Guest post by Niya Dragova, co-founder of Candor",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 510,
    "type": "newsletter",
    "filename": "newsletters/getting-more-technical.md",
    "title": "Getting more technical",
    "tags": [
      "engineering",
      "product-management",
      "leadership",
      "design",
      "newsletter",
      "growth"
    ],
    "date": "2021-09-21",
    "description": "> ## Q: I don’t have a technical background, and I find it hard to follow what my engineers are saying sometimes and, even worse, to make",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 511,
    "type": "newsletter",
    "filename": "newsletters/how-behavioral-science-can-boost-your-conversion-rates.md",
    "title": "How behavioral science can boost your conversion rates",
    "tags": [
      "design",
      "analytics",
      "leadership",
      "b2b",
      "engineering",
      "growth"
    ],
    "date": "2021-09-17",
    "description": "Guest post by Kristen Berman, co-founder of Irrational Labs",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 512,
    "type": "newsletter",
    "filename": "newsletters/demand-driving-supply-the-little-understood-growth-loop-behind-a-surprising-numb.md",
    "title": "Demand driving supply: The little-understood growth loop behind a surprising number of iconic billion-dollar companies",
    "tags": [
      "growth",
      "design",
      "b2c",
      "strategy",
      "newsletter",
      "startups"
    ],
    "date": "2021-09-14",
    "description": "Guest post by Brian Rothenberg, Partner at Defy.vc, former VP of Growth at Eventbrite, and two-time founder",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 513,
    "type": "newsletter",
    "filename": "newsletters/marketplace-city-expansion-strategy.md",
    "title": "Marketplace city expansion strategy",
    "tags": [
      "strategy",
      "go-to-market",
      "leadership",
      "b2b",
      "design",
      "growth"
    ],
    "date": "2021-09-07",
    "description": "How marketplaces like Instacart, OpenTable, Caviar, Grubhub, and others approached expanding into additional markets",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 514,
    "type": "newsletter",
    "filename": "newsletters/examples-and-templates-of-1-pagers-and-prds.md",
    "title": "Examples and templates of 1-Pagers and PRDs",
    "tags": [
      "design",
      "newsletter",
      "leadership",
      "product-management",
      "engineering",
      "growth"
    ],
    "date": "2021-08-31",
    "description": "I’m looking for a structure I can borrow and inspiration for what great looks like",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 515,
    "type": "newsletter",
    "filename": "newsletters/gtm-motions-of-30-b2b-saas-companies.md",
    "title": "GTM motions of 30 B2B SaaS companies",
    "tags": [
      "b2b",
      "strategy",
      "design",
      "startups",
      "growth",
      "leadership"
    ],
    "date": "2021-08-24",
    "description": "Market segments, target personas, and sales motions—then and now",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 516,
    "type": "newsletter",
    "filename": "newsletters/the-best-of-lennys-newsletter-2021.md",
    "title": "The Best of Lenny’s Newsletter 2021",
    "tags": [
      "newsletter",
      "strategy",
      "product-management",
      "leadership",
      "growth",
      "career"
    ],
    "date": "2021-08-17",
    "description": "My all-time best posts",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 517,
    "type": "newsletter",
    "filename": "newsletters/five-habits-of-highly-annoying-product-managers.md",
    "title": "Five habits of highly annoying product managers",
    "tags": [
      "leadership",
      "design",
      "product-management",
      "newsletter",
      "career",
      "engineering"
    ],
    "date": "2021-08-10",
    "description": "How to not be an annoying PM",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 518,
    "type": "newsletter",
    "filename": "newsletters/how-marketplaces-win.md",
    "title": "How marketplaces win",
    "tags": [
      "strategy",
      "newsletter",
      "design",
      "leadership",
      "product-management",
      "startups"
    ],
    "date": "2021-08-03",
    "description": "Your three paths to marketplace success",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 519,
    "type": "newsletter",
    "filename": "newsletters/prioritizing.md",
    "title": "Prioritizing",
    "tags": [
      "product-management",
      "strategy",
      "leadership",
      "design",
      "newsletter",
      "analytics"
    ],
    "date": "2021-07-27",
    "description": "Tips for prioritizing your roadmap",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 520,
    "type": "newsletter",
    "filename": "newsletters/why-now-2.md",
    "title": "Why now?",
    "tags": [
      "design",
      "startups",
      "strategy",
      "newsletter",
      "leadership",
      "b2b"
    ],
    "date": "2021-07-21",
    "description": "Why it matters for startups to have a strong 'why now'—and also why it doesn't",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 521,
    "type": "newsletter",
    "filename": "newsletters/why-now.md",
    "title": "Why now",
    "tags": [
      "design",
      "leadership",
      "startups",
      "product-management",
      "strategy",
      "newsletter"
    ],
    "date": "2021-07-21",
    "description": "Why it matters for startups to have a strong 'why now'—and also why it doesn't",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 522,
    "type": "newsletter",
    "filename": "newsletters/kickstarting-supply-in-a-labor-marketplace.md",
    "title": "Kickstarting supply in a labor marketplace",
    "tags": [
      "strategy",
      "design",
      "career",
      "growth",
      "b2c",
      "newsletter"
    ],
    "date": "2021-07-13",
    "description": "Growth lessons from over a dozen of today's fastest-growing labor marketplaces",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 523,
    "type": "newsletter",
    "filename": "newsletters/winning-at-early-stage-hiring.md",
    "title": "Winning at early-stage hiring",
    "tags": [
      "leadership",
      "startups",
      "career",
      "design",
      "product-management",
      "strategy"
    ],
    "date": "2021-07-06",
    "description": "Hiring advice from founders who are crushing it",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 524,
    "type": "newsletter",
    "filename": "newsletters/how-to-know-if-youre-doing-a-good-job-as-a-product-manager.md",
    "title": "How to know if you're doing a good job as a product manager",
    "tags": [
      "leadership",
      "product-management",
      "newsletter",
      "design",
      "career",
      "organization"
    ],
    "date": "2021-06-29",
    "description": "The three things you need to get right",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 525,
    "type": "newsletter",
    "filename": "newsletters/finding-your-distribution-advantage.md",
    "title": "Finding your distribution advantage",
    "tags": [
      "growth",
      "design",
      "strategy",
      "startups",
      "leadership",
      "b2c"
    ],
    "date": "2021-06-22",
    "description": "Seven ways to break through the noise",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 526,
    "type": "newsletter",
    "filename": "newsletters/choosing-your-north-star-metric.md",
    "title": "Choosing Your North Star Metric",
    "tags": [
      "strategy",
      "analytics",
      "design",
      "newsletter",
      "growth"
    ],
    "date": "2021-06-16",
    "description": "A guest post on Future—a16z's new media site",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 527,
    "type": "newsletter",
    "filename": "newsletters/my-favorite-pm-interview-questions.md",
    "title": "My favorite PM interview questions",
    "tags": [
      "leadership",
      "career",
      "product-management",
      "design",
      "newsletter",
      "strategy"
    ],
    "date": "2021-06-15",
    "description": "Ten great interview questions for product managers, plus my favorite generalist questions",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 528,
    "type": "newsletter",
    "filename": "newsletters/getting-buy-in.md",
    "title": "Getting buy-in",
    "tags": [
      "leadership",
      "design",
      "product-management",
      "organization",
      "growth",
      "newsletter"
    ],
    "date": "2021-06-10",
    "description": "By special guest contributor Shivani Berry, CEO & Founder of Arise Leadership",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 529,
    "type": "newsletter",
    "filename": "newsletters/how-people-discover-new-products.md",
    "title": "How people discover new products",
    "tags": [
      "growth",
      "design",
      "b2b",
      "newsletter",
      "leadership",
      "b2c"
    ],
    "date": "2021-06-08",
    "description": "The seven places we learn about new stuff",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 530,
    "type": "newsletter",
    "filename": "newsletters/how-long-it-takes-to-find-product-market-fit.md",
    "title": "How long it takes to find Product-Market Fit",
    "tags": [
      "startups",
      "strategy",
      "growth",
      "leadership",
      "design",
      "go-to-market"
    ],
    "date": "2021-06-01",
    "description": "Stories from Cameo, DoorDash, Uber, Faire, Hipcamp, and more",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 531,
    "type": "newsletter",
    "filename": "newsletters/skills-pms-need-to-build.md",
    "title": "Skills PMs need to build",
    "tags": [
      "leadership",
      "strategy",
      "product-management",
      "design",
      "organization",
      "career"
    ],
    "date": "2021-05-25",
    "description": "What I learned from studying twenty PM career ladders",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 532,
    "type": "newsletter",
    "filename": "newsletters/healing-your-co-founder-relationship.md",
    "title": "Healing your co-founder relationship",
    "tags": [
      "leadership",
      "product-management",
      "newsletter",
      "startups",
      "design",
      "growth"
    ],
    "date": "2021-05-18",
    "description": "By special guest contributor Carole Robin, co-creator of Stanford's “Touchy Feely” GSB course",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 533,
    "type": "newsletter",
    "filename": "newsletters/types-of-business-models.md",
    "title": "Types of business models",
    "tags": [
      "design",
      "leadership",
      "product-management",
      "strategy",
      "growth",
      "engineering"
    ],
    "date": "2021-05-11",
    "description": "Issue 77",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 534,
    "type": "newsletter",
    "filename": "newsletters/14-habits-of-highly-effective-product-managers.md",
    "title": "14 habits of highly effective product managers",
    "tags": [
      "leadership",
      "design",
      "product-management",
      "strategy",
      "growth",
      "newsletter"
    ],
    "date": "2021-05-04",
    "description": "Issue 76",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 535,
    "type": "newsletter",
    "filename": "newsletters/three-myths-about-sabbatical-programs.md",
    "title": "Three myths about sabbatical programs",
    "tags": [
      "leadership",
      "design",
      "growth",
      "startups",
      "newsletter",
      "career"
    ],
    "date": "2021-04-27",
    "description": "With return guest DJ DiDonna",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 536,
    "type": "newsletter",
    "filename": "newsletters/on-taking-time-off.md",
    "title": "On taking time off",
    "tags": [
      "career",
      "leadership",
      "design",
      "newsletter",
      "organization",
      "analytics"
    ],
    "date": "2021-04-20",
    "description": "By special guest contributor DJ DiDonna, founder of The Sabbatical Project",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 537,
    "type": "newsletter",
    "filename": "newsletters/why-marketplaces-fail.md",
    "title": "Why marketplaces fail",
    "tags": [
      "strategy",
      "design",
      "startups",
      "leadership",
      "pricing",
      "newsletter"
    ],
    "date": "2021-04-13",
    "description": "The top five marketplaces failure modes — lessons from 30+ marketplaces",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 538,
    "type": "newsletter",
    "filename": "newsletters/choosing-a-take-rate.md",
    "title": "Choosing a take rate",
    "tags": [
      "strategy",
      "design",
      "pricing",
      "b2b",
      "growth",
      "leadership"
    ],
    "date": "2021-04-06",
    "description": "Issue 72",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 539,
    "type": "newsletter",
    "filename": "newsletters/the-minto-pyramid-principle-and-the-scr-framework.md",
    "title": "The Minto Pyramid Principle and the SCR Framework",
    "tags": [
      "leadership",
      "design",
      "strategy",
      "growth",
      "career",
      "b2b"
    ],
    "date": "2021-03-30",
    "description": "Issue 71",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 540,
    "type": "newsletter",
    "filename": "newsletters/the-pm--design-partnership.md",
    "title": "The PM 🤝 Design Partnership",
    "tags": [
      "design",
      "leadership",
      "strategy",
      "product-management",
      "newsletter",
      "organization"
    ],
    "date": "2021-03-23",
    "description": "Five tips for PMs working with designers — guest post by Katie Dill",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 541,
    "type": "newsletter",
    "filename": "newsletters/defending-your-big-bets.md",
    "title": "Defending your big bets",
    "tags": [
      "leadership",
      "design",
      "product-management",
      "career",
      "newsletter",
      "engineering"
    ],
    "date": "2021-03-16",
    "description": "Issue 69",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 542,
    "type": "newsletter",
    "filename": "newsletters/whats-in-your-software-stack---product-design-analytics-ds-research-and-more.md",
    "title": "What's in your software stack — Product, Design, Analytics, DS, Research, and more",
    "tags": [
      "design",
      "engineering",
      "analytics",
      "career",
      "leadership",
      "newsletter"
    ],
    "date": "2021-03-09",
    "description": "Issue 68",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 543,
    "type": "newsletter",
    "filename": "newsletters/content-driven-growth.md",
    "title": "Content-driven growth",
    "tags": [
      "growth",
      "leadership",
      "design",
      "strategy",
      "startups",
      "newsletter"
    ],
    "date": "2021-03-02",
    "description": "Advice from HubSpot, Ahrefs, Intercom, Slidebean, and Webflow",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 544,
    "type": "newsletter",
    "filename": "newsletters/examples-of-great-job-postings.md",
    "title": "Examples of great job postings",
    "tags": [
      "career",
      "leadership",
      "design",
      "growth",
      "engineering",
      "newsletter"
    ],
    "date": "2021-02-23",
    "description": "Issue 66",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 545,
    "type": "newsletter",
    "filename": "newsletters/li-jin-launches-atelier-ventures-her-debut-fund-to-invest-in-the-passion-economy.md",
    "title": "Li Jin launches Atelier Ventures, her debut fund to invest in the passion economy",
    "tags": [
      "startups",
      "b2c",
      "design",
      "strategy",
      "leadership",
      "newsletter"
    ],
    "date": "2021-02-16",
    "description": "A special edition of Lenny's Newsletter",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 546,
    "type": "newsletter",
    "filename": "newsletters/becoming-a-senior-product-manager.md",
    "title": "Becoming a senior Product Manager",
    "tags": [
      "strategy",
      "leadership",
      "product-management",
      "career",
      "design",
      "go-to-market"
    ],
    "date": "2021-02-09",
    "description": "by Jackie Bavaro",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 547,
    "type": "newsletter",
    "filename": "newsletters/how-to-increase-virality.md",
    "title": "How to increase virality",
    "tags": [
      "growth",
      "design",
      "strategy",
      "b2c",
      "b2b",
      "startups"
    ],
    "date": "2021-02-02",
    "description": "> # Q: Is it possible to increase the virality of my product?",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 548,
    "type": "newsletter",
    "filename": "newsletters/positioning.md",
    "title": "Positioning",
    "tags": [
      "go-to-market",
      "strategy",
      "b2b",
      "design",
      "leadership",
      "startups"
    ],
    "date": "2021-01-26",
    "description": "By April Dunford",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 549,
    "type": "newsletter",
    "filename": "newsletters/should-i-become-a-product-manager.md",
    "title": "Should I become a product manager",
    "tags": [
      "leadership",
      "product-management",
      "design",
      "engineering",
      "strategy",
      "career"
    ],
    "date": "2021-01-19",
    "description": "> ## Q: I'm considering venturing into product management after being a software engineer for 3 years",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 550,
    "type": "newsletter",
    "filename": "newsletters/increasing-team-velocity.md",
    "title": "Increasing team velocity",
    "tags": [
      "leadership",
      "design",
      "engineering",
      "newsletter",
      "organization",
      "growth"
    ],
    "date": "2021-01-12",
    "description": "> ## Q: I’m constantly feeling like my team is moving too slowly",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 551,
    "type": "newsletter",
    "filename": "newsletters/the-most-important-consumer-subscription-metrics-to-track.md",
    "title": "The most important consumer subscription metrics to track",
    "tags": [
      "growth",
      "analytics",
      "b2c",
      "design",
      "pricing",
      "newsletter"
    ],
    "date": "2021-01-05",
    "description": "> ## Q: I read your post about the most important bottom-up SaaS metrics to track, and I was wondering – do you have the same kind of advice",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 552,
    "type": "newsletter",
    "filename": "newsletters/2020-year-in-review---issue-58.md",
    "title": "2020 Year in Review – Issue 58",
    "tags": [
      "growth",
      "newsletter",
      "strategy",
      "b2c",
      "b2b",
      "design"
    ],
    "date": "2020-12-29",
    "description": "Most popular posts, tweets, and a reflection on the year",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 553,
    "type": "newsletter",
    "filename": "newsletters/a-comprehensive-survey-of-product-management.md",
    "title": "A comprehensive survey of Product Management",
    "tags": [
      "leadership",
      "design",
      "product-management",
      "engineering",
      "newsletter",
      "analytics"
    ],
    "date": "2020-12-22",
    "description": "👋 Hello, I’m Lenny and welcome to a ✨ once-a-month-free-edition✨ of my newsletter",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 554,
    "type": "newsletter",
    "filename": "newsletters/how-to-run-seo-experiments.md",
    "title": "How to run SEO experiments",
    "tags": [
      "analytics",
      "design",
      "b2c",
      "growth",
      "go-to-market",
      "newsletter"
    ],
    "date": "2020-12-15",
    "description": "And it makes sense — SEO is one of the few remaining “free” growth channels, and still somewhat mysterious",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 555,
    "type": "newsletter",
    "filename": "newsletters/ideal-sprint-length-designer-vs-pm-roles-running-pm-team-meetings-running-post-m.md",
    "title": "Ideal sprint length, designer vs. PM roles, running PM team meetings, running post-mortems, best product/executive coaches, and much more",
    "tags": [
      "leadership",
      "design",
      "product-management",
      "engineering",
      "organization",
      "go-to-market"
    ],
    "date": "2020-12-11",
    "description": "🤩 Community Wisdom - Issue 13",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 556,
    "type": "newsletter",
    "filename": "newsletters/generating-buzz-2.md",
    "title": "Generating buzz",
    "tags": [
      "go-to-market",
      "b2b",
      "design",
      "leadership",
      "startups",
      "b2c"
    ],
    "date": "2020-12-08",
    "description": "This is a peek at this week’s 🔒 subscriber-only 🔒 post.",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 557,
    "type": "newsletter",
    "filename": "newsletters/generating-buzz.md",
    "title": "Generating buzz",
    "tags": [
      "go-to-market",
      "design",
      "strategy",
      "growth",
      "newsletter",
      "startups"
    ],
    "date": "2020-12-08",
    "description": "Ten strategies and 49 examples of successful buzz making",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 558,
    "type": "newsletter",
    "filename": "newsletters/seo-keywords-career-ladders-backlog-tools-copywriting-onlyfans-ama-with-pete-kaz.md",
    "title": "SEO keywords, career ladders, backlog tools, copywriting, OnlyFans, AMA with Pete Kazanjy and much more",
    "tags": [
      "leadership",
      "design",
      "product-management",
      "career",
      "b2b",
      "newsletter"
    ],
    "date": "2020-12-04",
    "description": "🤩 Community Wisdom - Issue 12",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 559,
    "type": "newsletter",
    "filename": "newsletters/when-not-to-run-an-experiment---issue-54.md",
    "title": "When NOT to run an experiment – Issue 54",
    "tags": [
      "analytics",
      "design",
      "growth",
      "leadership",
      "newsletter",
      "engineering"
    ],
    "date": "2020-12-01",
    "description": "> ## Q: Should I always run an experiment when I make a change to my product?",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 560,
    "type": "newsletter",
    "filename": "newsletters/the-transition-layering-sales-onto-a-bottom-up-self-serve-product.md",
    "title": "The Transition: Layering sales onto a bottom-up self-serve product",
    "tags": [
      "b2b",
      "growth",
      "strategy",
      "design",
      "leadership",
      "startups"
    ],
    "date": "2020-11-24",
    "description": "By Pete Kazanjy",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 561,
    "type": "newsletter",
    "filename": "newsletters/magical-growth-loops.md",
    "title": "Magical growth loops",
    "tags": [
      "design",
      "growth",
      "strategy",
      "newsletter",
      "b2c",
      "startups"
    ],
    "date": "2020-11-17",
    "description": "> ## Q: Can you share examples of companies that found innovative growth loops, like marketplaces convincing their supply to drive their",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 562,
    "type": "newsletter",
    "filename": "newsletters/startup-pm-vs-big-company-pm.md",
    "title": "Startup PM vs. big company PM",
    "tags": [
      "leadership",
      "product-management",
      "design",
      "growth",
      "engineering",
      "strategy"
    ],
    "date": "2020-11-10",
    "description": "> ## Q: I’m transitioning from being the first (and only) Product Manager at a small company to being a PM at a big company",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 563,
    "type": "newsletter",
    "filename": "newsletters/managing-up.md",
    "title": "Managing up",
    "tags": [
      "leadership",
      "design",
      "engineering",
      "growth",
      "newsletter",
      "strategy"
    ],
    "date": "2020-11-03",
    "description": "> ## Q: I’m finding it tough to work with my manager",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 564,
    "type": "newsletter",
    "filename": "newsletters/pricing-your-saas-product.md",
    "title": "Pricing your SaaS product",
    "tags": [
      "pricing",
      "b2b",
      "strategy",
      "analytics",
      "growth",
      "leadership"
    ],
    "date": "2020-10-27",
    "description": "By Patrick Campbell, CEO of ProfitWell",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 565,
    "type": "newsletter",
    "filename": "newsletters/the-most-important-bottom-up-saas-metrics-to-track-and-how-to-best-visualize-the.md",
    "title": "The most important bottom-up SaaS metrics to track (and how to best visualize them)",
    "tags": [
      "growth",
      "analytics",
      "pricing",
      "b2b",
      "startups",
      "design"
    ],
    "date": "2020-10-20",
    "description": "Metrics to focus on, what tools to use, and how to best visualize and share these metrics",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 566,
    "type": "newsletter",
    "filename": "newsletters/the-most-important-bottom-up-saas-metrics-to-track.md",
    "title": "The most important bottom-up SaaS metrics to track",
    "tags": [
      "growth",
      "analytics",
      "b2b",
      "startups",
      "pricing",
      "design"
    ],
    "date": "2020-10-20",
    "description": "> ## Q: I’m curious what metrics early-stage bottom-up SaaS startups track and how they visualize these metrics –– especially metrics other",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 567,
    "type": "newsletter",
    "filename": "newsletters/moving-from-ic-product-manager-to-manager-of-product-managers.md",
    "title": "Moving from IC product manager to manager of product managers",
    "tags": [
      "leadership",
      "product-management",
      "strategy",
      "design",
      "career",
      "growth"
    ],
    "date": "2020-10-13",
    "description": "The biggest surprises about the switch, advice for setting yourself up for the move, and tips for being successful in the new role",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 568,
    "type": "newsletter",
    "filename": "newsletters/top-5-most-interesting-things-about-bookingcoms-early-growth-strategy---issue-46.md",
    "title": "Top 5 most interesting things about Booking.com's early growth strategy – Issue 46",
    "tags": [
      "growth",
      "strategy",
      "leadership",
      "design",
      "engineering",
      "b2c"
    ],
    "date": "2020-10-06",
    "description": "An exclusive companion piece to today's First Round Review",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 569,
    "type": "newsletter",
    "filename": "newsletters/what-it-feels-like-when-youve-found-product-market-fit.md",
    "title": "What it feels like when you've found product-market fit",
    "tags": [
      "startups",
      "strategy",
      "go-to-market",
      "b2b",
      "b2c",
      "design"
    ],
    "date": "2020-09-29",
    "description": "Stories from the founders of Netflix, Uber, Airbnb, Substack, Stripe, Datadog, GitHub, Segment, Dropbox, Superhuman, Instacart, Nextdoor, and many more",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 570,
    "type": "newsletter",
    "filename": "newsletters/fostering-a-culture-of-experimentation.md",
    "title": "Fostering a culture of experimentation",
    "tags": [
      "leadership",
      "analytics",
      "design",
      "growth",
      "engineering",
      "strategy"
    ],
    "date": "2020-09-22",
    "description": "Each week I tackle reader questions about product, growth, working with humans, and anything else that’s stressing you out at the office",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 571,
    "type": "newsletter",
    "filename": "newsletters/when-to-hire-your-first-product-manager.md",
    "title": "When to hire your first product manager",
    "tags": [
      "product-management",
      "leadership",
      "design",
      "startups",
      "engineering",
      "career"
    ],
    "date": "2020-09-15",
    "description": "Each week I tackle reader questions about product, growth, working with humans, and anything else that’s stressing you out at the office",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 572,
    "type": "newsletter",
    "filename": "newsletters/getting-better-at-product-strategy.md",
    "title": "Getting better at product strategy",
    "tags": [
      "strategy",
      "leadership",
      "design",
      "organization",
      "product-management",
      "newsletter"
    ],
    "date": "2020-09-08",
    "description": "Each week I tackle reader questions about product, growth, working with humans, and anything else that’s stressing you out at the office",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 573,
    "type": "newsletter",
    "filename": "newsletters/a-playbook-for-fundraising.md",
    "title": "A playbook for fundraising",
    "tags": [
      "startups",
      "design",
      "strategy",
      "growth",
      "career",
      "newsletter"
    ],
    "date": "2020-09-01",
    "description": "Practical advice for navigating the fundraising process by Marc McCabe",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 574,
    "type": "newsletter",
    "filename": "newsletters/how-to-increase-your-retention.md",
    "title": "How to increase your retention",
    "tags": [
      "growth",
      "analytics",
      "design",
      "newsletter",
      "strategy",
      "leadership"
    ],
    "date": "2020-08-25",
    "description": "A peek at this week's 🔓 subscriber-only 🔓 post",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 575,
    "type": "newsletter",
    "filename": "newsletters/how-to-increase-your-products-retention.md",
    "title": "How to increase your product's retention",
    "tags": [
      "growth",
      "analytics",
      "design",
      "newsletter",
      "strategy",
      "b2b"
    ],
    "date": "2020-08-25",
    "description": "Each week I tackle reader questions about product, growth, working with humans, and anything else that’s stressing you out at the office",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 576,
    "type": "newsletter",
    "filename": "newsletters/flywheels-flywheels-flywheels.md",
    "title": "Flywheels, flywheels, flywheels",
    "tags": [
      "design",
      "leadership",
      "engineering",
      "growth",
      "b2b",
      "career"
    ],
    "date": "2020-08-18",
    "description": "Each week I tackle reader questions about product, growth, working with humans, and anything else that’s stressing you out at the office",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 577,
    "type": "newsletter",
    "filename": "newsletters/navigating-your-early-career.md",
    "title": "Navigating your early career",
    "tags": [
      "career",
      "design",
      "leadership",
      "newsletter",
      "engineering",
      "startups"
    ],
    "date": "2020-08-11",
    "description": "Things like knowing what role to be in a company, when to quit a job, when and set out for another new adventure?",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 578,
    "type": "newsletter",
    "filename": "newsletters/my-favorite-product-management-templates.md",
    "title": "My favorite product management templates",
    "tags": [
      "strategy",
      "design",
      "engineering",
      "leadership",
      "b2b",
      "go-to-market"
    ],
    "date": "2020-08-04",
    "description": "1-pagers, strategy, GTM, and more",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 579,
    "type": "newsletter",
    "filename": "newsletters/how-todays-fastest-growing-b2b-startups-turned-their-early-users-into-paying-cus.md",
    "title": "How today's fastest-growing B2B startups turned their early users into paying customers",
    "tags": [
      "b2b",
      "strategy",
      "leadership",
      "pricing",
      "design",
      "go-to-market"
    ],
    "date": "2020-07-28",
    "description": "Part two in our series on B2B growth strategy",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 580,
    "type": "newsletter",
    "filename": "newsletters/how-todays-fastest-growing-b2b-businesses-turned-their-early-users-into-paying-c.md",
    "title": "How today's fastest-growing B2B businesses turned their early users into paying customers – Issue 36",
    "tags": [
      "b2b",
      "strategy",
      "leadership",
      "pricing",
      "go-to-market",
      "startups"
    ],
    "date": "2020-07-28",
    "description": "They then worked with their power-users to figure out what the paid plans should be",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 581,
    "type": "newsletter",
    "filename": "newsletters/autonomy-vs-direction---issue-35.md",
    "title": "Autonomy vs. direction - Issue 35",
    "tags": [
      "leadership",
      "design",
      "newsletter",
      "b2b",
      "engineering",
      "career"
    ],
    "date": "2020-07-21",
    "description": "If you find this newsletter valuable, consider sharing it with friends, or subscribe if you haven’t already 👇",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 582,
    "type": "newsletter",
    "filename": "newsletters/winning-at-seo.md",
    "title": "Winning at SEO",
    "tags": [
      "design",
      "strategy",
      "startups",
      "newsletter",
      "b2b",
      "growth"
    ],
    "date": "2020-07-14",
    "description": "If you find this newsletter valuable, consider sharing it with friends, or subscribe if you haven’t already 👇",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 583,
    "type": "newsletter",
    "filename": "newsletters/how-todays-fastest-growing-b2b-businesses-found-their-first-ten-customers.md",
    "title": "How today's fastest growing B2B businesses found their first ten customers",
    "tags": [
      "b2b",
      "startups",
      "design",
      "strategy",
      "b2c",
      "growth"
    ],
    "date": "2020-07-07",
    "description": "Lessons from Figma, Stripe, Airtable, Shopify, Carta, Gusto and many many more",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 584,
    "type": "newsletter",
    "filename": "newsletters/surviving-reorgs-tactically-and-emotionally---issue-32.md",
    "title": "Surviving reorgs, tactically and emotionally - Issue 32",
    "tags": [
      "leadership",
      "design",
      "career",
      "newsletter",
      "strategy",
      "growth"
    ],
    "date": "2020-06-30",
    "description": "If you find this newsletter valuable, consider sharing it with friends, or subscribe if you haven’t already 👇",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 585,
    "type": "newsletter",
    "filename": "newsletters/evaluating-a-marketplace-business-idea---issue-31.md",
    "title": "Evaluating a (marketplace) business idea - Issue 31",
    "tags": [
      "strategy",
      "growth",
      "startups",
      "design",
      "leadership",
      "newsletter"
    ],
    "date": "2020-06-23",
    "description": "A free preview of this week's subscriber-only post",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 586,
    "type": "newsletter",
    "filename": "newsletters/evaluating-a-marketplace-business-idea.md",
    "title": "Evaluating a (marketplace) business idea",
    "tags": [
      "strategy",
      "startups",
      "design",
      "growth",
      "leadership",
      "pricing"
    ],
    "date": "2020-06-23",
    "description": "The top seven things to look for when evaluating a marketplace business idea – or any business idea",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 587,
    "type": "newsletter",
    "filename": "newsletters/one-team-one-roadmap---issue-30.md",
    "title": "One team, one roadmap - Issue 30",
    "tags": [
      "leadership",
      "product-management",
      "design",
      "newsletter",
      "organization",
      "growth"
    ],
    "date": "2020-06-16",
    "description": "If you find this newsletter valuable, consider sharing it with friends or subscribe if you haven’t already 👇",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 588,
    "type": "newsletter",
    "filename": "newsletters/what-is-good-retention.md",
    "title": "What is good retention?",
    "tags": [
      "growth",
      "design",
      "b2b",
      "b2c",
      "pricing",
      "strategy"
    ],
    "date": "2020-06-09",
    "description": "Hello, and welcome to the free monthly editionof my weekly newsletter",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 589,
    "type": "newsletter",
    "filename": "newsletters/what-to-ask-your-users-about-product-market-fit.md",
    "title": "What to ask your users about Product-Market Fit",
    "tags": [
      "strategy",
      "design",
      "growth",
      "newsletter",
      "startups",
      "b2c"
    ],
    "date": "2020-06-02",
    "description": "When I talk to my users, do you have any advice on what questions I should ask them to help me know if I’m on the right track?",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 590,
    "type": "newsletter",
    "filename": "newsletters/prioritizing-conversion-opportunities.md",
    "title": "Prioritizing conversion opportunities",
    "tags": [
      "growth",
      "design",
      "strategy",
      "go-to-market",
      "leadership",
      "b2c"
    ],
    "date": "2020-05-26",
    "description": "Each week I tackle reader questions about product, growth, working with humans, and anything else that’s stressing you out at the office",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 591,
    "type": "newsletter",
    "filename": "newsletters/communicating-bad-news---issue-26-2.md",
    "title": "Communicating bad news - Issue 26",
    "tags": [
      "leadership",
      "analytics",
      "newsletter",
      "design",
      "go-to-market",
      "product-management"
    ],
    "date": "2020-05-19",
    "description": "Consider joining as a paid subscriber to support this newsletter 🔓",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 592,
    "type": "newsletter",
    "filename": "newsletters/communicating-bad-news---issue-26.md",
    "title": "Communicating bad news - Issue 26",
    "tags": [
      "leadership",
      "newsletter",
      "analytics",
      "go-to-market",
      "design",
      "b2c"
    ],
    "date": "2020-05-19",
    "description": "Each week I tackle reader questions about product, growth, working with humans, and anything else that’s stressing you out at the office",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 593,
    "type": "newsletter",
    "filename": "newsletters/how-the-biggest-consumer-apps-got-their-first-1000-users.md",
    "title": "How the biggest consumer apps got their first 1,000 users",
    "tags": [
      "startups",
      "leadership",
      "strategy",
      "b2c",
      "design",
      "go-to-market"
    ],
    "date": "2020-05-12",
    "description": "How to Kickstart and Scale a Marketplace Business 3",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 594,
    "type": "newsletter",
    "filename": "newsletters/joining-as-the-first-product-manager.md",
    "title": "Joining as the first product manager",
    "tags": [
      "product-management",
      "leadership",
      "design",
      "startups",
      "career",
      "strategy"
    ],
    "date": "2020-05-05",
    "description": "And surviving it to tell the tale",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 595,
    "type": "newsletter",
    "filename": "newsletters/setting-goals---issue-23.md",
    "title": "Setting goals - Issue 23",
    "tags": [
      "strategy",
      "leadership",
      "design",
      "newsletter",
      "engineering",
      "organization"
    ],
    "date": "2020-04-29",
    "description": "🔐 This is a preview of a subscriber-only post🔐",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 596,
    "type": "newsletter",
    "filename": "newsletters/setting-goals.md",
    "title": "Setting goals",
    "tags": [
      "leadership",
      "design",
      "strategy",
      "growth",
      "newsletter",
      "go-to-market"
    ],
    "date": "2020-04-28",
    "description": "If you find this newsletter valuable, consider sharing it with friends",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 597,
    "type": "newsletter",
    "filename": "newsletters/using-your-working-time-well---issue-22-2.md",
    "title": "Using your working time well - Issue 22",
    "tags": [
      "newsletter"
    ],
    "date": "2020-04-21",
    "description": "🔐 This is a free preview of a subscriber-only post 🔐",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 598,
    "type": "newsletter",
    "filename": "newsletters/using-your-working-time-well---issue-22.md",
    "title": "Using your working time well - Issue 22",
    "tags": [
      "leadership",
      "newsletter",
      "product-management",
      "design",
      "career",
      "growth"
    ],
    "date": "2020-04-21",
    "description": "What tips do you have for managing your time and workload?",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 599,
    "type": "newsletter",
    "filename": "newsletters/strategy-and-tactics-for-increasing-conversion.md",
    "title": "Strategy and tactics for increasing conversion",
    "tags": [
      "growth",
      "analytics",
      "leadership",
      "newsletter",
      "strategy",
      "design"
    ],
    "date": "2020-04-14",
    "description": "Send me your questions and in return, I’ll humbly offer actionable real-talk advice",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 600,
    "type": "newsletter",
    "filename": "newsletters/this-newsletter-is-growing-up.md",
    "title": "This newsletter is growing up 🌱",
    "tags": [
      "newsletter",
      "leadership",
      "strategy",
      "career",
      "growth",
      "product-management"
    ],
    "date": "2020-04-07",
    "description": "tl;dr: I’m adding a paid subscription plan!",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 601,
    "type": "newsletter",
    "filename": "newsletters/leading-your-company-through-a-pandemic---issue-20.md",
    "title": "Leading your company through a pandemic - Issue 20",
    "tags": [
      "design",
      "growth",
      "strategy",
      "go-to-market",
      "b2c",
      "leadership"
    ],
    "date": "2020-03-31",
    "description": "Send me your questions (just reply to this email or DM me) and in return, I’ll humbly offer some real-talk advice",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 602,
    "type": "newsletter",
    "filename": "newsletters/leading-a-pm-team-meeting---issue-19.md",
    "title": "Leading a PM team meeting - Issue 19",
    "tags": [
      "leadership",
      "product-management",
      "newsletter",
      "organization",
      "analytics",
      "b2c"
    ],
    "date": "2020-03-24",
    "description": "Send me your questions (just reply to this email or DM me) and in return, I’ll humbly share free real-talk advice",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 603,
    "type": "newsletter",
    "filename": "newsletters/turning-around-an-underperforming-team---issue-17.md",
    "title": "Turning around an underperforming team - Issue 17",
    "tags": [
      "leadership",
      "newsletter",
      "strategy",
      "career",
      "growth",
      "design"
    ],
    "date": "2020-03-10",
    "description": "Hello and welcome to another edition of my weekly newsletter",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 604,
    "type": "newsletter",
    "filename": "newsletters/building-a-referrals-program.md",
    "title": "Building a referrals program",
    "tags": [
      "design",
      "growth",
      "leadership",
      "strategy",
      "newsletter",
      "analytics"
    ],
    "date": "2020-03-03",
    "description": "Send me your questions (just reply to this email or DM me) and in return I’ll humbly share actionable free real-talk advice",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 605,
    "type": "newsletter",
    "filename": "newsletters/this-week-15-when-should-a-saas-startup-raise-money.md",
    "title": "This Week #15: When should a SaaS startup raise money 💰",
    "tags": [
      "strategy",
      "growth",
      "design",
      "startups",
      "leadership",
      "newsletter"
    ],
    "date": "2020-02-25",
    "description": "Hello and welcome to another edition of my weekly newsletter 👋",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 606,
    "type": "newsletter",
    "filename": "newsletters/this-week-14-transitioning-from-startup-founder-to-product-manager.md",
    "title": "This Week #14: Transitioning from startup founder to product manager",
    "tags": [
      "startups",
      "product-management",
      "leadership",
      "design",
      "newsletter",
      "career"
    ],
    "date": "2020-02-18",
    "description": "Hello and welcome to another edition of my weekly newsletter 👋",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 607,
    "type": "newsletter",
    "filename": "newsletters/this-week-13-balancing-outcome-thinking-with-design-and-technical-requirements.md",
    "title": "This Week #13: Balancing outcome-thinking with design and technical requirements ⚖️",
    "tags": [
      "leadership",
      "design",
      "newsletter",
      "engineering",
      "growth",
      "strategy"
    ],
    "date": "2020-02-11",
    "description": "Send me your questions (just reply to this email or DM me) and in return I’ll give you free actionable real-talk advice 🤝",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 608,
    "type": "newsletter",
    "filename": "newsletters/this-week-12-expanding-your-business-internationally.md",
    "title": "This Week #12: Expanding your business internationally 🌏",
    "tags": [
      "strategy",
      "design",
      "newsletter",
      "leadership",
      "career",
      "growth"
    ],
    "date": "2020-02-04",
    "description": "Send me your questions and in return I’ll give you actionable real-talk advice 🤝",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 609,
    "type": "newsletter",
    "filename": "newsletters/how-to-know-if-youve-got-product-market-fit.md",
    "title": "How to know if you've got product-market fit",
    "tags": [
      "strategy",
      "startups",
      "growth",
      "design",
      "b2b",
      "leadership"
    ],
    "date": "2020-01-28",
    "description": "Insights from Marc Andreessen, Elad Gil, Steve Blank, Andy Rachleff, Michael Seibel, and many more",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 610,
    "type": "newsletter",
    "filename": "newsletters/this-week-11-what-should-new-pms-over-index-on-and-empowering-product-in-a-sales.md",
    "title": "This Week #11: What should new PMs over-index on, and empowering product in a sales-driven org",
    "tags": [
      "career",
      "leadership",
      "design",
      "newsletter",
      "product-management",
      "b2b"
    ],
    "date": "2020-01-21",
    "description": "With guest contributor Jackie Bavaro - author of Cracking the PM Interview",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 611,
    "type": "newsletter",
    "filename": "newsletters/this-week-10-keeping-designers-and-engineers-excited-about-metrics--transitionin.md",
    "title": "This Week #10: Keeping designers and engineers excited about metrics + Transitioning from DS to PM 🕺",
    "tags": [
      "leadership",
      "design",
      "analytics",
      "product-management",
      "newsletter",
      "growth"
    ],
    "date": "2020-01-14",
    "description": "With guest contributor Lex Roman - Growth Designer, Writer, Speaker",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 612,
    "type": "newsletter",
    "filename": "newsletters/this-week-9-breaking-into-growth-leading-with-influence-and-not-stepping-on-toes.md",
    "title": "This Week #9: Breaking into growth, leading with influence, and (not) stepping on toes 🦶",
    "tags": [
      "leadership",
      "growth",
      "design",
      "newsletter",
      "startups",
      "strategy"
    ],
    "date": "2020-01-07",
    "description": "With special guest contributor Brian Balfour – Founder and CEO of Reforge",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 613,
    "type": "newsletter",
    "filename": "newsletters/what-theyd-do-differently--kickstarting-and-scaling-a-marketplace-business.md",
    "title": "What They'd Do Differently 🔮 Kickstarting and Scaling a Marketplace Business",
    "tags": [
      "growth",
      "strategy",
      "newsletter",
      "leadership",
      "design",
      "startups"
    ],
    "date": "2019-12-19",
    "description": "Insights from today's biggest marketplaces, including Airbnb, DoorDash, Thumbtack, Etsy, Uber and many more",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 614,
    "type": "newsletter",
    "filename": "newsletters/maintaining-quality--phase-2-of-kickstarting-and-scaling-a-marketplace-business.md",
    "title": "Maintaining Quality 🏅 Phase 2 of Kickstarting and Scaling a Marketplace Business",
    "tags": [
      "strategy",
      "leadership",
      "design",
      "b2b",
      "newsletter",
      "startups"
    ],
    "date": "2019-12-17",
    "description": "Insights from today's biggest marketplaces, including Airbnb, DoorDash, Thumbtack, Etsy, Uber and many more",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 615,
    "type": "newsletter",
    "filename": "newsletters/accelerating-growth-at-scale--phase-2-of-kickstarting-and-scaling-a-marketplace.md",
    "title": "Accelerating Growth at Scale 🔥 Phase 2 of Kickstarting and Scaling a Marketplace Business",
    "tags": [
      "growth",
      "strategy",
      "newsletter",
      "design",
      "b2b",
      "go-to-market"
    ],
    "date": "2019-12-13",
    "description": "Insights from today's biggest marketplaces, including Airbnb, DoorDash, Thumbtack, Etsy, Uber and many more",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 616,
    "type": "newsletter",
    "filename": "newsletters/how-to-know-if-youre-supply-or-demand-constrained----phase-2-of-kickstarting-and.md",
    "title": "How To Know If You're Supply or Demand Constrained 🤹‍♂️ - Phase 2 of Kickstarting and Scaling a Marketplace Business",
    "tags": [
      "strategy",
      "newsletter",
      "growth",
      "design",
      "startups",
      "go-to-market"
    ],
    "date": "2019-12-10",
    "description": "Insights from today's biggest marketplaces, including Airbnb, DoorDash, Thumbtack, Etsy, Uber and many more",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 617,
    "type": "newsletter",
    "filename": "newsletters/how-to-kickstart-and-scale-a-marketplace-business---part-4-cracking-the-chicken.md",
    "title": "How to Kickstart and Scale a Marketplace Business – Part 4: Cracking the Chicken-and-Egg Problem 🐣 - Growing Initial Demand (plus a Bonus!)",
    "tags": [
      "strategy",
      "growth",
      "design",
      "newsletter",
      "go-to-market",
      "startups"
    ],
    "date": "2019-12-03",
    "description": "Rare insights from today's biggest marketplaces, including Airbnb, DoorDash, Thumbtack, Etsy, Uber and many more",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 618,
    "type": "newsletter",
    "filename": "newsletters/how-to-kickstart-and-scale-a-marketplace-business---part-3-cracking-the-chicken.md",
    "title": "How to Kickstart and Scale a Marketplace Business – Part 3: Cracking the Chicken-and-Egg Problem 🐣 - Growing Initial Supply",
    "tags": [
      "strategy",
      "growth",
      "b2b",
      "design",
      "b2c",
      "newsletter"
    ],
    "date": "2019-11-25",
    "description": "Rare insights from 17 of today's biggest marketplaces, including Airbnb, DoorDash, Thumbtack, Etsy, Uber and many more",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 619,
    "type": "newsletter",
    "filename": "newsletters/how-to-kickstart-and-scale-a-marketplace-business---part-2-cracking-the-chicken.md",
    "title": "How to Kickstart and Scale a Marketplace Business – Part 2: Cracking the Chicken-and-Egg Problem 🐣 - Supply vs. Demand",
    "tags": [
      "strategy",
      "design",
      "newsletter",
      "growth",
      "b2c",
      "career"
    ],
    "date": "2019-11-22",
    "description": "Rare insights from 17 of today's biggest marketplaces, including Airbnb, DoorDash, Thumbtack, Etsy, Uber and many more",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 620,
    "type": "newsletter",
    "filename": "newsletters/how-to-kickstart-and-scale-a-marketplace-business.md",
    "title": "How to kickstart and scale a marketplace business",
    "tags": [
      "strategy",
      "growth",
      "newsletter",
      "design",
      "startups",
      "career"
    ],
    "date": "2019-11-20",
    "description": "Insights from 17 of today's biggest marketplaces, including Airbnb, DoorDash, Thumbtack, Etsy, Uber and many more",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 621,
    "type": "newsletter",
    "filename": "newsletters/this-week-8-splitting-equity-with-late-joining-co-founders-favorite-roadmap-temp.md",
    "title": "This Week #8: Splitting equity with late-joining co-founders, favorite roadmap templates, and small changes that improve your org",
    "tags": [
      "leadership",
      "design",
      "startups",
      "engineering",
      "newsletter",
      "product-management"
    ],
    "date": "2019-11-12",
    "description": "With special guest contributor Hunter Walk!",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 622,
    "type": "newsletter",
    "filename": "newsletters/this-week-7-effectively-communicating-about-a-failure-to-execs-managing-founder.md",
    "title": "This Week #7: Effectively communicating about a failure to execs, managing founder expectations, and hiring a Director of PM",
    "tags": [
      "leadership",
      "career",
      "startups",
      "strategy",
      "design",
      "newsletter"
    ],
    "date": "2019-10-29",
    "description": "### Q: What are your thoughts on communicating failure, like missing our team’s set goals?",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 623,
    "type": "newsletter",
    "filename": "newsletters/this-week-6-cultivating-good-relationships-with-distributed-co-workers-building.md",
    "title": "This Week #6: Cultivating good relationships with distributed co-workers, building trust to accelerate growth, and leveling up as a PM when you have extra time",
    "tags": [
      "design",
      "growth",
      "leadership",
      "newsletter",
      "product-management",
      "strategy"
    ],
    "date": "2019-10-22",
    "description": "With special guest contributor Hiten Shah!",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 624,
    "type": "newsletter",
    "filename": "newsletters/this-week-5-overcoming-impostor-syndrome-introducing-growth-to-an-org-and-how-to.md",
    "title": "This Week #5: Overcoming impostor syndrome, introducing growth to an org, and how to partner with your data scientist",
    "tags": [
      "growth",
      "leadership",
      "design",
      "strategy",
      "newsletter",
      "analytics"
    ],
    "date": "2019-10-15",
    "description": "What helped me most during that period was actually talking to a professional coach",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 625,
    "type": "newsletter",
    "filename": "newsletters/this-week-4-motivating-engineers-to-hit-deadlines-pm-career-ladders-and-aligning.md",
    "title": "This Week #4: Motivating engineers to hit deadlines, PM career ladders, and aligning with execs",
    "tags": [
      "leadership",
      "design",
      "newsletter",
      "career",
      "analytics",
      "engineering"
    ],
    "date": "2019-10-08",
    "description": "I’ll tackle three reader questions each week (keeping your name and company anonymous) until you quit sending me questions",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 626,
    "type": "newsletter",
    "filename": "newsletters/this-week-3-finding-productmarket-fit-interviewing-for-a-director-of-pm-role-and.md",
    "title": "This Week #3: Finding product/market fit, interviewing for a Director of PM role, and structuring discussions with senior leaders",
    "tags": [
      "leadership",
      "design",
      "career",
      "strategy",
      "startups",
      "newsletter"
    ],
    "date": "2019-10-01",
    "description": "I’ll answer three questions each week (keeping your name and company anonymous) until you stop sending me questions",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 627,
    "type": "newsletter",
    "filename": "newsletters/the-secret-to-a-great-planning-process---lessons-from-airbnb-and-eventbrite.md",
    "title": "The Secret to a Great Planning Process — Lessons from Airbnb and Eventbrite",
    "tags": [
      "organization",
      "leadership",
      "design",
      "strategy",
      "pricing",
      "b2b"
    ],
    "date": "2019-09-26",
    "description": "An excerpt from a new essay about yearly and quarterly planning just published by First Round Review",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 628,
    "type": "newsletter",
    "filename": "newsletters/this-week-2-tackling-the-chicken-and-egg-problem-building-a-growth-team-from-scr.md",
    "title": "This Week #2: Tackling the chicken-and-egg problem, building a growth team from scratch, and addressing overlap with PM peers 🤔",
    "tags": [
      "leadership",
      "growth",
      "design",
      "strategy",
      "newsletter",
      "product-management"
    ],
    "date": "2019-09-24",
    "description": "Thank you for all of the feedback and kind words so far",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 629,
    "type": "newsletter",
    "filename": "newsletters/this-week-1-must-reads-on-growth-what-pms-should-focus-on-when-joining-a-new-tea.md",
    "title": "This Week #1: Must reads on growth, what PMs should focus on when joining a new team, and the value of an MBA",
    "tags": [
      "leadership",
      "growth",
      "product-management",
      "design",
      "career",
      "strategy"
    ],
    "date": "2019-09-17",
    "description": "I was half-worried no one would take me up on the offer — instead, we now have a backlog of over two dozen intriguing questions",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 630,
    "type": "newsletter",
    "filename": "newsletters/this-week-0-advice-on-growth-product-and-leadership.md",
    "title": "This Week #0: Advice on growth, product, and leadership",
    "tags": [
      "leadership",
      "strategy",
      "design",
      "growth",
      "newsletter",
      "analytics"
    ],
    "date": "2019-09-12",
    "description": "As you may have noticed it’s been relatively dormant for the past few months 😬",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 631,
    "type": "newsletter",
    "filename": "newsletters/the-power-of-performance-reviews-use-this-system-to-become-a-better-manager.md",
    "title": "The Power of Performance Reviews: Use This System to Become a Better Manager 🤝",
    "tags": [
      "leadership",
      "career",
      "engineering",
      "newsletter"
    ],
    "date": "2019-07-18",
    "description": "You owe your reports a better performance review",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 632,
    "type": "newsletter",
    "filename": "newsletters/28-ways-to-grow-supply-in-a-marketplace.md",
    "title": "28 Ways to Grow Supply in a Marketplace 📈",
    "tags": [
      "growth",
      "strategy",
      "design",
      "b2c",
      "leadership",
      "b2b"
    ],
    "date": "2019-06-26",
    "description": "What I learned about growing supply at Airbnb that you can apply to your marketplace business",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 633,
    "type": "newsletter",
    "filename": "newsletters/where-great-product-roadmap-ideas-come-from.md",
    "title": "Where Great Product Roadmap Ideas Come From",
    "tags": [
      "strategy",
      "design",
      "leadership",
      "b2b",
      "product-management"
    ],
    "date": "2019-06-14",
    "description": "The fifteen best ways to inspire new ideas, and three to avoid",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 634,
    "type": "newsletter",
    "filename": "newsletters/what-seven-years-at-airbnb-taught-me-about-building-a-business.md",
    "title": "What Seven Years at Airbnb Taught Me About Building a Business",
    "tags": [
      "leadership",
      "design",
      "organization",
      "growth",
      "startups",
      "career"
    ],
    "date": "2019-06-14",
    "description": "Create strong culture, stay laser-focused on problems, and set wildly ambitious goals",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 635,
    "type": "newsletter",
    "filename": "newsletters/what-buddhism-taught-me-about-product-management.md",
    "title": "What Buddhism Taught Me About Product Management",
    "tags": [
      "leadership",
      "design",
      "product-management",
      "career",
      "ai",
      "growth"
    ],
    "date": "2019-06-14",
    "description": "We think we’ll be happy when we finally get what we want (e.g",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 636,
    "type": "newsletter",
    "filename": "newsletters/how-to-get-into-product-management.md",
    "title": "How to get into product management",
    "tags": [
      "leadership",
      "product-management",
      "strategy",
      "design",
      "career",
      "startups"
    ],
    "date": "2019-06-14",
    "description": "Figure out if this role is for you, how to make the move, and what skills you’ll need to build in order to be successful",
    "guest": null,
    "youtube_url": null
  },
  {
    "id": 637,
    "type": "newsletter",
    "filename": "newsletters/a-three-step-framework-for-solving-problems.md",
    "title": "A Three-Step Framework For Solving Problems 👌",
    "tags": [
      "leadership",
      "strategy",
      "design",
      "organization",
      "go-to-market",
      "newsletter"
    ],
    "date": "2019-06-14",
    "description": "We work long and hard to design an amazing experience for travelers to discover fun local things to do with other travelers",
    "guest": null,
    "youtube_url": null
  }
];

export const CATALOG_PROMPT = CATALOG.map(
  (i) =>
    `${i.filename}|${i.type}|${i.title}|${i.tags.join(",")}|${i.date}|${i.description}|${i.guest || ""}`
).join("\n");
