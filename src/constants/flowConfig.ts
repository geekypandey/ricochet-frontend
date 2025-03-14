import { Routes } from 'constants/routes';
import { Coin } from './coins';
import {
  RICAddress,
  twoWayWETHMarketAddress,
  twoWayMarketWBTCAddress,
  USDCxAddress,
  usdcxRicExchangeAddress,
  WBTCxAddress,
  WETHxAddress,
  twoWayMarketDAIWETHAddress,
  DAIxAddress,
  twoWayMarketRICUSDCAddress,
  MATICxAddress,
  twoWayMarketMATICUSDCAddress,
  twoWayMarketMATICDAIAddress, twoWayMarketWBTCDAIAddress,
} from './polygon_config';

export enum FlowEnum {
  twoWayusdcWethFlowQuery = 'twoWayusdcWethFlowQuery',
  twoWaywethUsdcFlowQuery = 'twoWaywethUsdcFlowQuery',
  twoWaywbtcUsdcFlowQuery = 'twoWaywbtcUsdcFlowQuery',
  twoWayusdcWbtcFlowQuery = 'twoWayusdcWbtcFlowQuery',
  twoWayWethDaiFlowQuery = 'twoWayWethDaiFlowQuery',
  twoWayDaiWethFlowQuery = 'twoWayDaiWethFlowQuery',
  twoWayRicUsdcFlowQuery = 'twoWayRicUsdcFlowQuery',
  twoWayUsdcRicFlowQuery = 'twoWayUsdcRicFlowQuery',
  twoWayMaticUsdcFlowQuery = 'twoWayMaticUsdcFlowQuery',
  twoWayUsdcMaticFlowQuery = 'twoWayUsdcMaticFlowQuery',
  twoWayMaticDaiFlowQuery = 'twoWayMaticDaiFlowQuery',
  twoWayDaiMaticFlowQuery = 'twoWayDaiMaticFlowQuery',
  twoWayWbtcDaiFlowQuery = 'twoWayWbtcDaiFlowQuery',
  twoWayDaiWbtcFlowQuery = 'twoWayDaiWbtcFlowQuery',
  usdcRicFlowQuery = 'usdcRicFlowQuery',
}

type IndexIDAType = {
  exchangeAddress: string;
  input: string;
  output:string;
  subsidy?: string;
  subsidyIndex?: number;
  inputIndex: number;
  outputIndex: number;
}[];

