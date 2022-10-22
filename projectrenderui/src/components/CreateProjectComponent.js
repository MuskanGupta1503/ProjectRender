import * as React from 'react';
import { Box, Grid, Button,  MenuItem, Select,FormControl,Alert, TextField, InputLabel } from '@mui/material';
import { useState } from 'react';
import { useSaveProjectMutation } from '../services/projectRenderApi.js';
// import {useParams} from "react-router-dom";



export default function CreateProjectComponent() {
    // States
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [techstack, setTechstack] = useState()
  const [githublink, setGithublink] = useState()
  const [linkedinlink, setLinkedinlink] = useState()
  const [category, setCategory] = useState('')
  const [difficulty, setDifficulty] = useState('')
//   let {cat} = useParams();

  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  })
  const [projects,setProjects] = useState([])

  // // Clear Form
  const resetForm = () => {
    setTitle('')
    setTechstack('')
    setDescription('')
    setLinkedinlink('')
    setGithublink('')
    setCategory('')
    document.getElementById('resume-form').reset()
  }
  const [saveProject] = useSaveProjectMutation()
  // const { data, isSuccess } = useGetProjectQuery()
//   const { data, isSuccess } = useGetProjectByCategoryQuery(cat)
  
//   useEffect(() => {
//     if (data && isSuccess) {
//       setProjects(data)
//       console.log(data)
//       console.log(isSuccess)
//       console.log(cat)
//     }
//   }, [data, isSuccess])
  
  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData()
    data.append('title', title)
    data.append('description', description)
    data.append('techstack', techstack)
    data.append('githublink', githublink)
    data.append('linkedinlink', linkedinlink)
    data.append('category', category)
    data.append('difficulty', difficulty)

    if (title) {
      console.log(data.get('title'))
      console.log(data.get('description'))
      console.log(data.get('techstack'))
      console.log(data.get('githublink'))
      console.log(data.get('linkedinlink'))
      console.log(data.get('category'))
      console.log(data.get('difficulty'))
      const res = await saveProject(data)
      if (res.data.status === "success") {
        setError({ status: true, msg: "Project Data Uploaded Successfully", type: 'success' })
        resetForm()
      }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: 'error' })
    }
  }
  return (
    <Grid item xs={5}>
          <Box component="form" sx={{ p: 3 }} noValidate id="resume-form" onSubmit={handleSubmit}>
            {/* <TextField id="name" name="name" required fullWidth margin='normal' label='Name' onChange={(e) => setName(e.target.value)} /> */}
            {/* <TextField id="email" email="email" required fullWidth margin='normal' label='Email' onChange={(e) => setEmail(e.target.value)} /> */}
            <TextField id="title" name="title" required fullWidth margin='normal' label='Title' onChange={(e) => setTitle(e.target.value)} />
            <TextField id="description" name="decription" required fullWidth margin='normal' label='Description' onChange={(e) => setDescription(e.target.value)} />
            <TextField id="techstck" name="techstck" required fullWidth margin='normal' label='Techstack' onChange={(e) => setTechstack(e.target.value)} />
            <TextField id="githublink" name="githublink" required fullWidth margin='normal' label='Githublink' onChange={(e) => setGithublink(e.target.value)} />
            <TextField id="linkedinlink" name="linkedinlink" required fullWidth margin='normal' label='Linkedinlink' onChange={(e) => setLinkedinlink(e.target.value)} />
           
            <FormControl fullWidth margin='normal'>
              <InputLabel id="category-select-label">Category</InputLabel>
              <Select labelId='category-select-label' id='category-select' value={category} label='category' onChange={(e) => { setCategory(e.target.value) }}>
                <MenuItem value="WebDev">Web Development</MenuItem>
                <MenuItem value="AppDev">App Development</MenuItem>
                <MenuItem value="ML">Machine Learning</MenuItem>
                <MenuItem value="Others">Others</MenuItem>
              </Select>
            </FormControl>
 
            <FormControl fullWidth margin='normal'>
              <InputLabel id="difficulty-select-label">Difficulty</InputLabel>
              <Select labelId='difficulty-select-label' id='difficulty-select'
              value={difficulty} label='difficulty' onChange={(e) => { setDifficulty(e.target.value) }}>
                <MenuItem value="easy">Easy</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="tough">Tough</MenuItem>
              </Select>
            </FormControl>
 
 
            {/* <FormControl fullWidth margin='normal'>
              <FormLabel id="gender-radio">Gender</FormLabel>
              <RadioGroup row name="gender" aria-labelledby="gender-radio">
                <FormControlLabel value="male" control={<Radio />} label='Male' onChange={(e) => setGender(e.target.value)} />
                <FormControlLabel value="female" control={<Radio />} label='Female' onChange={(e) => setGender(e.target.value)} />
                <FormControlLabel value="other" control={<Radio />} label='Other' onChange={(e) => setGender(e.target.value)} />
              </RadioGroup>
            </FormControl>*/}
            <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }} color="error">Submit</Button>
            {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
          </Box>
        </Grid>
  );
}
