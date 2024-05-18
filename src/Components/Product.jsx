import React, { useState } from 'react';

function Product(props)  {

    const [age, setAge] = useState(props.age);
        
    const handleClick = () => {
        setAge(age+1);
    }

            
        return (
            <div className='Person-card1'>
                <h1>{ props.lastName } { props.name }</h1>
                <p>Age: {age}</p>
                <p>hair Color:{ props.haircolor }</p>
                <button onClick={handleClick}>Birthday Button for { props.name }{ props.lastName }</button>
            </div>
        )
    
    }


export default Product;