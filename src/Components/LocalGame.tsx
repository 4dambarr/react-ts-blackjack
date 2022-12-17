import { useEffect, useState } from "react";
import { Turn } from "../Constants/CommonInterfaces";
import { CardType, deck } from "../Constants/Deck";
import HandScreen from "./HandScreen";
import PreHandScreen from "./PreHandScreen";
import RoundResult from "./RoundResult";



const shuffleArray = (array: any[]) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return [...array]
}

interface GameProps {
	numPlayers: number,
	numHands: number
}

export default function LocalGameScreen({numPlayers, numHands}: GameProps) {
	const [gameState, setGameState] = useState("pre-hand-screen")
	const [currentDeck, setCurrentDeck] = useState(deck)
	const [round, setRound] = useState<Turn[]>([])
	const [game, setGame] = useState<Turn[][]>([])

	useEffect(() => {
		setCurrentDeck(shuffleArray(deck))
	}, [numPlayers])

	const processTurn = (turn: Turn) => {
		// Set these consts to avoids issues with set state being async
		const numTurns = round.length + 1;
		const numRounds = game.length + 1;
		setRound([...round, turn])
		if (numTurns === numPlayers) {
			setGame([...game, [...round, turn]])
			if (numRounds === numHands) {
				setGameState("game-result")
			} else {
				setGameState("round-result")
			}
		} else {
			setGameState("pre-hand-screen")
		}
	}

	const drawCard = () => {
		const card: CardType = currentDeck[0]
		setCurrentDeck([...currentDeck.slice(1)])
		return card
	}
	
	const nextRound = () => {
		setRound([])
		setGameState("pre-hand-screen")
	}

	switch (gameState) {
		case "pre-hand-screen":
			return <PreHandScreen name={round.length + 1} startRound={() => setGameState("player-hand")} />
		case "player-hand":
			return <HandScreen player={round.length + 1} handNumber={game.length + 1} numHands={numHands} drawCard={drawCard} processTurn={processTurn}/>
		case "round-result":
			return <RoundResult round={round} nextRound={nextRound} />
		case "game-result":
			return <p>Game Result</p>
		default:
			return <></>
	}
}