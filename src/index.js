
import React, {createContext} from 'react';
import 'dotenv/config';
import userStore from './Store/UserStore.js';
import DeviceStore from './Store/deviceStore.js';
import App from './App';
// [Error] Warning: You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".
 
/* 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

  </React.StrictMode>
);


   
// [Error] Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot
 ReactDOM.render(

            <App/>,
            document.getElementById('root')
        );


        */

// Вот последняя версия React
import { createRoot } from 'react-dom/client';


const container = document.getElementById("root");
const root = createRoot(container);
export const Context = createContext(null);


root.render(

<Context.Provider value={
      {user: new userStore(),
      devices:new DeviceStore()}
      }
    >
    <App/>
 
    </Context.Provider>


);


        

