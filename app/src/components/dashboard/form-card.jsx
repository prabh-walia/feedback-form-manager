import React from 'react';
import { Button, IconButton } from '@mui/material';
import { Visibility, Edit, Delete } from '@mui/icons-material';
import DescriptionIcon from '@mui/icons-material/Description';

const FormCard = ({ form }) => {
  return (
        <div className='w-full'>
        {/* Header with Form Icon */}
        <div className="bg-yellow-500 text-center p-4 rounded-b-none rounded">
            <DescriptionIcon style={{ fontSize: 40, color: '#fff' }} />
        </div>
        <div className='p-3'>
        {/* Form Details */}
        <div className="flex justify-between mb-3 text-gray-700 ">
        <span className="font-semibold text-gray-700">{form.title}</span>

        </div>

      <div className=" text-gray-700 text-md">

        <div className="flex justify-between mb-4">
            <span className="font-normal text-sm">Submitted:</span>
            <span className="font-normal text-sm" >{form.submissions}</span>
        </div>
        <div className="flex justify-between mb-4">
            <span className="font-normal text-sm">Views:</span>
            <span className="font-normal text-sm">{form.views}</span>
        </div>
        <div className="flex justify-between mb-4">
            <span className="font-normal text-sm">Date Published:</span>
            <span className="font-normal text-sm"> {form.publishedDate}</span>
        </div>
        </div>
        </div>

     <div className="flex justify-center p-2 ">
        <Button
          variant="contained"
          color="primary"
          startIcon={<Visibility />}
          className="w-full"
        >
          View Submissions
        </Button>
        </div>
        <div className="flex justify-between p-2">
      <Button
        variant="outlined"
        color="secondary"
        startIcon={<Edit />}
        className="mr-2"
      >
        Edit
      </Button>

      <Button
        variant="outlined"
        color="error"
        startIcon={<Delete />}
        className="mr-2"
      >
        Delete
      </Button>
   
    </div>
      </div>
    
  );
};
export default FormCard