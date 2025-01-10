import GuessContainer from "./GuessContainer"
import ChanceContainer from "./ChanceContainer"

export default function GameScreen (){
    return(
        <div className="h-screen grid grid-cols-2 grid-rows-2 gap-1">
            <div className="text-3xl bg-gray-600 text-center" >
                Who's that Pokemon?
            </div>
            <div className="bg-blue-500 row-span-2" > 
                <div className="text-3xl text-center pb-5">Guesses</div>
                <GuessContainer></GuessContainer>
            </div>
            <div className="flex flex-col bg-yellow-500" >
                <div className="flex-none text-3xl text-center">Chances Left</div>
                <div className="flex-grow">
                    <ChanceContainer></ChanceContainer>
                </div>
            </div>
        </div>
    )
}