import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from 'react-bootstrap';
import { Clipboard, Check2 } from 'react-bootstrap-icons';

const CodeBlock = () => {
  const [isCopied, setIsCopied] = useState(false);
  const value = `
    SELECT Assignee.Name, PermissionSet.Name 
    FROM PermissionSetAssignment
  `;

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // reset after 2s
  };

  return (
    <div style={{ position: 'relative' }}>
      <SyntaxHighlighter language='sql' style={atomDark} className="m-2">
        {value}
      </SyntaxHighlighter>
      <div style={{ position: 'absolute', right: '10px', top: '10px' }}>
        <CopyToClipboard text={value} onCopy={handleCopy}>
          <Button variant={isCopied ? 'success' : 'primary'} className="m-2">
            {isCopied ? <Check2 /> : <Clipboard />}
          </Button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default CodeBlock;
