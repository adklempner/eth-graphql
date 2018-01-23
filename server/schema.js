const typeDefs = `
  type AccountWithBalance {
    address: String!
    balance: String!
  }

  type Block {
    difficulty: String!
    extraData: String!
    gasLimit: String!
    gasUsed: String!
    hash: String!
    logsBloom: String!
    nonce: String!
    miner: String!
    number: String!
    parentHash: String!
    receiptsRoot: String!
    sha3Uncles: String!
    size: String!
    stateRoot: String!
    totalDifficulty: String!
    transactionsRoot: String!
    timestamp: String!
    transactions: [String]!
    uncles: [String]!
  }

  type Query {
    accounts(params: [String] = []): [String]!
    accountsWithBalances: [AccountWithBalance]!
    blockNumber(params: [String] = []): String!
    coinbase: String!
    gasPrice: String!
    getBalance(params: [String] = []): String!
    getBlockByNumber(params: [String] = []): Block!
    getBlockTransactionCountByHash(params: [String] = []): String!
    getBlockTransactionCountByNumber(params: [String] = []): String!
    getTransactionCount(params: [String] = []): String!
    getUncleCountByBlockHash(params: [String] = []): String!
    getUncleCountByBlockNumber(params: [String] = []): String!
    hashrate: String!
    listening: Boolean!
    mining: Boolean!
    peerCount: String!
    protocolVersion: String!
    version: String!
  }
`

module.exports = typeDefs
