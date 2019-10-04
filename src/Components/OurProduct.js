import React, { Component } from 'react';

import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';



//const API_KEY = " 1c415fd0bd945159b9de71759855c4a6";
//c76f852450cb78bb0fcd3a761635cd51

class Product extends Component {
constructor(props){
    super(props);

    this.state={
        recipes:[]
    }
}
getRecipes = async (e) => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value
    // fetch(`https://www.food2fork.com/api/search?key=1c415fd0bd945159b9de71759855c4a6&q=shredded%20chicken`)
    // .then(result=>result.json()).then (data=>console.log(data));
    const response = await fetch (`https://www.food2fork.com/api/search?key=1c415fd0bd945159b9de71759855c4a6&q=${recipeName}`)
    const data = await response.json();
    this.setState ({recipes : data.recipes})
    console.log(this.state.recipes);
   }


    render() {
        return (
          <div>
            
            <form className= 'ma3 pa3 pb4 tc' onSubmit={this.getRecipes}>
                <input className='tc f6 i' type='text' name='recipeName' placeholder='find your passion'/>
                <button className='dim'>Search</button>
                <hr/>
                {this.state.recipes.map ((recipe)=>{
                    return (
                        <Card 
                            style={{ width: '18rem'}} 
                            key={recipe.recipe_id} 
                            className='tc bg-white dib pa3 ma2 grow bw2 shadow-5'>
                        <Card.Body>
                            <Card.Img variant="top" src={recipe.image_url} alt={recipe.title} style={{ height: 200, width: 250}}/>
                            <Card.Title className='red f6 ma3 pa3 ttu'>{recipe.title}</Card.Title>
                            <Card.Text className='black f6 tc b'>{recipe.publisher}</Card.Text>
                            <Link to = {{
                                pathname: `/OurProduct/${recipe.recipe_id}`,
                                state: { recipe: recipe.id}
                                    }}>
                                <Button variant="outline-dark">
                                Read More
                                </Button>
                            </Link>
                        </Card.Body>
                        </Card>
                    )})}
            </form>
          </div>
        )
    }
}
export default Product;


// <div key= {recipe.recipe_id}>
// <img src= {recipe.image_url} alt={recipe.title} className='w-20 h-20 pt3 pr3 pl3 pb1'/>
// <p>{recipe.title}</p>
// </div>