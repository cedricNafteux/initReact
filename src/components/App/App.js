import React from 'react';
import data from './Data';
import AnimalCard from '../AnimalCard/AnimalCard';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <h1>Animals</h1>
      {data.map(animal => (
        <AnimalCard
        key={animal.name}
        name={animal.name}
        />
      ))}
    </div>
  )
}

export default App;











//premier Tuto
//  
// import './App.css';
// import Instructions from '../Instructions/Instructions.js';

// const displayEmojiName = event => alert(event.target.id);
// const displayAction = true;
// const emojis = [
//   {
//     emoji: "😀",
//     name: "grinning face"
//   },
//   {
//     emoji: "🎉",
//     name: "party popper"
//   },
//   {
//     emoji: "💃",
//     name: "woman dancing"
//   }
// ];

// function App() {
//   const greeting = "greeting";
//   return (
//     <div className='container'>
//       <h1 id={greeting}>Hello world</h1>
//       {displayAction && <p>j'ecrit en JSX</p>}      {/* si variable est true le paragraphe apparait. sinon elle est cache  */}
//       <Instructions />
//       <ul>
//       {
//           emojis.map(meuh => (
//             <li key={meuh.name}>
//               <button
//                 onClick={displayEmojiName}>
//                 <span role="img" aria-label={meuh.name} id={meuh.name}>{meuh.emoji}</span>
//               </button>
//             </li>
//           ))
//         }
//       </ul>
//     </div>
//     )


// }

// export default App;
