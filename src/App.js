import React from 'react';
import Accordion from "./Accordion";
import {accordionData} from './accordionData'
import ContactBox from './ContactBox';
import HeaderBox from './HeaderBox';

const App = () => {
  return (
    <div>
      <HeaderBox />
      <ContactBox />
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};
export default App;
