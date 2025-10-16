# Lawd-STAR Blockchain

**IBM AutonomousWorld Intelligence Cloud - Web3.0 Decentralized Application**

A next-generation Web3 dApp featuring blockchain database integration, DAO governance, and developer contribution tracking on the Lawd-STAR network.

![Lawd-STAR](https://img.shields.io/badge/Blockchain-Lawd--STAR-purple?style=for-the-badge)
![Web3](https://img.shields.io/badge/Web3.0-Enabled-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge)

## Features

### 🔗 Web3 Wallet Integration
- Connect with MetaMask, WalletConnect, and other Web3 wallets
- Real-time wallet balance and transaction tracking
- Secure blockchain interactions

### 🏛️ DAO Governance
- Create and vote on proposals
- Token-based voting power
- Treasury management and transparency
- Real-time voting leaderboards

### 👨‍💻 Developer Contribution System
- Track on-chain contributions
- Contributor leaderboards and rankings
- Reward distribution system
- Contribution analytics dashboard

### 🗄️ Blockchain Database
- Real-time block explorer
- Transaction history and search
- Smart contract registry
- Network statistics and analytics

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Blockchain**: Web3.js / Ethers.js
- **Database**: Neon PostgreSQL
- **State Management**: React Hooks + SWR
- **TypeScript**: Full type safety

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm
- Web3 wallet (MetaMask recommended)
- Environment variables (see below)

### Installation

1. **Clone the repository**
\`\`\`bash
git clone https://github.com/yourusername/lawd-star-blockchain.git
cd lawd-star-blockchain
\`\`\`

2. **Install dependencies**
\`\`\`bash
pnpm install
\`\`\`

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

\`\`\`env
# Database (Neon)
DATABASE_URL=your_neon_database_url
POSTGRES_URL=your_postgres_url

# Blockchain RPC (optional)
NEXT_PUBLIC_RPC_URL=your_rpc_endpoint

# Other integrations
XAI_API_KEY=your_xai_key
STRIPE_SECRET_KEY=your_stripe_key
\`\`\`

4. **Run the development server**
\`\`\`bash
pnpm dev
\`\`\`

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

\`\`\`
lawd-star-blockchain/
├── app/
│   ├── page.tsx              # Homepage
│   ├── dao/                  # DAO governance pages
│   ├── contributions/        # Developer contribution system
│   ├── blockchain/           # Blockchain explorer
│   └── layout.tsx            # Root layout
├── components/
│   ├── header.tsx            # Navigation header
│   ├── wallet-connect.tsx    # Web3 wallet integration
│   ├── dao-overview.tsx      # DAO dashboard
│   ├── blockchain-explorer.tsx
│   └── ui/                   # shadcn/ui components
├── lib/
│   └── utils.ts              # Utility functions
└── public/                   # Static assets
\`\`\`

## Available Integrations

This project supports the following integrations:

- **Neon**: PostgreSQL database for blockchain data
- **Grok (xAI)**: AI-powered features
- **Stripe**: Payment processing
- **Upstash Search**: Fast search capabilities

## Deployment

### Deploy to Vercel

The easiest way to deploy is using Vercel:

1. Push your code to GitHub
2. Import your repository in Vercel
3. Configure environment variables
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Environment Variables

Make sure to add all required environment variables in your Vercel project settings.

## Contributing

We welcome contributions to the Lawd-STAR blockchain! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For support and questions:
- Open an issue on GitHub
- Visit [vercel.com/help](https://vercel.com/help) for platform support

## Acknowledgments

Built with ❤️ using:
- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Vercel](https://vercel.com)

---

**Created**: October 16, 2025  
**Project**: IBM AutonomousWorld Intelligence Cloud  
**Blockchain**: Lawd-STAR Network
