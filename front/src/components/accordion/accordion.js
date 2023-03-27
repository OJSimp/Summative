
import { useState, useEffect } from "react"

const Accordion = (props) => {

 const [open, setOpen] = useState(null)


 const handleToggle = (index) => {
 
  // using index to target individual accordions by giving them a value

  if(open == index ){
  setOpen(null) 
  } else{
  setOpen(index) 
  }
 }


 return(
  <div>
   
   
   <div className="listing-details__accordion" onClick={() => {handleToggle(props.index)}}>

    <div className="accordion__header">
     <h4>{props.heading}</h4>
     <span>+</span>
    </div>
    
    <div className={open == props.index ? "accordion__content--open" : "accordion__content--closed" }>
     <p>{props.details}</p>
    </div>
   </div>

  </div>
  )

}

export default Accordion