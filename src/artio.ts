import { AddressCollection, ZERO_ADDRESS } from './types'

const tokens = {
  TestToken: '0x1A9c0F67fe805780A0FA0487Ec446E7e06F067e8',
  NativeToken: '0x0000000000000000000000000000000000001010',
  HONEY: '0xd23Cd7a9FF611ba3B3b31a424B530885C638ced9',
  XSGD: '0x84c29961730A16BAc85dbB02a0f05093ca43F206',
  USDC: '0x94d81606Dca42D3680c0DFc1d93eeaF6C2D55f2d',
  BAL: '0x9AA488bc4c3c237104CD6661e076B22e0535eCFA'
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
    fxPoolDeployerTracker: '0xcE63641aDf5134C8D4835D38e9FA28779c60636e',
    baseAssimilatorTemplate: ZERO_ADDRESS,
    proportionalLiquidity: ZERO_ADDRESS,
    assimilatorFactory: ZERO_ADDRESS,
    swapLibrary: ZERO_ADDRESS,
    oracles: {
      HONEY: '0x39A632989Ae533a2bc1b66f17f5642906AB3F6c5',
      USDC: '0x691D4d0e34e48a08991FdF43374b31955A496317',
      XSGD: '0x4C5cFFCdd3e8dCB838764379823002837fd26fec'
    },
    assimilators: {},
    protocolFeesDistributor: ZERO_ADDRESS,
    balancerProtocolFeeCollector: '0x470b5AC180563707bc77c61B2E1b8F234A4b06C1',
    fxPoolMigrator: ZERO_ADDRESS // FXPoolMigratorProxy
  },
  tokens
}

export default addresses
