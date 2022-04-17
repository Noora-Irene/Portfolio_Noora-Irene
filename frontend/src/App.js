import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavBar';
import Index from './pages/Index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Don't remove Router even though its value is never read

function App() {

   return (
      <>
         <NavigationBar />
         <Routes>
            <Route exact path={['/', '/certificates']}>
               <Index />
            </Route>
         </Routes>
      </>
   );
}

export default App;
