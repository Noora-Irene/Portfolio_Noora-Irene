import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavBar';
import Index from './pages/Index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Don't remove Router even though its value is never read

function App() {

   return (
      <>
         <NavigationBar />
         <Switch>
            <Route exact path={['/', '/certificates']}>
               <Index />
            </Route>
         </Switch>
      </>
   );
}

export default App;
