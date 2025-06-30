# Makefile for deploying TNT contracts

# Load environment variables from .env file
include .env
export

# Deploy to Scroll Sepolia
deploy-scroll:
	@echo "Deploying Factory contract to Scroll Sepolia..."
	forge script script/DeployFactory.s.sol:DeployFactory --rpc-url scrollSepolia --private-key ${PRIVATE_KEY} --broadcast

# Install dependencies
install:
	forge install foundry-rs/forge-std --no-commit
	forge install OpenZeppelin/openzeppelin-contracts@v5.0.1 --no-commit
