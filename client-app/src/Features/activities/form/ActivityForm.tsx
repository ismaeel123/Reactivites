
import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../App/models/Activity";

interface Props
{
    closeForm: ()=>void;
    activity:Activity |undefined;
    createOrEdit:(activity:Activity)=>void;
}

export default function ActivityForm({closeForm,activity:selectedActivity,createOrEdit}:Props)
{

    const initialState= selectedActivity ??{
        id:'',
        title:'',
        date:'',
        description:'',
        category:'',  
        city:'',
        venue:''
    }

    const[activity,setActivity]=useState(initialState);

    function hanldeFormSubmit()
    {
        createOrEdit(activity);
    }


    function handleInputChange(event:ChangeEvent<HTMLInputElement |HTMLTextAreaElement>)
    {
        const {name,value}=event.target; 
        setActivity({...activity,[name]:value})
    }

    return (
        <Segment clearing>
            <Form onSubmit={hanldeFormSubmit} autoComplete='off'>
                <Form.Input placeholder='title' name='title' value={activity.title} onChange={handleInputChange} />
                <Form.TextArea placeholder='description' name='description' value={activity.description} onChange={handleInputChange} />
                <Form.Input placeholder='Category' name='category' value= {activity.category} onChange={handleInputChange} />
                <Form.Input placeholder='Date' name='date' value= {activity.date} onChange={handleInputChange}  /> 
                <Form.Input placeholder='City' name='city' value= {activity.city} onChange={handleInputChange} />
                <Form.Input placeholder='Venue'name='venue' value= {activity.venue} onChange={handleInputChange}  />
                <Button floated="right" positive type="submit" content='submit'/>
                <Button onClick={closeForm} floated="right" type='button' content='cancel'/>
            </Form>
        </Segment>
    )
}