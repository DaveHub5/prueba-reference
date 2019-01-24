import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { Prueba } from './prueba';
import { Formp  } from './formp';
import { Aux    } from './aux';

const dataProvider = jsonServerProvider('http://localhost:3001');
const App = () => <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={ListGuesser} />
        <Resource name="comments" list={ListGuesser} /> 
        <Resource name="prueba" list={Prueba} />
	<Resource name="formp" list={Formp} />
	<Resource name="aux"   list={Aux} />
	</Admin>

export default App;
