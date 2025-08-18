import User from "./components/User";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    <div className="container-fluid">
      <h1>Hello World!</h1>
      <div>
        <div>
          <FrontEnd />
          <br />
          <button onClick={()=>clickMe()}>Click Me!</button>
        </div>
      </div>
      <User />
      </div>
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
