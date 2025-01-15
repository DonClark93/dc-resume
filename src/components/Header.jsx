import MyLogo from "../assets/PFP.png"
import { Link } from 'react-router'

export default function Header() {
    return(
        <div className="sticky top-0  bg-gunmetal-400">
            <div className="flex justify-center ">
                <Link className="w-24 h-24 rounded-full" to="/"><img className="w-24 h-24 rounded-full" src={MyLogo}/></Link>
                <div className="text-2xl px-14 md:text-5xl text-slate-200 content-center">
                    Donald Clark&#39;s Resume
                </div>
            </div>
        </div>
    )
}