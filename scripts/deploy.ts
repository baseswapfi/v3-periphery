import { deployTokenPositionDescriptor } from './utils/contract.utils';

const hardhat = require('hardhat');

// BASE
const FACTORY = '0x1b527E8690F0c57ea546e72Fb0c66a312118A941';
const WETH = '0x4200000000000000000000000000000000000006';

// ethers.utils.formatBytes32String("ETH")
const nativeCurrencyLabelBytes =
  '0x4554480000000000000000000000000000000000000000000000000000000000';
const NFTDescriptor_BASE = '0xE4e56751d115773b61a8DEED0737710139dB55F7';

async function main() {
  try {
    // await deployTokenPositionDescriptor(WETH, nativeCurrencyLabelBytes, NFTDescriptor_BASE);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

main();
