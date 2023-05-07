export type BalanceForCurrency = {
  balance: string,
  balanceOnHold: string,
  balanceAvailable: string,
  balanceInBaseCurrency?: string,
  balanceInConvertedCurrency?: string,
}

export type GetMyAccountBalancesPerAccount = {
  [account: string]: GetMyAccountBalancesPerAccount
}

export type GetMyAccountBalancesPerAccounts = {
  [account: string]: GetMyAccountBalancesPerAccount
}

export type GetMyAccountStatusV2 = {
  convertedCurrency: "USD",
  creditLine?: any, // missing definition for this object
  balancesPerAccounts: GetMyAccountBalancesPerAccounts
}
