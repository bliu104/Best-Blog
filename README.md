# Food-Blog

Bobby Food Blog will be a website dedicated on all the recipes and food that Ive created. The Blog will be manage by regiester users, which will have the ability to add, delete, modify all recipes. The blog is created to consolidate all the recipes into one easy to access website created by me! It will contain feature that I believe will make it easy to use and a design that will be impressive and intriguing!

## Prerequisites
All code is required to get started

 clone repo using your local machine
 
 https://github.com/bliu104/Best-Blog.git

 ## Installation instructions
 ### Front-end
 ```cd Best-Blog
 npm i
 npm run
 ```
 ### Back-end
 ```
 command + T
 cd client
 npm i
 npm start
```
## Coding Styles
- Standard Tab or Two spaces
- Indention one Tab
- Blank can be added for readability
- camelCase for function, variables for javascript code
- First Letter Capitalize in Components.jsx
- Commented out breaks are allowed for readability
- Case switch statements must be proper Indented

```export const filter = (array, catagories) => {
  const filteredArray = []
  array.map(recipe => {
    if (recipe.catagories.toLowerCase() === catagories.toLowerCase()) {
      filteredArray.push(recipe)
    }
  })
  return filteredArray
}
```

# Goals
Bobby Food BlogRails will use Ruby on rails as a backend server acting as the API and React as the frontend. It will contain Authorization using Ruby on rails. The relational database will contain user, food, and post where the user will have a one to many relation to food and food will have a one to many to post. The Blog will contain full CRUD in user, and foods. This website will use Flex and Grid for styling, different libraries are pending.

# Deployment
Deployed on Surge/Heroku
Frontend: http://bobby-food-blog-3.surge.sh/
Backend: https://bobby-food-app.herokuapp.com/users

## Items Database 
- Full stack RERN application (Ruby on Rails,Express.js,React.js,Node.js)

## Features
- CRUD functionality: 
- Ability to create, delete, edit, and view items utilizing a cloud database 
- Authentication 
- User must be signed in or sign up to edit, delete, and create recipes 
- Search bar to search through recipes 
- Sort recipes depending on meal type

# To Be Completed Features
- Nightmode
- Carousel
- Ability to Favorite a comment
- Voting for post/comments
- Voting for Food
- Add a section for Food
- Add a section for travel

## Responsiveness
- Desktop
- Tablet
- Mobile(somewhat)

## Design
- use flexbox

## Tools used 
- React.js 
- Express.js/Node.js
- Heroku 
- Surge 
- Axios
- JWT Password Authentication

# Wireframes

https://whimsical.com/BZpDLATNEY45sCXEW4Dmgp

# Component Hierachy

https://whimsical.com/Wr6UkaTJzunfeDh8uTXS7f

# ERD (Entity Relationship Diagram)

https://drive.google.com/file/d/1TyT0HJOwY2Y4jq6nxxYaoRU5W3ZdGKEu/view?usp=sharing

# Techologies

React
Ruby on Rails

# TimeFrame
- Backend - Day one(8 hours) 
- Frontend Applications - Day two(8 hours) 
- Frontend Applications - Day three(8 hours) 
- Styling - Day four (8 hours) 
