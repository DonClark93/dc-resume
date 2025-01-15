import AttribContainer from "./GuessAttrib"
import Chances from "./Chances"

export default function ChanceContainer(){

    return(
        <div className="h-full flex items-center justify-center gap-4">
            <Chances></Chances>
            <Chances></Chances>
            <Chances></Chances>
        </div>
    )

}