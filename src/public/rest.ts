import { GetDepositAddressBodyMultiple, GetDepositAddressBodyUnique, GetDepositAddressRequestMultiple, GetDepositAddressRequestUnique } from './get_deposit_address';
import { GetMyFee } from './get_my_fee';
import { GetMyVolume } from './get_my_volume';
import { DoDepositFundsToWalletRequest, DoDepositFundsToWalletBody } from './do_deposit_funds_from_wallet';
import { DoWithdrawalFundsToWalletRequest, DoWithdrawalFundsToWalletBody } from './do_withdrawal_funds_to_wallet';
import { GetMyAccountStatusV2 } from './account_status_v2';

export type PrivateRestAction = "get_my_fee"
  | "get_my_volume"
  | "get_my_orders"
  | "get_my_account_status_v2"
  //TODO get_my_orders
  //TOOD do_my_new_order
  //TOOD do_cancel_my_order
  //TOOD do_cancel_all_orders
  //TOOD get_order_book
  //TOOD get_candles
  //TODO get_trade_history
  //TODO get_my_transaction_history
  //TODO get_my_funding_history
  //TODO do_my_internal_transfer
  //TODO get_processing_info
  | "get_deposit_address"
  | "do_deposit_funds_from_wallet"
  | "do_withdrawal_funds_to_wallet" ;

export type PublicRestAction = "";

export type AnswerOk<T> = {
  ok: "ok"
  data: T
}


export type Holder<R, A> = {
  request: R,
  answer: A
}

export type Inference = {
  GetDepositAddressRequestMultiple: GetDepositAddressBodyMultiple,
  GetDepositAddressRequestUnique: GetDepositAddressBodyUnique,
}

export type HolderWithInference<R> = {
  request: R,
}


export type RestPrivateMethodsWithoutParameters = {
  get_my_fee: Holder<void, AnswerOk<GetMyFee>>,
  get_my_volume: Holder<void, AnswerOk<GetMyVolume>>,
}

export type RestPrivateMethodsWithParameters = {
  get_my_orders: Holder<{ clientOrderId: string }, void>
  get_my_account_status_v2: Holder<{ accountIds: string[] } | { currencies: string[] }, AnswerOk<GetMyAccountStatusV2>>,
  do_withdrawal_funds_to_wallet: Holder<DoWithdrawalFundsToWalletRequest, AnswerOk<DoWithdrawalFundsToWalletBody>>,
  do_deposit_funds_from_wallet: Holder<DoDepositFundsToWalletRequest, AnswerOk<DoDepositFundsToWalletBody>>,
}


/**
 * Managed specific case where the method as multiple input -> 1 matching result
 */
export type Input = GetDepositAddressRequestMultiple | GetDepositAddressRequestUnique
export type Output = GetDepositAddressBodyMultiple | GetDepositAddressBodyUnique

// we want to match those 1 to 1
export type Return<T extends Input> =
    T extends GetDepositAddressRequestMultiple
    ? GetDepositAddressBodyMultiple
    : GetDepositAddressBodyUnique

export type RestPrivateMethodsWithParametersWithInference = {
  get_deposit_address: GetDepositAddressRequestMultiple|GetDepositAddressBodyUnique,
}

export type RestPrivateMethods = RestPrivateMethodsWithParameters
  | RestPrivateMethodsWithoutParameters
  | RestPrivateMethodsWithParametersWithInference;
