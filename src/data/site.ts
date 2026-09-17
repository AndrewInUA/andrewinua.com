// All content that changes over time lives here. Components only render it.
// Dates are absolute on purpose: never "2.5 years" style relative claims.
// Typography rule: keep to characters found on a keyboard (no long dashes, arrows, curly quotes).

export const site = {
  name: 'AndrewInUA',
  person: 'Andrii',
  url: 'https://andrewinua.com',
  title: 'AndrewInUA: independent Solana validator from Ukraine. Stake SOL with 0% commission',
  description:
    'Stake SOL with AndrewInUA, an independent Solana validator from Ukraine: 0% commission, 0% MEV commission, in the Solana Foundation Delegation Program since 2023. Reliable staking with public, verifiable performance and plain-language tools for delegators.',
  email: 'andrewkyivzpua@gmail.com',
};

export const keys = {
  vote: '3QPGLackJy5LKctYYoPGmA4P8ncyE197jdxr1zP2ho8K',
  identity: 'Av8EnYrPBnSJHK5e2wmTdnCpSy7nzmBgyFaUKSyLnBfe',
};

export const links = {
  x: 'https://x.com/Andrew_In_UA',
  github: 'https://github.com/AndrewInUA',
  telegram: 'https://t.me/AndrewInUA',
  linkedin: 'https://www.linkedin.com/in/andrii-vasyliuk-698558125',
  colosseum: 'https://colosseum.com/arena/profiles/AndrewInUA',
  superteamEarn: 'https://superteam.fun/earn/t/AndrewInUA',
  stakewiz: `https://stakewiz.com/validator/${keys.vote}`,
  validatorsApp: `https://www.validators.app/validators/${keys.identity}?locale=en&network=mainnet`,
  osh: 'https://www.opensolanahub.com',
  summitArticle: 'https://www.opensolanahub.com/news/solana-summit-serbia-first-time.html',
};

// Analytics (Plausible, script installation). Leave the domain empty to disable. The script is
// only loaded when the page is served from that domain, so staging and local previews never count.
export const analytics = {
  plausible: { domain: 'andrewinua.com', script: 'https://plausible.io/js/pa-oRR-2uT60vN145iIg3K98.js' },
};

// Optional background photos. Leave a value empty to render a plain section.
// Files go to public/images/. A large landscape photo (2000px+) works best.
export const backgrounds = {
  delegate: '/images/bg-zaporizhzhia.jpg', // Zaporizhzhia, Andrii's home city; photo by Viktor
};

export const nav = [
  { href: '#about', label: 'About' },
  { href: '#values', label: 'Values' },
  { href: '#tools', label: 'Projects' },
  { href: '#metrics', label: 'Metrics' },
  { href: '#security', label: 'Security' },
  { href: '#contact', label: 'Contact' },
];

export type Milestone = {
  date: string;
  title: string;
  detail?: string;
  link?: { href: string; label: string };
  // logo: square, shown at 72px with the whole logo visible. photo: wide picture, shown at 200x130 cropped.
  // square: a photo shown at the logo size, edge to edge. banner: wide picture across the milestone.
  image?: { src: string; alt: string; kind?: 'logo' | 'photo' | 'square' | 'banner' };
  highlight?: boolean;
};

