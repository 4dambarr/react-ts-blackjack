import { CardType } from "./Deck";

export interface Turn {
	player: number | string,
	cards: CardType[],
	total: number
}