import { useEffect, useState } from "react";
import styled from "styled-components";
import { Turn } from "../Constants/CommonInterfaces";
import { CardType } from "../Constants/Deck"
import Button from "./Button"
import Card from "./Card";


const ScreenHolder = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 20px;

	width: 100vw;
	height: 100vh;
`

const GameInfo = styled.h2`
	margin: -5px;
`

const CardHolder = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 15px;
	margin: 10px;
	height: 380px;
	max-width: 90vw;
	overflow-x: scroll;
	overflow-y: hidden;
`
const BustScreen = styled.div`
	position: absolute;
	width: 400px;
	height: 200px;
	top: calc(50% - 100px);
	left: calc(50% - 200px);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: rgba(227,3,3,60);
	border: 2px solid #980000;
	z-index: 10;
`

interface HandProps {
	player: number | string,
	handNumber: number,
	numHands: number,
	drawCard: () => CardType,
	processTurn: (turn: Turn) => void;
}

const getValue = (value: string) => {
	if (!isNaN(parseInt(value))) {
		return parseInt(value)
	}
	switch (value) {
		case "A":
			return 1
		case "J":
			return 10
		case "Q":
			return 10
		case "K":
			return 10
		default:
			return 0
	}
}

export default function HandScreen({ player, handNumber, numHands, drawCard, processTurn }: HandProps) {
	const [hand, setHand] = useState<CardType[]>([])
	const [isBust, setIsBust] = useState<Boolean>(false)

	const getPossibleScore = (currentHand: CardType[]) => {
		var scores = [0]
		currentHand.forEach(card => {
			if (card.value !== "A") {
				scores = scores.map(score => score + getValue(card.value))
			} else {
				scores = scores.map(score => score + 1).concat(scores.map(score => score + 11))
			}
		})

		const nonBustScores = scores.filter(score => score <= 21)
		if (nonBustScores.length === 0) {
			setIsBust(true)
		}

		return Math.max.apply(0, nonBustScores)
	}

	const onHit = () => {
		if (isBust) {
			return
		}
		const newCard = drawCard()
		setHand([...hand, newCard])
		getPossibleScore([...hand, newCard])
	}

	const onStand = () => {
		processTurn({
			player: player,
			cards: hand,
			total: getPossibleScore(hand),
		})
	}

	useEffect(() => {
		setHand([])
		setIsBust(false)
	}, [player])

	return (
		<ScreenHolder>
			<BustScreen style={{display: isBust?"flex":"none"}}>
				<h2>BUST</h2>
				<Button text="End Turn" action={onStand} />
			</BustScreen>

			<GameInfo>Player {player}'s Turn</GameInfo>
			<GameInfo>Hand {handNumber}/{numHands}</GameInfo>
			<CardHolder>
				{hand.map((card) => {
					return <Card suit={card.suit} value={card.value} />
				})}
			</CardHolder>
			<Button text="Hit" action={onHit} />
			<Button text="Stand" action={onStand} />

		</ScreenHolder>
	)
}