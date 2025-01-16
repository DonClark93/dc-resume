import GuessContainer from "./GuessContainer"
import ChanceContainer from "./ChanceContainer"
import PokeContainer from "./PokeContainer"
import pokemon from "../../assets/gen-one-dex.json"
import { useState } from 'react'

export default function GameScreen (){

    let temp = pokemon["1"];
    const [gameParams,setGameParams] = useState({
        "gameState":"PROGRESS",
        "attempts":[true, true, true],
        "previousGuesses": [],
        "pokemon": temp
    });
    const [chances,setChances] = useState([true, true, true]);
    const [guess,setGuess] = useState("");

    return(
        <div className="h-screen grid grid-cols-2 grid-rows-2 gap-1">
            <div className="text-3xl bg-gray-600 text-center" >
                <div>Who's that Pokemon?</div>
                <div className="h-full flex items-center justify-center gap-4">
                    <PokeContainer></PokeContainer>
                </div>
                
            </div>
            <div className="flex flex-col bg-blue-500 row-span-2" > 
                <div className="flex-grow text-3xl text-center pb-5">Guesses</div>
                <GuessContainer pokemon={gameParams.pokemon}></GuessContainer>
            </div>
            <div className="flex flex-col bg-yellow-500" >
                <div className="flex-none text-3xl text-center">Chances Left</div>
                <div className="flex-grow">
                    <ChanceContainer chances={gameParams.attempts}></ChanceContainer>
                </div>
            </div>
        </div>
    )
}