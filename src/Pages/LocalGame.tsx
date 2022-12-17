import { useState } from "react"
import LocalGameScreen from "../Components/LocalGame"
import Settings from "../Components/Settings"

export default function LocalGame() {
	const [currentState, setCurrentState] = useState("settings")
	const [numPlayers, setNumPlayers] = useState(1)
	const [numHands, setNumHands] = useState(1)

	const startGame = () => {
		setCurrentState("game")
		console.log("game")
	}

	switch (currentState) {
		case "settings":
			return <Settings
				numPlayers={numPlayers}
				setNumPlayers={setNumPlayers}
				numHands={numHands}
				setNumHands={setNumHands}
				startGame={startGame}
			/>
		case "game":
			return <LocalGameScreen numPlayers={numPlayers} numHands={numHands} />
		default:
			return <></>
	}
}