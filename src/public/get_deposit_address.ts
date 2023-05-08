type GetDepositAddressMultipleRequest = {
  accountId?: string,
  currencies: string[],
  blockchain?: string,
}

type GetDepositAddressUniqueRequest = {
  accountId?: string,
  currency: string
  blockchain?: string,
}

type GetDepositAddressMultipleAnswer = {
  accountId: string,
  //TODO add here the definition for the cryptos
}

type GetDepositAddressUniqueAnswer = {
  accountId?: string,
  address?: string,
  currency: string
  blockchain?: string,
}

export type GetDepositAddressUnique = [ GetDepositAddressUniqueRequest, GetDepositAddressUniqueAnswer ]
export type GetDepositAddressMultiple = [ GetDepositAddressMultipleRequest, GetDepositAddressMultipleAnswer ]
