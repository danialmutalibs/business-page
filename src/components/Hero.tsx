import { COLORS } from '@/styles/colors';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'next/image';
import React from 'react';

import '@fontsource/merriweather/400.css';

const Hero = () => {
  return (
    <Box
      sx={{
        position: 'relative', // Create a stacking context for child elements
        height: '180vh',
        overflow: 'hidden',
      }}
    >
      {/* Background */}
      <Box
        sx={{
          backgroundColor: COLORS.darkPurple,
          height: '150%',
          width: '100%',
          clipPath: 'ellipse(130% 50% at 50% 0%)', // Smooth curve at the bottom
          position: 'absolute', // Layer it at the back
          top: 0,
          bottom: 0,
          left: 0,
          zIndex: 0, // Lowest z-index to place it behind everything
        }}
      />

      {/* Typography */}
      <Typography
        variant="h2"
        sx={{
          marginTop: '200px',
          position: 'absolute',
          textAlign: 'center',
          fontFamily: 'Merriweather, Arial, sans-serif',
          zIndex: 1, // Above the background
          width: '100%', // Ensure it stays centered
          color: COLORS.white,
        }}
      >
        Data&nbsp;
        <span
          style={{
            textDecoration: 'underline',
            textDecorationColor: COLORS.green,
            textDecorationThickness: '5px',
            textUnderlineOffset: '10px',
          }}
        >
          tailored
        </span>
        &nbsp;to <br />
        your needs.
      </Typography>

      {/* Image */}
      <Box
        sx={{
          position: 'absolute', // Allows the image to float on top
          zIndex: 2, // Ensure it is above everything else
          top: '80%', // Adjust placement vertically
          left: '50%', // Center horizontally
          transform: 'translate(-50%, -50%)', // Perfect centering
        }}
      >
        <Image
          src="/images/image-hero.webp"
          alt="image-hero"
          height={500}
          width={500}
        />
      </Box>
    </Box>
  );
};

export default Hero;
