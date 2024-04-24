import "./App.css"

//import
import Title from "./Title.jsx";

function Description() {
  return <h3>I am the description!</h3>
}

function App() {
  return (
    <div>
    <h1>This is my app component</h1>
    <p>inside app compoent we have: </p>
  <Title />
  <Description />
  {/* <h1>Hello World</h1> */}
  </div>
  );
}

export default App
