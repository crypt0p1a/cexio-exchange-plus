import { RestPrivateMethodsWithParameters, RestPrivateMethodsWithoutParameters } from "./rest";

export {
  RestPrivateMethodsWithoutParameters,
  RestPrivateMethodsWithParameters,
} from "./rest";

/**
 * Finally exports the join of the methods :
 * - without parameters
 * - with parameters where param -> result
 * - with various parameters for the same action -> multiple result signatures (matching 1 by 1)
 */
export type RestPrivateMethods = RestPrivateMethodsWithParameters
  | RestPrivateMethodsWithoutParameters
  ;
