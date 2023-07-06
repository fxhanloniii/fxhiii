import React from 'react'
import Artel from './Artel'

const RecentProjects = () => {
  return (
    <div className='recentProjects'>
        <h1>Recent Projects</h1>
        <div className='projectGrid'>
            <div className='projectCard'>
                <Artel />
                <div className='icons'>
                    <a href="https://github.com/fxhanloniii/artel-mern-frontend">
                        <div className="button">
                            <div className="label">Github</div>
                            
                            <img className="icon" src="./assets/githubLight.png" alt="GitHub"/>
                            
                        </div>
                    </a>
                    <a href="https://artel-app.netlify.app/">
                        <div className="button">
                            <div className="label">Live Website</div>
                            <img className="icon" src="./assets/globe.png" alt="website"/> 
                        </div>
                    </a>
                </div>
                <div className='description'>
                    <p>A social media app for AI artists and art enthusiasts to discover, share, and engage with AI-generated digital art. Full Stack MERN built with React, Express, MongoDB, Passport, Bcrypt, and JWT. Unleash your creativity and explore the world of AI-generated images.</p>
                </div>
            </div>
            <div className='projectCard'>
                <div className='artel'>
                    <img className='recipeImg' src="./assets/recipe.png" alt='recipe app'/>
                </div>
                <div className='icons'>
                    <a href="https://github.com/fxhanloniii/RecipeApp">
                        <div className="button">
                            <div className="label">Github</div>
                            
                            <img className="icon" src="./assets/githubLight.png" alt="GitHub"/>
                            
                        </div>
                    </a>
                    <a href="https://rsfrecipes.onrender.com/">
                        <div className="button">
                            <div className="label">Live Website</div>
                            <img className="icon" src="./assets/globe.png" alt="website"/> 
                        </div>
                    </a>
                </div>
                <div className='description'>
                    <p>RSF Recipe App was a collaborative group project created with two talented classmates. This full-stack CRUD website allows users to explore a wide range of food cuisines, offering browsing, creation, editing, and deletion of recipes. The app is built using JavaScript, HTML, CSS, Express, MongoDB, and Mongoose. With over 80,000 recipes sourced from a Kaggle API, RSF Recipe App is the perfect platform to discover new flavors and unleash your culinary creativity.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RecentProjects