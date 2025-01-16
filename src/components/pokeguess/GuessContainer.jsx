import GuessAttrib from "./GuessAttrib"
import GuessInput from "./GuessInput"

export default function GuessContainer({pokemon}){
    
    
    return(
        <>
        <p>{pokemon.name}</p>
        <div className="flex justify-center gap-8">
            <div>
                <div>Types</div>
                <GuessAttrib></GuessAttrib>
            </div>
            <div>
                <div>Ability</div>
                <GuessAttrib></GuessAttrib>
            </div>
            <div>
                <div>Height</div>
                <GuessAttrib></GuessAttrib>
            </div>
            <div>
                <div>Weight</div>
                <GuessAttrib></GuessAttrib>
            </div>
            <div>
                <div>Egg Groups</div>
                <GuessAttrib></GuessAttrib>
            </div>
            <div>
                <div>Provides __ EV</div>
                <GuessAttrib></GuessAttrib>
            </div>
        </div>
        <p className="text-center">Input</p>
        <div className="sticky bottom-0 flex justify-center  " >
            <GuessInput></GuessInput>
        </div>
        </>
    )
}