const hardhat = require('hardhat');

// BASE
const FACTORY = '0x1b527E8690F0c57ea546e72Fb0c66a312118A941';
const WETH = '0x4200000000000000000000000000000000000006';

const SWAP_ROUTER = '0xff139bEa1E15Eff04e8Fa3ac8dd29401C74F323D';
const QUOTER_V2 = '0x6d561f79A1C302fD18CFd87aC7b4571Ec84Ca5A7';

async function main() {
  const SwapRouter = await hardhat.ethers.getContractFactory('SwapRouter');
  const router = await SwapRouter.deploy(FACTORY, WETH);
  await router.deployed();
  console.log('SwapRouter at: ' + router.address);

  const QuoterV2 = await hardhat.ethers.getContractFactory('QuoterV2');
  const quote = await QuoterV2.deploy(FACTORY, WETH);
  await quote.deployed();
  console.log('QuoterV2 at: ' + quote.address);
}

main().catch(console.log);
