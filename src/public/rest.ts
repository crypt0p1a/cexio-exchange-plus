import { GetMyOrders } from './get_my_orders';
import { DoMyInternalTransfer } from './do_my_internal_transfer';
import { GetProcessingInfo } from './get_processing_info';
import { GetDepositAddressMultiple, GetDepositAddressUnique } from './get_deposit_address';
import { GetMyFeeAnswer } from './get_my_fee';
import { GetMyVolumeAnswer } from './get_my_volume';
import { DoDepositFundsToWallet } from './do_deposit_funds_from_wallet';
import { DoWithdrawalFundsToWallet } from './do_withdrawal_funds_to_wallet';
import { GetMyAccountStatusV2 } from './get_my_account_status_v2';

//TODO define the same for the public actions

/**
 * Definition of the simple (request) -> answer
 */
export type RestPrivateMethodsWithoutParameters = {
  get_my_fee: GetMyFeeAnswer,
  get_my_volume: GetMyVolumeAnswer,
}

/**
 * Definition of the simple (request, params) -> answer
 * This accept (request, *1) -> *2 where (*1, *2) exists in the form of multiple params->answer
 */
export type RestPrivateMethodsWithParameters = {
  get_my_orders: GetMyOrders
  get_my_account_status_v2: GetMyAccountStatusV2
  do_withdrawal_funds_to_wallet: DoWithdrawalFundsToWallet
  do_deposit_funds_from_wallet: DoDepositFundsToWallet
  do_my_internal_transfer: DoMyInternalTransfer
  get_processing_info: GetProcessingInfo
  get_deposit_address: 
    | GetDepositAddressMultiple
    | GetDepositAddressUnique
}

export type Params<
  ACTION extends keyof RestPrivateMethodsWithParameters,
> = RestPrivateMethodsWithParameters[ACTION]

export type ParamsWithoutParameters<
  ACTION extends keyof RestPrivateMethodsWithoutParameters,
> = RestPrivateMethodsWithoutParameters[ACTION]
