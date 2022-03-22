import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
