import React from 'react';
import './FormField.css'

const FormField = props => {
    return (
      <div className='formField'>
        <label className='label'>{props.label}</label>
        <div className="control">
            <input className="input" type={props.type} placeholder={props.placeholder} />
        </div>
      </div>
    );
  };

// class FormField extends React.Component {
//     render() {
//         return(
//             <div className='formField'>
//                 <div className="field">
//                     <label className="label">Name</label>
//                     <div className="control">
//                         <input className="input" type="text" placeholder="e.g Alex Smith" />
//                     </div>
//                 </div>
//                 <div className="field">
//                     <label className="label">Email</label>
//                     <div className="control">
//                         <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
//                     </div>
//                 </div>
//                 <div className="field">
//                     <label className="label">Password</label>
//                     <div className="control">
//                         <input className="input" type="password" placeholder="****" />
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

export default FormField 