import { Component } from 'react';
import './App.css';
import Product from '../Product/Product';

class App extends Component {
  render() {
    return (
    <Product/>
    );
  }

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
