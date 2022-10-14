import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header,List } from 'semantic-ui-react';



function App() {
const [activities,SetActivities] =useState([]);

useEffect(() =>{
  axios.get('http://localhost:5000/api/activities').then((Response:any)=>{
    console.log(Response);
    SetActivities(Response.data);
  })
},[])

  return (
    <div >
      <Header as ='h2' icon='users' content='Reactivites' />

        <List>
          {activities.map((activity:any) =>(
            <List.Item key={activity.id}>
                {activity.title}
            </List.Item>
          ))}
        </List>
        
    </div>
  );
}

export default App;
