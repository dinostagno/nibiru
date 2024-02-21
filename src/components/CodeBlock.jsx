import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button, Card } from 'react-bootstrap';
import { Clipboard, Check2 } from 'react-bootstrap-icons';

const CodeBlock = () => {
  const codeBlocks = [
    {
      title: 'Fetch Assignee Name and Permission Set Name',
      value: `
      SELECT Assignee.Name, PermissionSet.Name 
      FROM PermissionSetAssignment
      `
    },
    {
      title: 'Dynamic Insertion Method with Error Handling in Salesforce',
      value: `
      public static Database.SaveResult insertSObject(SObject obj) {
        Savepoint sp = Database.setSavepoint();
        Database.SaveResult result = null;
    
        try {
            result = Database.insert(obj, false);
            if (result.isSuccess()) {
                System.debug('Insertion successful. Record ID: ' + result.getId());
            } else {
                System.debug('An error occurred: ' + result.getErrors());
                Database.rollback(sp);
            }
        } catch (Exception e) {
            System.debug('An exception occurred: ' + e.getMessage());
            Database.rollback(sp);
        }
    
        return result;
      }
      `
    }
    // puedes agregar más bloques de código aquí
  ];

  // Inicializa isCopied como un array de booleanos con la misma longitud que codeBlocks
  const [isCopied, setIsCopied] = useState(new Array(codeBlocks.length).fill(false));

  const handleCopy = (index) => {
    const newIsCopied = new Array(codeBlocks.length).fill(false);
    newIsCopied[index] = true;
    setIsCopied(newIsCopied);
    setTimeout(() => setIsCopied(new Array(codeBlocks.length).fill(false)), 2000); 
  };

  return (
    <>
      {codeBlocks.map((block, index) => (
        <Card key={index} className="m-3">
          <Card.Header className="d-flex justify-content-between align-items-center px-2 border-bottom-0">
            <h6 className="mr-5">{block.title}</h6>
            <CopyToClipboard text={block.value} onCopy={() => handleCopy(index)}>
              <Button variant={isCopied[index] ? 'success' : 'primary'}>
                {isCopied[index] ? <Check2 /> : <Clipboard />}
              </Button>
            </CopyToClipboard>
          </Card.Header>
          <Card.Body className="p-0">
            <SyntaxHighlighter language='sql' style={atomDark} className="m-0">
              {block.value}
            </SyntaxHighlighter>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default CodeBlock;
