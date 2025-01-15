import GuessAttrib from "./GuessAttrib"
import GuessInput from "./GuessInput"

export default function GuessContainer(){
    
    
    return(
        <>
        <div className="flex justify-center gap-1">
            <GuessAttrib></GuessAttrib>
            <GuessAttrib></GuessAttrib>
            <GuessAttrib></GuessAttrib>
            <GuessAttrib></GuessAttrib>
            <GuessAttrib></GuessAttrib>
            <GuessAttrib></GuessAttrib>
            <GuessAttrib></GuessAttrib>
            <GuessAttrib></GuessAttrib>
        </div>
        <p className="text-center">Input</p>
        <div className="sticky bottom-0 flex justify-center  " >
            <GuessInput></GuessInput>
        </div>
        </>
    )
}