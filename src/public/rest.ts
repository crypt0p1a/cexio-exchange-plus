import { DoDepositFundsToWalletRequest, DoDepositFundsToWalletBody } from './do_deposit_funds_from_wallet';
import { DoWithdrawalFundsToWalletRequest, DoWithdrawalFundsToWalletBody } from './do_withdrawal_funds_to_wallet';
import { GetMyAccountStatusV2 } from './account_status_v2';

export type PrivateRestAction = "get_my_fee"
  | "get_my_volume"
  | "get_my_orders"
  | "get_my_account_status_v2"
  | "do_deposit_funds_from_wallet"
  | "do_withdrawal_funds_to_wallet" ;

export type PublicRestAction = "";

export type AnswerOk<T> = {
  ok: "ok"
  data: T
}

export type GetMyFeeHolder = {
  [key: string]: { percent: number }
}

export type GetMyFee = {
  tradingFee: GetMyFeeHolder
}

export type GetMyVolume = {
  period: "30d",
  volume: string,
  currency: string
}

export type RestPrivateMethodsWithoutParameters = {
  get_my_fee: void,
  get_my_volume: void,
}

export type RestPrivateMethodsWithParameters = {
  get_my_orders: { clientOrderId: string }
  get_my_account_status_v2: { accountIds: string[] } | { currencies: string[] },
  do_withdrawal_funds_to_wallet: DoWithdrawalFundsToWalletRequest,
  do_deposit_funds_from_wallet: DoDepositFundsToWalletRequest,
}

export type RestPrivateMethods = RestPrivateMethodsWithParameters | RestPrivateMethodsWithoutParameters;

export type RestPrivateBody = {
  get_my_fee: AnswerOk<GetMyFee>,
  get_my_volume: AnswerOk<GetMyVolume>,
  get_my_account_status_v2: AnswerOk<GetMyAccountStatusV2>,
  do_withdrawal_funds_to_wallet: AnswerOk<DoWithdrawalFundsToWalletBody>,
  do_deposit_funds_from_wallet: AnswerOk<DoDepositFundsToWalletBody>
}