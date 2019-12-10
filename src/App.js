import React from 'react';
import JobSkinBuilder from './containers/JobSkinBuilder';
import { generalFields, jobSkinFields }from './containers/fields';

const App = () => {
  const formFields = {
    ...generalFields,
    ...jobSkinFields
  }

  return (
    <JobSkinBuilder formFields={formFields} />
  );
}

export default App;
