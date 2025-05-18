import React from "react";
import ReactDOM from "react-dom/client";

const number = 1000;

const Header = () => {
  return (
    <div className="header">
      <img src="https://picsum.photos/200/300" alt="Header Image" />
      <nav>
        <ul>
          <li>menu</li>
        </ul>
      </nav>
      <button>logout</button>
    </div>
  )
}

const Main = () => {
  return (
  <>
    {number}
    <Header/>
    <article>
      <div>this is main section</div>
    </article>
  </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main/>);
