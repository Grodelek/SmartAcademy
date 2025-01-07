import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HeroSection = () => {
    return (
        <Box sx={{
            backgroundColor: '#44475A',
            padding: '5em 10%',
            textAlign: 'center',
        }}>
            <Typography variant="h3" sx={{ color: '#333' }}>
                Welcome to SmartAcademy
            </Typography>
            <Typography variant="h5" sx={{ color: '#666' }}>
                Your key to efficient learning!
            </Typography>
            <Button variant="contained" color="primary" href="#features" sx={{
                marginTop: '20px',
                fontSize: '1.2em',
            }}>
                Discover More
            </Button>
        </Box>
    );
};

export default HeroSection;
