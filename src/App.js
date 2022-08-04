
import './App.css';
// import Greet from './components/function-component'
import { Component } from 'react';
// import Welcome from './components/class-component'
// import Userid from "./components/props";
import State from "./components/state";
class App extends Component {
  render() {
    return(
      <div className="App">
{/* <Greet />
<Welcome> <button> Hello </button></Welcome>
<Userid name="Adebayo" nickname="Mr. Money">
<button> CLick me</button> </Userid>
<Userid name="Olaitan" nickname="Wordiator" /> */}
<State />
      </div>

    );
  }
}

export default App;
