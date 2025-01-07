import React from 'react';
import { Box, Typography } from '@mui/material';

const FeaturesSection = () => {
    return (
        <Box sx={{
            padding: '2em 10%',
            textAlign: 'center',
            backgroundColor: '#44475A',
        }}>
            <Typography variant="h4" sx={{ color: '#333' }}>
                Why Choose SmartAcademy?
            </Typography>

            <Box sx={{ marginTop: '30px' }}>
                <Typography variant="h5" sx={{ color: '#007bff' }}>
                    1. Personalized Courses and Materials
                </Typography>
                <Typography sx={{ fontSize: '1.2em', color: '#666', marginTop: '10px' }}>
                    SmartAcademy’s recommendation system adjusts content to your needs, helping you make faster progress. Whether you’re learning a foreign language, mathematics, programming, or STEM subjects – we’ve got the right material for you.
                </Typography>
            </Box>

            <Box sx={{ marginTop: '30px' }}>
                <Typography variant="h5" sx={{ color: '#007bff' }}>
                    2. Interactive Tools
                </Typography>
                <Typography sx={{ fontSize: '1.2em', color: '#666', marginTop: '10px' }}>
                    Immerse yourself in learning with interactive exercises, quizzes, and simulations. Our tools help reinforce knowledge and develop skills in an engaging and effective way.
                </Typography>
            </Box>

            <Box sx={{ marginTop: '30px' }}>
                <Typography variant="h5" sx={{ color: '#007bff' }}>
                    3. Access to Experts and Community
                </Typography>
                <Typography sx={{ fontSize: '1.2em', color: '#666', marginTop: '10px' }}>
                    Gain access to experts from various fields who will guide you in your educational journey. Connect with a supportive community of learners to share experiences and knowledge.
                </Typography>
            </Box>
        </Box>
    );
};

export default FeaturesSection;
