

# episode 2:
---------------------------------------------------------------------------------------------------------------------------

# npm : 
package manger which manages your packges required for your project

# package.json : 
configuration of npm => use : to manage packge that we install for our project

-------
# imp package : => bundler 

# bundler :=>  
bundler bundle your application (build) or package you app properly so that it can be shifted to production 
---------

# parcel :=>

dev server
hot module reloading : to reload without refersh on file changes
file watching alogorith
tress shaking alogorithm
minified 
parcel ->for faster buidl

# caret (^) & tilde (~) : 
------------------------
caret => caret is used for patch and minor updated like 3.1.2 to 3.1.3
tilde => tilde is used for major updated like 3.1.3 to 4.0.1

# package:json :=> 
It’s a file that lists all the packages my project needs, along with their version ranges. It helps manage and track dependencies for my app. 
-------------
# package.lock.json : 
It locks the exact versions of the packages that were installed so everyone working on the project gets the same versions, avoiding bugs caused by version differences.
------------------

(when patch updates comes for packeges it will updated automatcly using caret or tilde, so the version we installed intilay will be tracked on packge-locke.json)

# Question
--------------------------------------------
If package.json allows newer versions but package-lock.json locks an older version, which version do others get on npm install, and how to update?
A: Others get the exact version locked in package-lock.json (older one) to ensure consistency; to update to the newer version, run npm update or delete package-lock.json and node_modules then reinstall.

# node_modules:
-----------------
It’s the folder where all the packages (dependencies) that my project needs are actually installed. When I run npm install, npm downloads the packages listed in package.json and puts them inside the node_modules folder so my app can use them.
but there are other packges also installed inside in this folder, which are dependencies of the package we using which is called transitive dependency


# EPISODE-3:
---------------------------------------------------------------------------------------------------------------------------

* reactelement is a object , on render of this element on dom it will convert to html element

=> React.createElement() => object => html element (render);

const parent = React.createElement("h1',{},'text');
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

----------------------------------------------

* the above one is actualy react core how we create react element but it is very hard way to do it, then we have =>JSX 

-------
# jsx is not a html in js , jsx is html like or xml like  syntax in js 


const jsxheading = <h1 id='one'>welcome to namste react</h1>

if we have multiple lines use round bracktes 

const jsxheading = (
    <div>
      <h1 id='one'>welcome to namste react</h1>
    </div>
)

# this is how we create react element using jsx, it is very easy to do it, and it is very easy to read. 

* but js engine wont understand this ,only js engine unsdetand ecmascript 5

# so before it goes to js engine , it will transpiled ->(parcel) -> (babel)

# BABEL :
---------
Babel is a JavaScript compiler that converts modern JavaScript code into older syntax that can undertand by browser


# to create react element we need to use React.createElement which is *object* and we need to pass that to ReactDOM.render(object) , this will convert this to html element and render it on dom.  but this is very hard way to do it, so we have JSX which is html like syntax in js, but js engine wont understand this, so babel is used behind scene to transpile this and make broswer understand

* React.createElement()/object => ReactDOM.render(object) => html element  ----->core process

* const h1= <h1></h1> => traspiled to reactElemnt using babel => React.createElement()/object => ReactDOM.render(object)=> html element   -------------------->jsx processs


-----------

# React-Component :

in react everything is componenet , there are two types of component in react 1) functional component 2) class component

1) functional component :
----------------------------

normal js function that return peiece of jsx code or normal js function that return react element    

const Heading = () => {
    return <h1>this is heading</h1>
}

const headinf = () => {
    return (
        <div>
          <h1>this is heading<h1>
        </div>
    )
}

* if there is single expression we can remove return and {}  

const Heading = () => <h1>this is heading </h1>

const heading = () => (
    <div>
        <h1>this is heading</h1>
    </div>)

note :

* to call component we use angular bracket (< />) 
* first letter shoudl caps for component 

these are the specifaction , so that babel understnad on transpling

------------------------


# difference b/w react elemnt using jsx and fun compoennt
-------------------

# react elemennt using jsx :

const heading = (
    <div>
        <h1>This is headind</h1>
    </div>
)

# react fun component that retunr jsx code

* use caps for first letter of component name
* use arrow fun

const Heading = () => (
    <div>
        <h1>This is headind</h1>
    </div>
)
(or)
const Heading = () => {
    return (
          <div>
        <h1>This is headind</h1>
    </div>
    )
}

--------------------------
# component compistion : using one component in another component.

-------------

* we can directly use js code inside jsx using {} flower brackets

