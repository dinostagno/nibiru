import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button, Card } from 'react-bootstrap';
import { Clipboard, Check2 } from 'react-bootstrap-icons';

const CodeBlock = () => {
  const [isCopied, setIsCopied] = useState(false);
  const value = `
    SELECT Assignee.Name, PermissionSet.Name 
    FROM PermissionSetAssignment
  `;

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); 
  };

  return (
    <Card className="m-3">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h6>Fetch Assignee Name and Permission Set Name</h6>
        <CopyToClipboard text={value} onCopy={handleCopy}>
          <Button variant={isCopied ? 'success' : 'primary'}>
            {isCopied ? <Check2 /> : <Clipboard />}
          </Button>
        </CopyToClipboard>
      </Card.Header>
      <Card.Body className="p-0">
        <SyntaxHighlighter language='sql' style={atomDark} className="m-0">
          {value}
        </SyntaxHighlighter>
      </Card.Body>
    </Card>
  );
};

export default CodeBlock;
