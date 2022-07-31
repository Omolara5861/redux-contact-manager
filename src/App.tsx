import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import  {Header} from './components/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './components/contacts/Contacts';
import EditContact from './components/contacts/EditContact';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import AddContact_Ref from './components/contacts/AddContact_Ref';
import {Provider} from 'react-redux';
import store from './store';



function App() {
  return (
  <Provider store={store}>
<Router basename={process.env.PUBLIC_URL}>
      <div className="App">
     <Header branding="Contact Manager"/>
     <div className="container">
      <Switch>
        <Route exact path="/" component={Contacts} />
        <Route path="/contact/add"  component={AddContact_Ref} />
        <Route path="/contact/edit/:id" component={EditContact} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
     </div>
    </div>
    </Router>
    </Provider>
  );
}

export default App;
