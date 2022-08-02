import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Topography from "@mui/material/Typography";
import AnchorLink from '@mui/material/Link';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@mui/material/Button';
import CustomizedButton from '../Common/CustomizedButton';

// Assets
import Plannet from "../../public/assets/pictures/Home/planet2.svg";

function HomeSection2() {
  return (
    <>
      <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#16021F', py: { md: 0, xs: 8 }, mt: '-4px' }} >
        <Container maxWidth="big" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: { md: 'row', xs: 'column-reverse' } }} >

          {/* Left */}
          <Box sx={{ width: { md: '50%', xs: '100%' }, display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', }} >
            <Topography variant='h2' sx={{ fontFamily: 'Cinzel', fontSize: {md:'80px',xs:'60px'}, lineHeight: '107.84px', fontWeight: 700, color: '#FBFAF5', textTransform: 'uppercase',position: 'relative', "&:before": { content: '""', height: '5px', width: '50px', position: 'absolute', bottom: '0px', right: '0px', background: 'white' } }} >
              Heading
            </Topography>
            <Topography variant='h2' sx={{
              fontFamily: ['Poppins', 'sans - serif'], fontSize: { md: '18px', xs: '16px' }, lineHeight: {
                md: '46px',
                xs: '24px'
            }, fontWeight: { md: 500, xs: 300 }, color: '#FBFAF5', textTransform: 'uppercase', mt: 5
            }} >
              Lorem ipsum dolor sit amet, consectetur adipisci elit. Vestibulum varius, metus eu pretium auctor, dui arcure dui, at euismod orci quam et est. Ut quis mi ruum, venenatis ipsum in, semper magna. is <br />
              <br />
              , elementum etus nec, sollicitudin sem. Integer lectus diam, tempor ac finibus vel, tempor sit amet ipsum.metus eu pretium auctor, dui arcu ornare dui, t euismod orci quam et
            </Topography>
            <Box sx={{ mt: 6 }} >
              <CustomizedButton Text={'Click me'} Grad_1={'#593A97'} Grad_1_per={'-21.74%'} Grad_2={'#A9D4F4'} Grad_2__per={'111.27%'} deg={'93.64deg'} color={'rgba(2, 2, 2, 1)'} />
            </Box>
          </Box>

          {/* Right */}
          <Box sx={{ width: { md: '50%', xs: '100%' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <Box>
              <Image src={Plannet} width={600} height={506} objectFit={'contain'} />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default HomeSection2;