import React,{useState,useEffect} from 'react'
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid =  ({Category}) => {

  
   

   const { data:image, loading } = useFetchGifs( Category );   
    

    return ( 
        
        <>
         
            <h3 className="animate__animated animate__fadeIn"> { Category } </h3>

            { loading && <p className="animate__animated animate__flash">Loading</p> }
            <div className='card-grid'>
            
           
                {
                    image.map( img => <GifGridItem key={img.id} {...img} />  )
                }
                
           
        </div>
        </>
        
     );
}
 
export default GifGrid;