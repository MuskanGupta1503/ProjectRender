import * as React from 'react';
import { Grid, Typography,
    Accordion , AccordionSummary , AccordionDetails} from '@mui/material';

export default function Footer() {
  return (
    <Grid container spacing={2} 
        direction="row"
        p={5}
        justifyContent="center"
        backgroundColor="lightgrey"
        alignItems="center">
      <Accordion >
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Why PROJECT RENDERER? <i class="fa fa-angle-down" ></i></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           As there are more than enough helping guides for learning data structures and
           algorithms as well for learning concepts theoretically, but what about practical
           implementations of those concepts. It is a general human tendency to learn things
           practically, hence PROJ3CT IT helps you to find ideas for projects and guidance for
           implementing them. Also you can contact the contributor of the project if you have 
           any doubt related to the project or for the source code you can refer GitHub repository of that project.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br/>
      <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Why should we add our work here? <i class="fa fa-angle-down" ></i></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          As there are more than enough helping guides for learning data structures and
           algorithms as well for learning concepts theoretically, but what about practical
           implementations of those concepts. It is a general human tendency to learn things
           practically, hence PROJ3CT IT helps you to find ideas for projects and guidance for
           implementing them. Also you can contact the contributor of the project if you have 
           any doubt related to the project or for the source code you can refer GitHub repository of that project.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br/>
      <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How can we contact the project developer? <i class="fa fa-angle-down" ></i></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The beneficiary can have a look at the profile of the contributor, 
          where LinkedIn/Github links of the contributor (if provided) are available. 
          LinkedIn is considered to be the best source to get your queries answered. 
          Also for code specific queries, you can have a look at the source code, 
          through the GitHub repository link and you can have an one on one interaction 
          with the developer which would enhance your developing skills.
          </Typography>
        </AccordionDetails>
      </Accordion>

    </Grid>
  );
}
