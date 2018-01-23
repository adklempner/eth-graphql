const typeDefs = `
  type AccountWithBalance {
    address: String!
    balance: String!
  }

  type Query {
    accounts(params: [String] = []): [String]!
    accountsWithBalances: [AccountWithBalance]!
    blockNumber(params: [String] = []): String!
    getBalance(params: [String] = []): String!
    version: String!
  }
`

module.exports = typeDefs