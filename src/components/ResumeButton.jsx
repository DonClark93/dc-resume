import { Link } from 'react-router'

export default function ResumeButton(props) {
    
    return(
        <Link className="bg-gunmetal-300 border-2 py-2 px-1 rounded border-slate_blue hover:border-sea_green text-slate-200 " to={props.activity}>
          {props.text}
        </Link>
    )
}