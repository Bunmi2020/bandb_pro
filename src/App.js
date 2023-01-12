

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './home';
function App() {
  return (
    <body>
      <Router forceRefresh> 
      <Switch >
          
          <Route path="/" forceRefresh>
            <Home />
          </Route>
        
      </Switch>
    </Router>
    </body>
    
  );
}

export default App;
