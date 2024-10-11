import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import 'hardhat-typechain';
import 'hardhat-watcher';

import { config } from 'dotenv';

config();

const accounts = [process.env.DEV_KEY];

const LOW_OPTIMIZER_COMPILER_SETTINGS = {
  version: '0.7.6',
  settings: {
    evmVersion: 'istanbul',
    optimizer: {
      enabled: true,
      runs: 2_000,
    },
    metadata: {
      bytecodeHash: 'none',
    },
  },
};

const LOWEST_OPTIMIZER_COMPILER_SETTINGS = {
  version: '0.7.6',
  settings: {
    evmVersion: 'istanbul',
    optimizer: {
      enabled: true,
      runs: 1_000,
    },
    metadata: {
      bytecodeHash: 'none',
    },
  },
};

const DEFAULT_COMPILER_SETTINGS = {
  version: '0.7.6',
  settings: {
    evmVersion: 'istanbul',
    optimizer: {
      enabled: true,
      runs: 1_000_000,
    },
    metadata: {
      bytecodeHash: 'none',
    },
  },
};

export default {
  networks: {
    // hardhat: {
    //   allowUnlimitedContractSize: false,
    // },
    // mainnet: {
    //   url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    // },
    // goerli: {
    //   url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
    // },
    // arbitrumRinkeby: {
    //   url: `https://arbitrum-rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
    // },
    // arbitrum: {
    //   url: `${process.env.ARBITRUM_RPC}`,
    //   accounts,
    // },
    // arbitrum_goerli: {
    //   url: process.env.ARBITRUM_GOERLI_RPC || '',
    //   accounts,
    //   chainId: 421613,
    // },
    // optimismKovan: {
    //   url: `https://optimism-kovan.infura.io/v3/${process.env.INFURA_API_KEY}`,
    // },
    optimism: {
      url: `${process.env.OPTIMISM_RPC}`,
      accounts,
      chainId: 10,
    },
    // base: {
    //   url: process.env.BASE_RPC || '',
    //   accounts,
    //   chainId: 8453,
    //   // gas: 500000,
    //   // gasPrice: 100,
    // },
    // base_goerli: {
    //   url: process.env.BASE_GOERLI_RPC,
    //   accounts,
    //   chainId: 84531,
    //   gas: 500000,
    //   gasPrice: 100,
    // },
    sonicTestnet: {
      url: process.env.SONIC_TESTNET_RPC,
      accounts,
      chainId: 64165,
    },
    soneiumTestnet: {
      url: process.env.SONEIUM_TESTNET_RPC || '',
      accounts,
      chainId: 1946,
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
    customChains: [
      {
        network: 'base',
        chainId: 8453,
        apiKey: process.env.ETHERSCAN_API_KEY,
        urls: {
          apiURL: 'https://api.basescan.org',
          browserURL: 'https://basescan.org',
        },
      },
    ],
  },
  solidity: {
    compilers: [DEFAULT_COMPILER_SETTINGS],
    overrides: {
      'contracts/NonfungiblePositionManager.sol': LOW_OPTIMIZER_COMPILER_SETTINGS,
      'contracts/test/MockTimeNonfungiblePositionManager.sol': LOW_OPTIMIZER_COMPILER_SETTINGS,
      'contracts/test/NFTDescriptorTest.sol': LOWEST_OPTIMIZER_COMPILER_SETTINGS,
      'contracts/NonfungibleTokenPositionDescriptor.sol': LOWEST_OPTIMIZER_COMPILER_SETTINGS,
      'contracts/libraries/NFTDescriptor.sol': LOWEST_OPTIMIZER_COMPILER_SETTINGS,
    },
  },
  watcher: {
    test: {
      tasks: [{ command: 'test', params: { testFiles: ['{path}'] } }],
      files: ['./test/**/*'],
      verbose: true,
    },
  },
};
