import React from "react"
import style from "./recipe.module.css"

const Recipe = ({title, image, items}) => {
    return(
        //add JSX here 
        <div className = {style.recipe}>
            <h1 className = {style.title}>{title}</h1>
            <ol>
                <h3>Ingredients:</h3>
                {items.map(item => (
                    <ul>{item.text}</ul>
                ))}
            </ol>
            <img className = {style.image} src = {image} alt = ""/>
        </div>
    )
}

export default Recipe 