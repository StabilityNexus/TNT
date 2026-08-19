require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  paths: {
    sources: "./contracts/src",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
      forking: {
        // Use a public RPC or your own provider URL for Scroll Sepolia
        url:  process.env.SCROLL_SEPOLIA_RPC_URL || "https://scroll-sepolia.drpc.org", 
        // Optional: Specify a block number to fork from for deterministic tests
        // blockNumber: 1234567 
      },
      accounts: {
        mnemonic: "test test test test test test test test test test test junk",
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 10, // Generates 10 funded wallets
        accountsBalance: "10000000000000000000000", // 10,000 ETH in wei
      },
    }
  }
};