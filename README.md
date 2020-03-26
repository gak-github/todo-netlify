<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h2 align="center">
  A MERN Stack project built and deployed using Gatsby+Netlify+Serverless
</h2>

##How to use? 
   
   `1. git clone https://github.com/gak-github/todo-netlify.git`
   
   `2. npm install`
   
   `3. npm i -g netlify-cli` // to run netlify sites locally
   
   `4. netlify dev or ntl dev`
  
  
## Custom changes
`In config/db.js  change the MONGO_URL as per your need.`
 
 Here in that url "mernstack" is my DB name and my collection name is "todo" [MongoDB setup](https://www.mongodb.com/cloud/atlas)

 ## How this app works?
  1. while accessing the app, the pages/index.js (index.html) component is loaded.
   
  2. It is wrapped with GlobalProvider from context/GlobalState.js
   
  3. While rendering the page, the lifecycle method "useEffect" being called from components/TodoList.js which in-turn calls getTodos()--> which makes an API call and invokes dispatch after getting a response.
   
  4. The context/GlobalState.js has various functions under GlobalProvider and each invokes "dispatch" after getting a response from the api call.
   
  5. the context/AppReducer.js has logic to handle each action.
   
  6. The AppReducer updates the initial state (application state) based on the API response from database
   
  7. Now the initial state info (store) is available to each child component which is accessed through useContext hook by each child component as needed.
   
  8.  When we add a new todo (task), the onSubmit event of "components/AddTodo.js" is being called which makes a call to "addTodo" of GlobalContext(GlobalState.js) which in turn calls the API (POST api for create operation) and the dispatch is called upon successful response from the API call. The dispatch call event is is handled by context/AppReducer.js and the store (application state) is updated with recent toto task.
   
  9.  Similarly, the "onClick" event of "delete button from Todo.js" calls "deleteTodo" of GlobalContext which makes an API call to delete the given ID and dispatch is called after the response from API which calls and the action is handled by AppReducer.js so the store is updated (removing the deleted task).

  10. All the express routes are registered through express middleware and the same is invoked through serverless-http which is listening for an event (lamda function)
  
  11. Basically, all the API requests (/.netlify/functions/todo) are served by "functions/todo/todo.js" which has a routes mapping through express middleware which maps to "routes/todo.js". This (routes/todo.js) calls controllers/todos.js and finally calls the DB (MongoDB).


This application can be viewed at [agurusamy-todo.netlify.com](https://www.agurusamy-todo.netlify.com).