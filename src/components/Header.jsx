import MyLogo from "../assets/PFP.png"

export default function Header() {
    return(
        <div className="sticky top-0  bg-gunmetal-400">
            <div className="flex justify-center ">
                <img className="w-24 h-24 rounded-full" src={MyLogo}/>
                <div className="text-2xl px-14 md:text-5xl text-slate-200 content-center">
                    Donald Clark&#39;s Resume
                </div>
            </div>
        </div>
    )
}