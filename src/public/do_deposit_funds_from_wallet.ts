type DoDepositFundsToWalletRequest = {
  clientTxId: string,
  accountId?: string,
  currency: string,
  amount: string|number,
}

type DoDepositFundsToWalletAnswer = {
  clientTxId: string,
  accountId: string,
  currency: string,
  status: "rejected"|"pending"|"approved"
}

export type DoDepositFundsToWallet = [ DoDepositFundsToWalletRequest, DoDepositFundsToWalletAnswer ]
