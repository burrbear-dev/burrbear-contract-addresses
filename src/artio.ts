import { AddressCollection, ZERO_ADDRESS } from './types'

const tokens = {
  XSGD: '0x9e11bf9d712fe1F9117688924223eDC139181183',
  USDC: '0xF5C462bf81a6b6af0f87749eFACe2453c35CB519',
  BAL: '0x9AA488bc4c3c237104CD6661e076B22e0535eCFA',
  HONEY: '0xA0E91e69b43021b3c6748cfe16296FF4b933bD00',
  EURS: '0xe438137e9Cec7744c2eC052919173f22047c18D7',
  DAI: '0x7b56a6b0E01c771f75dB7Fb9F522391bAcD9db59',
  NECT: '0x45cb13b18A6cBB03A0367FB91cF27bacc069d46d',
  rUSD: '0xEda4F0191C5CCF6670592639BB73764C3C897B1B',
  brONEY: '0x013399514F9089B25F6C59daBA583c5B3d3EC9D2'
}

const poolIds = {
  FX_XSGD_USDC: '0xca7081767ca98cef762666d9b8aec4b79aa183c700020000000000000000000a'
}

const poolAddresses = {
  FX_XSGD_USDC: '0xcA7081767ca98ceF762666D9B8AEc4b79aA183C7'
}

const addresses: AddressCollection = {
  ops: {
    multisig: ZERO_ADDRESS,
    deployer: '0x235A2ac113014F9dcb8aBA6577F20290832dDEFd'
  },
  ammV2: {
    vault: '0xD6D473f54Cda4eb4396690e35d806131bdffE579',
    pools: {
      all: poolAddresses,
      allPoolIds: poolIds,
      genesis: [],
      enabled: [
        {
          assets: [tokens.XSGD, tokens.USDC],
          address: poolAddresses.FX_XSGD_USDC,
          poolId: poolIds.FX_XSGD_USDC
        }
      ],
      disabled: [],
      hidden: []
    },
    fxPoolFactory: ZERO_ADDRESS,
    fxPoolDeployer: ZERO_ADDRESS,
    fxPoolDeployerLib: ZERO_ADDRESS,
    fxPoolDeployerTracker: '0x90c58D12b248d7054adcB5baad467dEb8e33ABcE',
    baseAssimilatorTemplate: ZERO_ADDRESS,
    proportionalLiquidity: ZERO_ADDRESS,
    assimilatorFactory: ZERO_ADDRESS,
    swapLibrary: ZERO_ADDRESS,
    oracles: {
      HONEY: '0x40ff4B351FF7e40CF140b8eCeb8cA0a747a56d33',
      USDC: '0x8bdD150f2a74011aDA6Bd9C1790015Ef65a2Af38',
      XSGD: '0x1A2606F88EbB33e513010ffE7ee2bD5c19815BbA',
      EURS: '0xE8088A8907F0A13A912394df3ae4F48768aB6732'
    },
    assimilators: {},
    protocolFeesDistributor: ZERO_ADDRESS,
    balancerProtocolFeeCollector: '0x470b5AC180563707bc77c61B2E1b8F234A4b06C1',
    fxPoolMigrator: ZERO_ADDRESS // FXPoolMigratorProxy
  },
  tokens
}

export default addresses
