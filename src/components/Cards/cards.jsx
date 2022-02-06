import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';

import styles from './cards.module.css';


import CountUp from 'react-countup';
import cs from 'classnames';

const cards=({ data :{ confirmed, recovered, deaths, lastUpdate }}) =>
{
   if(!confirmed)
   {
       return "Loading...";
   }

    return(
        
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cs(styles.card,styles.infected)}> 
                    <CardContent>
                        <Typography color="textsecondary" gutterBottom>INFECTED</Typography>
                        <Typography variant={"h5"}>
                            <CountUp  start={0}  end={confirmed.value}  separator="," duration={2.5}/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Total Number of infected people by Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cs(styles.card,styles.recovered)}> 
                    <CardContent>
                        <Typography color="textsecondary" gutterBottom>RECOVRED</Typography>
                        <Typography variant={"h5"}>
                            <CountUp  start={0}  end={recovered.value}  separator="," duration={2.5}/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of people recovered from Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cs(styles.card,styles.deaths)}> 
                    <CardContent>
                        <Typography color="textsecondary" gutterBottom>DEATHS</Typography>
                        <Typography variant={"h5"}>
                            <CountUp  start={0}  end={deaths.value}  separator="," duration={2.5}/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Total number of deaths confirmed from Covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>

        </div>
    );
}




export default cards;