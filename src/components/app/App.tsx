import React from 'react';

interface AppProps {
  basePath?: string;
}

function App({ basePath }: AppProps) {
  return (
    <div>
      <h1>{basePath}</h1>
    </div>
  );
}

export default App;
