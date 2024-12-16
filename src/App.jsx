import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept/CoreConcept';
import TabButtons from './components/TabButtons/TabButtons'
import { CORE_CONCEPTS } from './data';
import { useState } from 'react';
import { EXAMPLES } from './data';


function App() {

   const [slectedTopic , setslectedTopic ]= useState()


  function handleSelect( ButtonSelected){
    // console.log(ButtonSelected)
    setslectedTopic(ButtonSelected)
    // console.log(EXAMPLES.components.title)
    // console.log(EXAMPLES.jsx.title)
  }

  return (
    <div>
     <Header/>
      <main>
        <h2>Time to get started!</h2>
      </main>

      <section id='core-concepts'>
        <h2>Core Concept</h2>
        <ul>

          {CORE_CONCEPTS.map( (conceptItem)=> <CoreConcept key={conceptItem.title}  {...conceptItem} /> ) }



          {/* another way to render data */}
          {/* <CoreConcept  
          title = {CORE_CONCEPTS[0].title} 
          image = {CORE_CONCEPTS[0].image}  
          description = {CORE_CONCEPTS[0].description} />

          <CoreConcept  {...CORE_CONCEPTS[1]} />

          <CoreConcept  {...CORE_CONCEPTS[2]} />

          <CoreConcept  {...CORE_CONCEPTS[3]} /> */}

          

          
        </ul>

      </section>

      <section id='examples'>
        <h2>Examples</h2>
        <menu>
          <TabButtons isSlected={slectedTopic === 'components' } onSelect={()=>{handleSelect("components")}}>Components</TabButtons>
          <TabButtons isSlected={slectedTopic === 'jsx' } onSelect={()=>{handleSelect("jsx")}}>JSX</TabButtons>
          <TabButtons isSlected={slectedTopic === 'props' } onSelect={()=>{handleSelect("props")}}>Props</TabButtons>
          <TabButtons isSlected={slectedTopic === 'state' } onSelect={()=>{handleSelect("state")}}>State</TabButtons>
        </menu>

       { slectedTopic ? <div id='tab-content'>
        <h3>{EXAMPLES[slectedTopic].title}</h3>
        <p>{EXAMPLES[slectedTopic].description}</p>
        <pre>
          <code>
             {EXAMPLES[slectedTopic].code}
          </code>
        </pre>
       </div> : <p>Please Select Topic</p> }
        
      </section>

    </div>
  );
}

export default App;
