import React, { useState, useEffect } from "react";
import axios from "axios";
//import Loading from '../Loading'
import Top from "../Top";

export default function TodayPage({token}) {
const [items, setItems] = useState(null);
//const [isLoading, setIsLoading] = useState(true);

useEffect(()=>{
    const promise = axios.get ("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", {
        headers: {
            Authorization: `Bearer ${token}`
        }
     })
    promise.then(response => setItems(response.data));
    promise.catch(error => console.log(error.response));
}, []);


return (
    <>
    <Top />
    <h1>Hoje</h1>
    
    </>
)
}
