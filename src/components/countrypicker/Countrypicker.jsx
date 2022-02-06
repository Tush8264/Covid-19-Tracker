import React, { useEffect , useState } from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';

import Styles from './countrypicker.module.css';

import { fetchCountry } from '../../api';

const Countrypicker=({handlecountrychange}) =>
{

    const [fetchCountries,setfetchCountries]=useState([]);

    useEffect(()=>{
        const fetchcountries=async ()=>
        {
            setfetchCountries(await fetchCountry());
        }
        fetchcountries();
    },[setfetchCountries])


    return(
        <FormControl className={Styles}>
            <NativeSelect defaultValue="" onChange={(e)=>handlecountrychange(e.target.value)}>
                <option value="">Global</option>
                {fetchCountries.map((country,i)=><option key={i} value ={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default Countrypicker;