export const indexIDA: IndexIDAType = [
  {
    exchangeAddress: twoWayWETHMarketAddress,
    input: USDCxAddress,
    output: WETHxAddress,
    subsidy: RICAddress,
    subsidyIndex: 3,
    inputIndex: 0,
    outputIndex: 1,
  },
  {
    exchangeAddress: twoWayWETHMarketAddress,
    input: WETHxAddress,
    output: USDCxAddress,
    subsidy: RICAddress,
    subsidyIndex: 2,
    inputIndex: 1,
    outputIndex: 0,
  },
  {
    exchangeAddress: twoWayMarketWBTCAddress,
    input: USDCxAddress,
    output: WBTCxAddress,
    subsidy: RICAddress,
    subsidyIndex: 3,
    inputIndex: 0,
    outputIndex: 1,
  },
  {
    exchangeAddress: twoWayMarketWBTCAddress,
    input: WBTCxAddress,
    output: USDCxAddress,
    subsidy: RICAddress,
    subsidyIndex: 2,
    inputIndex: 1,
    outputIndex: 0,
  },
  {
    exchangeAddress: twoWayMarketDAIWETHAddress,
    input: DAIxAddress,
    output: WETHxAddress,
    subsidy: RICAddress,
    subsidyIndex: 3,
    inputIndex: 0,
    outputIndex: 1,
  },
  {
    exchangeAddress: twoWayMarketDAIWETHAddress,
    input: WETHxAddress,
    output: DAIxAddress,
    subsidy: RICAddress,
    subsidyIndex: 2,
    inputIndex: 1,
    outputIndex: 0,
  },
  {
    exchangeAddress: twoWayMarketRICUSDCAddress,
    input: RICAddress,
    output: USDCxAddress,
    subsidy: WETHxAddress,
    subsidyIndex: 3,
    inputIndex: 1,
    outputIndex: 0,
  },
  {
    exchangeAddress: twoWayMarketRICUSDCAddress,
    input: USDCxAddress,
    output: RICAddress,
    subsidy: WETHxAddress,
    subsidyIndex: 2,
    inputIndex: 0,
    outputIndex: 1,
  },
  {
    exchangeAddress: twoWayMarketMATICUSDCAddress,
    input: MATICxAddress,
    output: USDCxAddress,
    subsidy: RICAddress,
    subsidyIndex: 3,
    inputIndex: 1,
    outputIndex: 0,
  },
  {
    exchangeAddress: twoWayMarketMATICUSDCAddress,
    input: USDCxAddress,
    output: MATICxAddress,
    subsidy: RICAddress,
    subsidyIndex: 2,
    inputIndex: 0,
    outputIndex: 1,
  },
  {
    exchangeAddress: twoWayMarketMATICDAIAddress,
    input: MATICxAddress,
    output: DAIxAddress,
    subsidy: RICAddress,
    subsidyIndex: 3,
    inputIndex: 1,
    outputIndex: 0,
  },
  {
    exchangeAddress: twoWayMarketMATICDAIAddress,
    input: DAIxAddress,
    output: MATICxAddress,
    subsidy: RICAddress,
    subsidyIndex: 2,
    inputIndex: 0,
    outputIndex: 1,
  },
  {
    exchangeAddress: twoWayMarketWBTCDAIAddress,
    input: WBTCxAddress,
    output: DAIxAddress,
    subsidy: RICAddress,
    subsidyIndex: 3,
    inputIndex: 1,
    outputIndex: 0,
  },
  {
    exchangeAddress: twoWayMarketWBTCDAIAddress,
    input: DAIxAddress,
    output: WBTCxAddress,
    subsidy: RICAddress,
    subsidyIndex: 2,
    inputIndex: 0,
    outputIndex: 1,
  },
  {
    exchangeAddress: usdcxRicExchangeAddress,
    input: USDCxAddress,
    output: RICAddress,
    subsidy: RICAddress,
    inputIndex: 0, // just a placeholder, not used
    outputIndex: 0,
  },
];

export enum FlowTypes {
  launchpad = 'launchpad',
  market = 'market',
  sushiLP = 'sushiLP',
}

export type InvestmentFlow = {
  superToken: string,
  tokenA: string,
  tokenB: string,
  coinA: Coin,
  coinB: Coin,
  flowKey: FlowEnum,
  type: FlowTypes,
};

