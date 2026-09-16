// All content that changes over time lives here. Components only render it.
// Dates are absolute on purpose — never "2.5 years" style relative claims.

export const site = {
  name: 'AndrewInUA',
  person: 'Andrii',
  url: 'https://andrewinua.com',
  title: 'AndrewInUA — Independent Solana validator from Ukraine',
  description:
    "I'm Andrii, running the AndrewInUA Solana validator since March 2022: 0% commission, 0% MEV commission, in the Solana Foundation Delegation Program, and building plain-language tools for delegators.",
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
};

export const timeline: { year: string; items: Milestone[] }[] = [
  {
    year: '2022',
    items: [
      {
        date: 'March 2022',
        title: 'Launched a testnet validator',
        detail: 'Weeks after the full-scale invasion began, with no blockchain background and a lot to learn.',
      },
      {
        date: '2022–2023',
        title: 'Kept the testnet node running',
        detail: 'Through blackouts and air-raid alerts, without incidents that would have set the node back.',
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
      },
      { date: '11 November 2024', title: 'First Jito stake' },
    ],
  },
  {
    year: '2025',
    items: [
      {
        date: 'February 2025',
        title: 'More than ten individual delegators',
        detail: 'Alongside the pools — people who chose this node by hand.',
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
      },
      {
        date: 'July – September 2025',
        title: 'School of Solana by Ackee Blockchain',
        detail: 'Certificate, and Recipe Book — an Anchor program with a React front end, deployed on Devnet.',
      },
    ],
  },
  {
    year: '2026',
    items: [
      {
        date: 'Spring 2026',
        title: 'Startup Terminal and the Colosseum Frontier hackathon',
        detail:
          'Superteam Ukraine\u2019s founder programme, and my first submitted hackathon project: the Validator Transparency Dashboard.',
      },
      {
        date: 'June 2026',
        title: 'Launched Open Solana Hub',
        detail: 'Solana explained in plain English and Ukrainian, with the dashboard built in.',
      },
      {
        date: 'July 2026',
        title: 'Joined Superteam Ukraine',
        detail: 'And started a news section on Open Solana Hub.',
      },
      {
        date: 'August 2026',
        title: 'Alpenglow community testnet; DoubleZero and Jito BAM on mainnet',
        detail: 'Testing the next consensus early, and upgrading the mainnet node\u2019s networking and block engine.',
      },
      {
        date: '26–27 August 2026',
        title: 'Solana Summit Serbia, Belgrade',
        detail: 'My first Solana conference in person. The most interesting part happened away from the stage.',
        link: { href: links.summitArticle, label: 'What I took home from Belgrade' },
      },
      {
        date: 'September 2026',
        title: 'Crypto World\u2019s Fair hackathon: Stake health',
        detail:
          'Same idea as the dashboard, for the other side: you already staked — what landed last epoch, is it fine, do you need to act. Live since 10 September, with a Telegram bot.',
        link: { href: 'https://www.opensolanahub.com/compare/mystake.html', label: 'Check your stake' },
      },
    ],
  },
];

export type Project = {
  name: string;
  summary: string;
  tag?: string;
  icon?: string;
  links: { href: string; label: string }[];
};

export const projects: Project[] = [
  {
    name: 'Validator Transparency Dashboard',
    tag: 'Colosseum Frontier hackathon, 2026',
    summary:
      'Compare any Solana mainnet validator in plain language: stability history, commission risk, voting behaviour, APY in network context and stake-pool signals. A verdict a newcomer can read, with the numbers behind it for those who want them.',
    links: [
      { href: 'https://www.opensolanahub.com/compare/', label: 'Open the dashboard' },
      { href: 'https://github.com/AndrewInUA/validator-transparency-dashboard', label: 'Source on GitHub' },
    ],
  },
  {
    name: 'Stake health',
    tag: 'New — for people who have already staked',
    icon: '/images/stake-health.png',
    summary:
      'Paste or connect the wallet that owns your native stake and get a checkup in plain language: how much is staked, what landed last epoch, and whether anything needs your attention. Read-only, public key only — it never moves SOL. Also available as a Telegram bot that writes when a new epoch starts.',
    links: [
      { href: 'https://www.opensolanahub.com/compare/mystake.html', label: 'Check your stake' },
      { href: 'https://t.me/stake_health_bot', label: '@stake_health_bot on Telegram' },
    ],
  },
  {
    name: 'Open Solana Hub',
    summary:
      'Solana explained in plain English and Ukrainian, with a news section and the dashboard built in. A two-way bridge: the ecosystem for Ukrainian readers, and Ukrainian builders for the rest of the world.',
    links: [{ href: links.osh, label: 'opensolanahub.com' }],
  },
  {
    name: 'Validator Metrics Widget',
    summary: 'A lightweight HTML + JS widget that shows live stats for any Solana validator on your own site. Easy to embed and adapt.',
    links: [{ href: 'https://github.com/AndrewInUA/solana-validator-metrics-html-widget', label: 'Source on GitHub' }],
  },
  {
    name: 'solana-validator-resources',
    summary: 'Open guides and assets for validators and stakers, written the way I wish someone had written them for me in 2022.',
    links: [{ href: 'https://github.com/AndrewInUA/solana-validator-resources', label: 'Guides on GitHub' }],
  },
  {
    name: 'Vault Invoices Checker',
    summary: 'A small open-source tool that checks stake invoices for participants of The Vault programme. Saves time and avoids confusion.',
    links: [{ href: 'https://github.com/AndrewInUA/vault-invoices-checker', label: 'Source on GitHub' }],
  },
  {
    name: 'Recipe Book',
    tag: 'School of Solana final project, 2025',
    summary: 'An Anchor program and React front end that keep recipes on-chain, with each wallet\u2019s book isolated by PDA. Deployed on Devnet.',
    links: [
      { href: 'https://recipe-book-solana.vercel.app', label: 'Try it on Devnet' },
      { href: 'https://github.com/School-of-Solana/program-AndrewInUA', label: 'Source on GitHub' },
    ],
  },
];

// Stake composition snapshot. Update the numbers and the date together, or set
// `show` to false to hide the block. Source: on-chain stake accounts, via the
// per-epoch analysis in github.com/SOFZP/Solana-Stake-Pools-Research (manifest.json -> latest_data_url).
export const stakeSnapshot = {
  show: true,
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
  programmes: ['Solana Foundation Delegation Program', 'Jito', 'The Vault', 'DoubleZero'],
};
