import "./App.css"

function Title() {
  return <h1>I am the Title!</h1>
}

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
