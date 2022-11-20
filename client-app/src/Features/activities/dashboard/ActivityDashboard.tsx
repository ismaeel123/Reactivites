import React from "react";
import { Grid } from "semantic-ui-react";
import { Activity } from "../../../App/models/Activity";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";
import ActivityDetails from "./Details/ActivityDetails";

interface Props
{
    activities:Activity[] ;
    selectedActivity:Activity | undefined;
    handleSelectActivity : (id:string) =>void;
    handleCancelSelectActivity: () =>void; 
    editMode:boolean;
    openForm:(id:string) =>void;
    closeForm:()=>void;
    createOrEdit:(activity:Activity)=>void;
    deleteActivity:(id:string)=>void;

}

export default function ActivityDashboard ({activities,selectedActivity,
    handleSelectActivity,handleCancelSelectActivity,editMode,openForm,closeForm,createOrEdit,
deleteActivity}:Props)
{
    return(
        <Grid>
            <Grid.Column width='10'>
                <ActivityList 
                activities={activities}
                handleSelectActivity={handleSelectActivity}
                deleteActivity={deleteActivity}
                />
            </Grid.Column>

            <Grid.Column width='6'>
                {selectedActivity && !editMode &&
                <ActivityDetails 
                activity={selectedActivity}
                handleCancelSelectActivity={handleCancelSelectActivity}
                openForm={openForm}
                
                />}
                {editMode &&
                <ActivityForm
                closeForm={closeForm}
                 activity={selectedActivity}
                 createOrEdit={createOrEdit}
                /> }
            </Grid.Column>
        </Grid>
    )
}
