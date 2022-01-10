import React from 'react';
import {useState, useEffect} from 'react';
import Lottie from "react-lottie";
import teaAnimation from "../../lotties/tea-time-lottie.json";
import ItemList from "../ItemList/ItemList";
import {doc, getDoc, collection, getDocs, query, where} from "firebase/firestore";
import db from "../../service/index";



import './ItemListContainer.css'

const ItemListContainer =({greetings})=>{
    

    //hay que sacar ese null y poner []

    const[data, setData] = useState([]);
    
    useEffect(() =>  {
       // getData().then((res) => setData(res));
       // window.scrollTo(0, 0);

        
            
        /*
            Para traer de a un producto:

            const itemRef = doc(db, "Items", "B9FV1tqQPqCXN8cVULyu");
            getDoc(itemRef).then((snapshot) => {
                if(snapshot.exists()){
                    let document = {
                        id: snapshot.id,
                        ...snapshot.data()
                    }
                    setData([...data, document])
                }
            })
            
        */
            //Traemos TODOS los productos de la colección
            const itemListCollection = collection(db, "Items");

            getDocs(itemListCollection).then((snapshot) => {
                //ahora es un map porque es un array
               setData(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
                }
            )



            
        
    }, []);


    /*
    para hacer un filtro:
    Hacemos la query
    useEffect(() =>  {
            const q = query(collection(db, "Items"), where("category", "==", "Tazas"));
            getDocs(q).then((snapshot) => {
                snapshot.docs.map((doc) => console.log({id: doc.id, ...doc.data()}))
    })


    
    */

    const loadingAnimation = {
        loop: true,
        autoplay: true,
        animationData: teaAnimation
    };
    
    return(

        <div className="listContainer">
            {
                !data ? 
                    <div className="animation-container">
                            <Lottie options={loadingAnimation} height={250} width={250} /> 
                    </div>
                
                :

                    <>
                        <h1>{greetings}</h1>
                        <ItemList items={data}/> 
                    </>
            }
                
        </div>
      
    )
}

export default ItemListContainer;

