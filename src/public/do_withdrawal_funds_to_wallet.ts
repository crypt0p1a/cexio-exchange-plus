type DoWithdrawalFundsToWalletRequest = {
  clientTxId: string,
  accountId?: string,
  currency: string,
  amount: string|number,
}

type DoWithdrawalFundsToWalletAnswer = {
  clientTxId: string,
  currency: string,
  status: "rejected"|"pending"|"approved"
}

export type DoWithdrawalFundsToWallet = [ DoWithdrawalFundsToWalletRequest, DoWithdrawalFundsToWalletAnswer ]
