import ReactDOM from 'react-dom/client'
import Home from './views/Home/Home'
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import "./index.css"
const current_path = window.location.pathname
const root = ReactDOM.createRoot(document.getElementById('root'));
//for home
if (current_path==="/") {
  root.render(<Home/>)
}
// for about
else if (current_path==="/About")
{
  root.render(<About/>)
}
// contact
else if (current_path==="/Contact")
  {
    root.render(<Contact/>)
  }
  // esle part
  else
  {
    root.render(<h1>404 page not found</h1>)
  }
