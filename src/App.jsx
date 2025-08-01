import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null)

  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton)
  }

  let tabContent;
  if(EXAMPLES[selectedTopic]){
    tabContent = (
      <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
           </div>
    )
  }else{
    tabContent = <p>Please select a topic</p>
  }

  return (
    <div>
      <Header />  
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) =>(
              <CoreConcept key={conceptItem.title} {...conceptItem}/>
            ))}
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() =>handleSelect('components')} label="Components"></TabButton>

            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() =>handleSelect('jsx')} label="JSX"></TabButton>

            <TabButton isSelected={selectedTopic === 'props'} onSelect={() =>handleSelect('props')} label="Props"></TabButton>

            <TabButton isSelected={selectedTopic === 'state'} onSelect={() =>handleSelect('state')} label="State"></TabButton>
          </menu>
            {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;