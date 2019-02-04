import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { Prueba } from './prueba';

const dataProvider = jsonServerProvider('http://localhost:3001');
const App = () => <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={ListGuesser} />
        <Resource name="comments" list={ListGuesser} /> 
        <Resource name="prueba" list={Prueba} />
	</Admin>

export default App;
