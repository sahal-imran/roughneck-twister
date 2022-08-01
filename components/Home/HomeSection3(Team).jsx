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
import Member1 from "../../public/assets/pictures/Team/member1.svg";
import Member2 from "../../public/assets/pictures/Team/member2.svg";
import Member3 from "../../public/assets/pictures/Team/member3.svg";
import Member4 from "../../public/assets/pictures/Team/member4.jpeg";

function HomeSection3() {
  return (
    <>
      <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#16021F', py: { md: 0, xs: 8 }, mt: { md: 0, xs: '-1px' } }} >
        <Container maxWidth="big" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: { md: 'row', xs: 'column' } }} >

          {/* Left */}
          <Box sx={{ width: { md: '50%', xs: '100%' }, display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', }} >
            <Topography variant='h2' sx={{ fontFamily: 'Cinzel', fontSize: {md:'80px',xs:'60px'}, lineHeight: '107.84px', fontWeight: 700, color: '#FBFAF5', textTransform: 'uppercase',position: 'relative', "&:before": { content: '""', height: '5px', width: '50px', position: 'absolute', bottom: '0px', right: '0px', background: 'white' } }} >
              Team
            </Topography>
            <Topography variant='h2' sx={{
              fontFamily: ['Poppins', 'sans - serif'], fontSize: '18px', lineHeight: {
                md: '46px',
                xs: '30px'
              }, fontWeight: 500, color: '#FBFAF5', textTransform: 'uppercase', mt: 5
            }} >
              Lorem ipsum dolor sit amet, consectetur adipisci elit. Vestibulum varius, metus eu pretium auctor, dui arcure dui, at euismod orci quam et est. Ut quis mi ruum, venenatis ipsum in, semper magna. is <br />
              <br />
              , elementum etus nec, sollicitudin sem. Integer lectus diam, tempor ac finibus vel, tempor sit amet ipsum.metus eu pretium auctor, dui arcu ornare dui, t euismod orci quam et
            </Topography>
            <Box sx={{ mt: 6 }} >
              <CustomizedButton Text={'View team'} Grad_1={'#593A97'} Grad_1_per={'-21.74%'} Grad_2={'#A9D4F4'} Grad_2__per={'111.27%'} deg={'93.64deg'} color={'rgba(2, 2, 2, 1)'} />
            </Box>
          </Box>

          {/* Right */}
          <Box sx={{ width: { md: '50%', xs: '100%' }, minHeight: '530px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', position: 'relative', mt: { md: 0, xs: 6 } }} >

            {/* member 1 */}
            <Box sx={{ width: '296px', height: '296px', border: '6px dashed #FBFAF5', borderRadius: '50%', position: { md: 'absolute' }, top: '0px', left: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
              <Box sx={{ width: '85%', height: '85%', overflow: "hidden", borderRadius: '50%', position: 'relative' }} >
                <Image src={Member1} layout={'fill'} objectFit={'contain'} />
              </Box>
            </Box>

            {/* member 2 */}
            <Box sx={{ width: '226px', height: '226px', border: '6px dashed #FBFAF5', borderRadius: '50%', position: { md: 'absolute' }, top: '40px', right: '0px', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: { md: 0, xs: 4 } }} >
              <Box sx={{ width: '85%', height: '85%', overflow: "hidden", borderRadius: '50%', position: 'relative' }} >
                <Image src={Member4} layout={'fill'} objectFit={'contain'} />
              </Box>
            </Box>

            {/* member 3 */}
            <Box sx={{ width: '226px', height: '226px', border: '6px dashed #FBFAF5', borderRadius: '50%', position: { md: 'absolute' }, bottom: '0px', left: '40%', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: { md: 0, xs: 4 } }} >
              <Box sx={{ width: '85%', height: '85%', overflow: "hidden", borderRadius: '50%', position: 'relative' }} >
                <Image src={Member3} layout={'fill'} objectFit={'contain'} />
              </Box>
            </Box>

          </Box>
        </Container>
      </Box>
    </>
  )
}

export default HomeSection3;