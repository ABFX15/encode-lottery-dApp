import { viem } from "hardhat";
import { parseEther } from "viem";

const TOKEN_RATIO = 1n;
const BET_PRICE = "1"; 
const BET_FEE = "0.2";

async function main() {
  console.log("Deploying Lottery contract...");
  
  const lottery = await viem.deployContract("Lottery", [
    "LotteryToken",
    "LT0", 
    TOKEN_RATIO,
    parseEther(BET_PRICE),
    parseEther(BET_FEE)
  ]);

  console.log(`Lottery deployed to: ${lottery.address}`);

  const tokenAddress = await lottery.read.paymentToken();
  console.log(`LotteryToken deployed to: ${tokenAddress}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
