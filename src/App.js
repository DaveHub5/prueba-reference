import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { Prueba } from './prueba';
import { Prueba2 } from './prueba2';


const dataProvider = jsonServerProvider('http://localhost:3001');
const App = () => <Admin dataProvider={dataProvider}>
        <Resource name="prueba" list={Prueba} />
        <Resource name="prueba2" list={Prueba2} />
      	</Admin>

export default App;
