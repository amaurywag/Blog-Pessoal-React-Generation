import { Grid, Box, Typography } from '@material-ui/core';
import React from 'react';
import {Facebook, Instagram, LinkedIn} from '@material-ui/icons';
import './Footer.css';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className='typography1'>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a rel="noopener" target="_blank" href="https://www.facebook.com/generationbrasil">
                                <Facebook  className='redes' />
                            </a>
                            <a rel="noopener" target="_blank" href="https://www.instagram.com/generationbrasil/">
                                <Instagram className='redes' />
                            </a>
                            <a rel="noopener" target="_blank" href="https://www.linkedin.com/school/generationbrasil/">
                                <LinkedIn className='redes' />
                            </a>
                        </Box>
                    </Box>
                    <Box className='box2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='typography1'>© 2020 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a rel="noopener" target="_blank" href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom className='typography2'>brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;