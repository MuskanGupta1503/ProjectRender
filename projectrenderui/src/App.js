// import logo from './logo.svg';
import './App.css';
// import { Paper, Box, Grid, Button, CardActions, Card, Table, TableHead, TableBody, MenuItem, Select,TextareaAutosize,
//   CardHeader, CardContent, CardMedia, Hidden, Typography, Checkbox, FormControlLabel, FormControl,
//   Accordion , AccordionSummary , AccordionDetails, TableRow, FormGroup, Radio, Stack, Alert, TextField, 
//   TableCell, Avatar, InputLabel,TableContainer, FormLabel,RadioGroup } from '@mui/material';
import ProjectTypes from "./components/ProjectTypes.js"
import TopPortion from "./components/topPortion.js"
import Footer from "./components/Footer.js"
import ShowProject from "./components/ShowProject.js"
import CreateProjectComponent from "./components/CreateProjectComponent.js"
import ShowSingleProject from "./components/ShowSingleProject.js"
// import { LocalizationProvider, DatePicker } from '@mui/lab';
// import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { styled } from '@mui/material/styles';
// import { format } from 'date-fns';
// import { useGetProjectQuery, useSaveProjectMutation , useGetProjectByCategoryQuery} from './services/projectRenderApi';
 

function App() {
  return (
    <>
  <BrowserRouter>
    <Routes>
    <Route exact path="/" element={
      <>
        <TopPortion/>
        <ProjectTypes/>
        <CreateProjectComponent/>
        <Footer/>
      </>}
    />
    <Route exact path="/showproject/:cat" element={
      <>
        <ShowProject/>
      </>
    }/>
    <Route exact path="/showproject/:cat/:id" element={
      <>
        <ShowSingleProject/>
      </>
    }/>
    </Routes>
   </BrowserRouter>
  </>
  );
}

export default App;