const a = 100;

 const Heading = () => {
    return (
    <div>
        {a}
        <h1>This is headind</h1>
    </div>
    )
}
----------
# cross site scripting:

* when you write any thing in {} inside jsx , jsx will  not blindly run it it will santize the data then pass it ,which is cross-site scritping
---------------------------

 # we can component in below 3 ways
---------------------------------

const Header = () => {
  return (
    <div className="header">
        heainf
    </div>
  )
}

const Main = () => {
  return (
    <Header/>
    <Header></Header>
    {Header()}
  )
}


---------------------------------------------------------------------------------------------------------------------------
# EPISODE-4


# Inline Style :
----------------
To write inline styles in React, the style attribute expects a JavaScript object, and since you're writing this inside JSX (which is a syntax extension for JavaScript), you need to use {} (curly braces) to embed.

* example
---------
<div 
  className="custom-class"
  style={{ width: '100px', height: '50px' }} // Inline style
>

# Destructuring
-------
Destructuring in JavaScript allows you to unpack values from arrays or properties from objects

example:
--------
object-destructuring 
-----------
const a = {name:'jagadeesh',age:24,address:'wg'};
const {name,address,age} = a;

the varibles we need to match with object property key

array-destructurng
------------------
const a = ['jagadessh',23,22];

const [name,age,number] = a

Array destructuring lets you assign array values to variables based on their position.

----------



const

# PROPS :
------------
* To pass data from parent component to child component ,Props make components dynamic and reusable.


* In JSX, when you write an element like <ChildComponent name="John" age={30} />, React translates it into a function call like this:
  React.createElement(ChildComponent, { name: "John", age: 30 })


* how we will pass arguments to function we need to call like that

exmaple
---------
const RestoCard = (props) => {
  const {name,rating,etf} = props;
  return (
    <div className="Card">
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Chinese.png" alt="chinese" />
      <h4 className="name">{name}</h4>
      <h4 className="rating">{rating}</h4>
      <h4 className="etf">{etf}</h4>
    </div>
  )
}

const CardContainer = () => {
  return (
    <div className="card-container">
      <RestoCard name='Noddles' rating='4 stars' etf='40 etf' />
      <RestoCard name='fried rice' rating='2 stars' etf='50 etf'/>
      <RestoCard name='rice' rating='2 stars' etf='50 etf'/>
    </div>
  )
}
-------------------------------------------------------------------------------------------------------
# CONFIG DRIVEN UI:

all the ui will be driven based on config (data) , based on data the ui will be change
----------------------------------------

# key properties
-------------

when ever you are looping any list or array we need give key property ,which is nothing but unique id

# If we don't provide a unique key when rendering a list, React won't know which item was added or removed. As a result, it will re-render every item in the list. However, if we provide a key (e.g., a unique ID), React will only re-render the affected items (e.g., the new item or the removed item), improving efficiency.






/*****************************************************************************************************************************/

# EPISODE-5
-----------


* never ever do any hard coded things like img strings etc in component file for that you can create seprate folder utils

* use caps like LOGO_URL for const names;

--
# export & import
-------------------
Use export for named exports of multiple components or functions, and import them with curly braces: import { Component } from './Component';. Use export default for exporting a single item, and import it without curly braces: import Component from './Component';. export is for multiple exports, while export default is for a single default export.

there are two types of exports:
1)default export => if there is only one componet or var or function you can use this => this can be work only after component,function,var is defined  =>and on import we dont need to use {} curly braces

2)named export => if there are multiple component or varible or fn to export we use this => this can write before varible ,component,fn 

export const a = 1; 
export const b = 2;
const c =3

export default c;  

import {a,b},c from ./file


You can reassign imported let values in plain JavaScript, but it's not recommended in React because React doesn't track these changes.

--------------------

# Normal Variable vs React State Variable

  Normal Varible:
  --------------

    Definition: A normal JavaScript variable holds data, but changes to this data won’t automatically trigger a re-render in the DOM.

    Example: If you change the cards array (e.g., by filtering it), you have to manually re-render the UI to reflect the changes, such as by calling render() or manually manipulating the DOM.


  State Variable :
  --------------
    Definition: A React state variable is used to store data in a component, and when the state changes, React automatically re-renders the component with the updated data

    to create this we use useState

  # Hooks 
  -----------
  * hooks are normal js utility function

  # UseState
  ------------
    * useState is hook which is used to create state varaible 
    * No, passing an argument to useState is not mandatory, but it’s common and recommended.
    * The argument you pass to useState(initialValue) sets the initial state value.
    * useState in React returns an array. The array contains two elements:
          state varible 
          A setter function (used to update the state variable).

    const [state,setState] = useState(initialValue);

    imp
    --
    When you use const [val, setVal] = useState(), val is a constant for that render, but when you update state with setVal, React re-renders the component and creates a new val with the updated value. So, each render gets a fresh val, making it safe to use const inside function components.


 # why react is fast =>react is good at dom manipulation (effiecnet dom manipulation) =>virtual dom

 # react using reconcilation algorithm which is known as react-fiber

