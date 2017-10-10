import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import Routes from './Routes';
import reducers from './reducers';

 class App extends Component{

   componentWillMount(){
      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyAP1W551Z5A_iwZN_dc-I7IhjsThJ2kV60",
        authDomain: "whatsapp-clone-ef622.firebaseapp.com",
        databaseURL: "https://whatsapp-clone-ef622.firebaseio.com",
        projectId: "whatsapp-clone-ef622",
        storageBucket: "whatsapp-clone-ef622.appspot.com",
        messagingSenderId: "139287854344"
      };
      firebase.initializeApp(config);
   }

   render(){
     return(
       <Provider store={createStore(reducers)}>
         <Routes />
       </Provider>
     );
   }
}


export default App;
