import { AddressCollection, ZERO_ADDRESS } from './types'

const tokens = {
  // Burr tokens
  BAL: '0x2DaA47A2cE0BE7484C6328e20eE200e901fEf443',
  XSGD: '0x7A73FA0Be231B44dbcA23E98F49CAe7F11f367Ba',
  EURS: '0x018CEF7740535a156e0981059ACf19E74A886116',
  NECT: '0xf5AFCF50006944d17226978e594D4D25f4f92B40',
  // USDC: '0xf3585984B956f2A26694ee1BAede7eAB658A5e7E',
  // DAI: '0x7Ab404C804Df8f9f8A44A63e3B546bC16E98b5bf',
  // USDT: '0xcECD6ACc6B6Bb0f40B952C251BC303894f62a3ED',
  // HONEY: '0x0E4aaF1351de4c0264C5c7056Ef3777b41BD8e03',
  shETH: '0x3C27c17BF6C2f9e2d1041c8EEFcaBd9c332AfeE3',
  hETH: '0x501Dbf23C2b004D751496ADC073dA3727c5Fe80f',
  BURR: '0x1Bc1A92fcDf8Df49d6E2B62f62a7ccf665c9d9A7',
  shSOL: '0x3176d5566350a92EB5f0283a4c137746694f03ee',
  hSOL: '0x482c38Cd33e79A3E3C1CcE792a72d41BaFFFd416',
  shTIA: '0x47256DBb5C91917e87a26B2020899256c4E1f1ad',
  hTIA: '0x3dB20AEfcd234465C981B87Da025711c91aDD2C3',

  // Berachain tokens
  USDC: '0xd6D83aF58a19Cd14eF3CF6fe848C9A4d21e5727c',
  DAI: '0x806Ef538b228844c73E8E692ADCFa8Eb2fCF729c',
  USDT: '0x05D0dD5135E3eF3aDE32a9eF9Cb06e8D37A6795D',
  HONEY: '0x0E4aaF1351de4c0264C5c7056Ef3777b41BD8e03'
}

const poolIds = {}

const poolAddresses = {}

const addresses: AddressCollection = {
  ops: {
    multisig: ZERO_ADDRESS,
    deployer: '0x235A2ac113014F9dcb8aBA6577F20290832dDEFd'
  },
  ammV2: {
    vault: '0xFDb2925aE2d3E2eacFE927611305e5e56AA5f832',
    pools: {
      all: poolAddresses,
      allPoolIds: poolIds,
      genesis: [],
      enabled: [],
      disabled: [],
      hidden: []
    },
    fxPoolFactory: ZERO_ADDRESS,
    fxPoolDeployer: ZERO_ADDRESS,
    fxPoolDeployerLib: ZERO_ADDRESS,
    fxPoolDeployerTracker: '0xF609eEfEA897ed03d40535a59FA17E075c02Ea94',
    baseAssimilatorTemplate: ZERO_ADDRESS,
    proportionalLiquidity: ZERO_ADDRESS,
    assimilatorFactory: ZERO_ADDRESS,
    swapLibrary: ZERO_ADDRESS,
    oracles: {
      USDC: '0xc85F993de85896B521701B42299df1103A4d4D67',
      XSGD: '0x8727313981737CF3Ee79051D153D0Bd679184E1a',
      EURS: '0x99b8A93af34efAcb9A71Dd7eBC656365a2d65239',
      HONEY: '0xc85F993de85896B521701B42299df1103A4d4D67',
      NECT: '0xc85F993de85896B521701B42299df1103A4d4D67',
      ETH: '0xF5D1b5F80dC60ee43c2affdF99B7acC1e6f8e884',
      SOL: '0x6720b5F572C5eaC792F25A1DBb570a51d46B73fc',
      TIA: '0x84b1C010F8057Cc5B43E19a73AD0d75e60647D5f'
    },
    assimilators: {},
    protocolFeesDistributor: ZERO_ADDRESS,
    balancerProtocolFeeCollector: '0x86EaB6dc751BF99686550ce02d66BDFF3bf4b492',
    fxPoolMigrator: ZERO_ADDRESS // FXPoolMigratorProxy
  },
  tokens
}

export default addresses
