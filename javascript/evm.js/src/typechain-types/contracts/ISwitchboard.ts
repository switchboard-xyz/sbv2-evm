/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface ISwitchboardInterface extends utils.Interface {
  functions: {
    "getCurrentIntervalId(address)": FunctionFragment;
    "getIntervalResult(address,uint80)": FunctionFragment;
    "latestResult(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getCurrentIntervalId"
      | "getIntervalResult"
      | "latestResult"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getCurrentIntervalId",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getIntervalResult",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "latestResult",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "getCurrentIntervalId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIntervalResult",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestResult",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ISwitchboard extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ISwitchboardInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getCurrentIntervalId(
      aggregatorAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getIntervalResult(
      aggregatorAddress: PromiseOrValue<string>,
      round: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        value: BigNumber;
        timestamp: BigNumber;
        medianTimestamp: BigNumber;
      }
    >;

    latestResult(
      aggregatorAddress: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getCurrentIntervalId(
    aggregatorAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getIntervalResult(
    aggregatorAddress: PromiseOrValue<string>,
    round: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      value: BigNumber;
      timestamp: BigNumber;
      medianTimestamp: BigNumber;
    }
  >;

  latestResult(
    aggregatorAddress: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getCurrentIntervalId(
      aggregatorAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getIntervalResult(
      aggregatorAddress: PromiseOrValue<string>,
      round: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        value: BigNumber;
        timestamp: BigNumber;
        medianTimestamp: BigNumber;
      }
    >;

    latestResult(
      aggregatorAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { value: BigNumber; timestamp: BigNumber }
    >;
  };

  filters: {};

  estimateGas: {
    getCurrentIntervalId(
      aggregatorAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getIntervalResult(
      aggregatorAddress: PromiseOrValue<string>,
      round: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    latestResult(
      aggregatorAddress: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getCurrentIntervalId(
      aggregatorAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getIntervalResult(
      aggregatorAddress: PromiseOrValue<string>,
      round: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    latestResult(
      aggregatorAddress: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
