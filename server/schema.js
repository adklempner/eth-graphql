const typeDefs = `
  type AccountWithBalance {
    address: String!
    balance: String!
  }

  type Query {
    accounts(params: [String] = []): [String]!
    accountsWithBalances: [AccountWithBalance]!
    blockNumber(params: [String] = []): String!
    coinbase: String!
    getBalance(params: [String] = []): String!
    listening: Boolean!
    mining: Boolean!
    peerCount: String!
    protocolVersion: String!
    version: String!
  }
`

module.exports = typeDefs
