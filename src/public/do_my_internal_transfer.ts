type DoMyInternalTransferRequest = {
  fromAccountId: string,
  toAccountId: string,
  amount: number,
  currency: string,
  clientTxId: string
}

type DoMyInternalTransferAnswer = {
  transactionId: string
}

export type DoMyInternalTransfer = [ DoMyInternalTransferRequest, DoMyInternalTransferAnswer ]
