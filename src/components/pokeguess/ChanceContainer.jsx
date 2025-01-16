import AttribContainer from "./GuessAttrib"
import Chances from "./Chances"

export default function ChanceContainer({chances}){

    return(
        <div className="h-full flex items-center justify-center gap-8">
            {chances.map((value, idx)=>{
                if(value){
                return(<Chances key={idx} color={value}></Chances>)
                }else{
                    return(<Chances key={idx} color={value}></Chances>) 
                }
            })}

        </div>
    )

}