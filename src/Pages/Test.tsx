import { useEffect, useState } from "react";
import Card from "../Components/Card";
import { CardType, deck } from "../Constants/Deck";

const shuffleArray = (array: any[]) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return [...array]
}

const getLowValue = (value: string) => {
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
	}
}

const getHighValue = (value: string) => {
	if (value === "A") {
		return 11
	}
	return getLowValue(value)
}

function App() {
	const [cards, setCards] = useState<CardType[]>([])
	const [currentDeck, setCurrentDeck] = useState<CardType[]>(deck)
	const [page, setPage] = useState<string>("menu")

	const draw = () => {
		setCards([...cards, currentDeck[0]])
		setCurrentDeck([...currentDeck.slice(1)])
	}

	useEffect(() => {
		setCurrentDeck(shuffleArray(currentDeck))
	}, [])

	const getScoreLow = () => {
		return cards.map(card => getLowValue(card.value)).reduce((val, sum) => (val ? val : 0) + (sum ? sum : 0), 0)
	}

	const getScoreHigh = () => {
		return cards.map(card => getHighValue(card.value)).reduce((val, sum) => (val ? val : 0) + (sum ? sum : 0), 0)
	}

	return (
		<>
			<div style={{ display: "flex" }}>
				{cards.map((card: CardType) => (
					<Card suit={card.suit} value={card.value} />
				))}
			</div>
			<p>{getScoreHigh() === getScoreLow() ?
				getScoreHigh()
				: `High: ${getScoreHigh()}, Low: ${getScoreLow()}`
			}</p>
			<button onClick={() => draw()}>draw card</button>
		</>

	);
}

export default App;


/*
<Card suit={suit} value={value} />

	  <label htmlFor="suit">Choose a suit:</label>
	  <select name="suit" id="cars" onChange={(e) => setSuit(e.target.value)}>
		<option value="heart">Heart</option>
		<option value="diamond">Diamond</option>
		<option value="club">Club</option>
		<option value="spade">Spade</option>
	  </select>

	  <label htmlFor="value">Choose a value:</label>
	  <select name="value" onChange={(e) => setValue(e.target.value)}>
		<option value="A">Ace</option>
		<option value="2">2</option>
		<option value="3">3</option>
		<option value="4">4</option>
		<option value="5">5</option>
		<option value="6">6</option>
		<option value="7">7</option>
		<option value="8">8</option>
		<option value="9">9</option>
		<option value="10">10</option>
		<option value="J">Jack</option>
		<option value="Q">Queen</option>
		<option value="K">King</option>
	  </select>
*/