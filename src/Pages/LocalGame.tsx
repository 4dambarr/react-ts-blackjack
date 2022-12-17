import { useState } from "react"
import Settings from "../Components/Settings"

export default function LocalGame() {
	const [currentState, setCurrentState] = useState("settings")
	const [numPlayers, setNumPlayers] = useState(1)
	const [numHands, setNumHands] = useState(1)

	const startGame = () => {
		setCurrentState("game")
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
			return <p>game</p>
		default:
			return <></>
	}
}