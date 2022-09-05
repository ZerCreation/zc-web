import { ImageList, ImageListItem, Modal, Box, Typography, ImageListItemBar, Button } from '@mui/material'
import React, { useState } from 'react'
import { ProjectDetails } from '../models/project-details';
import { ProjectsSourceProps } from '../models/projects-source-props';

export default function ProjectsSet({ projectsSource, nameOfSet }: ProjectsSourceProps) {
  const [detailsVisibility, setdetailsVisibility] = React.useState(false);
  const handleClose = () => setdetailsVisibility(false);
  const [detailsItem, setDetailsItem] = useState<ProjectDetails>({} as ProjectDetails);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  function showDetails(title: string) {
    const project: (ProjectDetails | undefined) = projectsSource.find(project => project.title === title);
    if (!!project) {
      setDetailsItem(project as ProjectDetails);
      setdetailsVisibility(true);
    }
  }

  function resizeImage(name: string, size: number, rows = 1, cols = 1) {
    const link = `${process.env.PUBLIC_URL}/assets/images/projects/${nameOfSet.toLowerCase()}/${name}`;
    return {
      src: `${link}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${link}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`
    };
  }

  return (
    <div style={{margin: 60}}>
      <h3 style={{textAlign: 'left'}}>{nameOfSet} projects</h3>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ImageList
          sx={{ width: 1250, minHeight: 620 }}
          variant="quilted"
          cols={6}
          rowHeight={200}
        >
          {projectsSource.map((project) => (
            <ImageListItem key={project.imageName} cols={project.cols || 1} rows={project.rows || 1} sx={{ border: '1px dashed green' }}>
              <img
                {...resizeImage(project.imageName, 121, project.rows, project.cols)}
                alt={project.title}
                loading="lazy"
              />
              <Modal
                open={detailsVisibility}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    {detailsItem?.title}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {detailsItem?.description}
                  </Typography>
                  <Typography id="modal-modal-technologies" variant="subtitle2" sx={{ mt: 2 }}>
                    Technologies: {detailsItem?.technologies}
                  </Typography>
                  <Typography id="modal-modal-period" variant="subtitle2" sx={{ mt: 2 }}>
                    Development in: {detailsItem?.timePeriod}
                  </Typography>
                </Box>
              </Modal>
              <ImageListItemBar
                title={project.title}
                subtitle={project.platform}
                actionIcon={
                  <Button
                    onClick={() => showDetails(project.title)}
                    aria-label={`info about ${project.title}`}
                    style={{ backgroundColor: 'white', marginRight: 20 }}
                  >
                    Details
                  </Button>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  )
}
