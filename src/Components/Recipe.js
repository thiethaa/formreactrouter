import React from 'react';

import { Link } from "react-router-dom";



class Recipe extends React.Component {
constructor(props){
    super(props);

  this.state = {
    activeRecipe: []
  }
}
  componentDidMount = async () => {
    const recipe = this.state.activeRecipe;
    const req = await fetch(`https://www.food2fork.com/api/search?key=1c415fd0bd945159b9de71759855c4a6&q=${recipe}`);
    
    const res = await req.json();
    this.setState({ activeRecipe: res.recipes[0] });
    console.log(this.state.activeRecipe);
  }

  render() {
    const recipe = this.state.activeRecipe;
    return (
      <div >
        { this.state.activeRecipe.length !== 0 &&
          <div >
            <img className="active-recipe__img" src={recipe.image_url} alt={recipe.title}/>
            <h3 className="active-recipe__title">{ recipe.title }</h3>
            <h4 className="active-recipe__publisher">
              Publisher: <span>{ recipe.publisher }</span>
            </h4>
            <p className="active-recipe__website">Website: 
              <span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span>
            </p>
            <button className="active-recipe__button">
              <Link to="/">Go Home</Link>
            </button>
          </div>
        }
      </div>
    );
  }
};

export default Recipe;
