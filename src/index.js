import ReactDOM from 'react-dom/client'
import Home from "./Home"
import About from './About';
import Contact from './Contact';
const current_path = window.location.pathname
const root = ReactDOM .createRoot(document.getElementById('root'));

if (current_path==="/") {
  root.render(<Home/>)
}
else if (current_path==="/About")
{
  root.render(<About/>)
}
else if (current_path==="/Contact")
  {
    root.render(<Contact/>)
  }
