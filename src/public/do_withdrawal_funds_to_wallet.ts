export type DoWithdrawalFundsToWalletRequest = {
  clientTxId: string,
  accountId?: string,
  currency: string,
  amount: string|number,
}

export type DoWithdrawalFundsToWalletBody = {
  clientTxId: string,
  currency: string,
  status: "rejected"|"pending"|"approved"
}
