import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe'


const App = () => {

  const APP_ID = '0ae6585b' //application ID that you send with each API request
  const APP_KEY = '98830d89b54974570afda1f453c1f7b5' //will be used to authenticate requests 
  
  
  const[recipes, setRecipes] = useState([])
  const[search, setSearch] = useState("")
  //query is the finished search - just before we are ready to click the 'search' button 
  const[query, setQuery] = useState('')

  
  useEffect(() => {
    //the useEffect now only works when the final query value i.e. the search button value changes    
    getRecipes(); 
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
    const data = await response.json(); 
    setRecipes(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    //this is used to prevent the page from refreshing multiple times
    e.preventDefault()
    //setting the query to the final search value  
    setQuery(search)
    //setting the search back to an empty string to reset the search bar 
    setSearch("")
  }
  return (
    //return React code here
    <div className = "App">
      <header className = "my-header">
        <h1>Recipe Finder</h1>
      </header>
      <form onSubmit = {getSearch} className = "search-form">
        <input className = "search-bar" type = "text" placeholder = "Enter an Ingredient!" value = {search} onChange = {updateSearch}/>
        <button className = "search-button" type= "submit"> Search </button>
      </form>
      <div>
        {recipes.map((recipe, index) => (
          <Recipe 
          key = {index}
          title = {recipe.recipe.label}
          image = {recipe.recipe.image}
          items = {recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  )


}

export default App;
