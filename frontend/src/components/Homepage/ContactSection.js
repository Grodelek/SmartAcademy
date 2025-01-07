import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const ContactSection = () => {
    return (
        <Box sx={{
            padding: '2em 10%',
            textAlign: 'center',
        }}>
            <Typography variant="h4" sx={{ color: '#333' }}>
                Get in Touch
            </Typography>
            <Typography sx={{ fontSize: '1.2em', color: '#666', marginTop: '20px' }}>
                If you have any questions or would like more information about SmartAcademy, feel free to reach out to us!
            </Typography>
            <Button variant="contained" color="primary" href="mailto:contact@smartacademy.com" sx={{
                marginTop: '20px',
                fontSize: '1.2em',
            }}>
                Contact Us
            </Button>
        </Box>
    );
};

export default ContactSection;
