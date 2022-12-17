import styled from "styled-components";
import Button from "./Button";
import NumberSelector from "./NumberSelector";

const PageHolder = styled.div`
	width: 100vw;
	height: 100vh;
	display: grid;
	grid-template-columns: 1fr 200px 1fr;
	grid-template-rows: 1fr 70px 20px repeat(2, 100px) 0.3fr 0.7fr;
`
const TitleHoder = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	grid-column: 2/3;
	grid-row: 2/3;
`

const SelectorHolder = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

const Title = styled.h1`
	font-size: 40px;
	text-align: center;
`

interface SettingsType {
	numPlayers: number,
	setNumPlayers: (value: number) => void,
	numHands: number,
	setNumHands: (value: number) => void,
	startGame: () => void
}

export default function Settings({ numPlayers, setNumPlayers, numHands, setNumHands, startGame }: SettingsType) {
	return (
		<PageHolder>
			<TitleHoder>
				<Title>BLACKJACK</Title>
			</TitleHoder>
			<SelectorHolder style={{ gridColumn: "2/3", gridRow: "4/5" }}>
				<NumberSelector value={numPlayers} setValue={setNumPlayers} minValue={1} maxValue={10} label="Number of Players" />
			</SelectorHolder>
			<SelectorHolder style={{ gridColumn: "2/3", gridRow: "5/6" }}>
				<NumberSelector value={numHands} setValue={setNumHands} minValue={1} maxValue={5} label="Number of Hands" />
			</SelectorHolder>
			<SelectorHolder style={{ gridColumn: "2/3", gridRow: "6/7" }}>
				<Button text="Start Game" action={startGame} />
			</SelectorHolder>
		</PageHolder>
	)
}