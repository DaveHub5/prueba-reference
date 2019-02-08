import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { Prueba } from './prueba';



const dataProvider = jsonServerProvider('http://localhost:3001');
const App = () => <Admin dataProvider={dataProvider}>
        <Resource name="prueba" list={Prueba} />
      	</Admin>

export default App;