# Virtual-DOM:
-------------
Virtual dom is representation of actual dom in memory

react is fast becuse it will do effiencern dom manipulation , this is done beacuse of virtualdom

react creates virtual dom which is repersentaion of actual dom in memory , if state variable updated then its creates another virtual dom with updated nodes , then using diff alogorithm it compares the nodes and what are the nodes are differe it will updated that differe nodes in main dom  this proccess called reconcilation.

----------------


# EPISODE-6
-------------

# Monolith Architecture:
---------------------------

in monolith arctirecture everthing we need to right in single application , like ui, bakcend(apis), db config, sms, email etc   .so even to build ui also we need build (or) compile entire whole application, and we cant use different tech stack (react for ui, node for backend ) lik ethat

# Microservices Architecture:

in Microservice arctitecture everything will be divided small services(ui,backend,conifg,db etc) which is known as sepration of concerns  , and each services are independent of each other , each service will be responsible for one thing , like ui, backend, db config. and each service will be developed in different tech stack (react for ui, node for backend)

and they are hosted on different on ports and deployed (or) mapped to same domain with different resource like

domain.com / -ui
domain.com /api - backend
domain.com /config - config
domain.com/sms -sma

all these services are interact  with other by call to different service

-----------------------

# PROMISE - then - async (indeatil in book)
-----------------------
A Promise is an object representing the eventual result of an async operation. Using .then(), you handle the Promise once it resolves, but since fetch() returns a Promise, you must convert the response to JSON with .json() (which itself returns a Promise) to get usable data. You can't assign the JSON data directly to a variable outside .then() because async operations happen later. To write cleaner, easier-to-read code, async/await lets you write asynchronous code that looks synchronous by waiting for Promises to resolve before proceeding.


/**********************/

* there are two ways to fetch api 

1) app -> fetch api -> render  => drawback is fetching api takes times user will face bad expeirnce 

2) app -> render -> fetch api ->render -> we wil render smthng and after fetch we will re render  (this can possible by useEffect hook)


# USEEFFECT:
-------------
 * useffect hook is used to perform sideffects (Side effects are operations that interact with the outside world)

      *Fetching data from an API

      *Subscribing to events (like window resize or scroll)

      *Setting timers (setTimeout, setInterval)

      *Manually manipulating the DOM

      *Logging, localStorage access, etc.



 * useEffect takes 2 argument one is callback function one is depency array

    useEffect (()=>{},[]);

 * how it will work 
  -----------------
   * the call back function will only  execute after intial render of component ;, if we given empty dependency array
   * the call back function will exceute on intail render and if there state varible that update which we given in dependency array
   * the call back function will execute every time on compoent re render ; if we omit the depency array

   ----
   If you have 3 state variables, say a, b, and c, and your useEffect dependency array includes only [a, b], here’s what happens:

T  the useEffect callback will run:

      After the component mounts (initial render).

      Whenever a or b changes.

      If the component re-renders because c changed, but c is NOT in the dependency array, the useEffect callback will NOT run again.
-----------

# SHIMMER UI
-----------
if you want to show something on page loads , so we mading the fake impressison.................



# EPISODE 6.1 
---------------

* optional chaining:
------------------

Optional chaining (?.) in JavaScript is a syntax that lets you safely access deeply nested, If any part is null or undefined, it stops and returns undefined instead of throwing an error.


# for form
------------
When you have many input fields, it's easier to keep their values in one state object, like { name: '', email: '' }. Each input should have a name that matches a key in this object. When the user types, you get the name and value from the event and update the state by copying the old data and changing only the matching key. We use square brackets [name] to tell JavaScript to use the value of the name variable as the key. This way, managing many inputs becomes simple and organized.

* When you write an object like { name: value }, JavaScript treats name literally as the key.

* But when you use square brackets like { [name]: value }, it means use the value of the variable name  as the key (this is called a computed property name).



