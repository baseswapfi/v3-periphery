const hardhat = require('hardhat')

// OP
const FACTORY = '0x06B299186813a1fa9280A38509f488072D9B9F36'
const WETH = '0x4200000000000000000000000000000000000006'

async function main() {
  const SwapRouter = await hardhat.ethers.getContractFactory('SwapRouter')
  const router = await SwapRouter.deploy(FACTORY, WETH)
  await router.deployed()
  console.log('SwapRouter at: ' + router.address)

  // const QuoterV2 = await hardhat.ethers.getContractFactory('QuoterV2')
  // const quote = await QuoterV2.deploy(
  //   '0x855f2c70cf5cb1d56c15ed309a4dfefb88ed909e',
  //   '0x82af49447d8a07e3bd95bd0d56f35241523fbab1'
  // )
  // await quote.deployed()
  // console.log('QuoterV2 at: ' + quote.address)
}

main().catch(console.log)
