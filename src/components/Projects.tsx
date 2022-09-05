import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import { ProjectDetails } from '../models/project-details';
import { DataSource } from '../data/projects-details';

export default function Projects() {
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
    const project: (ProjectDetails | undefined) = DataSource.getBusinessApps().find(project => project.title === title);
    if (!!project) {
      setDetailsItem(project as ProjectDetails);
      setdetailsVisibility(true);
    }
  }

  function resizeImage(name: string, size: number, rows = 1, cols = 1) {
    const link = `${process.env.PUBLIC_URL}/assets/images/projects/business/${name}`;
    return {
      src: `${link}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${link}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`
    };
  }

  return (
    <div>
      <h2>Projects</h2>

      <h4>Business Projects</h4>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <ImageList
          sx={{ width: 1440, height: 740 }}
          variant="quilted"
          cols={6}
          rowHeight={242}
        >
          {DataSource.getBusinessApps().map((item) => (
            <ImageListItem key={item.imageName} cols={item.cols || 1} rows={item.rows || 1} sx={{ border: '1px dashed green' }}>            
              <img
                {...resizeImage(item.imageName, 121, item.rows, item.cols)}
                alt={item.title}
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
                    { detailsItem?.title }
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <div>{ detailsItem?.technologies }</div>
                    <div>{ detailsItem?.timePeriod }</div>
                    <div>{ detailsItem?.description }</div>
                  </Typography>
                </Box>
              </Modal>
              <ImageListItemBar
                title={item.title}
                subtitle={item.platform}
                actionIcon={
                  <Button
                    onClick={() => showDetails(item.title)}
                    aria-label={`info about ${item.title}`}
                    style={{backgroundColor: 'white', marginRight: 20}}
                  >
                    Details
                  </Button>
                }
              />
            </ImageListItem>
            // </Button>
          ))}
        </ImageList>
      </div>
    </div>
  );
}
