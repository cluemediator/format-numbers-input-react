import React from 'react';
import NumberFormat from 'react-number-format';

function App() {
  return (
    <div className="App">
      <h3>Format numbers using React - <a href="https://www.cluemediator.com" target="_blank">Clue Mediator</a></h3>

      <h4>Number format with prefix and separator</h4>
      <div><b>Input value:</b><span>7583651</span></div>
      <div><b>Output value:</b><NumberFormat value={7583651} displayType={'text'} thousandSeparator={true} prefix={'$'} /></div>

      <h4>Format currency with prefix</h4>
      <NumberFormat thousandSeparator={true} prefix={'$'} />

      <h4>Format with mask pattern for credit card</h4>
      <NumberFormat format="#### #### #### ####" mask="_" />

      <h4>Date format with placeholder</h4>
      <NumberFormat format="##/##/####" placeholder="MM/DD/YYYY" mask={['M', 'M', 'D', 'D', 'Y', 'Y', 'Y', 'Y']} />

      <h4>Format phone (Show mask on empty input)</h4>
      <NumberFormat format="+1 (###) ###-####" allowEmptyFormatting mask="_"/>
    </div>
  );
}

export default App;