const markets: InvestmentFlow[] = [
  {
    superToken: twoWayWETHMarketAddress,
    tokenA: USDCxAddress,
    tokenB: WETHxAddress,
    coinA: Coin.USDC,
    coinB: Coin.WETH,
    flowKey: FlowEnum.twoWayusdcWethFlowQuery,
    type: FlowTypes.market,
  },
  {
    superToken: twoWayWETHMarketAddress,
    tokenA: WETHxAddress,
    tokenB: USDCxAddress,
    coinA: Coin.WETH,
    coinB: Coin.USDC,
    flowKey: FlowEnum.twoWaywethUsdcFlowQuery,
    type: FlowTypes.market,
  },
  {
    superToken: twoWayMarketWBTCAddress,
    tokenA: USDCxAddress,
    tokenB: WBTCxAddress,
    coinA: Coin.USDC,
    coinB: Coin.WBTC,
    flowKey: FlowEnum.twoWayusdcWbtcFlowQuery,
    type: FlowTypes.market,
  },
  {
    superToken: twoWayMarketWBTCAddress,
    tokenA: WBTCxAddress,
    tokenB: USDCxAddress,
    coinA: Coin.WBTC,
    coinB: Coin.USDC,
    flowKey: FlowEnum.twoWaywbtcUsdcFlowQuery,
    type: FlowTypes.market,
  },
  {
    superToken: twoWayMarketDAIWETHAddress,
    tokenA: DAIxAddress,
    tokenB: WETHxAddress,
    coinA: Coin.DAI,
    coinB: Coin.WETH,
    flowKey: FlowEnum.twoWayDaiWethFlowQuery,
    type: FlowTypes.market,
  },
  {
    superToken: twoWayMarketDAIWETHAddress,
    tokenA: WETHxAddress,
    tokenB: DAIxAddress,
    coinA: Coin.WETH,
    coinB: Coin.DAI,
    flowKey: FlowEnum.twoWayWethDaiFlowQuery,
    type: FlowTypes.market,
  },
  {
    superToken: twoWayMarketRICUSDCAddress,
    tokenA: RICAddress,
    tokenB: USDCxAddress,
    coinA: Coin.RIC,
    coinB: Coin.USDC,
    flowKey: FlowEnum.twoWayRicUsdcFlowQuery,
    type: FlowTypes.market,
  },
  {
    superToken: twoWayMarketRICUSDCAddress,
    tokenA: USDCxAddress,
    tokenB: RICAddress,
    coinA: Coin.USDC,
    coinB: Coin.RIC,
    flowKey: FlowEnum.twoWayUsdcRicFlowQuery,
    type: FlowTypes.market,
  },
  {
    superToken: twoWayMarketMATICUSDCAddress,
    tokenA: MATICxAddress,
    tokenB: USDCxAddress,
    coinA: Coin.MATIC,
    coinB: Coin.USDC,
    flowKey: FlowEnum.twoWayMaticUsdcFlowQuery,
    type: FlowTypes.market,
  },
  {
    superToken: twoWayMarketMATICUSDCAddress,
    tokenA: USDCxAddress,
    tokenB: MATICxAddress,
    coinA: Coin.USDC,
    coinB: Coin.MATIC,
    flowKey: FlowEnum.twoWayUsdcMaticFlowQuery,
    type: FlowTypes.market,
  },
  {
    superToken: twoWayMarketMATICDAIAddress,
    tokenA: MATICxAddress,
    tokenB: DAIxAddress,
    coinA: Coin.MATIC,
    coinB: Coin.DAI,
    flowKey: FlowEnum.twoWayMaticDaiFlowQuery,
    type: FlowTypes.market,
  },
  {
    superToken: twoWayMarketMATICDAIAddress,
    tokenA: DAIxAddress,
    tokenB: MATICxAddress,
    coinA: Coin.DAI,
    coinB: Coin.MATIC,
    flowKey: FlowEnum.twoWayDaiMaticFlowQuery,
    type: FlowTypes.market,
  },
  {
    superToken: twoWayMarketWBTCDAIAddress,
    tokenA: WBTCxAddress,
    tokenB: DAIxAddress,
    coinA: Coin.WBTC,
    coinB: Coin.DAI,
    flowKey: FlowEnum.twoWayWbtcDaiFlowQuery,
    type: FlowTypes.market,
  },
  {
    superToken: twoWayMarketWBTCDAIAddress,
    tokenA: DAIxAddress,
    tokenB: WBTCxAddress,
    coinA: Coin.DAI,
    coinB: Coin.WBTC,
    flowKey: FlowEnum.twoWayDaiWbtcFlowQuery,
    type: FlowTypes.market,
  },
];

const liquidityMarkets: InvestmentFlow[] = [
  // {
  //   superToken: usdcxEthSlpxExchangeAddress,
  //   tokenA: USDCxAddress,
  //   tokenB: rexLPETHAddress,
  //   coinA: Coin.USDC,
  //   coinB: Coin.SLP,
  //   flowKey: FlowEnum.usdcSlpEthFlowQuery,
  //   type: FlowTypes.sushiLP,
  // },
];

const launchpads: InvestmentFlow[] = [
  {
    superToken: usdcxRicExchangeAddress,
    tokenA: USDCxAddress,
    tokenB: RICAddress,
    coinA: Coin.USDC,
    coinB: Coin.RIC,
    flowKey: FlowEnum.usdcRicFlowQuery,
    type: FlowTypes.launchpad,
  },
];

export const RoutesToFlowTypes = {
  [<string>Routes.Invest]: FlowTypes.market,
  // [<string>Routes.InvestLiquidityMarkets]: FlowTypes.sushiLP,
  [<string>Routes.InvestLaunchpads]: FlowTypes.launchpad,
};

export const flowConfig: InvestmentFlow[] = [
  ...markets,
  ...liquidityMarkets,
  ...launchpads,
];
