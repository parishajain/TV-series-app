import React from 'react';
import loaderSrc from '../../components/Loader/loader.gif';
const Loader = props => (
    
    <div>
    
       <img src= {loaderSrc} alt="Loading"  
        style = {{ width: 70}}/> 
    </div>
);

export default Loader;