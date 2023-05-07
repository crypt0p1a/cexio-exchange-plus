export type GetDepositAddressRequestMultiple = {
  accountId?: string,
  currencies: string,
  blockchain?: string,
}

export type GetDepositAddressRequestUnique = {
  accountId?: string,
  currency: string
  blockchain?: string,
}

export type GetDepositAddressBodyMultiple = {
  accountId: string,
  //TODO add here the definition for the cryptos
}

export type GetDepositAddressBodyUnique = {
  accountId?: string,
  address?: string,
  currency: string
  blockchain?: string,
}
