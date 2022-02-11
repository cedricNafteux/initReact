//import React, { Component } from 'react';
import './Instructions.css';
import emoji from './emoji.svg'

// export default class Instructions extends Component
// {
//     render() {
//         return(
//             <div className="instructions">
//                 <img alt="laughing crying emoji" src={emoji} />
//                 <p>clique sur un emoji pour voir son nom</p>
//             </div>
//         )
//       }
// }


// export default function Instructions()
// {
//     return(
//         <div className="instructions">
//             <img alt="laughing crying emoji" src={emoji} />
//             <p>clique sur un emoji pour voir son nom</p>
//         </div>
//     )
// }

const Instructions = () => ( // c'est la constante Instructions qui est égal a une fonction anonyme qui return...
    <div className="instructions">
      <img alt="laughing crying emoji" src={emoji} />
      <p>Click on an emoji to view the emoji short name.</p>
    </div>
  )
  
  export default Instructions;