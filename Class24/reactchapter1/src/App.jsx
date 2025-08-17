import User from "./components/User";

function App() {

  return (
    <>
      <h1>Hello World!</h1>
      <div>
        <div>
          <FrontEnd />
          <br />
          <button onClick={()=>clickMe()}>Click Me!</button>
        </div>
      </div>
      <User />
    </>
  )
}

function FrontEnd(){
  return (
    <>
      <h2>This is React Frontend</h2>
    </>
  )
}
function clickMe(){
  alert("Inside clickMe function");
}


export default App
