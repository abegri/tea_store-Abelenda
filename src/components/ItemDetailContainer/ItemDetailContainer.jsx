import React from 'react';
import {useState, useEffect} from 'react';
import Lottie from "react-lottie";
import teaAnimation from "../../lotties/tea-time-lottie.json";
import ItemDetail from "../ItemDetail/ItemDetail";
import {doc, getDoc, collection, getDocs, query, where} from "firebase/firestore";
import db from "../../service/index";

import "./ItemDetailContainer.css";


const ItemDetailContainer =({greetings})=>{

    const[data, setData] = useState(null);
    

    useEffect(() =>  {
        /*getData().then((res) => setData(res));
        window.scrollTo(0, 0);*/

        /*
            const q = query(collection(db, "Items"), where("id", "==", "id"));

            getDocs(q).then((snapshot) => {
                    //ahora es un map porque es un array
                    snapshot.docs.map((doc) => console.log({id: doc.id, ...doc.data()}))
                    }
                )
        */
        const itemListCollection = collection(db, "Items");

            getDocs(itemListCollection).then((snapshot) => {
                //ahora es un map porque es un array
               setData(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
                }
            )

        
    }, []);
    

    

    /*function getData(){
        let promise= new Promise((resolve, reject) =>  {
            setTimeout(() => {
                resolve(array);
            }, 2000); 
        } );
            return promise;

    }*/

    const loadingAnimation = {
        loop: true,
        autoplay: true,
        animationData: teaAnimation
    };
    
    
    
    return(

        <div className="allItems-container">

            {
                !data ? 
                    <div className="animation-container">
                            <Lottie options={loadingAnimation} height={250} width={250} /> 
                    </div>
                
                :

                    <ItemDetail itemDetails={data}/>
            }
                
          
               
                
        </div>
      
    )
}

export default ItemDetailContainer;

