import Counter from "./components/Counter";
import Usestate from "./components/usestate";
import User from "./components/User";
import EduInfo from "./components/EduInfo";
import Skills from "./components/Skills";
import DivColors from "./components/DivColors";

function App() {
  const name1 = "John";
  const age1 = 26;
  let eduObject1 = {
    higestEdu: "BE",
    score: "82%",
  };

  const name2 = "Smith";
  const age2 = 28;
  let eduObject2 = {
    higestEdu: "ME",
    score: "75%",
  };

  let skills = ["JS","Python","Node","AWS"];

  return (
    <>
      {/* <Usestate />
      <Counter /> */}
      <div>
        <h1>User Details</h1>
        <div>
          <User name={name1} age={age1} />
          <EduInfo qualification={eduObject1} />
        </div>
        <div>
          <User name={name2} age={age2} />
          <EduInfo qualification={eduObject2} />
        </div>
        <hr />
        <Skills skillset={skills} />
        <hr />
        <DivColors />
      </div>
    </>
  );
}

export default App;
