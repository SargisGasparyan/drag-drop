import React from 'react'

const Board = (props) => {
    const dragOver=(e)=>{
        console.log("dragOver")
        e.preventDefault()
    }

    const drop=(e)=>{
        console.log("drop")
        e.preventDefault()
        const card_id = e.dataTransfer.getData("card_id")
        const card = document.getElementById(card_id)
        // card.style.display = "block"
        e.target.appendChild(card)
    }

  return (
    <div id={props.id} 
    className={props.className}
    onDrop={drop}
    onDragOver={dragOver} >

        {props.children}

    </div>
  )
}

export default Board