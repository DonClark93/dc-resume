import MyLogo from "../assets/logo.png"

export default function Header() {
    return(
        <div className="sticky top-0  bg-gunmetal-400">
            <div className="flex justify-evenly ">
                <img src={MyLogo}/>
                <div className="text-5xl text-slate-200 content-center">
                    Donald Clark&#39;s Resume
                </div>
            </div>
        </div>
    )
}