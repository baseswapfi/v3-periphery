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
const FACTORY = '0xe52a36Bb76e8f40e1117db5Ff14Bd1f7b058B720';

const NFTDescriptorLibrary = '0x0fE9E7B39dbdfe32c9F37FAcCec6b33d290CbF50';
const NonfungibleTokenPositionDescriptor = '0x327Df1E6de05895d2ab08513aaDD9313Fe505d86';
const NonfungiblePositionManager = '0x78a087d713Be963Bf307b18F2Ff8122EF9A63ae9';
const ROUTER = '0xFDa619b6d20975be80A10332cD39b9a4b0FAa8BB';

async function main() {
  try {
    // const signer = (await hardhat.ethers.getSigners())[0];
    // await deployRouter(FACTORY, WETH, signer);
    // await deployQuoterV2(FACTORY, WETH);
    // await deployTickLens();
    // await deployTokenPositionDescriptor(WETH, nativeCurrencyLabelBytes, undefined);
    await deployPositionManager(FACTORY, WETH, NonfungibleTokenPositionDescriptor);
    // await deployMigrator(FACTORY, WETH, NonfungiblePositionManager, signer);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

main();
