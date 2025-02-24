import { AddressCollection, ZERO_ADDRESS } from './types'

const tokens = {
  BAL: '0xD77552D3849ab4D8C3b189A9582d0ba4C1F4f912',
  USDC: '0x549943e04f40284185054145c6E4e9568C1D3241',
  NECT: '0x1cE0a25D13CE4d52071aE7e02Cf1F6606F4C79d3'
}

const poolIds = {}

const poolAddresses = {}

const addresses: AddressCollection = {
  ops: {
    multisig: ZERO_ADDRESS,
    deployer: '0x79843107707AbB6D3320cb236228ABDda38cA005'
  },
  ammV2: {
    vault: '0xBE09E71BDc7b8a50A05F7291920590505e3C7744',
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
    fxPoolDeployerTracker: '0x5354a7B0fBD69Ee23DE0a71A65b5D9Bbb69f66A4',
    baseAssimilatorTemplate: ZERO_ADDRESS,
    proportionalLiquidity: ZERO_ADDRESS,
    assimilatorFactory: ZERO_ADDRESS,
    swapLibrary: ZERO_ADDRESS,
    oracles: {
      USDC: '0x4BAD96DD1C7D541270a0C92e1D4e5f12EEEA7a57',
      NECT: '0x5e21f6530f656A38caE4F55500944753F662D184'
    },
    assimilators: {},
    protocolFeesDistributor: ZERO_ADDRESS,
    balancerProtocolFeeCollector: '0x19C15d9C3FA6D431eC85F7147E5174ecACb6C206',
    fxPoolMigrator: ZERO_ADDRESS // FXPoolMigratorProxy
  },
  tokens
}

export default addresses
