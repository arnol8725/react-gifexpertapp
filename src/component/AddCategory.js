import React,{useState} from 'react';
import PropTypes from 'prop-types'

const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) =>{
        setinputValue(e.target.value);
    }
    const handleSumit = (e) => {
        //Este es para no refrescar la pagina 
             e.preventDefault();

             if (inputValue.trim().length > 2){
                setCategories( category =>  [inputValue,...category]);
                setinputValue('');
             }
                
    }

    return (  
            <>
               <form 
                    onSubmit={handleSumit}
               >
                    <input 
                        type='text' 
                        value = { inputValue }
                        onChange = { handleInputChange }
                    />
                </form> 
                
            </>

    );
}

AddCategory.protoType = {
    setCategories : PropTypes.func.isRequired
}

export default AddCategory;

