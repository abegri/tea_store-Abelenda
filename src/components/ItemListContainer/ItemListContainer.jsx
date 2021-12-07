import React from 'react';
import {useState, useEffect} from 'react';
import './ItemListContainer.css'

const ItemListContainer =({greetings})=>{

    const array=[ 
        {
            id: 1,
            name: "Té Chai",
            stock: 8,
            price: 800,
            img:"",
            category:""
            
        },  
        {
            id: 1,
            name: "Té de Jazmín",
            stock: 8,
            price: 800,
            img:"",
            category:""
        }, 

    ];

    const[data, setData] = useState(null);

    let promise= new Promise((resolve, reject) =>  {
        setTimeout(() => {
            resolve(array);
        }, 2000 ); 
    } );

    const resolverArray = async() =>{
        try{
            const data = await promise;
            setData(data);
        } catch(error){
            throw error;
        } finally{
            console.log("la petición se terminó")} 
    };
    
    /*async function name(){
        try{
            const data = await promise;
            setData(data);
        } catch(error){
            throw error;
        } finally{
            console.log("la petición se terminó")} 
    };*/
    
    useEffect(() =>  {resolverArray()}, [] )
    

    const [counter, setCounter] = useState(0);


    return(

        <div className="listContainer">
                <h1>{greetings}</h1>
        </div>
      
    )
}

export default ItemListContainer;

