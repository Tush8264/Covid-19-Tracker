import React from 'react';


import {Chart , Cards, Countrypicker , Datepicker,Chart2 } from './components';  

import styles from './App.module.css';
import { fetchData,fetchdatawithtime } from './api';


class App extends React.Component {

    state={
        data:{},
        country:"",
        text:"",
        date:{},
    }

    handlecountrychange= async (country)=>{
        const fetcheddata= await fetchData(country);
        this.setState({data:fetcheddata,country:country,text:"The Covid-19 data of "+country});
    }
    handleDateChange = async (date)=>{
        console.log("fdaksjhljlk "+date);
        date=date.split("-");
        console.log("dsaduifhislk;d   "+date);
        var dt=date[1]+"-"+date[2]+"-"+date[0];
        console.log(dt);
         const fetchtimedata=await fetchdatawithtime(dt);
        this.setState({date:fetchtimedata});
         console.log(fetchtimedata);
    }

   async componentDidMount(){
        const data= await fetchData();
        this.setState({data : data});
        
    }


    render() {
        const {data,country,text,date}=this.state;

        return (
            
             <div className={styles.container}>
                 <h1>COVID-19 Tracker </h1>
                 <h3>{text}</h3>
                 {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-XSe7OgKqpP5EAlheMPrILNC4Xwnt_8O_QQ&usqp=CAU" alt="image"/> */}
            <Cards data={data}/>
            <Countrypicker handlecountrychange={this.handlecountrychange}/>
            <Chart data={data} country={country} />
            {country?<Datepicker handleDateChange={this.handleDateChange} />:null}
            <Chart2 date={date} country={country}/>

             </div>
        )
        
    }
}

export default App;