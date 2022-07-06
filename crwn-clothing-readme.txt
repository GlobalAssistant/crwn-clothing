1. npx create-react-app project_name
2. App.js / remove the original div content
    leave - index.js
    div - className to name the responding content on the project
    .map() -> array
3. npm install scss / yarn add scss
    // in order to work scss
4. Create file_name.styles.scss
    import this scss file.
5. Create folder structure
    components
        /component-name
            *.component.jsx
            *.styles.scss

6. initial project
    package.lock.json, font...
7. Route
    === npm install react-router-dom@6
    === index.js - BrowserRouter
    === App.js - Routes, Route(path, element=component)
    === nested routes
    <Routes>
      <Route path='/' element={<Home />} />
      {/* Nested routes */}
        <Route path='shop' element={} />
    </Routes>
    === Outlet // avoid to overlap
        the location of outlet is important.
    index - the first page
    === Link // similar to a tag

    === Nested Routes
        --- parent route
        <Route path=":category" element={<Category />} />
        --- child route
        import { useParams } from 'react-router-dom';

8. assets folder for static files such as jpg...
    image file is imported from ReactComponent
9. Firebase
    firebase.google.com/go to console
    - Add a new project
        Keep firebase unique id from Firebase
            e.g.crwn-clothing-db-3837d
    Go to the created firebase db management
    In order to firebase on reactjs
        npm install firebase/yarn add firebase
    - Create a new web app
        Here, copy the firebase configuartion of this app.
        const firebaseConfig = {
            apiKey: "AIzaSyC9wd-0NvxCAs0d03uoUn-KpRoUAkUP2Rw",
            authDomain: "crwn-clothing-db-3837d.firebaseapp.com",
            projectId: "crwn-clothing-db-3837d",
            storageBucket: "crwn-clothing-db-3837d.appspot.com",
            messagingSenderId: "93588998529",
            appId: "1:93588998529:web:dcebc71629c9049999c080"
        };
    - Set Firebase Authentication
        Firebase Console/Authentication/Sign-in method/Add new provider/
        select auth provide you want, e.g. google provider, email&password, and enable it
    - Firestore DB Schema
        firestore/collection/documents/data
    - Create firestore db
        click Firestore Database on the console/Create database
        steps---
            production mode/default zone/
        On this created db, set Rules tab for the permission of this db - CRUD - true
    - Using onAuthStateChanged
        this is to watch the auth state on firebase. it can be used instead of user context.

10. Authentication
    - Sign in
        routes/sign-in
        add signin components to navbar component, too
    - Using Google Auth for firebase
        firebase.utils.jsx
    - Sign in with google and with google redirect

11. Utils folder for backend - similar to api

12. Create Form
    onSubmit // event.preventDefault()
    name, value, event.target
    validation fields
13. Form component - generalize
    using spread and de-structure concept
14. useContext - glorified component to leverage state.
    create context folder for useContexts.
    import createContext, useState
    create context variable, and provider for it.
    add this context variable to index.js

    -usages
        import context varaible in the jsx file.
        setter or getter value
        context/provider - value --- it is used as real values
    -context variable = provider: Ordering
    importance - projects
15. Observer Pattern
    ? - e.g. click stream --- sequence of clicks in time interval
    It is asynchronous function --- callback (next, error, complete)

16. spread and destructure operation to handle array
    // existing array update or not
    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? 
        {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
        );
    }

    // creturn new array with modified cartItems or new cart item
    return [...cartItems, {...productToAdd, quantity: 1}];

17. Styled component
    npm install styled-components
    *.styles.css ==> *.styles.jsx
    several features in styled component....
18. useContext
19. useReducer
20. Redux
    npm install redux, react-redux, redux-logger
    = Redux installation
        - create a folder named store: all of our redux happens
        - store/store.js
        - root-reducer.js // handle all the reducers
        - create context folders for each reducer, eg. user folder
    = Setting up Store
        - store.js
        - index.js -> Provider
    = hook for single dispatch
        on App.js, the same as userContext action, but use
        useDispatch() - createAction(0)
    




    