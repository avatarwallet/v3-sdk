import { ChainId, SupportedChainsType } from '@xeiswap/sdk-core'

export const FACTORY_ADDRESS = '0x1F98431c8aD98523631AE4a59f267346ea31F984'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export const POOL_INIT_CODE_HASH = '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54'

export const POOL_INIT_CODE_HASHES = {
  [ChainId.MAINNET]: POOL_INIT_CODE_HASH,
  [ChainId.OPTIMISM]: POOL_INIT_CODE_HASH,
  [ChainId.OPTIMISM_GOERLI]: POOL_INIT_CODE_HASH,
  [ChainId.OPTIMISM_SEPOLIA]: POOL_INIT_CODE_HASH,
  [ChainId.ARBITRUM_ONE]: POOL_INIT_CODE_HASH,
  [ChainId.ARBITRUM_GOERLI]: POOL_INIT_CODE_HASH,
  [ChainId.ARBITRUM_SEPOLIA]: POOL_INIT_CODE_HASH,
  [ChainId.POLYGON]: POOL_INIT_CODE_HASH,
  [ChainId.POLYGON_MUMBAI]: POOL_INIT_CODE_HASH,
  [ChainId.GOERLI]: POOL_INIT_CODE_HASH,
  [ChainId.SEPOLIA]: POOL_INIT_CODE_HASH,
  [ChainId.CELO_ALFAJORES]: POOL_INIT_CODE_HASH,
  [ChainId.CELO]: POOL_INIT_CODE_HASH,
  [ChainId.BNB]: POOL_INIT_CODE_HASH,
  [ChainId.AVALANCHE]: POOL_INIT_CODE_HASH,
  [ChainId.BASE]: POOL_INIT_CODE_HASH,
  [ChainId.BASE_GOERLI]: POOL_INIT_CODE_HASH,
  [ChainId.ZORA]: POOL_INIT_CODE_HASH,
  [ChainId.ZORA_SEPOLIA]: POOL_INIT_CODE_HASH,
  [ChainId.ROOTSTOCK]: POOL_INIT_CODE_HASH,
  [ChainId.BLAST]: POOL_INIT_CODE_HASH,
  [ChainId.BSC_TESTNET]: '0x6ce8eb472fa82df5469c6ab6d485f17c3ad13c8cd7af59b3d4a8026c5ce0f7e2',
  [ChainId.SEI_TESTNET]: '0xabc9f1f1cc8bce872451d619da557ed6922444352d18683a2075a3ffec32f256'
} as Record<SupportedChainsType, string>

/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export enum FeeAmount {
  LOWEST = 100,
  LOW = 500,
  MEDIUM = 3000,
  HIGH = 10000
}

/**
 * The default factory tick spacings by fee amount.
 */
export const TICK_SPACINGS: { [amount in FeeAmount]: number } = {
  [FeeAmount.LOWEST]: 1,
  [FeeAmount.LOW]: 10,
  [FeeAmount.MEDIUM]: 60,
  [FeeAmount.HIGH]: 200
}
