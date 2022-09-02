
// import './App.css';
// import Greet from './components/function-component'
import { Component } from 'react';
// import FormValueHandling from './components/FormValueHandling';
// import Lifecyclemounting from './components/lifecyclemounting';
// import Welcome from './components/class-component'
// import Userid from "./components/props";
// import Changer from "./components/state";
import Car from './components/useState';
// import Destructure from './components/destructuring (prop)';
// import EventHandler from './components/EventHandler';
// // import styles from './components/style.module.css'
// import Form from './components/Form'
class App extends Component {
  render() {
    return(
      <div className="App">
{/* <Greet /> */}
{/* <Welcome> <button> Hello </button></Welcome>
<Userid name="Adebayo" nickname="Mr. Money">
<button> CLick me</button> </Userid> */}
{/* <Userid name="Olaitan" nickname="Wordiator" /> */}
{/* <Changer /> */}
{/* <Destructure  data = {
  {
    brand:"Ferarri",
    color:"red",
    year:1997
  }
} /> */}
{/* <EventHandler />
<Form  />
<FormValueHandling /> */}
{/* <Lifecyclemounting /> */}
<Car />
      </div>

    );
  }
}

export default App;
