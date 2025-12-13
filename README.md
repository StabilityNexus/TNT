<!-- Don't delete it -->

<div name="readme-top"></div>



<!-- Organization Logo -->

<div align="center" style="display: flex; align-items: center; justify-content: center; gap: 16px;">

  <img alt="Stability Nexus" src="public/stability.svg" width="175">

  <img src="web/src/app/icons/TNT.svg" width="175" />

</div>



&nbsp;



<!-- Organization Name -->

<div align="center">



[![Static Badge](https://img.shields.io/badge/Stability_Nexus-/TNT-228B22?style=for-the-badge&labelColor=FFC517)](https://tnt.stability.nexus/)



<!-- Correct deployed url to be added -->



</div>



<!-- Organization/Project Social Handles -->

<p align="center">
<!-- Telegram -->
<a href="https://t.me/StabilityNexus">
<img src="https://img.shields.io/badge/Telegram-black?style=flat&logo=telegram&logoColor=white&logoSize=auto&color=24A1DE" alt="Telegram Badge"/></a>
&nbsp;&nbsp;
<!-- X (formerly Twitter) -->
<a href="https://x.com/StabilityNexus">
<img src="https://img.shields.io/twitter/follow/StabilityNexus" alt="X (formerly Twitter) Badge"/></a>
&nbsp;&nbsp;
<!-- Discord -->
<a href="https://discord.gg/YzDKeEfWtS">
<img src="https://img.shields.io/discord/995968619034984528?style=flat&logo=discord&logoColor=white&logoSize=auto&label=Discord&labelColor=5865F2&color=57F287" alt="Discord Badge"/></a>
&nbsp;&nbsp;
<!-- Medium -->
<a href="https://news.stability.nexus/">
  <img src="https://img.shields.io/badge/Medium-black?style=flat&logo=medium&logoColor=black&logoSize=auto&color=white" alt="Medium Badge"></a>
&nbsp;&nbsp;
<!-- LinkedIn -->
<a href="https://linkedin.com/company/stability-nexus">
  <img src="https://img.shields.io/badge/LinkedIn-black?style=flat&logo=LinkedIn&logoColor=white&logoSize=auto&color=0A66C2" alt="LinkedIn Badge"></a>
&nbsp;&nbsp;
<!-- Youtube -->
<a href="https://www.youtube.com/@StabilityNexus">
  <img src="https://img.shields.io/youtube/channel/subscribers/UCZOG4YhFQdlGaLugr_e5BKw?style=flat&logo=youtube&logoColor=white&logoSize=auto&labelColor=FF0000&color=FF0000" alt="Youtube Badge"></a>
</p>



---



<div align="center">

<h1>TNT</h1>

</div>



[TNT](https://tnt.stability.nexus/) (Trust Network Tokens) is a non-transferable ERC721 framework for issuing and revoking verifiable trust credentials. The dApp lets organizations deploy their own TNT contract via a factory, issue tokens to users, optionally revoke them, and keep a chain-verifiable registry of trust relationships.



---



## Project Maturity



TODO: In the checklist below, mark the items that have been completed and delete items that are not applicable to the current project:



* [x] The project has a logo.

* [x] The project has a favicon.

* [ ] The protocol:

   - [ ] has been described and formally specified in a paper.

   - [ ] has had its main properties mathematically proven.

   - [ ] has been formally verified.

* [ ] The smart contracts:

   - [ ] were thoroughly reviewed by at least two knights of The Stable Order.

   - [x] were deployed to:

      - [ ] Ergo

      - [ ] Cardano

      - [x] EVM Chains:

        - [ ] Ethereum Classic

        - [ ] Ethereum

        - [ ] Polygon

        - [ ] BSC

        - [ ] Base

        - [x] Scroll Sepolia (Chain ID 534351) — factory at `0xc0e8ababc172112e3e458ae35a4d2d4b92b35e8e`

* [ ] The mobile app:

   - [ ] has an _About_ page containing the Stability Nexus's logo and pointing to the social media accounts of the Stability Nexus.

   - [ ] is available for download as a release in this repo.

   - [ ] is available in the relevant app stores.

* [ ] The web frontend:

   - [ ] has proper title and metadata.

   - [ ] has proper open graph metadata, to ensure that it is shown well when shared in social media (Discord, Telegram, Twitter, LinkedIn).

   - [ ] has a footer, containing the Stability Nexus's logo and pointing to the social media accounts of the Stability Nexus.

   - [ ] is fully static and client-side.

   - [ ] is deployed to Github Pages via a Github Workflow.

   - [ ] is accessible through the https://tnt.stability.nexus domain.

* [ ] the project is listed in [https://stability.nexus/protocols](https://stability.nexus/protocols).



---



## Tech Stack



### Frontend



- Next.js 15 (App Router)
- TypeScript
- TailwindCSS + tailwind-merge + tailwindcss-animate
- shadcn/ui (Radix UI primitives)
- RainbowKit + wagmi + ethers.js for wallet connectivity
- Next Themes, Framer-powered UX elements

### Blockchain



- Solidity smart contracts (Foundry / Hardhat)
- OpenZeppelin ERC721 + AccessControl
- TNT Factory deploys non-transferable, optionally revokable TNT tokens and tracks issued tokens per user
- Deployed on Scroll Sepolia (Chain ID 534351)



---



## Getting Started



### Prerequisites



- Node.js 18+
- npm/yarn/pnpm
- MetaMask or any web3 wallet browser extension
- Scroll Sepolia RPC endpoint and testnet funds for interactions
- A WalletConnect project ID (`NEXT_PUBLIC_PROJECT_ID`) for RainbowKit

### Installation



> The Next.js app lives in `web/`. Smart contracts live in `contracts/`.

#### 1. Clone the Repository



```bash
git clone https://github.com/StabilityNexus/TNT.git
cd TNT/web
```



#### 2. Install Dependencies



Using your preferred package manager:



```bash
npm install
# or
yarn install
# or
pnpm install
```



#### 3. Configure Environment Variables



Create `web/.env.local` (you can copy from `web/.sample.env`) and set:

```
NEXT_PUBLIC_PROJECT_ID=your_walletconnect_project_id
```



#### 4. Run the Development Server



Start the app locally:



```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```



#### 5. Open your Browser



Navigate to [http://localhost:3000](http://localhost:3000) to see the application. Use the Create flow to deploy a new TNT, explore trust tokens, and manage issuance/revocation from the UI.



---



## Smart Contracts



Contracts live in `contracts/`:

- `Factory.sol` deploys TNT contracts, tracks TNTs per creator, and maintains user-to-TNT registries (register/unregister on issuance/burn).
- `TNT.sol` is a non-transferable ERC721 with issuer and revoker roles, optional revocation, timestamped metadata, and image URL support.

Common commands (from `contracts/`):

```bash
forge build
forge test
forge fmt
```



---



## Contributing



We welcome contributions of all kinds! To contribute:

1. Fork the repository and create your feature branch (`git checkout -b feature/AmazingFeature`).
2. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
3. Run the development workflow commands to ensure code quality:
   - `npm run lint`
   - `npm run build`
4. Push your branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request for review.

If you encounter bugs, need help, or have feature requests:

- Please open an issue in this repository providing detailed information.
- Describe the problem clearly and include any relevant logs or screenshots.



We appreciate your feedback and contributions!



© 2025 The Stable Order. 
