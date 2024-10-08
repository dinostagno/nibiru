import React, { useState } from 'react';
import { Diff } from 'react-diff-view';

const CodeComparator = () => {
  const [codeA, setCodeA] = useState('');
  const [codeB, setCodeB] = useState('');

  const handleCodeAChange = (e) => setCodeA(e.target.value);
  const handleCodeBChange = (e) => setCodeB(e.target.value);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h2>Comparador de Códigos</h2>
      <div>
        <textarea
          style={{ width: '100%', height: '150px', marginBottom: '20px' }}
          placeholder="Introduce el código A"
          value={codeA}
          onChange={handleCodeAChange}
        />
        <textarea
          style={{ width: '100%', height: '150px', marginBottom: '20px' }}
          placeholder="Introduce el código B"
          value={codeB}
          onChange={handleCodeBChange}
        />
      </div>
      <Diff
        oldValue={codeA}
        newValue={codeB}
        splitView={true}
        renderers={{}}
      />
    </div>
  );
};

export default CodeComparator;
