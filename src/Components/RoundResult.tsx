import { useEffect, useState } from "react"
import styled from "styled-components"
import { Turn } from "../Constants/CommonInterfaces"
import Button from "./Button"

const Holder = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 20px;

	width: 100vw;
	height: 100vh;
`

interface ResultProps {
	round: Turn[],
	nextRound: () => void
}

export default function RoundResult({ round, nextRound }: ResultProps) {
	const [winners, setWinners] = useState<any[]>([])

	useEffect(() => {
		var tempWinners: any[] = []
		var maxScore = 0

		round.forEach(turn => {
			if (turn.total > maxScore) {
				tempWinners = [turn.player]
				maxScore = turn.total
			} else if (turn.total === maxScore) {
				tempWinners.push(turn.player)
			}
		})

		setWinners(tempWinners)
	}, [round])
	switch (winners.length) {
		case 0:
			return (
				<Holder>
					<h2>Nodody wins round {round.length + 1}</h2>
					<Button text="Next Round" action={nextRound} />
				</Holder>
			)
		default:
			return (
				<Holder>
					<h2>{winners.map(winner => (typeof winner === "string" ? winner : `Player ${winner[0]}`))} win the round!</h2>
					<Button text="Next Round" action={nextRound} />
				</Holder>
			)
	}
}