# TNT – Trust Network Tokens

[![Powered by Stability Nexus](https://stability.nexus/logo.png)](https://stability.nexus)<img src="https://tnt.stability.nexus/_next/static/media/TNT.04c28a52.svg" alt="TNT Live DApp" height="500">

> **Decentralised Trust-as-a-Service.**  
> Create, issue **non-transferable ERC-721 trust badges** and manage verifiable relationships on–chain.

---

## Table of Contents

1. [Demo](#demo)
2. [About](#about)
3. [Key Features](#key-features)
4. [Architecture](#architecture)
   * [Smart-Contracts](#smart-contracts)
   * [Web Front-end](#web-front-end)
5. [Getting Started](#getting-started)
   * [Prerequisites](#prerequisites)
   * [Clone & Install](#clone--install)
   * [Hardhat Tasks](#hardhat-tasks)
   * [Running Tests](#running-tests)
   * [Deploying Contracts](#deploying-contracts)
   * [Running the Front-end](#running-the-front-end)
6. [Folder Structure](#folder-structure)
7. [Contributing](#contributing)
8. [License](#license)
9. [Screencast](#screencast)

---

## Demo

The latest version is live at **[tnt.stability.nexus](https://tnt.stability.nexus)** – connect your wallet and start building your trust network in seconds.

---

## About

**TNT** (Trust Network Tokens) is an open-source framework for issuing *revocable*, *non-transferable* ERC-721 tokens that encode trust relationships between addresses.

* 100 % on-chain verifiability – each TNT is minted as an ERC-721 with immutable metadata.
* Non-transferable by design – ownership can only be **minted** or **burned**.
* Optional revocation – issuers can invalidate a badge if trust is broken.
* Factory pattern – anyone can deploy a custom TNT collection with a single transaction.
* Built with **Solidity 0.8.20**, **Hardhat**, **Foundry**, **Next.js 15** and **wagmi v2**.

---

## Key Features

| Category | Feature |
|----------|---------|
| Tokens   | Non-transferable ERC-721, per-token issuer map, on-chain timestamp, optional image URL |
| Revocation | Fine-grained `REVOKER_ROLE` lets projects decide who can revoke badges |
| Factory  | One-click deployment of new TNT collections (`Factory.createTNT`) |
| Pagination | On-chain pagination helpers for large token sets (`getPageUserTNTs`, `getPageDeployedTNTs`) |
| Front-end | Wallet connect (RainbowKit / wagmi), dark mode, responsive UI, Tailwind CSS |
| DX | Type-safe ABIs generated for React hooks, Hardhat & Foundry parity, GitHub Actions CI |

---

## Architecture

### Smart Contracts

Contract | Responsibility | Roles
---------|----------------|------
`Factory.sol` | Deploy new TNT collections and index relationships | –
`TNT.sol` | ERC-721 implementation enforcing non-transferability and optional revocation | `DEFAULT_ADMIN_ROLE`, `MINTER_ROLE`, `REVOKER_ROLE`

Contracts are **upgrade-free**: every deployment is immutable. Security best-practices from **OpenZeppelin Contracts v5** are applied.

### Web Front-end

* **Next.js (React 18)** – file-system routing, server side rendering & ISR.
* **Tailwind CSS + shadcn/UI** – modern accessible components.
* **wagmi + RainbowKit** – wallet connectivity for EVM chains.
* **ethers v6** – contract interaction & signing.
* Deployed on **Vercel** with preview URLs for every PR.

---

## Getting Started

### Prerequisites

* Node ≥ 18 & npm ≥ 9 (or pnpm 8)
* Foundry (`curl -L https://foundry.paradigm.xyz | bash && foundryup`)
* Hardhat (`npm i -g hardhat`)
* A testnet/private key with ETH for gas (for deployment)

### Clone & Install

```bash
# clone
$ git clone https://github.com/StabilityNexus/TNT.git
$ cd TNT

# install root dev-deps (contracts)
$ npm install

# install web deps
$ cd web && npm install && cd ..
```

### Hardhat Tasks

```bash
# compile solidity
$ npx hardhat compile

# start local node
$ npx hardhat node
```

### Running Tests

Choose your flavour:

```bash
# Hardhat + Mocha
$ npx hardhat test

# Foundry (blazing fast!)
$ forge test -vvv
```

### Deploying Contracts

```bash
# example: deploy a revocable TNT collection to sepolia
$ npx hardhat run scripts/deploy.js --network sepolia
```

The script echoes the new contract address; add it to `web/src/contractsABI` to surface it in the UI.

### Running the Front-end

```bash
$ cd web
$ cp .sample.env .env.local  # configure RPC URL & chain ID
$ npm run dev
```

Visit `http://localhost:3000` and connect MetaMask.

---

## Folder Structure

```
TNT/
├── contracts/           # Solidity sources (Foundry layout)
│   ├── src/TNT.sol
│   └── src/Factory.sol
├── test/                # Hardhat JS/TS tests
├── web/                 # Next.js 15 dApp
│   ├── src/app          # App-router pages
│   ├── src/contractsABI # ABIs auto-generated from /contracts
│   └── tailwind.config.ts
├── .github/workflows    # CI – lint, build & test
└── hardhat.config.js    # Hardhat config
```

---

## Contributing

Pull requests are welcome!  
1. Fork the repo & create a feature branch.  
2. Commit descriptive messages and add unit tests where possible.  
3. Open a PR – CI must be green.

For larger features please open an Issue first to discuss new ideas.

---

## License

This repository is licensed under the **Apache 2.0** License. See [LICENSE](LICENSE) for details.

---

## Screencast

---

Made with ⚡ by the **[Stability Nexus](https://stability.nexus)** team. Welcome to the future of trust!
