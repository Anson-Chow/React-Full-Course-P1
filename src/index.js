import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"
import App from "./App.js";
import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// const navbar = (
//   <nav>
//       <h1>Bob's Bistro</h1>
//       <ul>
//           <li>Menu</li>
//           <li>About</li>
//           <li>Contact</li>
//       </ul>
//   </nav>
// )

// // ReactDOM.render(navbar, document.getElementById("root"))
// ReactDOM.createRoot(document.getElementById("root")).render(navbar)

// const page = (
//   <div>
//       <h1>My awesome website in React</h1>
//       <h3>Reasons I love React</h3>
//       <ol>
//           <li>It's composable</li>
//           <li>It's declarative</li>
//           <li>It's a hireable skill</li>
//           <li>It's actively maintained by skilled people</li>
//       </ol>
//   </div>
// )

// ReactDOM.createRoot(document.getElementById("root")).render(page)

/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

// const reactPage = (
//   <div>
//   <div>
//      <img src={require('./react-logo.png')} width="40px" />
//      </div>
//      <div>
//   <h1>Fun Facts about React</h1>
//   <ul>
//     <li>Was first Released in 2013</li>
//     <li>Was originally created by Jordan Walke</li>
//     <li>Has well over 100k stars on Github</li>
//     <li>Is maintained by Facebook</li>
//     <li>Powers thousands of enterprise apps, including mobile apps</li>
//   </ul>
//   </div>
//   </div>
// )

// ReactDOM.createRoot(document.getElementById("root")).render(reactPage)




function App1() {
  return (
    <div>
    <Header />
    <MainContent />
    {/* <Footer /> */}
    </div>
    
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App1 />);
