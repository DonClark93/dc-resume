import MyLogo from "../assets/PFP.png"
import { Link } from 'react-router'

export default function Header() {
    return(
        <div className="pb-8 sticky top-0   bg-gradient-to-b from-slate_blue-200  from-80% ">
            <div className="flex justify-evenly py-1">
                    <Link className=" w-28 h-28 rounded-full" to="/"><img className="w-28 h-28 rounded-full" src={MyLogo}/></Link>
                    <div className=" text-4xl text-slate-200 content-center">
                        Donald Clark&#39;s Resume
                    </div>
            </div>
        </div>
    )
}