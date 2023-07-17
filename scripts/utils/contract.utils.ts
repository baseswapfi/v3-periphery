import { ethers } from 'hardhat';

export async function deployRouter(factory: string, WETH: string) {
  const SwapRouter = await ethers.getContractFactory('SwapRouter');
  const router = await SwapRouter.deploy(factory, WETH);
  await router.deployed();
  console.log('SwapRouter at: ' + router.address);

  return router;
}

export async function deployQuoterV2(factory: string, WETH: string) {
  const QuoterV2 = await ethers.getContractFactory('QuoterV2');
  const quote = await QuoterV2.deploy(factory, WETH);
  await quote.deployed();
  console.log('QuoterV2 at: ' + quote.address);

  return quote;
}

export async function deployTokenPositionDescriptor(
  WETH: string,
  nativeCurrencyLabelBytes: string,
  NFTDescriptor?: string
) {
  // Link the library
  if (!NFTDescriptor) {
    const descriptor = await ethers.getContractFactory('NFTDescriptor');
    const instance = await descriptor.deploy();
    await instance.deployed();
    console.log('NFTDescriptor library delpoyed at: ' + instance.address);

    NFTDescriptor = instance.address;
  }

  const Factory = await ethers.getContractFactory('NonfungibleTokenPositionDescriptor', {
    libraries: {
      NFTDescriptor,
    },
  });
  const instance = await Factory.deploy(WETH, nativeCurrencyLabelBytes);
  await instance.deployed();
  console.log('NonfungibleTokenPositionDescriptor deployed at: ' + instance.address);

  return instance;
}

export async function deployPositionManager(
  factory: string,
  WETH: string,

  tokenDescriptor: string
) {
  const Factory = await ethers.getContractFactory('NonfungiblePositionManager');
  const instance = await Factory.deploy(factory, WETH, tokenDescriptor);
  await instance.deployed();
  console.log('NonfungiblePositionManager deployed at: ' + instance.address);

  return instance;
}
