import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Topography from "@mui/material/Typography";
import AnchorLink from '@mui/material/Link';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { useRouter } from 'next/router';

// Assets imports
import Logo from "../../public/assets/SVG Icons/LOGO.svg";
import Discord from "../../public/assets/SVG Icons/discord.svg";
import Instagam from "../../public/assets/SVG Icons/instagam.svg";
import Twitter from "../../public/assets/SVG Icons/twitter.svg";

function Appbar() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <>
      <Box sx={router.pathname === '/' || router.pathname === '/gallery' ? { width: '100%', height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundImage: 'linear-gradient(rgba(22,2,31,1), rgba(22,2,31,0.05))', position: 'relative', zIndex: '999' } : { width: '100%', height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundImage: 'linear-gradient(rgba(22,2,31,1), rgba(22,2,31,1))', position: 'relative', zIndex: '999' }} >
        <Container maxWidth="big" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >

          {/* Logo Here */}
          <Link href="/" >
            <AnchorLink sx={{cursor:'pointer'}} >
              <Image src={Logo} width={75} height={36} objectFit={'contain'} />
            </AnchorLink>
          </Link>

          {/* Nav Menu */}
          <Box sx={{ display: { md: 'flex', xs: 'none' }, justifyContent: 'center', alignItems: 'center' }} >
            <Link href="/" >
              <AnchorLink className='NavLink' sx={{ fontFamily: ['Poppins', 'sans - serif'], fontSize: '16px', lineHeight: '24px', fontWeight: 600, color: 'rgba(255, 255, 255, 1)', mr: '30px', transition: 'all 0.3s ease', textDecoration: 'none', cursor: 'pointer', "&:hover": { color: '#FBD005' } }} >Home</AnchorLink>
            </Link>
            <Link href="/gallery" >
              <AnchorLink className='NavLink' sx={{ fontFamily: ['Poppins', 'sans - serif'], fontSize: '16px', lineHeight: '24px', fontWeight: 600, color: 'rgba(255, 255, 255, 1)', mr: '30px', transition: 'all 0.3s ease', textDecoration: 'none', cursor: 'pointer', "&:hover": { color: '#FBD005' } }} >Gallery</AnchorLink>
            </Link>
            <Link href="" >
              <AnchorLink className='NavLink' sx={{ fontFamily: ['Poppins', 'sans - serif'], fontSize: '16px', lineHeight: '24px', fontWeight: 600, color: 'rgba(255, 255, 255, 1)', mr: '30px', transition: 'all 0.3s ease', textDecoration: 'none', cursor: 'pointer', "&:hover": { color: '#FBD005' } }} >Lore</AnchorLink>
            </Link>
            <Link href="/whitepaper" >
              <AnchorLink className='NavLink' sx={{ fontFamily: ['Poppins', 'sans - serif'], fontSize: '16px', lineHeight: '24px', fontWeight: 600, color: 'rgba(255, 255, 255, 1)', mr: '30px', transition: 'all 0.3s ease', textDecoration: 'none', cursor: 'pointer', "&:hover": { color: '#FBD005' } }} >Whitepaper</AnchorLink>
            </Link>
            <Link href="/roadmap" >
              <AnchorLink className='NavLink' sx={{ fontFamily: ['Poppins', 'sans - serif'], fontSize: '16px', lineHeight: '24px', fontWeight: 600, color: 'rgba(255, 255, 255, 1)', mr: '30px', transition: 'all 0.3s ease', textDecoration: 'none', cursor: 'pointer', "&:hover": { color: '#FBD005' } }} >Roadmap</AnchorLink>
            </Link><Link href="" >
              <AnchorLink className='NavLink' sx={{ fontFamily: ['Poppins', 'sans - serif'], fontSize: '16px', lineHeight: '24px', fontWeight: 600, color: 'rgba(255, 255, 255, 1)', transition: 'all 0.3s ease', textDecoration: 'none', cursor: 'pointer', "&:hover": { color: '#FBD005' } }} >Intro</AnchorLink>
            </Link>
          </Box>

          {/* Social Links */}
          <Box sx={{ display: { md: 'flex', xs: 'none' }, justifyContent: 'center', alignItems: 'center' }} >
            <AnchorLink href={'#'} sx={{ mr: 2 }} >
              <Image src={Discord} width={35} height={36} objectFit={'contain'} />
            </AnchorLink>
            <AnchorLink href={'#'} sx={{ mr: 2 }} >
              <Image src={Instagam} width={35} height={36} objectFit={'contain'} />
            </AnchorLink>
            <AnchorLink href={'#'} sx={{ mr: 2 }} >
              <Image src={Twitter} width={35} height={36} objectFit={'contain'} />
            </AnchorLink>
          </Box>

          {/* Hamburgar */}
          {isOpen ? < CloseIcon onClick={toggleDrawer} sx={{
            color: '#FFFFFF', fontSize: '36px', cursor: 'pointer', position: 'relative', zIndex: 2, display: {
              md: 'none'
            }
          }} /> : < MenuIcon onClick={toggleDrawer} sx={{
            display: {
              md: 'none'
            }, color: '#FFFFFF', fontSize: '36px', cursor: 'pointer', position: 'relative', zIndex: 2
          }} />}
        </Container>

        {/* Drawer */}
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction='left'
          className='drawer'
          style={{ width: '70%' }}
        >
          <Box component={'div'} sx={{
            width: '100%', height: '100vh',
            display: "flex", justifyContent: 'start', alignItems: 'center', flexDirection: 'column', backgroundColor: 'black', pt: 2
          }} >
            {/* Logo Here */}
            <Box>
              <Image src={Logo} width={120} height={80} objectFit={'contain'} />
            </Box>

            {/* Nav Menu */}
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%', mt: 4 }} >
              <Link href="/" >
                <AnchorLink onClick={toggleDrawer} className='NavLink' sx={{ fontFamily: ['Poppins', 'sans - serif'], fontSize: '16px', lineHeight: '24px', fontWeight: 600, color: 'rgba(255, 255, 255, 1)', mb: '18px', width: '100%', borderBottom: '1px solid white', transition: 'all 0.3s ease', textDecoration: 'none', cursor: 'pointer', px: 2, pb: 1, "&:hover": { color: '#FBD005' } }} >Home</AnchorLink>
              </Link>
              <Link href="/gallery" >
                <AnchorLink onClick={toggleDrawer} className='NavLink' sx={{ fontFamily: ['Poppins', 'sans - serif'], fontSize: '16px', lineHeight: '24px', fontWeight: 600, color: 'rgba(255, 255, 255, 1)', mb: '18px', width: '100%', borderBottom: '1px solid white', transition: 'all 0.3s ease', textDecoration: 'none', cursor: 'pointer', px: 2, pb: 1, "&:hover": { color: '#FBD005' } }} >Gallery</AnchorLink>
              </Link>
              <Link href="" >
                <AnchorLink onClick={toggleDrawer} className='NavLink' sx={{ fontFamily: ['Poppins', 'sans - serif'], fontSize: '16px', lineHeight: '24px', fontWeight: 600, color: 'rgba(255, 255, 255, 1)', mb: '18px', width: '100%', borderBottom: '1px solid white', transition: 'all 0.3s ease', textDecoration: 'none', cursor: 'pointer', px: 2, pb: 1, "&:hover": { color: '#FBD005' } }} >Lore</AnchorLink>
              </Link>
              <Link href="/whitepaper" >
                <AnchorLink onClick={toggleDrawer} className='NavLink' sx={{ fontFamily: ['Poppins', 'sans - serif'], fontSize: '16px', lineHeight: '24px', fontWeight: 600, color: 'rgba(255, 255, 255, 1)', mb: '18px', width: '100%', borderBottom: '1px solid white', transition: 'all 0.3s ease', textDecoration: 'none', cursor: 'pointer', px: 2, pb: 1, "&:hover": { color: '#FBD005' } }} >Whitepaper</AnchorLink>
              </Link>
              <Link href="/roadmap" >
                <AnchorLink onClick={toggleDrawer} className='NavLink' sx={{ fontFamily: ['Poppins', 'sans - serif'], fontSize: '16px', lineHeight: '24px', fontWeight: 600, color: 'rgba(255, 255, 255, 1)', mb: '18px', width: '100%', borderBottom: '1px solid white', transition: 'all 0.3s ease', textDecoration: 'none', cursor: 'pointer', px: 2, pb: 1, "&:hover": { color: '#FBD005' } }} >Roadmap</AnchorLink>
              </Link><Link href="" >
                <AnchorLink onClick={toggleDrawer} className='NavLink' sx={{ fontFamily: ['Poppins', 'sans - serif'], fontSize: '16px', lineHeight: '24px', fontWeight: 600, color: 'rgba(255, 255, 255, 1)', transition: 'all 0.3s ease', textDecoration: 'none', cursor: 'pointer', width: '100%', borderBottom: '1px solid white', px: 2, pb: 1, "&:hover": { color: '#FBD005' } }} >Intro</AnchorLink>
              </Link>
            </Box>

            {/* Social Links */}
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 4 }} >
              <AnchorLink href={'#'} sx={{ mr: 2 }} >
                <Image src={Discord} width={35} height={36} objectFit={'contain'} />
              </AnchorLink>
              <AnchorLink href={'#'} sx={{ mr: 2 }} >
                <Image src={Instagam} width={35} height={36} objectFit={'contain'} />
              </AnchorLink>
              <AnchorLink href={'#'} sx={{ mr: 2 }} >
                <Image src={Twitter} width={35} height={36} objectFit={'contain'} />
              </AnchorLink>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </>
  )
}

export default Appbar