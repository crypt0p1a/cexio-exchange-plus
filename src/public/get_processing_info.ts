// inconsistencies between this API and the other, why data { data }
type GetProcessingInfoRequest = {
  data: {
    currencies: string[]
  }
}

type GetProcessingInfoAnswer = {
  [currency: string]: {
    name: string,
    blockchains: {
      type: string,
      deposit: "enabled"|"disabled",
      minDeposit: string,
      withdrawal: "enabled"|"disabled",
      minWithdrawal: string,
      withdrawalFee: string,
      depositConfirmations: number
    }
  }
}

export type GetProcessingInfo = [ GetProcessingInfoRequest, GetProcessingInfoAnswer ]
