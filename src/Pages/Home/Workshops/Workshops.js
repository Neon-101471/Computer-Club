import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import Workshop from '../Workshop/Workshop';
const workshops = [
    {
        name: 'Computer Intro',
        description: 'Introducing members with basic computer parts & hardwares & their operating procedure.',
        img: 'https://library.kissclipart.com/20180828/qqw/kissclipart-cartoon-computer-transparent-clipart-laptop-comput-b35229d5fd753509.png'
    },
    {
        name: 'Microsoft Office',
        description: 'Different Microsoft Office products like Microsoft Word, Excel, Power Point etc.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Microsoft_Office_logo_%282013%E2%80%932019%29.png'
    },
    {
        name: 'Graphics Design',
        description: 'Logo design, banner design, UX/UI design by using Adobe Photoshop & Illustrator. 2D & 3D Animation.',
        img: 'https://icon-library.com/images/graphics-design-icon/graphics-design-icon-25.jpg'
    },
    {
        name: 'Web Design',
        description: 'Static & dynamic website design & development, use of various framework & CMS',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh7HwVz9h18DrB8OeLJ1oUyWw6JPIBqfxDUEiFi_804PEIQxzvfuW5p0eQ3inRMifes4s&usqp=CAU'
    },
    {
        name: 'Online Security',
        description: 'Security & privacy guidelines of email accounts, social accounts, internet banking & many more',
        img: 'https://www.pngall.com/wp-content/uploads/4/Web-Security-Shield-PNG.png'
    },
    {
        name: 'Freelancing',
        description: 'Introduction to freelancing. Proper guidelines for market places like upwork, fiverr etc',
        img: 'https://www.kindpng.com/picc/m/44-449405_transparent-background-computer-mouse-cartoon-hd-png-download.png'
    }
]
const Workshops = () => {
    return (
        <div className="container">
            <h2 className="text-center">Workshop. <span style={{color:'gray'}}>Topics</span> </h2>
              <Box sx={{ flexGrow: 1 }}>
            <Container style={{}}>
                
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        workshops.map(workshop => <Workshop
                            key={workshop.name}
                            workshop={workshop}
                        ></Workshop>)
                    }
                </Grid>
            </Container>
        </Box>
        </div>
    );
};

export default Workshops;