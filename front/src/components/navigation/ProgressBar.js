import "./ProgressBar.scss"


const ProgressBar = (props) => {

 let progressFilled = props.progress

 return(
<div className="progress-bar">
  <div className="progress-bar--filled" style={{
  height: "100%",
  width: `${progressFilled}%`
  }}>
  </div>
</div>


  )

}

export default ProgressBar