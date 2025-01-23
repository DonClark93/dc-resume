import { Link } from 'react-router'

export default function ResumeButton(props) {
    
    return(
        <Link className="bg-gunmetal-500 border-2  
                          border-t-slate_blue-600 border-l-slate_blue-700 border-b-slate_blue-800 border-r-slate_blue-900 
                           hover:border-b-slate_blue-600 hover:border-r-slate_blue-700 hover:border-t-slate_blue-800 hover:border-s-slate_blue-900
                          text-slate-200 " to={props.activity}>
          <div className="bg-slate_blue-500 border-2 
                          border-b-slate_blue-600 border-r-slate_blue-700 border-t-slate_blue-800 border-s-slate_blue-900 
                          hover:border-t-slate_blue-600 hover:border-l-slate_blue-700 hover:border-b-slate_blue-800 hover:border-r-slate_blue-900
                           hover:shadow-red-900/50
                          text-slate-200 ">
            <p className='text-lg px-1'>{props.text}</p>
          </div>
        </Link>
    )
}