import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { PostList, PostCreate, PostEdit, PostShow } from './posts';
import { CommentList, CommentCreate, CommentEdit,  CommentShow } from './users';

const dataProvider = jsonServerProvider('http://localhost:3001');

const App = () => <Admin dataProvider={dataProvider}>
        <Resource name="posts" create={PostCreate} list={PostList} edit={PostEdit} show={PostShow}/>
        <Resource name="comments" create={CommentCreate} list={CommentList} edit={CommentEdit} show={CommentShow}/>
	</Admin>

export default App;
