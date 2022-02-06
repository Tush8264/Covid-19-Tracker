import React, { useEffect , useState } from 'react';
import {fetchDailydata,fetchdatawithtime} from '../../api/index';

import {Line,Bar} from 'react-chartjs-2';

import styles from './chart.module.css';

export const Chart=({data :{ confirmed, recovered, deaths, lastUpdate },country}) =>
{
  
    const [dailydata,setDailyData] = useState([]);

    useEffect(() => {
        
        const fetchApi = async ()=>{
            setDailyData(await fetchDailydata());
           
        }

        fetchApi();

    },[]);

    const lineChart=(
        
        dailydata.length
        ?
        (<Line
            data={{
                labels : dailydata.map(({date}) => date),
                datasets : [{
                    data : dailydata.map(({confirmed}) => confirmed),
                    label : "Infected",
                    borderColor: 'blue',
                    fill: true
                },{
                    data : dailydata.map(({deaths}) => deaths),
                    label : "Deaths",
                    borderColor: 'red',
                    backgroundColor:'rgba(255,0,0,0.5)',
                    fill: true

                },
                {
                    data : dailydata.map(({recovered}) => recovered),
                    label : "recovered",
                    borderColor: 'orange',
                    fill: true

                },
            ],

            }}
        />)
        :
        null
        
    )
    
    const barchart=(
    
        country
        ?
        (
            <Bar 
            data={{
                labels:["Infected","Recovred","Deaths"],
                datasets:[{
                    label:"People",
                    backgroundColor:['rgba(62, 76, 81, 0.5)','rgb(44, 200, 30, 0.5)','rgba(207, 0, 0, 0.5)',],
                    data:[confirmed.value,recovered.value,deaths.value],
                }]
            }}
            
            />
        )
        :
        null
    );

    return(
        
        <div className={styles.container}>
            {country? barchart: lineChart}
        </div>
        
    )
}

export const Chart2=({date,country})=>
    {
    //     const [fetchCountries,setfetchCountries]=useState([]);

    //     useEffect(()=>{
    //         const fetchcountries=async ()=>
    //         {
    //             setfetchCountries(await date);
    //         }
    //         fetchcountries();
    //     },[setfetchCountries])  // eslint-disable-line react-hooks/exhaustive-deps
    //    // console.log(fetchCountries.map(({lastUpdate}) => lastUpdate));
    //     console.log(date.length?fetchCountries.map(({lastUpdate}) => lastUpdate):null);
        console.log(date)
         const lineChartbytime=
         console.log(date.map(({Countryregion})=>(Countryregion==country)));
            // date.length?
            // (country==date.map(({Countryregion})=>Countryregion)?
            // (<Line
            //     data={{
            //         // labels :date.map(({lastUpdate}) => lastUpdate),
            //         labels:date.map(({Countryregion})=>Countryregion),
            //         datasets : [{
            //             data : date.map(({confirmed}) => confirmed),
            //             label : "Infected",
            //             borderColor: 'blue',
            //             fill: true
            //         },{
            //             data : date.map(({deaths}) => deaths),
            //             label : "Deaths",
            //             borderColor: 'red',
            //             backgroundColor:'rgba(255,0,0,0.5)',
            //             fill: true
    
            //         },
            //         {
            //             data :date.map(({recovered}) => recovered),
            //             label : "recovered",
            //             borderColor: 'orange',
            //             fill: true
    
            //         }
            //     ]
    
            //     }}
        //     />)// :"null"
        //     :"NOOOOOOOOOOOOO"
         
        return(
            <div className={styles.container}> 
            {lineChartbytime} 
        </div>
        )
    }


