import { AddressCollection, ZERO_ADDRESS } from './types'

const tokens = {
  XSGD: '0x7A73FA0Be231B44dbcA23E98F49CAe7F11f367Ba',
  USDC: '0xf3585984B956f2A26694ee1BAede7eAB658A5e7E',
  BAL: '0x2DaA47A2cE0BE7484C6328e20eE200e901fEf443',
  EURS: '0x018CEF7740535a156e0981059ACf19E74A886116',
  DAI: '0x7Ab404C804Df8f9f8A44A63e3B546bC16E98b5bf',
  USDT: '0xcECD6ACc6B6Bb0f40B952C251BC303894f62a3ED',
  HONEY: '0x0E4aaF1351de4c0264C5c7056Ef3777b41BD8e03',
  NECT: '0xf5AFCF50006944d17226978e594D4D25f4f92B40'
}

const poolIds = {
  FX_XSGD_USDC: '0x473007d0ef224fe6edcac8a0a9228f0b9571f033000200000000000000000005',
  FX_HONEY_NECT: '0x6d6689c293f481ebe910aaad043914758cd63803000200000000000000000038'
}

const poolAddresses = {
  FX_XSGD_USDC: '0x473007D0ef224FE6EDcaC8a0A9228F0b9571f033',
  FX_HONEY_NECT: '0x6D6689C293f481EbE910AAAD043914758cD63803'
}

const addresses: AddressCollection = {
  ops: {
    multisig: ZERO_ADDRESS,
    deployer: '0x235A2ac113014F9dcb8aBA6577F20290832dDEFd'
  },
  ammV2: {
    vault: '0x6a7531477Da1ff5571EB71649d6EeE2db305375E',
    pools: {
      all: poolAddresses,
      allPoolIds: poolIds,
      genesis: [],
      enabled: [
        {
          assets: [tokens.XSGD, tokens.USDC],
          address: poolAddresses.FX_XSGD_USDC,
          poolId: poolIds.FX_XSGD_USDC
        },
        {
          assets: [tokens.HONEY, tokens.NECT],
          address: poolAddresses.FX_HONEY_NECT,
          poolId: poolIds.FX_HONEY_NECT
        }
      ],
      disabled: [],
      hidden: []
    },
    fxPoolFactory: ZERO_ADDRESS,
    fxPoolDeployer: ZERO_ADDRESS,
    fxPoolDeployerLib: ZERO_ADDRESS,
    fxPoolDeployerTracker: '0x4475Ba7AfdCfC0ED90772843A106b2C77395f19C',
    baseAssimilatorTemplate: ZERO_ADDRESS,
    proportionalLiquidity: ZERO_ADDRESS,
    assimilatorFactory: ZERO_ADDRESS,
    swapLibrary: ZERO_ADDRESS,
    oracles: {
      USDC: '0xc85F993de85896B521701B42299df1103A4d4D67',
      XSGD: '0x8727313981737CF3Ee79051D153D0Bd679184E1a',
      EURS: '0x99b8A93af34efAcb9A71Dd7eBC656365a2d65239',
      HONEY: '0xc85F993de85896B521701B42299df1103A4d4D67',
      NECT: '0xc85F993de85896B521701B42299df1103A4d4D67'
    },
    assimilators: {},
    protocolFeesDistributor: ZERO_ADDRESS,
    balancerProtocolFeeCollector: '0x0e1f9B24Cb920d262b34721706f7197BFD87577C',
    fxPoolMigrator: ZERO_ADDRESS // FXPoolMigratorProxy
  },
  tokens
}

export default addresses
