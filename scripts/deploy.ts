import {
  deployPositionManager,
  deployQuoter,
  deployQuoterV2,
  deployRouter,
  deployTickLens,
  deployTokenPositionDescriptor,
} from './utils/contract.utils';

const hardhat = require('hardhat');

const WETH_BASE = '0x4200000000000000000000000000000000000006';
const WETH_BASE_TESTNET = WETH_BASE;
const WETH_ARB = '0x82af49447d8a07e3bd95bd0d56f35241523fbab1';
const WETH_ARB_GOERLI = '0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3';

// ethers.utils.formatBytes32String("ETH")
const nativeCurrencyLabelBytes =
  '0x4554480000000000000000000000000000000000000000000000000000000000';

// ethers.utils.formatBytes32String('AGOR')
const arbGoerliNativeLabelBytes =
  '0x41474f5200000000000000000000000000000000000000000000000000000000';

// Factories
const ARB_MAINNET_FACTORY = '0x855f2c70cf5cb1d56c15ed309a4dfefb88ed909e';
const ARB_GOERLI_UNI_FACTORY = '0xF9d602A6825cE5E4dAF34EAb0f3ed086fB734d97';
const BASE_TESTNET_UNI_FACTORY = '0xa4A2C546ac14ecEcee8731695B549fc90116C78f';

// BASE
const SwapRouter_TESTNET = '0x2BaF0D55C02d1e4eA085A1559f147D3751cbAe06';
const QuoterV2_TESTNET = '0x7c735EAD60B0F580d0876f12b57507C3269611F4';
const NFTDescriptorLib_TESTNET = '0xC40bbF05A9107B7833D3136f95B2649e025ea6f8';
const NonfungibleTokenPositionDescriptor_TESTNET = '0xa9167e1Ef7F095A03b85CAFB307bf679a80A2877';
const NonfungiblePositionManager_TESTNET = '0xb069d9d69a5CfeA36feE823c45A114EF8Ca61914';

// ARB
const ARB_NFTDescriptor = '0xf9ccf3bc8764c31c7De2032f1cca21a1d300207F';
const ARB_nonfungibleTokenPositionDescriptor = '0xb67bd4FE705165Aa5728EC396ca7D8f7607eeCa5';
const ARB_nonfungiblePositionManager = '0x763c2e4393Ed80480D735193D57f31692Fe4504e';
const ARB_SWAP_ROUTER = '0xe3dbf9367D2863b638C629a9d4Ca4C949FD7C779';
const ARB_QUOTER = '0x25C418E68291a156d602Bb48db9Eeb5F6a194A83';
const ARB_QUOTER_V2 = '0x91896495C0345dA501f59FAEd8d97b9A71056248';
const ARB_LICK_LENS = '0xf7fe5C645e6Bd1f410447e3266A02E82c3aeefD9';

async function main() {
  try {
    // await deployRouter(ARB_MAINNET_FACTORY, WETH_ARB);
    // await deployQuoter(ARB_MAINNET_FACTORY, WETH_ARB);
    // await deployQuoterV2(ARB_MAINNET_FACTORY, WETH_ARB);
    await deployTickLens();
    // await deployTokenPositionDescriptor(WETH_ARB_GOERLI, nativeCurrencyLabelBytes, NFTDescriptorLib_TESTNET);
    // await deployPositionManager(
    //   ARB_GOERLI_UNI_FACTORY,
    //   WETH_ARB_GOERLI,
    //   NonfungibleTokenPositionDescriptor_TESTNET
    // );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

main();
