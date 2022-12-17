import styled from "styled-components";

const ButtonStyle = styled.div`
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

interface ButtonProps {
	text: string,
	action: () => void
}

export default function Button({text, action}: ButtonProps) {
	return (
		<ButtonStyle onClick={action}>{text}</ButtonStyle>
	)
}