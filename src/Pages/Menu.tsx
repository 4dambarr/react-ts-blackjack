
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const PageHolder = styled.div`
	width: 100vw;
	height: 100vh;
	display: grid;
	grid-template-columns: 1fr 200px 1fr;
	grid-template-rows: 1fr 70px 20px repeat(2, 100px) 1fr;
`

const TitleHoder = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	grid-column: 2/3;
	grid-row: 2/3;
`

const Title = styled.h1`
	font-size: 40px;
`

const ButtonHolder = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

const MenuButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 320px;
	height: 50px;
	border: 2px solid black;
	border-radius: 10px;
	background-color: #D9D9D9;

	font-size: 30px;
	user-select: none;
	
	&:hover {
		cursor: pointer;
	}
`

export default function Menu() {
	let navigate = useNavigate();

	return (
		<PageHolder>
			<TitleHoder>
				<Title>BLACKJACK</Title>
			</TitleHoder>
			<ButtonHolder style={{gridColumn: "2/3", gridRow: "4/5"}}>
					<MenuButton onClick={() => navigate("/local-game")}>Local Game</MenuButton>
			</ButtonHolder>
			<ButtonHolder style={{gridColumn: "2/3", gridRow: "5/6"}}>
					<MenuButton onClick={() => navigate("/online-game")}>Online Game</MenuButton>
			</ButtonHolder>
		</PageHolder>
	)
}