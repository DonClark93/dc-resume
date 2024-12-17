export default function ResumeButton(props) {
    
    return(
        <button className="border-2  p-1 rounded border-slate_blue hover:border-sea_green text-slate-200 " onClick={() => props.updateView(props.activity)}>
          {props.text}
        </button>
    )
}