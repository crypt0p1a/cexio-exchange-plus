import { RestPrivateMethodsWithParameters, RestPrivateMethodsWithoutParameters } from "./rest";

export { PrivateRestAction,
  PublicRestAction,
  RestPrivateMethodsWithoutParameters,
  RestPrivateMethodsWithParameters,
} from "./rest";

export * from "./get_deposit_address";
export * from "./do_deposit_funds_from_wallet";
export * from "./do_withdrawal_funds_to_wallet";

/**
 * Finally exports the join of the methods :
 * - without parameters
 * - with parameters where param -> result
 * - with various parameters for the same action -> multiple result signatures (matching 1 by 1)
 */
export type RestPrivateMethods = RestPrivateMethodsWithParameters
  | RestPrivateMethodsWithoutParameters
  ;
