export default function ResumeButton(props) {
    
    return(
        <div className="text-slate-200" onClick={() => props.updateView(props.activity)}>
          {props.text}
        </div>
    )
}