import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './pages/landing/landing';
import Home from './pages/home/home';
import About from './pages/about/about';
import NewDog from './pages/newDog/newDog';
import NavBar from './controllers/navBar/navBar';
import Detail from './pages/detail/detail';
function App() {

  return (
    <BrowserRouter>    
      <div >
        <Route exact path='/' component={LandingPage} />
        <NavBar />
        <Route path='/home' component={Home} /> 
        <Route path='/dogs/:id' component={Detail} />
        <Route path='/about' component={About} />
        <Route path='/newDog' component={NewDog} />
       
      </div>
    </BrowserRouter>
  );
}

export default App;