import styled from "styled-components"

const SelectorHolder = styled.div`
	display: grid;
	grid-template-columns: 50px 70px 50px;
	grid-template-rows: 30px 50px;
	align-items: center;
	justify-items: center;
`

const Button = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 30px;
	height: 30px;

	font-size: 20px;
	user-select: none;

	background-color: #D9D9D9;
	border-radius: 50%;
	border: 2px solid black;
	
	&:hover {
		cursor: pointer;
	}
`

const ValueDisplay = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	height: 30px;
	width: 50px;

	background-color: white;
	border-radius: 10px;
	border: 2px solid black;

	user-select: none;
`

const LabelHolder = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	grid-column: 1/4;

	font-weight: bold;
`

interface PropType {
	value: number,
	setValue: (value: number) => void,
	minValue: number,
	maxValue: number,
	label: string
}

export default function NumberSelector({value, setValue, minValue, maxValue, label} : PropType) {
	const increaseValue = () => {
		if (value < maxValue) {
			setValue(value+1)
		}
	}

	const decreaseValue = () => {
		if (value > minValue) {
			setValue(value-1)
		}
	}

	return (
		<SelectorHolder>
			<LabelHolder>{label}</LabelHolder>
			<Button onClick={decreaseValue} style={{grid: "1/2"}}>-</Button>
			<ValueDisplay style={{grid: "2/3"}}>{value}</ValueDisplay>
			<Button onClick={increaseValue} style={{grid: "3/4"}}>+</Button>
		</SelectorHolder>
	)
}