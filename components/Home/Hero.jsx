import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Topography from "@mui/material/Typography";
import AnchorLink from '@mui/material/Link';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@mui/material/Button';

function Hero() {
  return (
    <>
      <Box id={"Hero"} sx={{ width: '100%', height:{md:'110vh',xs:'100vh'}, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', mt: '-80px' }} >
        <Box sx={{ width: '100%', height: '160px', backgroundImage: 'linear-gradient(180deg, rgba(22, 2, 31, 0) 0%, rgba(22, 2, 31, 0) 25.52%, rgba(22, 2, 31, 0.61) 62.5%, rgba(22, 2, 31, 0.92) 83.33%, #16021F 100%)', position: 'absolute', bottom: '0px', left: '0px', right: '0px' }} >

        </Box>
      </Box>
    </>
  )
}

export default Hero