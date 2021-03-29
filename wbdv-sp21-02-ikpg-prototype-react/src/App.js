import SearchScreen from './components/search-screen/search-screen';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './components/home-screen';

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Route path="/" exact={true}>
          <HomeScreen/>
        </Route>
        <Route path='/search'>
          <SearchScreen/>
        </Route>
      </BrowserRouter>

    </div>
  );
}

export default App;
