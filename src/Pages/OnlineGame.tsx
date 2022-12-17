import { useLoaderData } from "react-router-dom"

interface GameParams {
	params: {
		gameCode: string
	}
}
//@ts-ignore
export async function loader({params}) {
	return params.gameCode || null

} 

export default function OnlineGame() {
	const gameCode = useLoaderData();
	return (
		<>Online Game: {gameCode}</>
	)
}