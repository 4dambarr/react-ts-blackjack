import styled from "styled-components"
import { BsFillSuitDiamondFill, BsFillSuitHeartFill, BsFillSuitSpadeFill, BsFillSuitClubFill } from "react-icons/bs"

const Holder = styled.div`
	height: 374px;
	width: 274px;
	border: 2px solid black;
	border-radius: 20px;

	display: grid;
	grid-template-columns: 50px 1fr 50px;
	grid-template-rows: 50px 1fr 50px; 
`

const TopLeftDetail = styled.div`
	grid-column: 1 / 2;
	grid-row: 1 / 2;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	font-size: 20px;
`

const BottomRightDetail = styled.div`
	grid-column: 3 / 4;
	grid-row: 3 / 4;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transform: rotate(180deg);

	font-size: 20px;
`

const MiddleDetail = styled.div`
	grid-column: 2 / 3;
	grid-row: 2 / 3;
`

const CentreHolder = styled.div`
	display: grid;
	width: 100%;
	height: 100%;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(4, 1fr); 
`
const Icon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

const getIcon = (suit: string) => {
	switch (suit) {
		case "heart":
			return <BsFillSuitHeartFill style={{ fontSize: "30px" }} />
		case "diamond":
			return <BsFillSuitDiamondFill style={{ fontSize: "30px" }} />
		case "club":
			return <BsFillSuitClubFill style={{ fontSize: "30px" }} />
		case "spade":
			return <BsFillSuitSpadeFill style={{ fontSize: "30px" }} />
		default:
			return ""
	}
}

function Card({ suit, value }: { suit: string, value: string }) {
	return (
		<Holder style={{ color: suit === "heart" || suit === "diamond" ? "red" : "black" }}>
			<TopLeftDetail>
				{value}
				{getIcon(suit)}
			</TopLeftDetail>
			<MiddleDetail>
				<CentreArt suit={suit} value={value} />
			</MiddleDetail>
			<BottomRightDetail>
				{value}
				{getIcon(suit)}
			</BottomRightDetail>
		</Holder>
	)
}

