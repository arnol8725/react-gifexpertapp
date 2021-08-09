import React,{useState} from 'react'
import AddCategory from './component/AddCategory';
import GifGrid from './component/GifGrid';
const GifExpertApp = () => {

    //let categorias = ['Goku','Vegueta','Picoro'];
    const [categories, setCategories] = useState(['Goku']);
    

    return (  
        <>
            <h2>GifExpertApp</h2>
            

            <AddCategory
                setCategories = {setCategories}
                
            />
            <hr/>

            <ul>
                {
                    categories.map ( (cat,id) => <GifGrid key={cat}  Category = {cat}/>)
                }
               
            </ul>
        </>
    );
}
 
export default GifExpertApp;