import * as React from 'react';
// import { Paper, Box, Grid, Button, CardActions, Card, Table, TableHead, TableBody, MenuItem, Select,TextareaAutosize,
//   CardHeader, CardContent, CardMedia, Hidden, Typography, Checkbox, FormControlLabel, FormControl,
//   Accordion , AccordionSummary , AccordionDetails, TableRow, FormGroup, Radio, Stack, Alert, TextField, 
//   TableCell, Avatar, InputLabel,TableContainer, FormLabel,RadioGroup } from '@mui/material';
import { useEffect, useState,  } from 'react';
import { useGetProjectByIdQuery} from '../services/projectRenderApi.js';
import {useParams} from "react-router-dom";

const ShowSingleProject= ()=> {
      
  let {cat,id} = useParams();
  const [project,setProject] = useState({})
  const { data, isSuccess } = useGetProjectByIdQuery(id)
  
  useEffect(() => {
    if (data && isSuccess) {
      setProject(data)
      // console.log(data)
      // console.log(isSuccess)
      // console.log(cat)
      console.log(project)
    }
  }, [data, isSuccess,project])
  
  return (
    <>
    <h1>{cat} + {id}</h1>
    <ul>
      <li>ID : {project.id}</li>
      <li>Title : {project.title}</li>
      <li>Description : {project.description}</li>
      <li>Category : {project.category}</li>
      <li>Linkedinlink : {project.linkedinlink}</li>
      <li>Githublink : {project.githublink}</li>
      <li>Techstack : {project.techstack}</li>
      <li>Difficulty : {project.difficulty}</li>
    </ul>
    </>
  );
}
export default ShowSingleProject