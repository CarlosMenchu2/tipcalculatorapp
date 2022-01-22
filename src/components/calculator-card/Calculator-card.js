import React, { useEffect, useState } from 'react'

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

    const [bill,setBill] = useState(0);
    const [custom, setCustom] = useState(0);
    const [numberPeople,setNumberPeople] = useState(0);
    const [tipPercentage,setTipPercentage] = useState(0);
    const [tipAmount,setTipAmount] = useState(0);
    const [total,setTotal] = useState(0);
    

    /**
     * 
     * @param {Event} e 
     */
    const handleBill = (e) => {
        setBill(e.target.value);
    }

    /**
     * 
     * @param {Event} e 
     */
    const handleCustom = (e) => {
        setCustom(e.target.value);
    }

    /**
     * @param {Event} e
     */
    const handleNumberPeople = (e) => {
        setNumberPeople(e.target.value);
    }

    const handleTipPercentage = (tipPercentage) => {
        setTipPercentage(tipPercentage);
    }

    useEffect(() => {

        if(bill!=0 && numberPeople!=0 && tipPercentage!=0) {
            const totalAmount = bill*tipPercentage;
            const totalPerson = totalAmount/numberPeople;
            setTipAmount(totalPerson);
            setTotal(totalAmount); 
            setCustom(0);
        }
        
        if(bill!=0 && numberPeople!=0 && custom!=0) {
            const totalAmount = bill*(custom/100);
            const totalPerson = totalAmount/numberPeople;
            setTipAmount(totalPerson);
            setTotal(totalAmount); 
            setTipPercentage(0);
        }

        if(bill==0 || bill=="") {
            setTipAmount(0);
            setTotal(0);
        }

        if(numberPeople==0 || numberPeople=="") {
            setTipAmount(0);
            setTotal(0);
        }

    }, [bill,numberPeople,custom,tipPercentage]);

    const resetButtons = () => {
        setBill(0);
        setNumberPeople(0);
        setTipPercentage(0);
        setTipAmount(0);
        setTotal(0);
        setCustom(0);
    }
    

    return (
        <Container maxWidth='lg'>
            <Grid container alignItems='center' justifyContent='center' sx={{margin:'auto',width:'100vh', height:'100vh'}}>
                <Grid container direction='column' className='calculator-card'>
                    <Typography
                        textAlign='center'
                        variant='h4'
                        component='div'
                        sx={{fontWeight:'bold', mb:1}}
                    >
                        Calculadora de Propinas
                    </Typography>
                    <Grid container item sx={12}>
                        <Grid item xs={12} md={6}>
                            <Stack>
                                <FormControl sx={{mb:3}}>
                                    <InputLabel htmlFor='inputFactura'>Monto de factura</InputLabel>
                                    <OutlinedInput
                                        value={bill}
                                        onChange={handleBill}
                                        id='inputFactura'
                                        startAdornment={<InputAdornment position='start'>$</InputAdornment>}
                                        label='Monto de factura'
                                    />
                                </FormControl>
                                <Typography
                                    variant='subtitle1'
                                    component='div'
                                >
                                    Porcentaje de propina
                                </Typography>
                                <Grid container wrap='wrap' spacing={1}>
                                    <Grid item xs={4}>
                                        <Button variant="contained" disableElevation className='percentage-button' sx={{fontSize:'1.4rem'}}
                                            onClick={()=>handleTipPercentage(0.05)}
                                        >
                                            5%
                                        </Button>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Button variant="contained" disableElevation className='percentage-button' sx={{fontSize:'1.4rem'}}
                                            onClick={()=> handleTipPercentage(0.10)}
                                        >
                                            10%
                                        </Button>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Button variant="contained" disableElevation className='percentage-button' sx={{fontSize:'1.4rem'}}
                                            onClick={()=>handleTipPercentage(0.15)}

                                        >
                                            15%
                                        </Button>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Button variant="contained" disableElevation className='percentage-button' sx={{fontSize:'1.4rem'}}
                                            onClick={()=>handleTipPercentage(0.25)}
                                        >
                                            25%
                                        </Button>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Button variant="contained" disableElevation className='percentage-button' sx={{fontSize:'1.4rem'}}
                                            onClick={()=>handleTipPercentage(0.50)}
                                        >
                                            50%
                                        </Button>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField id="outlined-basic" label="Otro" variant="outlined" type='number' value={custom} onChange={handleCustom}/>
                                    </Grid>
                                </Grid>
                                <FormControl sx={{mt:3}}>
                                    <InputLabel htmlFor='inputFactura'>Numero de personas</InputLabel>
                                    <OutlinedInput
                                        value={numberPeople}
                                        onChange={handleNumberPeople}
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
                                            $ {tipAmount.toFixed(2)}
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
                                            $ {total.toFixed(2)}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container sx={{mt:5}}>
                                    <Grid item container xs={12} justifyContent='center'>
                                        <Button fullWidth variant="contained" disableElevation onClick={resetButtons}> RESET </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}
