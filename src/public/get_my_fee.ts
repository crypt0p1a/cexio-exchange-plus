export type GetMyFeeHolder = {
  [key: string]: { percent: number }
}

export type GetMyFee = {
  tradingFee: GetMyFeeHolder
}
