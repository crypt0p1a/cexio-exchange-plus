import { GetDepositAddressBodyMultiple, GetDepositAddressBodyUnique, GetDepositAddressRequestMultiple, GetDepositAddressRequestUnique } from './get_deposit_address';
import { GetMyFee } from './get_my_fee';
import { GetMyVolume } from './get_my_volume';
import { DoDepositFundsToWalletRequest, DoDepositFundsToWalletBody } from './do_deposit_funds_from_wallet';
import { DoWithdrawalFundsToWalletRequest, DoWithdrawalFundsToWalletBody } from './do_withdrawal_funds_to_wallet';
import { GetMyAccountStatusV2 } from './account_status_v2';

/**
 * Definition of all the possible actions
 * 
 * Note : This will disappear once the below "type" will be fully populated
 */
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
  | "do_withdrawal_funds_to_wallet"
  ;

export type PublicRestAction = "";

/**
 * Definition of types
 */

/**
 * Definition of the simple (request) -> answer
 */
export type RestPrivateMethodsWithoutParameters = {
  get_my_fee: [void, GetMyFee],
  get_my_volume: [void, GetMyVolume],
}

/**
 * Definition of the simple (request, params) -> answer
 * This accept (request, *1) -> *2 where (*1, *2) exists in the form of multiple params->answer
 */
export type RestPrivateMethodsWithParameters = {
  get_my_orders: [{ clientOrderId: string }, void]
  get_my_account_status_v2: [{ accountIds: string[] } | { currencies: string[] }, GetMyAccountStatusV2],
  do_withdrawal_funds_to_wallet:
    | [DoWithdrawalFundsToWalletRequest, DoWithdrawalFundsToWalletBody]
    | [GetDepositAddressRequestMultiple, DoDepositFundsToWalletBody],
  do_deposit_funds_from_wallet: [DoDepositFundsToWalletRequest, DoDepositFundsToWalletBody],
  get_deposit_address: 
    | [GetDepositAddressRequestMultiple, GetDepositAddressBodyMultiple]
    | [GetDepositAddressRequestUnique, GetDepositAddressBodyUnique]
}

export type Params<
  ACTION extends PrivateRestAction & keyof RestPrivateMethodsWithParameters,
> = RestPrivateMethodsWithParameters[ACTION]
