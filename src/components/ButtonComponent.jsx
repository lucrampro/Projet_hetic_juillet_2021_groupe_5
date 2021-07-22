import React, {useState, useEffect} from 'react'

function ButtonComponent () {

    function handleClick() {
       setName('lucien')
    }

    // js
    var [name, setName] = useState('wakid');

    useEffect(() => {
      console.log(name);
      
    }, [name]);
    return (
    // template 
    <button onClick={handleClick}>{name}</button>
    );
  
}

export default ButtonComponent;


