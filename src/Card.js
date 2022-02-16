import React from 'react'

const Card = (props) => {
    const dragStart=(e)=>{
        console.log("dragStart");
        const target = e.target
        e.dataTransfer.setData("card_id",target.id)
    }
    
    const dragOver=(e)=>{
        console.log("dragOver");
        e.stopPropagation()
    }
  return (
    <div id={props.id} 
    className={props.className}
    onDragStart={dragStart}
    onDragOver={dragOver}
    draggable={props.draggable}
     >

        {props.children}

    </div>
  )
}

export default Card