import React from 'react'

import './Calculator-Card.css';

// Material UI
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';

// Material ICONS
import PersonIcon from '@mui/icons-material/Person';
import { Box } from '@mui/material';



export const CalculatorCard = () => {
    return (
        <Container maxWidth='lg' sx={{margin:'auto' ,width:'100vh', height:'100vh'}}>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Stack>
                        <FormControl sx={{mb:3}}>
                            <InputLabel htmlFor='inputFactura'>Factura</InputLabel>
                            <OutlinedInput
                                id='inputFactura'
                                startAdornment={<InputAdornment position='start'>$</InputAdornment>}
                                label='Factura'
                            />
                        </FormControl>
                        <Grid container wrap='wrap' spacing={1}>
                            <Grid item xs={4}>
                                <Button variant="contained" disableElevation className='percentage-button' sx={{fontSize:'1.4rem'}}>
                                    5%
                                </Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="contained" disableElevation className='percentage-button' sx={{fontSize:'1.4rem'}}>
                                    10%
                                </Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="contained" disableElevation className='percentage-button' sx={{fontSize:'1.4rem'}}>
                                    15%
                                </Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="contained" disableElevation className='percentage-button' sx={{fontSize:'1.4rem'}}>
                                    25%
                                </Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="contained" disableElevation className='percentage-button' sx={{fontSize:'1.4rem'}}>
                                    50%
                                </Button>
                            </Grid>
                            <Grid item xs={4}>
                                <TextField id="outlined-basic" label="Custom" variant="outlined"/>
                            </Grid>
                        </Grid>
                        <FormControl sx={{mt:3}}>
                            <InputLabel htmlFor='inputFactura'>Numero de personas</InputLabel>
                            <OutlinedInput
                                id='inputFactura'
                                startAdornment={<InputAdornment position='start'><PersonIcon/></InputAdornment>}
                                label='Numero de personas'
                            />
                        </FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box m={3}>
                        <Grid container justifyContent='space-around' alignItems='center' >
                            <Grid item xs={6}>
                                <Stack >
                                    <Typography
                                        variant='h6'
                                        component='div'
                                    >
                                        Cantidad de propina
                                    </Typography>
                                    <Typography
                                    variant='subtitle1'
                                    component='div'
                                    >
                                        / persona
                                    </Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={6} container justifyContent='center'>
                                <Typography
                                    variant='h4'
                                    component='div'

                                >
                                    $ 0.00
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent='space-around' alignItems='center' sx={{mt:4}}>
                            <Grid item xs={6}>
                                <Stack >
                                    <Typography
                                        variant='h6'
                                        component='div'
                                    >
                                        Total
                                    </Typography>
                                    <Typography
                                    variant='subtitle1'
                                    component='div'
                                    >
                                        / persona
                                    </Typography>
                                </Stack>
                            </Grid>
                            <Grid item container xs={6} justifyContent='center'>
                                <Typography
                                    variant='h4'
                                    component='div'

                                >
                                    $ 0.00
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container sx={{mt:4}}>
                            <Grid item container xs={12} justifyContent='center'>
                                <Button variant="contained" disableElevation sx={{width:'100%', maxWidth:'400px'}}> RESET </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}
