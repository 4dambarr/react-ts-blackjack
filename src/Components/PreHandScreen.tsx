import styled from "styled-components"
import Button from "./Button"

const ScreenHolder = styled.div`
	display: flex;
	height: 100vh;
	width: 100vw;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 30px;
`

interface ScreenProps {
	name: string | number,
	startRound: () => void
}

export default function PreHandScreen({name, startRound}: ScreenProps) {
	return (
		<ScreenHolder>
			<h1>{typeof name == "string" ? name : `Player ${name}`}'s turn</h1>
			<Button text="Begin" action={startRound}/>
		</ScreenHolder>
	)
}