

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
    * useState in React returns an array. The array contains two elements:
          The current state value (the actual value stored in the state).
          A setter function (used to update the state).


 # why react is fast =>react is good at dom manipulation (effiecnet dom manipulation) =>virtual dom

 # react using reconcilation algorithm which is known as react-fiber

# Virtual-DOM:
-------------
Virtual dom is representation of actual dom in memory

react is fast becuse it will do effiencern dom manipulation , this is done beacuse of virtualdom

react creates virtual dom which is repersentaion of actual dom in memory , if state variable updated then its creates another virtual dom with updated nodes , then using diff alogorithm it compares the nodes and what are the nodes are differe it will updated that differe nodes in main dom  this proccess called reconcilation.

----------------








 



