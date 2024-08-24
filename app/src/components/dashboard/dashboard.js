import React from 'react';
import { Grid, Card, CardContent, Typography, Button, Fab, Container } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import FormCard from './form-card';
const Dashboard = () => {
   // Sample forms data
  const forms = [
    { id: 1, title: "Customer Satisfaction Survey",      submissions: 24,
    views: 102,
    publishedDate: 'Aug 22, 2024', },
    { id: 2, title: "Product Feedback",      submissions: 24,
    views: 102,
    publishedDate: 'Aug 22, 2024', },
    { id: 3, title: "Website Usability Form" ,      submissions: 24,
    views: 102,
    publishedDate: 'Aug 22, 2024',},
    { id: 3, title: "Website Usability Form" ,      submissions: 24,
    views: 102,
    publishedDate: 'Aug 22, 2024',}
  ];

  const handleCreateForm = () => {
    // Logic to create a new form or navigate to the form creation page
  };

  const handleEditForm = (id) => {
    // Logic to edit the selected form
  };

  const cardStyles = {
    height: '350px', // Set a fixed height
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',

  };
  return (
    <div className='p-6' >
 
      <Grid container spacing={3}>
        {/* First Card: Create Form */}
        <Grid item xs={12} sm={6} md={3}>
          <div style={cardStyles} className='flex justify-center border border-gray-200 rounded-lg shadow-lg   '>
            <Fab color="primary" onClick={handleCreateForm}>
              <AddIcon />
            </Fab>
            <Typography variant="h6" style={{ marginTop: '20px' }}>
               New Form
            </Typography>
          </div>
        </Grid>


        {forms.map((form) => (
          <Grid item xs={12} sm={6} md={3} key={form.id}>
            <div style={cardStyles} className='border border-gray-200 rounded-lg shadow-lg  '>
            <FormCard key={form.id} form={form} />
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Dashboard;
