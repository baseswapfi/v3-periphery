import {
  deployMigrator,
  deployPositionManager,
  deployQuoter,
  deployQuoterV2,
  deployRouter,
  deployTickLens,
  deployTokenPositionDescriptor,
} from './utils/contract.utils';

const hardhat = require('hardhat');

// ethers.utils.formatBytes32String("S")
const nativeCurrencyLabelBytes =
  '0x5300000000000000000000000000000000000000000000000000000000000000';

const WETH = '';
const FACTORY = '';

const NFTDescriptorLibrary = '';
const NonfungibleTokenPositionDescriptor = '';
const NonfungiblePositionManager = '';
const ROUTER = '';

async function main() {
  try {
    // const signer = (await hardhat.ethers.getSigners())[0];
    // await deployRouter(FACTORY, WETH, signer);
    // await deployQuoterV2(FACTORY, WETH);
    // await deployTickLens();
    // await deployTokenPositionDescriptor(WETH, nativeCurrencyLabelBytes, NFTDescriptorLibrary);
    await deployPositionManager(FACTORY, WETH, NonfungibleTokenPositionDescriptor);
    // await deployMigrator(FACTORY, WETH, NonfungiblePositionManager, signer);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

main();
