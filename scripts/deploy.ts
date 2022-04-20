import { artifacts } from "hardhat";

async function main() {
  const ZombieFactory = artifacts.require("ZombieFactory");

  return ZombieFactory.new();
}

main()
  .then(({ address }) => {
    console.log(`ZombieFactory deployed to: ${address}`);
    process.exitCode = 0;
  })
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });

module.exports = {};
