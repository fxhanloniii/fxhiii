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
                    <a href="https://github.com/fxhanloniii/artel-mern-frontend" target='_blank' rel='noopener noreferrer'>
                        <div className="button">
                            <div className="label">Github</div>
                            
                            <img className="icon" src="./assets/githubLight.png" alt="GitHub"/>
                            
                        </div>
                    </a>
                    <a href="https://artel-app.netlify.app/" target='_blank' rel='noopener noreferrer'>
                        <div className="button">
                            <div className="label">Live Website</div>
                            <img className="icon" src="./assets/globe.png" alt="website"/> 
                        </div>
                    </a>
                </div>
                <div className='description'>
                    <p>A social media app for AI artists and art enthusiasts to discover, share, and engage with AI-generated digital art. Full Stack MERN built with React, Express, MongoDB, Passport, Bcrypt, and JWT. Unleash your creativity and explore the world of AI-generated images.</p>
                    <p><strong>Demo Login</strong></p> 
                    <p><strong>UserName: starwars PW: starwars</strong></p>
                </div>
            </div>
            <div className='projectCard'>
                <div className='artel'>
                    <img className='recipeImg' src="./assets/recipe.png" alt='recipe app'/>
                </div>
                <div className='icons'>
                    <a href="https://github.com/fxhanloniii/RecipeApp" target='_blank' rel='noopener noreferrer'>
                        <div className="button">
                            <div className="label">Github</div>
                            
                            <img className="icon" src="./assets/githubLight.png" alt="GitHub"/>
                            
                        </div>
                    </a>
                    <a href="https://rsfrecipes.onrender.com/" target='_blank' rel='noopener noreferrer'>
                        <div className="button">
                            <div className="label">Live Website</div>
                            <img className="icon" src="./assets/globe.png" alt="website"/> 
                        </div>
                    </a>
                </div>
                <div className='description'>
                    <p>RSF Recipe App was a collaborative group project created with two talented classmates and myself. This full-stack CRUD website allows users to explore a wide range of food cuisines, offering browsing, creation, editing, and deletion of recipes. The app is built using JavaScript, HTML, CSS, Express, MongoDB, and Mongoose. With over 80,000 recipes sourced from a Kaggle API, RSF Recipe App is the perfect platform to discover new flavors and unleash your culinary creativity.</p>
                </div>
            </div>
            <div className='projectCard'>
                <div className='artel'>
                    <img className='recipeImg' src="./assets/restaurant-employee2.png" alt='recipe app'/>
                </div>
                <div className='icons'>
                    <a href="https://github.com/fxhanloniii/restaurant_employee_app_frontend" target='_blank' rel='noopener noreferrer'>
                        <div className="button">
                            <div className="label">Github</div>
                            
                            <img className="icon" src="./assets/githubLight.png" alt="GitHub"/>
                            
                        </div>
                    </a>
                    <a href="https://main--restaurant-employee-app.netlify.app/" target='_blank' rel='noopener noreferrer'>
                        <div className="button">
                            <div className="label">Live Website</div>
                            <img className="icon" src="./assets/globe.png" alt="website"/> 
                        </div>
                    </a>
                </div>
                <div className='description'>
                    <p>The Restaurant Employee App is a comprehensive full stack web application tailored for restaurant employees, offering a range of essential features. With the aim of expanding its reach, I are currently developing a mobile app version, which I believe will serve as the optimal platform. The app encompasses menu item management, ingredient and allergy information, chef descriptions, cocktails and wines, manager authorization, a message board, and a Bar 86 list. It is developed using React for the frontend, Django for the backend, and PostgreSQL as the database. In addition, the app incorporates React Dropzone Uploader for seamless image uploads and Cloudinary for efficient image storage.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RecentProjects