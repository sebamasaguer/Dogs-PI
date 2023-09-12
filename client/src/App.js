import {Routes ,Route , useLocation } from 'react-router-dom';
import LandingPage from './pages/landing/landing';
import Home from './pages/home/home';
import About from './pages/about/about';
import NewDog from './pages/newDog/newDog';
import NavBar from './controllers/navBar/navBar';
import Detail from './pages/detail/detail';
import Footer from './controllers/footer/footer';
function App() {
  const location = useLocation();

  return (
    <div className='App'>

      <div >
  {location.pathname!== '/'&& <NavBar /> }
      
        <Route exact path='/' component={LandingPage} />
      
        <Route path='/home' component={Home} /> 
        <Route path='/dogs/:id' component={Detail} />
        <Route path='/about' component={About} />
        <Route path='/newDog' component={NewDog} />
        <Route path='*' element={<h1>404</h1>} />
    
        {location.pathname!== '/' && <Footer />}
      </div>
   </div>
  );
}

export default App;