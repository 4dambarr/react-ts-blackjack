import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Turn } from "../Constants/CommonInterfaces"
import Button from "./Button"

interface ResultProps {
	game: Turn[][]
}

const Holder = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 20px;

	width: 100vw;
	height: 100vh;
`

export default function GameResult({ game }: ResultProps) {
	let navigate = useNavigate();
	const [winners, setWinners] = useState<any[]>([])

	const getRoundWinners = (round: Turn[]) => {
		var maxScore = -1;
		var tempWinners: (string | number)[] = [];
		round.forEach(turn => {
			if (turn.total > maxScore) {
				tempWinners = [turn.player]
				maxScore = turn.total
			} else if (turn.total === maxScore) {
				tempWinners.push(turn.player)
			}
		})

		return tempWinners
	}

	useEffect(() => {
		const winnersTally: { [key: string | number]: number } = {}
		game.forEach(round => {
			const roundWinners = getRoundWinners(round)
			roundWinners.forEach(winner => {
				if (winnersTally[winner]) {
					winnersTally[winner] = winnersTally[winner] + 1
				} else {
					winnersTally[winner] = 1
				}
			})
		});

		var tempWinners: { max: number, winners: (string|number)[] } = { max: -1, winners: [] }
			Object.keys(winnersTally).forEach(winner => {
				if (winnersTally[winner] > tempWinners.max) {
					tempWinners = { max: winnersTally[winner], winners: [winner] }
				} else if (winnersTally[winner] === tempWinners.max) {
					tempWinners.winners.push(winner)
				}
			})
		setWinners(tempWinners.winners)
	}, [game])

	const returnToMenu = () => {
		navigate("/")
	}

	console.log(winners, winners.length)
	switch (winners.length) {
		case 0:
			return (
				<Holder>
					<h2>Nodody wins the game</h2>
					<Button text="Main Menu" action={returnToMenu} />
				</Holder>
			)
		case 1:
			return (
				<Holder>
					<h2>{winners.map(winner => `Player ${winner}`)} WINS!</h2>
					<Button text="Main Menu" action={returnToMenu} />
				</Holder>
			)
		default:
			return (
				<Holder>
					<h2>{winners.map(winner=> `Player ${winner}`).join("and")} WIN!</h2>
					<Button text="Main Menu" action={returnToMenu} />
				</Holder>
			)
	}
}