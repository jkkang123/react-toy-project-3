import {HashRouter, Route} from 'react-router-dom';
import CounterContainer from './container/CounterContainer';
import Home from "./routes/Home";

function App(){
  return (
  <HashRouter>
    <Route path="/" exact={true} component={Home}></Route>
  </HashRouter>
  );
}

export default App;