import { ethers } from 'hardhat';
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
const FACTORY = '0x60a610de5CB6aa716ba79cEa926cbcc7bFFc43e7';

const NFTDescriptorLibrary = '0xC81f114F8d7B12363211F64F649D2376d654499D';
const NonfungibleTokenPositionDescriptor = '0x91b982439132987b6B656eC4B3d0EE4F3B5cb26B';
const NonfungiblePositionManager = '0xb0bbb78d7dDD1e8c7c6d0f9B49ED3478B4bdE455';
const ROUTER = '0x14963869592E41a2ecD7524bD213cFC3044AdF75';

async function main() {
  try {
    const signer = (await ethers.getSigners())[0];
    // await deployRouter(FACTORY, WETH, signer);
    // await deployQuoter(FACTORY, WETH);
    // await deployQuoterV2(FACTORY, WETH);
    // await deployTickLens();
    // await deployTokenPositionDescriptor(WETH, nativeCurrencyLabelBytes, '');
    // await deployPositionManager(FACTORY, WETH, NonfungibleTokenPositionDescriptor);
    // await deployMigrator(FACTORY, WETH, NonfungiblePositionManager, signer);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

main();