function CentreArt({ suit, value }: { suit: string, value: string }) {
	switch (value) {
		case "A":
			return (
				<CentreHolder>
					<Icon style={{ gridColumn: "2 / 3", gridRow: "2 / 4" }}>{getIcon(suit)}</Icon>
				</CentreHolder>
			)
		case "2":
			return (
				<CentreHolder>
					<Icon style={{ gridColumn: "2 / 3", gridRow: "1 / 2" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "2 / 3", gridRow: "4 / 5" }}>{getIcon(suit)}</Icon>
				</CentreHolder>
			)
		case "3":
			return (
				<CentreHolder>
					<Icon style={{ gridColumn: "2 / 3", gridRow: "1 / 2" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "2 / 3", gridRow: "2 / 4" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "2 / 3", gridRow: "4 / 5" }}>{getIcon(suit)}</Icon>
				</CentreHolder>
			)
		case "4":
			return (
				<CentreHolder>
					<Icon style={{ gridColumn: "1 / 2", gridRow: "1 / 2" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "3 / 4", gridRow: "1 / 2" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "1 / 2", gridRow: "4 / 5" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "3 / 4", gridRow: "4 / 5" }}>{getIcon(suit)}</Icon>
				</CentreHolder>
			)
		case "5":
			return (
				<CentreHolder>
					<Icon style={{ gridColumn: "1 / 2", gridRow: "1 / 2" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "3 / 4", gridRow: "1 / 2" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "1 / 2", gridRow: "4 / 5" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "3 / 4", gridRow: "4 / 5" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "2 / 3", gridRow: "2 / 4" }}>{getIcon(suit)}</Icon>
				</CentreHolder>
			)
		case "6":
			return (
				<CentreHolder>
					<Icon style={{ gridColumn: "1 / 2", gridRow: "1 / 2" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "3 / 4", gridRow: "1 / 2" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "1 / 2", gridRow: "4 / 5" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "3 / 4", gridRow: "4 / 5" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "1 / 2", gridRow: "2 / 4" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "3 / 4", gridRow: "2 / 4" }}>{getIcon(suit)}</Icon>
				</CentreHolder>
			)
		case "7":
			return (
				<CentreHolder>
					<Icon style={{ gridColumn: "1 / 2", gridRow: "1 / 2" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "3 / 4", gridRow: "1 / 2" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "1 / 2", gridRow: "4 / 5" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "3 / 4", gridRow: "4 / 5" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "1 / 2", gridRow: "2 / 4" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "3 / 4", gridRow: "2 / 4" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "2 / 3", gridRow: "1 / 3" }}>{getIcon(suit)}</Icon>
				</CentreHolder>
			)
		case "8":
			return (
				<CentreHolder>
					<Icon style={{ gridColumn: "1 / 2", gridRow: "1 / 2" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "3 / 4", gridRow: "1 / 2" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "1 / 2", gridRow: "4 / 5" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "3 / 4", gridRow: "4 / 5" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "1 / 2", gridRow: "2 / 4" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "3 / 4", gridRow: "2 / 4" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "2 / 3", gridRow: "1 / 3" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "2 / 3", gridRow: "3 / 5" }}>{getIcon(suit)}</Icon>
				</CentreHolder>
			)
		case "9":
			return (
				<CentreHolder>
					<Icon style={{ gridColumn: "1 / 2", gridRow: "1 / 2" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "3 / 4", gridRow: "1 / 2" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "1 / 2", gridRow: "2 / 3" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "3 / 4", gridRow: "2 / 3" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "1 / 2", gridRow: "3 / 4" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "3 / 4", gridRow: "3 / 4" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "1 / 2", gridRow: "4 / 5" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "3 / 4", gridRow: "4 / 5" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "2 / 3", gridRow: "1 / 3" }}>{getIcon(suit)}</Icon>
				</CentreHolder>
			)
		case "10":
			return (
				<CentreHolder>
					<Icon style={{ gridColumn: "1 / 2", gridRow: "1 / 2" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "3 / 4", gridRow: "1 / 2" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "1 / 2", gridRow: "2 / 3" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "3 / 4", gridRow: "2 / 3" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "1 / 2", gridRow: "3 / 4" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "3 / 4", gridRow: "3 / 4" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "1 / 2", gridRow: "4 / 5" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "3 / 4", gridRow: "4 / 5" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "2 / 3", gridRow: "1 / 3" }}>{getIcon(suit)}</Icon>
					<Icon style={{ gridColumn: "2 / 3", gridRow: "3 / 5" }}>{getIcon(suit)}</Icon>
				</CentreHolder>
			)
		case "J":
			return (
				<CentreHolder>
					<Icon style={{ gridColumn: "1 / 4", gridRow: "1 / 5" }}>
						<img src="https://i.etsystatic.com/31292064/r/il/90dbb9/3243771512/il_fullxfull.3243771512_pgtl.jpg"
							height="200px"
							alt="Captain JACK sparrow"
						/>
					</Icon>
				</CentreHolder>
			)
		case "Q":
			return (
				<CentreHolder>
					<Icon style={{ gridColumn: "1 / 4", gridRow: "1 / 5" }}>
						<img src="https://media1.popsugar-assets.com/files/thumbor/vsC9k0MGSqieojvXH_GKFqqGbkQ/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2014/04/17/977/n/1922398/6433a7985b3673c1_Taylor/i/Taylor-Swift.jpg"
							height="200px"
							alt="Queen Taylor Swift"
						/>
					</Icon>
				</CentreHolder>
			)
		case "K":
			return (
				<CentreHolder>
					<Icon style={{ gridColumn: "1 / 4", gridRow: "1 / 5" }}>
						<img src="https://m.footballdatabase.eu/images/photos/players/a_114/114613.jpg" 
							height="200px"
							alt="King Nicholas Powell"
						/>
					</Icon>
				</CentreHolder>
			)

		default:
			alert("error here")
			return <>ERROR</>
	}

}

export default Card