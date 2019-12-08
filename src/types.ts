export const BUY_CAKE = Symbol();
export const BUY_ICE_CREAM = Symbol();

export type Action = { type: symbol; payload?: unknown };
export type CakeState = { nCakes: number };
export type IceCreamState = { nIceCream: number };
export type State = { cake: CakeState; iceCream: IceCreamState };
export type CakeProps = { nCakes: number; buyCake: () => Action };
export type IcreamProps = { nIceCream: number; buyIceCream: () => Action };
export type Props = { cake: CakeProps; iceCream: IcreamProps };
