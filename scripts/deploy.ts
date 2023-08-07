import {
  deployPositionManager,
  deployQuoter,
  deployQuoterV2,
  deployRouter,
  deployTickLens,
  deployTokenPositionDescriptor,
} from './utils/contract.utils';

const hardhat = require('hardhat');

// ethers.utils.formatBytes32String("ETH")
const nativeCurrencyLabelBytes =
  '0x4554480000000000000000000000000000000000000000000000000000000000';

const WETH = '0x4200000000000000000000000000000000000006';
const FACTORY = '0x3f6533d37d7623Bf7a396730637CE0F52bf27781';

const NFTDescriptorLibrary = '0xB5D1AB6Dfc161B1323a4126C03255B893175BF84';
const NonfungibleTokenPositionDescriptor = '0xB9FBbF664FF83b931e3329fcC09b52aD539624d8';
const NonfungiblePositionManager = '0x20C51B3dA2E7821eF62D63a447Ac9E5F8a503065';

async function main() {
  try {
    // await deployRouter(FACTORY, WETH);
    // await deployQuoter(FACTORY, WETH);
    // await deployQuoterV2(FACTORY, WETH);
    // await deployTickLens();
    // await deployTokenPositionDescriptor(WETH, nativeCurrencyLabelBytes, null);
    // await deployPositionManager(FACTORY, WETH, NonfungibleTokenPositionDescriptor);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

main();
