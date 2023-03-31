import "./FormHeader.scss"

const formHeader = (props) => {

 const body = props.header

 return(
  <div className="form__header">
   <h3>{body}</h3>
  </div>
  )
}


export default formHeader