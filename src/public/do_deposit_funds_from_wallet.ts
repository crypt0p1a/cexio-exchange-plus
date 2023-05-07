export type DoDepositFundsToWalletRequest = {
  clientTxId: string,
  accountId?: string,
  currency: string,
  amount: string|number,
}

export type DoDepositFundsToWalletBody = {
  clientTxId: string,
  accountId: string,
  currency: string,
  status: "rejected"|"pending"|"approved"
}
