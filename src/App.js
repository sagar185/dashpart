import  React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import UserCreate from'./components/Partincipate/UserCreate'
import UserEdit from'./components/Partincipate/UserEdit'
import UserList from'./components/Partincipate/UserList'

function App() {
    return (
     <Admin dataProvider={restProvider('http//localhost:3000')}>
  
       <Resource name="Participate" list={UserList} edit={UserEdit} create={UserCreate} />

     </Admin>
    );
  }
  
  export default App;