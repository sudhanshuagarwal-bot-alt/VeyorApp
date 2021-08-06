import './App.css';
import HomeComp from './Components/HomeComp';
import { Provider } from 'react-redux'
import  Store  from './Redux/Store'

function App() {
  return (
    <Provider store= {Store}>
      <div className="App">
        <HomeComp />
      </div>
    </Provider>
  );
}

export default App;