export const timeline: { year: string; items: Milestone[] }[] = [
  {
    year: '2022',
    items: [
      {
        date: 'March 2022',
        title: 'Launched a testnet validator',
        detail: "Weeks after russia's full-scale invasion of Ukraine began, with no blockchain background and a lot to learn.",
        image: { src: '/images/timeline/andrewinua.png', alt: 'AndrewInUA logo' },
      },
      {
        date: '5 November 2022',
        title: 'Joined the Solana Ukrainian validators community',
        detail: 'Operators from across Ukraine who share what they learn and back each other up.',
        image: { src: '/images/timeline/ukrainian-validators.png', alt: 'Solana Ukrainian validators community logo' },
      },
      {
        date: '2022-2023',
        title: 'Kept the testnet node running',
        detail: 'Through blackouts and air-raid alerts, without incidents that would have set the node back.',
        image: { src: '/images/timeline/cyprus-new-year.jpg', alt: 'Andrii at a laptop on New Year\'s night, keeping an eye on the node', kind: 'photo' },
      },
    ],
  },
  {
    year: '2023',
    items: [
      {
        date: '16 August 2023',
        title: 'Mainnet',
        detail: 'Approved for the Solana Foundation Delegation Program.',
        image: { src: '/images/timeline/solana.svg', alt: 'Solana logo' },
      },
    ],
  },
  {
    year: '2024',
    items: [
      { date: 'April 2024', title: 'First stake from a stake pool' },
      {
        date: '18 September 2024',
        title: 'Registered on Colosseum for the Radar hackathon',
        detail: 'Not to submit, but to learn how hackathons work from the inside.',
        image: { src: '/images/timeline/colosseum.png', alt: 'Colosseum logo' },
      },
      {
        date: '11 November 2024',
        title: 'First Jito stake',
        image: { src: '/images/timeline/jito.png', alt: 'Jito logo' },
      },
    ],
  },
  {
    year: '2025',
    items: [
      {
        date: 'February 2025',
        title: 'More than ten individual delegators',
        detail: 'People who chose this node by hand, alongside the pools.',
      },
      {
        date: 'June 2025',
        title: 'First version of this site and the Validator Metrics Widget',
        detail: 'The widget went open source so any validator could reuse it.',
      },
      {
        date: '17 July 2025',
        title: 'Accepted into The Vault stake pool',
        detail: 'On the first application.',
        image: { src: '/images/timeline/the-vault.svg', alt: 'The Vault logo' },
      },
      {
        date: 'July-September 2025',
        title: 'School of Solana by Ackee Blockchain',
        detail: 'Certificate, and Recipe Book: an Anchor program with a React front end, deployed on Devnet.',
        image: { src: '/images/timeline/ackee.png', alt: 'Ackee Blockchain logo' },
      },
      {
        date: 'September 2025',
        title: 'Connected the mainnet node to DoubleZero',
        detail: 'A dedicated network built for validators: faster, cleaner traffic between nodes.',
        image: { src: '/images/timeline/doublezero.png', alt: 'DoubleZero logo' },
      },
    ],
  },
  {
    year: '2026',
    items: [
      {
        date: 'January 2026',
        title: 'Running Jito BAM',
        detail: 'The block engine that keeps block building transparent and verifiable.',
        image: { src: '/images/timeline/jito-bam.svg', alt: 'Jito BAM logo' },
      },
      {
        date: 'Spring 2026',
        title: 'Startup Terminal and the Colosseum Frontier hackathon',
        detail:
          "Superteam Ukraine's founder programme, and my first submitted hackathon project: the Validator Transparency Dashboard.",
        image: { src: '/images/timeline/startup-terminal.jpg', alt: 'Solana Startup Terminal poster', kind: 'photo' },
      },
      {
        date: 'April 2026',
        title: 'Became a member of Superteam Ukraine',
        detail: "Ukraine's builder community in the Solana ecosystem.",
        image: { src: '/images/timeline/superteam-ukraine.svg', alt: 'Superteam Ukraine logo' },
        highlight: true,
      },
      {
        date: 'June 2026',
        title: 'Launched Open Solana Hub',
        detail: 'Solana explained in plain English and Ukrainian, with the dashboard built in. The news section followed in July.',
        image: { src: '/images/timeline/open-solana-hub.png', alt: 'Open Solana Hub logo' },
      },
      {
        date: 'August 2026',
        title: 'Joined the Alpenglow community testnet',
        detail: "Running a node on Solana's next consensus protocol before it reaches mainnet.",
        image: { src: '/images/timeline/alpenglow-square.jpg', alt: 'A mountain peak at dawn: Alpenglow', kind: 'square' },
        highlight: true,
      },
      {
        date: '26-27 August 2026',
        title: 'Solana Summit Serbia, Belgrade',
        detail: 'My first Solana conference in person. The most interesting part happened away from the stage.',
        link: { href: links.summitArticle, label: 'What I took home from Belgrade' },
        image: { src: '/images/timeline/summit-serbia.jpg', alt: 'Solana Summit Serbia logo', kind: 'photo' },
      },
      {
        date: 'September 2026',
        title: "Crypto World's Fair hackathon: Stake health",
        detail:
          'Same idea as the dashboard, for the other side: you already staked. What landed last epoch, is it fine, do you need to do anything? Live since 10 September, with a Telegram bot.',
        link: { href: 'https://www.opensolanahub.com/compare/mystake.html', label: 'Check your stake' },
        image: { src: '/images/timeline/crypto-worlds-fair.jpg', alt: "Crypto World's Fair poster", kind: 'photo' },
      },
    ],
  },
];

export type Project = {
  name: string;
  summary: string;
  tag?: string;
  icon?: string; // square logo in public/images/, 256x256 or larger, transparent background preferred
  links: { href: string; label: string }[];
};

