// App.js
import React, { useState } from 'react';
import FileUpload from './FileUpload';
import HorizontalAnalysisReport from './HorizontalAnalysisReport';
import BarChart from './BarChart';

const App = () => {
  const [response, setResponse] = useState(null);

  return (
    <div>
      <h1>Horizontal analysis</h1>
      <FileUpload setResponse={setResponse} />
      {response && (
        <div>
          <HorizontalAnalysisReport report={response.report} />
          {/* <BarChart data={response.data} /> */}
        </div>
      )}
    </div>
  );
};

export default App;
