import * as React from 'react';
import { Paper, Box, Grid,  Table, TableHead, TableBody, Typography, TableRow, 
  TableCell, TableContainer} from '@mui/material';
import { useEffect, useState } from 'react';
import { useGetProjectByCategoryQuery} from '../services/projectRenderApi.js';
import {useParams} from "react-router-dom";
import { Link } from "react-router-dom";

const ShowProject= ()=> {
      // States
  // const [title, setTitle] = useState()
  // const [description, setDescription] = useState()
  // const [techstack, setTechstack] = useState()
  // const [githublink, setGithublink] = useState()
  // const [linkedinlink, setLinkedinlink] = useState()
  // const [category, setCategory] = useState('')
  // const [difficulty, setDifficulty] = useState('')
  let {cat} = useParams();

  // const [error, setError] = useState({
  //   status: false,
  //   msg: "",
  //   type: ""
  // })
  const [projects,setProjects] = useState([])

  // // Clear Form
  // const resetForm = () => {
  //   setTitle('')
  //   setTechstack('')
  //   setDescription('')
  //   setLinkedinlink('')
  //   setGithublink('')
  //   setCategory('')
  //   document.getElementById('resume-form').reset()
  // }
  // const [saveProject] = useSaveProjectMutation()
  // const { data, isSuccess } = useGetProjectQuery()
  // const { data, isSuccess } = useGetProjectByIdQuery(5)
  const { data, isSuccess } = useGetProjectByCategoryQuery(cat)
  
  useEffect(() => {
    if (data && isSuccess) {
      setProjects(data)
      // console.log(data)
      // console.log(isSuccess)
      // console.log(cat)
    }
  }, [data, isSuccess])
  
  // Handle Form Submission
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const data = new FormData()
  //   data.append('title', title)
  //   data.append('description', description)
  //   data.append('techstack', techstack)
  //   data.append('githublink', githublink)
  //   data.append('linkedinlink', linkedinlink)
  //   data.append('category', category)
  //   data.append('difficulty', difficulty)

  //   if (title) {
  //     console.log(data.get('title'))
  //     console.log(data.get('description'))
  //     console.log(data.get('techstack'))
  //     console.log(data.get('githublink'))
  //     console.log(data.get('linkedinlink'))
  //     console.log(data.get('category'))
  //     console.log(data.get('difficulty'))
  //     const res = await saveProject(data)
  //     if (res.data.status === "success") {
  //       setError({ status: true, msg: "Project Data Uploaded Successfully", type: 'success' })
  //       resetForm()
  //     }
  //   } else {
  //     setError({ status: true, msg: "All Fields are Required", type: 'error' })
  //   }
  // }


  return (
    <>
      <Box display="flex" justifyContent="center" sx={{ backgroundColor: 'error.light', padding: 2 }}>
        <Typography variant='h2' component="div" sx={{ fontWeight: 'bold', color: 'white' }}>Resume Uploader</Typography>
      </Box>
      <h1>{cat}</h1>
      <Grid container justifyContent="center">

        <Grid item xs={7}>
          <Box display="flex" justifyContent="center" sx={{ backgroundColor: 'info.light', padding: 1 }}>
            <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: 'white' }}> List of Candidates</Typography>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {/* <TableCell align="center">Name</TableCell> */}
                  <TableCell align="center">ID</TableCell>
                  <TableCell align="center">Title</TableCell>
                  {/* <TableCell align="center">DOB</TableCell> */}
                  <TableCell align="center">Description</TableCell>
                  <TableCell align="center">TechStack</TableCell>
                  <TableCell align="center">Category</TableCell>
                  <TableCell align="center">Github Link</TableCell>
                  <TableCell align="center">Linkedin Link</TableCell>
                  <TableCell align="center">Difficulty</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {projects.map((project, i) => {
                  return (
                    <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell align="center"><Link to={`${project.id}`}>{project.id}</Link></TableCell>
                      <TableCell align="center">{project.title}</TableCell>
                      <TableCell align="center">{project.description}</TableCell>
                      <TableCell align="center">{project.techstack}</TableCell>
                      <TableCell align="center">{project.category}</TableCell>
                      <TableCell align="center"><a href={project.githublink}>LINK</a></TableCell>
                      <TableCell align="center"><a href={project.linkedinlink}>LINK</a></TableCell>
                      <TableCell align="center">{project.difficulty}</TableCell>
                    </TableRow>
                  )
                })
                }
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

</>
  );
}
export default ShowProject