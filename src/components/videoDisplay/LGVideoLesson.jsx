import React, { useState } from "react";
import { Paper, Typography, IconButton } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { NavigateBefore, NavigateNext } from "@mui/icons-material"; // Import icons
import {Link} from 'react-router-dom';
import sampleVid from '../../imgs/sampleVid.mp4'
import Rating from "../Rating";
const Destinycard = ({courses}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numberOfItemsPerPage = 4;

  const groupedItems = [];
  for (let i = 0; i < courses.length; i += numberOfItemsPerPage) {
    groupedItems.push(courses.slice(i, i + numberOfItemsPerPage));
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', width: 'full'}}>
        <div style={{ flexGrow: 1 }}>
        <Carousel
          animation="slide"
          indicators={true}
          navButtonsAlwaysVisible={false}
          cycleNavigation={false}
          fullHeightHover={false}
          index={currentIndex}
          
        >
          {groupedItems.map((group, index) => (
            <ItemGroup key={index} group={group} />
          ))}
        </Carousel>
      </div>
      
    </div>
  );
};

function ItemGroup({ group }) {
  return (
    <div style={{ display: "flex", justifyContent: "left" }}>
      {group.map((course, i) => (
        <Item key={i} course={course} />
      ))}
    </div>
  );
}

function Item({ course }) {
  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "white",
        color: "#fff",
        justifyContent: "center",
        alignItems: "center",
        height: "380px",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "1px",
        p: 0,
        mx: 2,
      }}
      elevation={0}
    >
      <Link to ={`/courPage/${course._id}`}> 
    <div className='p-4 border border-black-200'>
              <div className='flex flex-col w-full text-black' >
                <div className=' border border-gray-200' >
                <video src={`http://localhost:5000/${course.video}`} style={{maxHeight: '200px', maxWidth: ''}}>
              Your browser does not support the video tag.
            </video>
                </div>
                <div className='p-1'>
                  <h1 className='font-bold'>{course.title}</h1>
                  <span className='text-sm text-gray-500 text-black'>By: {course.instructor.userEmail}</span>
                  <div className='text-sm flex'>
                    <span className='text-red-600 font-bold'><Rating defaultValue={course.rating}/></span>
                    <span className="mt-2"> ({course.reviews})</span>
                    <div className='text-sm text-gray-400 mt-2 ml-2'>{course.hours} course hours</div>
                  </div>
                  <span className='font-bold text-tiny'>${course.price}</span>
                </div>
              </div>
              <div>
        </div>
            </div>
    </Link>
    </Paper>
  );
}

export default Destinycard;
