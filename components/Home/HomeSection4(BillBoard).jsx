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
import Conquered from "../../public/assets/pictures/Home/Conquered.svg";
import Fearuers from "../../public/assets/pictures/Home/fearuers.svg";
import Plannet from "../../public/assets/pictures/Home/planet.svg";

function HomeSection4() {

  const [Conquer, Set_Conquer] = useState(true);
  const [Fighting, Set_Fighting] = useState(false);
  const [Next_Rival, Set_Next_Rival] = useState(false);


  const Conquer_Clicked = () => {
    Set_Conquer(true);
    Set_Fighting(false);
    Set_Next_Rival(false);
  }

  const Fighting_Clicked = () => {
    Set_Conquer(false);
    Set_Fighting(true);
    Set_Next_Rival(false);
  }

  const NextRival_Clicked = () => {
    Set_Conquer(false);
    Set_Fighting(false);
    Set_Next_Rival(true);
  }


  return (
    <>
      <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#16021F', py: { md: 0, xs: 8 }, mt: { md: 0, xs: '-1px' } }} >
        <Container maxWidth="big" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: { md: 'row', xs: 'column' } }} >

          {/* Left */}
          <Box sx={{ width: { md: '35%', xs: '100%' }, display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', }} >
            <Topography variant='h2' sx={{ fontFamily: 'Cinzel', fontSize: '80px', lineHeight: '107.84px', fontWeight: 700, color: '#FBFAF5', textTransform: 'uppercase', position: 'relative', "&:before": { content: '""', height: '5px', width: '50px', position: 'absolute', bottom: '0px', right: '0px', background: 'white' } }} >
              Billboard
            </Topography>

            {/* Buttons */}
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: 10 }} >
              <Box onClick={() => Conquer_Clicked()} sx={{ width: '136px', height: '136px', border: '6px dashed #FBFAF5', borderRadius: '50%', transition: 'all 0.3s ease', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', "&:hover": { border: '6px dashed #16021F', background: 'linear-gradient(180deg, #FBD005 0%, #F58320 86.46%)' }, "&:hover h2": { color: 'rgba(22, 2, 31, 1)' } }} >
                <Topography variant='h2' sx={{ fontFamily: 'Cinzel', fontSize: '16px', lineHeight: '21.57px', fontWeight: 700, color: 'rgba(251, 208, 5, 1)', textTransform: 'capitalize' }} >
                  Conquered
                </Topography>
              </Box>
              
              <Box onClick={() => Fighting_Clicked()} sx={{ width: '136px', height: '136px', border: '6px dashed #FBFAF5', borderRadius: '50%', transition: 'all 0.3s ease', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', "&:hover": { border: '6px dashed #16021F', background: 'linear-gradient(180deg, #FBD005 0%, #F58320 86.46%)' }, "&:hover h2": { color: 'rgba(22, 2, 31, 1)' }, mt: 4 }} >
                <Topography variant='h2' sx={{ fontFamily: 'Cinzel', fontSize: '16px', lineHeight: '21.57px', fontWeight: 700, color: 'rgba(251, 208, 5, 1)', textTransform: 'capitalize' }} >
                  Fighting
                </Topography>
              </Box>

              <Box onClick={() => NextRival_Clicked()} sx={{ width: '136px', height: '136px', border: '6px dashed #FBFAF5', borderRadius: '50%', transition: 'all 0.3s ease', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', "&:hover": { border: '6px dashed #16021F', background: 'linear-gradient(180deg, #FBD005 0%, #F58320 86.46%)' }, "&:hover h2": { color: 'rgba(22, 2, 31, 1)' }, mt: 4 }} >
                <Topography variant='h2' sx={{ fontFamily: 'Cinzel', fontSize: '16px', lineHeight: '21.57px', fontWeight: 700, color: 'rgba(251, 208, 5, 1)', textTransform: 'capitalize' }} >
                  Next Rival
                </Topography>
              </Box>

            </Box>
          </Box>

          {/* Right */}
          <Box sx={{ width: { md: '65%', xs: '100%' }, minHeight: '530px', display: 'flex', justifyContent: 'center', alignItems: 'center',position:'relative',mt:{md:0,xs:8} }} >
            <Box>
              {Conquer && <Image src={Conquered} layout={'fill'} objectFit={'contain'} />}
              {Fighting && <Image src={Fearuers} layout={'fill'} objectFit={'contain'} />}
              {Next_Rival && <Image src={Plannet} layout={'fill'} objectFit={'contain'} />}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default HomeSection4;

