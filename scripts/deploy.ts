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

// ethers.utils.formatBytes32String("ETH")
const nativeCurrencyLabelBytes =
  '0x4554480000000000000000000000000000000000000000000000000000000000';

const WETH = '0x4200000000000000000000000000000000000006';
const FACTORY = '0x38015D05f4fEC8AFe15D7cc0386a126574e8077B';

const NFTDescriptorLibrary = '0x706136AF1953291DcBd2311b7f8e4c778DA9D51b';
const NonfungibleTokenPositionDescriptor = '0x38D7FDfBDb6aa83d78e200bEAf5B587123ae2a13';
const NonfungiblePositionManager = '0x2C73D2d528ebC6d19E4e0177080851e709E18BF5';
const ROUTER = '';

async function main() {
  try {
    const signer = (await hardhat.ethers.getSigners())[0];
    await deployRouter(FACTORY, WETH, signer);
    // await deployQuoter(FACTORY, WETH);
    // await deployQuoterV2(FACTORY, WETH);
    // await deployTickLens();
    // await deployTokenPositionDescriptor(WETH, nativeCurrencyLabelBytes, NFTDescriptorLibrary);
    // await deployPositionManager(FACTORY, WETH, NonfungibleTokenPositionDescriptor);
    // await deployMigrator(FACTORY, WETH, NonfungiblePositionManager, signer);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

main();
