![Logo-nav](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png)

### Learning Goals:

This aim of this lab is to understand the working of `redux`. As we know that, there are three major concepts of redux, which take in part in order understand redux. The following are the three conceps:

1. Actions - plain JavaScript object that contains information.
2. Reducers - pure functions that contain the logic and calculation that needed to be performed on the state.
3. Store - an object which provides the state of the application. 

Through this lab, we will try to apply all the above concepts, in order to build a very simple application.

**NOTE:** You may not find a great use of using redux, for this simple application, but for complex applications --> where the application is build with many components and these components share some states, in such cases redux becomes really powerful. But in order to understand and practice redux, we will go with a simple example.

***use the following command in order to install redux: `npm install redux`***

### Problem Statement:

We need to build a `Like functionality`. -> which means, you need to create two buttons, which can like and unlike.
If someone clicks on the like button, the `like counter` should increment by one, and if someone click on the unlike button, the `like counter` should decrease by one, like shown below:

![](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/likeCounter.gif)

### Progression 1:

1. create a new project and name it as -> `redux-like-counter`
2. Create three files: 
    1. `Actions.jsx` -> which will contain all your actions.
    2. `Reducer.jsx` -> which will contain all your reducers.
    3. `LikeCounter.jsx` -> which will contain the store. You have to write the `jsx` for the application in this component. ( your `app.jsx` should render `LikeCounter` only.)

### Progression 2:

Inside `Actions.jsx` -> create two functions -:
1. incrementLike() -> this function should return an object which contains the `INCREMENT` as the type of action.
2. decrementLike() -> this function should return an object which contains the `DECREMENT` as the type of action.

### Progression 3:

Inside `Reducer.jsx` : create one function as `reducer`, which takes two arguments:
1. state
2. action
Based on the type of action (in our case there are only two types of actions ->`INCREMENT` and `DECREMENT` ), write the logic for that particular action.

### Progression 4:

Inside `LikeCounter.jsx` -> create a store, and pass `reducer` (the same reducer which you created in the previous progression) as an argument to it.

Use `dispatch` to dispatch the action to the store.


Happy Coding ❤️!











# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
