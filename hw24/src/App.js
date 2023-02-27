import Header from './containers/header/index';
import Aside from './containers/aside';
import Main from './containers/main';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Aside />
        <Main />
      </div>
    </div>
  );
}

export default App;
