import React from 'react';
//Router
import {NavLink} from 'react-router-dom';


const Navigation = () => {
 
        return (
            <nav className="flex justify-between bb b--white-10 shadow-5">
                <div className="flex-grow pa3 flex items-center">
                    <NavLink className="f6 link dib black dim mr3 mr4-ns" to="/">FoodNation</NavLink>
                    <NavLink className="f6 link dib black dim mr3 mr4-ns" to="/OurProduct">Find Recipes</NavLink>
                    <NavLink className="f6 link dib black dim mr3 mr4-ns" to="/SignIn">SignIn</NavLink>
                    <NavLink className="f6 link dib black dim mr3 mr4-ns" to="/SignUp">SignUp</NavLink>
                </div>
         </nav>
         
        )
    }
export default Navigation
