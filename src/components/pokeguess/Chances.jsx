export default function Chances({color}){

    return(
        <div className={`w-20 h-20 border-2 
            border-amaranth_purple-400  ${color ? 'bg-green-600': 'bg-red-600'}`}>
        </div>
    )
}