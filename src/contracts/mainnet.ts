import { ContractGroup } from '../types/contracts'

const contracts: ContractGroup = {
  MINTER: 'KT1LXVbM8Lhf5HV3C5ebhQWp4H1rezMCfMKz',
  OVEN_PROXY: 'KT1JdufSdfg3WyxWJcCRNsBFV9V3x9TQBkJ2',
  OVEN_FACTORY: 'KT1Mgy95DVzqVBNYhsW93cyHuB57Q94UFhrh',
  TOKEN: 'KT1K9gCRgaLRFKTErYt1wVxA3Frb9FjasjTV',
  OVEN_REGISTRY: 'KT1Ldn1XWQmk7J4pYgGFjjwV57Ew8NYvcNtJ',
  DEVELOPER_FUND: 'KT1SorR4UFBkUJeYVbtXZBNivUV1cQM6AqRR',
  STABILITY_FUND: 'KT18wngSoTUqEJiNaYuhcrfYCtsczLUVVkTp',
  ORACLE: 'KT1Tj6xknbwjyK5gyfESNR6WESBcP3yX1mmj',
  HARBINGER_NORMALIZER: 'KT1AdbYiPYb5hDuEuVrfxmFehtnBCXv4Np7r',

  LIQUIDITY_POOL: 'KT1AxaBxkFLCUi3f8rdDAAxBKHfzY8LfKDRA',
  SAVINGS_POOL: null,

  DEXES: {
    QUIPUSWAP: {
      POOL: 'KT1K4EwTpbvYN9agJdjpyJm4ZZdhpUNKB3F6',
      FA1_2_FACTORY: 'KT1Lw8hCoaBrHeTeMXbqHPG4sS4K1xn7yKcD',
      FA2_FACTORY: 'KT1SwH9P1Tx8a58Mm6qBExQFTcy2rwZyZiXS',
    },
    PLENTY: {
      POOL: 'KT1UNBvCJXiwJY6tmHM7CJUVwNPew53XkSfh',
      PLENTY_QUIPUSWAP_POOL: 'KT1X1LgNkQShpF9nRLYw3Dgdy4qp38MX617z',
      PLENTY_TOKEN: 'KT1GRSvLoikDsXujKgZPsGLX8k8VvR2Tq95b',
    },
  },

  KOLIBRI_BAKER: 'tz1abmz7jiCV2GH2u81LRrGgAFFgvQgiDiaf',

  GOVERNOR: 'KT1JBmbYxTv3xptk2CadgEdMfjUCUXKEfe5u',
  PAUSE_GUARDIAN: 'KT1VWKfxhcwJ8H7aRYEYjwaqAfBSQk4J7zAw',
  BREAK_GLASS_MULTISIG: 'KT1PQXekmMqzhT1NHn9QmehEFKQWbkvM6eP2',
  FUND_ADMIN: 'KT1Le2tWBZv8KLQKJmZfLTVYiyaTELtx6zQW',

  DAO: 'KT1WZ1HJyx5wPt96ZTjtWPotoPUk7pXNPfT2',
  DAO_TOKEN: 'KT1JkoE42rrMBP9b2oDhbx6EUr26GcySZMUH',
  DAO_COMMUNITY_FUND: 'KT1RyoAZJ3za3FzYsTJYvqzzq4oEW5xnumdQ',

  FARMS: {
    KUSD: {
      farm: 'KT1HDXjPtjv7Y7XtJxrNc5rNjnegTi2ZzNfv',
      reserve: 'KT1GmtXscYcFhgpcXDuY6Dk6hYqpErsYmxp2',
    },
    QLKUSD: {
      farm: 'KT18oxtA5uyhyYXyAVhTa7agJmxHCTjHpiF7',
      reserve: 'KT1XqMecdis3bZTeLQn6qVYPsWNoh9cWtbot',
    },
    KUSD_LP: {
      farm: 'KT1RB179ddATKbCi7E8ben91bo2hqRRPrNQf',
      reserve: 'KT1UUZvqqBpR6oku4YDxb1oDDfxrfiKaAMgA',
    },
  },

  VESTING_CONTRACTS: {
    tz1YeYpdJshsXxkPdSdKUJaF1QmH1ngCrJ7V: 'KT1JyC6ShDjT9DtdjZAjWFsvuQuev2f49UXn',
    tz1cNABC2qtbbHKDDKdvxRkcyopL1kEfbpgV: 'KT1A4N9amP26gjPknxAsVZNP5xgLGu4yqKka',
    tz1Xh11mHYWxbYHv55AVhsPPPJeSp8PunERB: 'KT1TDgMJA7daH2Dg271dXV3SAMLfhd4kiJGb',
  },

  BREAK_GLASS_CONTRACTS: {
    MINTER: 'KT1TrqGSqnnkbaRUjTNFfd2BWnpAk6MocnwX',
    OVEN_PROXY: 'KT1FTT7CYwEqJErbGkk6ZrWonLtYa8SpTEbH',
    OVEN_FACTORY: 'KT1WaraYWQajJtTW3hrotyRvyFUJ5WowXhD5',
    TOKEN: 'KT1DEEcqJkjWPeTho3RSRfeEkz7aCSgnJXrM',
    OVEN_REGISTRY: 'KT1GCYq8c1xZghVACX52PgX37wJbWXnaokFG',
    DEVELOPER_FUND: 'KT1F3QqU1dYEiyQAyk5dRb2TbXF2H3KDZyQa',
    STABILITY_FUND: 'KT1A36ubxGDzP2j4tkBALGdWQ5YFu2XKREFb',
    ORACLE: 'KT1WWBdDDGTnrBaRih2BvsevvqiC9p4gT1D5',
    LIQUIDITY_POOL: 'KT1FC288PPN87gtmTKRuHVUhoJ1Z8T4KBUAD',
    SAVINGS_POOL: null,
    DAO_COMMUNITY_FUND: 'KT1LdS5mBkTzrjacqgJ1FMZNmaSoUazZXSuR',
    VESTING_VAULTS: {
      tz1YeYpdJshsXxkPdSdKUJaF1QmH1ngCrJ7V: 'KT1M7YNrcUawwFStCoi9SvMm45siDFS5CnU7',
      tz1cNABC2qtbbHKDDKdvxRkcyopL1kEfbpgV: 'KT1DURQAFr1D7Szc9SHyZ4R3ZFL4tpqegzTW',
      tz1Xh11mHYWxbYHv55AVhsPPPJeSp8PunERB: 'KT1B9RF7Ym5ovLtH3tbpVKKeUcnYKa9dZ4zi',
    },
  },
}

export default contracts
