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
const FACTORY = '0xd5046B976188EB40f6DE40fB527F89c05b323385';

const NFTDescriptorLibrary = '0xE4750593d1fC8E74b31549212899A72162f315Fa';
const NonfungibleTokenPositionDescriptor = '0xD15da75772723e0FCa1623e6F937F135562878Cd';
const NonfungiblePositionManager = '0xD62eFF97A2A21632Cd912De48786FAcddD4938A5';
const ROUTER = '';

async function main() {
  try {
    const signer = (await ethers.getSigners())[0];
    await deployRouter(FACTORY, WETH, signer);
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
