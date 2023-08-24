const { ethers, upgrades} = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const TezCoin = await ethers.getContractFactory("TezCoin");
  const tezCoin= await TezCoin.deploy(1000); // Initial supply of 1000 tokens
  await tezCoin.deployed();

  const RewardRules = await ethers.getContractFactory("RewardRules");
  const rewardRules = await RewardRules.deploy(tezCoin.address);
  await rewardRules.deployed();

  console.log("FlipGem deployed to:", tezCoin.address);
  console.log("Reward Rules deployed to:", rewardRules.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
