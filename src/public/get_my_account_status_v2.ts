type BalanceForCurrency = {
  balance: string,
  balanceOnHold: string,
  balanceAvailable: string,
  balanceInBaseCurrency?: string,
  balanceInConvertedCurrency?: string,
}

type GetMyAccountBalancesPerAccount = {
  [account: string]: BalanceForCurrency
}

type GetMyAccountBalancesPerAccounts = {
  [account: string]: GetMyAccountBalancesPerAccount
}

type GetMyAccountStatusV2Request = {
  currencies?: string[],
  accountIds?: string[]
}

type GetMyAccountStatusV2Answer = {
  convertedCurrency: "USD",
  creditLine?: any, // missing definition for this object
  balancesPerAccounts: GetMyAccountBalancesPerAccounts
}

export type GetMyAccountStatusV2 = [ GetMyAccountStatusV2Request, GetMyAccountStatusV2Answer ]
