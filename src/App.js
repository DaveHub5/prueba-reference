import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { Prueba2 } from './prueba2';

const dataProvider = jsonServerProvider('http://localhost:3001');
const App = () => <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={ListGuesser} />
        <Resource name="comments" list={ListGuesser} /> 
        <Resource name="prueba2" list={Prueba2} />
	</Admin>

export default App;
