import React, { useState } from 'react';

const CarList = ({id,imagePath,title,t1,removeCars,favoriteCars}) =>{
    const [readInfo, setReadInfo] = useState(false);
    return(
        
        <article className='single-tour'>

            <img src={imagePath} alt={title}/>
            <footer>
                <div className='tour-info'>
                    <h4> {title} </h4>
                    
                    
                </div>
  
                <button className="delete-btn" onClick={()=>removeCars(id)}>
                    Not Interested 
                </button>
                <button className="interested-btn" onClick={()=>favoriteCars(id)}>
                    
                    Interested
                </button>
            </footer>       
        </article>
        


    );
}
export default CarList;
