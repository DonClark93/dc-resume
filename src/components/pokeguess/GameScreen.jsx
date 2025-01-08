export default function GameScreen (){
    return(
        <div className="min-h-screen grid grid-cols-2 grid-rows-2 gap-1">
            <div className="h-1/2 bg-black " > 1</div>
            <div className="bg-blue-500 row-span-2" > 
                <div className="text-center">Guesses</div>
            </div>
            <div className="bg-red-500 " ></div>
        </div>
    )
}