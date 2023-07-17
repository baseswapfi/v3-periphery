import {
  deployPositionManager,
  deployQuoterV2,
  deployRouter,
  deployTokenPositionDescriptor,
} from './utils/contract.utils';

const hardhat = require('hardhat');

// BASE
const UNI_FACTORY = '';
const WETH = '0x4200000000000000000000000000000000000006';

// ethers.utils.formatBytes32String("ETH")
const nativeCurrencyLabelBytes =
  '0x4554480000000000000000000000000000000000000000000000000000000000';

// const NFTDescriptor_BASE = '';
// const NonfungibleTokenPositionDescriptor = '';

const UNI_FACTORY_TESTNET = '0xa4A2C546ac14ecEcee8731695B549fc90116C78f';

const SwapRouter_TESTNET = '';
const QuoterV2_TESTNET = '';
const NFTDescriptor_TESTNET = '';
const NonfungibleTokenPositionDescriptor_TESTNET = '';
const NonfungiblePositionManager_TESTNET = '';

async function main() {
  try {
    // await deployRouter(UNI_FACTORY_TESTNET, WETH);
    await deployQuoterV2(UNI_FACTORY_TESTNET, WETH);
    // await deployTokenPositionDescriptor(WETH, nativeCurrencyLabelBytes, NFTDescriptor_TESTNET);
    // await deployPositionManager(
    //   UNI_FACTORY_TESTNET,
    //   WETH,
    //   NonfungibleTokenPositionDescriptor_TESTNET
    // );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

main();