--------------------------------------------------------------------------
# EPISODE-7
-------

 # react is single page application everything will be in singlepage but to get that feeling of multiple page effect , we use routing 

  # routing is nothing but diplay content (components) based on differnet urls,

    * for this routing we use react-router-dom js library 

    * first we need to conif the routes means on which url what should come and this config need to done on root   level component which is app

    * for this config we need to use createBrowserRouter which is function we need to use from react-router 

    * this function take list of ojbects each object should have {path:'',element:''}

    * const routes = createBrowserRouter([{path:'',element:'',errorelElement:''},{}])

    * now we need provider this configuration to our app 

    * for this we have RouterProvider Component which we need to import form react-router

    * this RouterProvider have predefault prop which is router , in that we need to pass our configuration

    * <RouterProvider router={config varaible}/>

    * earlier we render root elemnt no we need to use this Router Provider compoentn

    ----------------------------------
    * this react-router-dom provides useRouteError() hooks which whill give the more infor abbout error

  # example:
  -----------
  if supose our app component having header ,main ,footer => 
     if we write normal routes like:

        const routeConfig = createBrowserRouter([
          {
            path:'/'
            element:<App/>
          },
          {
            path:'/login'
            element:<Login/>
          },
          {
            path:'/signup'
            element:<Sigup/>
          }
        ])

      react.render(<RouterProvider router={routeConfig}>)

    here we are dipalying app component on / and login component /login 

    but in app component only i want my header and footer common and in between i want to chnage the component based on route here comes child route  and outlet into picture 


    if we make our app like this 
  

    <Header/>
    <Outlet/>
    <Footer/>


   and config like this 

    const routeConfig = createBrowserRouter([
        {
          path:'/',
          element:<App/>,
          errorElement:<ErrorPage/>,
          children:[
            {
              path:'/',
              element:<RestoContainer/>
            },
            {
              path:'/about',
              element:<About/>,
              children:[
                {
                  path:'signup',
                  element:<SignUpForm/>
                }
                {
                  path:'carousel',
                  element:<Carousel/>
                }
              ]
            }
          ],
        }
      ])

     now in this app component headeer and fooorer are there , no based on childer routes define in config <Outlet> component will render the actaula component based on route


# child Routes 
---------------
Child routes are defined inside a parent route using the children array.

<Outlet /> is used in the parent component to render the active child route’s component.

This allows for nested layouts where the layout remains the same (e.g., header, sidebar) while only the content inside the <Outlet /> changes.

Outlet is component form react-router ,which act as  a placeholder in the parent component where the child routes will be rendered based on the current URL.

---------------------

# to redirect to specipic path on on click be use link and navlink in react
------------
<Link />:
Purpose: <Link /> is used for basic navigation between different routes in a React application.

Usage: It renders an anchor (<a>) element and allows the user to navigate to a different route without causing a full page reload.

<NavLink />:
Purpose: <NavLink /> is similar to <Link /> but adds additional functionality to apply styles or classes to the active link.

Usage: It automatically adds an "active" class to the link when its route is active, allowing you to style the active link differently.

---------------
# why we need to use this link instead of anchor
-------------------------------------------

if we use a tag it will make network call to server and reloads the page and server content which is =>server side routing


here with this link and navlink page will not refersh whihc is client side routing beacuse everycompoennt will be loaded on app load only but we are making ki render based on routes 

----------------------------------------

# Dynamic Route
---------------
restuarnts/:id 

: colun make that route dynamic if user hits restuatnts/121 then id will take 121
-----

# we can get that id using useParam() hook produced by react-router-dom


# react-router-dom/react-router
--------------------------------
# hooks:

* useRouteError : return object that allows you to access information about errors in the routing process.
* useParams : useParams() is a hook provided by React Router to access the dynamic parameters of the current route.

/:id is known as a route parameter or dynamic parameter in React Router,,it means the route is dynamic and can accept any value at that position in the URL.

to get that value we use useParams 

useparam how it will work:
--------------------
when you define /:id dynamic paramenter in rout, react-router will collect that paramater and store it as  key and origin value as value 

when you use useParams hook it returns a object with that object of key value

---------------------------

# Components:

* Link : used for navigating between different routes in a React application without causing a full page reload.
* NavLink :  is similar to <Link />, but it automatically applies an "active" class to the link when its route is active, making it useful for navigation menus.
* RouterProvider : <RouterProvider /> is used to provide routing functionality to your React application by accepting a router prop, which defines the route configurations using createBrowserRouter.
* Outlet: <Outlet /> is a component ,t acts as a placeholder where the content(component) of the active child route is rendered inside the parent route's layout (component).

# function
-----------
* createBrosweRouter :
   it is used for config of routes ,by taking list of object as argumrnts [{path:'',children:[],errorELement:'',element}]