export type ProjectGroup = { title: string; intro?: string; items: Project[] };

export const projectGroups: ProjectGroup[] = [
  {
    title: 'What I am building now',
    items: [
      {
        name: 'Validator Transparency Dashboard',
        tag: 'Colosseum Frontier hackathon, 2026',
        icon: '/images/transparency-dashboard.png',
        summary:
          'Open any Solana mainnet validator and see how it stacks up on stability history, commission risk, live voting behaviour, reward estimates and stake-pool presence, with plain-English explanations throughout. Not staking advice, but structured context before you delegate.',
        links: [
          { href: 'https://www.opensolanahub.com/compare/', label: 'Open the dashboard' },
          { href: 'https://github.com/AndrewInUA/validator-transparency-dashboard', label: 'Source on GitHub' },
        ],
      },
      {
        name: 'Stake health',
        tag: 'New: for people who have already staked',
        icon: '/images/stake-health.png',
        summary:
          'Paste or connect the wallet that owns your native stake and get a checkup in plain language: how much is staked, what landed last epoch, and whether anything needs your attention. Read-only, public key only, it never moves SOL. Also available as a Telegram bot that writes when a new epoch starts.',
        links: [
          { href: 'https://www.opensolanahub.com/compare/mystake.html', label: 'Check your stake' },
          { href: 'https://t.me/stake_health_bot', label: '@stake_health_bot on Telegram' },
        ],
      },
      {
        name: 'Open Solana Hub',
        icon: '/images/open-solana-hub.png',
        summary:
          'Solana explained in plain English and Ukrainian, with a news section and the dashboard built in. Open to anyone who wants to understand how the network works before they stake.',
        links: [{ href: links.osh, label: 'opensolanahub.com' }],
      },
    ],
  },
  {
    title: 'Small tools and open source',
    items: [
      {
        name: 'Validator Metrics Widget',
        summary:
          'An embeddable HTML, CSS and JS widget that shows live stats for any Solana validator on your own site. Pure front end, easy to restyle, works with any vote account.',
        links: [{ href: 'https://github.com/AndrewInUA/solana-validator-metrics-html-widget', label: 'Source on GitHub' }],
      },
      {
        name: 'Solana Validator Resources',
        summary:
          'An open knowledge hub for validators and delegators: guides for first-time stakers, setup and infrastructure tips for operators, community assets and useful tools. MIT licensed.',
        links: [{ href: 'https://github.com/AndrewInUA/solana-validator-resources', label: 'Guides on GitHub' }],
      },
      {
        name: 'Vault Invoices Checker',
        summary:
          'A Bash script for validators in The Vault programme: shows current and promised Vault stake for a vote account and lists pending invoices in vSOL with colour-coded deadlines.',
        links: [{ href: 'https://github.com/AndrewInUA/vault-invoices-checker', label: 'Source on GitHub' }],
      },
      {
        name: 'Recipe Book',
        tag: 'School of Solana final project, 2025',
        summary:
          'An Anchor program and React front end that keep recipes on-chain, each wallet with its own book. A learning project: deployed on Devnet and not maintained any more, kept here as part of the story.',
        links: [
          { href: 'https://recipe-book-solana.vercel.app', label: 'Try it on Devnet' },
          { href: 'https://github.com/School-of-Solana/program-AndrewInUA', label: 'Source on GitHub' },
        ],
      },
    ],
  },
];

// Stake composition snapshot. Update the numbers and the date together, or set
// `show` to false to hide the block. Source: on-chain stake accounts, via the
// per-epoch analysis in github.com/SOFZP/Solana-Stake-Pools-Research (manifest.json, latest_data_url).
export const stakeSnapshot = {
  show: true,
  live: true, // fetch /api/stake.json and replace the rows below; they stay as the fallback
  asOf: '15 September 2026',
  epoch: 1035,
  totalSol: 115_587,
  rows: [
    { source: 'Solana Foundation Delegation Program', sol: 59_045 },
    { source: 'Jito', sol: 31_873 },
    { source: 'The Vault', sol: 15_447 },
    { source: 'Individual delegators (130 stake accounts)', sol: 6_649 },
    { source: 'JPool', sol: 2_103 },
    { source: 'DoubleZero, self-stake and others', sol: 470 },
  ],
};

// Static facts that do not change between epochs. Anything live comes from /api/metrics.json.
export const facts = {
  mainnetSince: '16 August 2023',
  testnetSince: 'March 2022',
  commission: '0%',
  mevCommission: '0%',
  hosting: 'Bare-metal server in Germany, with a synced hot-spare server',
};
