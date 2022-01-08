import React from 'react';
import "bulma/css/bulma.css";


function Button(props){
 return(
     <div className="btn">
         {props.children}
     </div>
 )
}


function CoolButton(){
    
    return(
        <>
            < button  class =" button is-rounded my-class is-danger is-small " > Signup </ button > 
            < button  class =" button is-small is- succès " > Login </ button >
        </>
    )
}










export default CoolButton;
