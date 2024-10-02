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

const WETH = '0x591E027153ED4e536275984e1b7573367e11dac4'; // "Wrapped S"
const FACTORY = '0xe52a36Bb76e8f40e1117db5Ff14Bd1f7b058B720';

const NFTDescriptorLibrary = '0x327Df1E6de05895d2ab08513aaDD9313Fe505d86';
const NonfungibleTokenPositionDescriptor = '0x78a087d713Be963Bf307b18F2Ff8122EF9A63ae9';
const NonfungiblePositionManager = '0x2B0A43DCcBD7d42c18F6A83F86D1a19fA58d541A';
const ROUTER = '0x6F1a2F63Ea06B475EDBf2E6393406058C12A7910';

async function main() {
  try {
    // const signer = (await hardhat.ethers.getSigners())[0];
    // await deployRouter(FACTORY, WETH, signer);
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
