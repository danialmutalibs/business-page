import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React from 'react';
import { COLORS } from '@/styles/colors';

const Nav = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between', // Spread items apart
        alignItems: 'center', // Vertically center items
        position: 'absolute', // Position the container relative to the viewport
        top: 0, // Align to the top
        marginTop: '100px',
        width: '100%', // Take full width of the viewport
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: '24px',
          color: COLORS.white,
          marginLeft: '100px'
        }}
      >
        <span style={{ fontWeight: 'bold' }}>work</span>it
      </Typography>

      <Typography
        sx={{
          fontSize: '15px',
          color: COLORS.white,
          cursor: 'pointer', // Add interactivity
          marginRight: '130px',
          transition: 'color 1.0s ease',
          
          '&:hover': {
            '&::after': {
              content: '""', // Creates the underline effect
              position: 'absolute',
              top: 30,
              right: 121,
              width: '10%',
              height: '3px', // Adjust thickness of the underline
              backgroundColor: COLORS.green, // Set underline color
              transition: 'width 5.0s ease'
            }}
        }}
      >
        Apply for access
      </Typography>
    </Box>
  );
};

export default Nav;
