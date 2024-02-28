import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button, Card } from 'react-bootstrap';
import { Clipboard, Check2 } from 'react-bootstrap-icons';
import { MDBIcon } from 'mdb-react-ui-kit';
import { FcBinoculars, FcCommandLine } from "react-icons/fc";


const CodeBlock = () => {
  const codeBlocks = [
    {
      title: 'Fetch Assignee Name and Permission Set Name',
      value: `SELECT Assignee.Name, PermissionSet.Name 
              FROM PermissionSetAssignment`.split('\n').map(line => line.trim()).join('\n')
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
    },    
    {
      title: 'Case Management API',
      value: `@RestResource(urlMapping='/Cases/*')
global with sharing class CaseManager {
    
    @HttpGet
    global static Case getCaseById() {
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;

        String caseId = req.requestURI.substring(req.requestURI.lastIndexOf('/') + 1);

        List<Case> queriedCases = Database.query(
            'SELECT Id, CaseNumber, Subject, Description, Status, Priority, Owner.Name, ' +
            'CreatedDate, ClosedDate, LastModifiedDate, ContactId, Contact.Name, ' +
            'AccountId, Account.Name, Type ' +
            'FROM Case ' +
            'WHERE Id = :caseId ' +
            'LIMIT 1'
        );

        if (queriedCases.isEmpty()) {
            res.statusCode = 404;
            return null;
        } else {
            return queriedCases[0];
        }
    }

    @HttpPost
    global static void createCase() {
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;

        try {
            String caseJSON = req.requestBody.toString();
            CaseJsonParser parsedCase = CaseJsonParser.parse(caseJSON);

            Case newCase = new Case(
                Subject = parsedCase.subject,
                Description = parsedCase.description,
                Status = parsedCase.status,
                Priority = parsedCase.priority,
                Type = parsedCase.type,
                Origin = parsedCase.origin,
                AccountId = parsedCase.accountId,
                ContactId = parsedCase.contactId
            );

            Database.SaveResult saveResult = Database.insert(newCase, true);

            if (saveResult.isSuccess()) {
                res.statusCode = 201;
                res.responseBody = Blob.valueOf('Caso creado con éxito: ' + newCase.Id);
            } else {
                res.statusCode = 400;
                res.responseBody = Blob.valueOf('Error al crear el caso: ' + saveResult.getErrors()[0].getMessage());
            }
        } catch (Exception e) {
            res.statusCode = 400;
            res.responseBody = Blob.valueOf('Error al crear el caso: ' + e.getMessage());
        }
    }
    
    @HttpPatch
    global static void updateCase() {
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;

        String caseId = req.requestURI.substring(req.requestURI.lastIndexOf('/') + 1);

        if (!String.isBlank(caseId)) {
            try {
                String caseJSON = req.requestBody.toString();
                CaseJsonParser parsedCase = CaseJsonParser.parse(caseJSON);

                Case existingCase = [SELECT Id FROM Case WHERE Id = :caseId LIMIT 1];

                if (existingCase != null) {
                    Case updatedCase = new Case(
                        Id = existingCase.Id,
                        Subject = parsedCase.subject,
                        Description = parsedCase.description,
                        Status = parsedCase.status,
                        Priority = parsedCase.priority,
                        Type = parsedCase.type,
                        Origin = parsedCase.origin,
                        AccountId = parsedCase.accountId,
                        ContactId = parsedCase.contactId
                    );

                    Database.SaveResult saveResult = Database.update(updatedCase, false);

                    if (saveResult.isSuccess()) {
                        res.statusCode = 204;
                    } else {
                        res.statusCode = 400;
                        res.responseBody = Blob.valueOf('Error al actualizar el caso: ' + saveResult.getErrors()[0].getMessage());
                    }
                } else {
                    res.statusCode = 404;
                    res.responseBody = Blob.valueOf('Caso no encontrado');
                }
            } catch (Exception e) {
                res.statusCode = 400;
                res.responseBody = Blob.valueOf('Error al actualizar el caso: ' + e.getMessage());
            }
        } else {
            res.statusCode = 400;
            res.responseBody = Blob.valueOf('ID de caso no válido');
        }
    } 
    
    @HttpDelete
    global static void deleteCase() {
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;

        String caseId = req.requestURI.substring(req.requestURI.lastIndexOf('/') + 1);

        if (!String.isBlank(caseId)) {
            try {
                Database.DeleteResult[] deleteResults = Database.delete(new List<Case>{new Case(Id = caseId)}, false);

                for (Database.DeleteResult deleteResult : deleteResults) {
                    if (deleteResult.isSuccess()) {
                        res.statusCode = 204;
                    } else {
                        res.statusCode = 400;
                        res.responseBody = Blob.valueOf('Error al eliminar el caso: ' + deleteResult.getErrors()[0].getMessage());
                        break;
                    }
                }
            } catch (Exception e) {
                res.statusCode = 500;
                res.responseBody = Blob.valueOf('Error al eliminar el caso: ' + e.getMessage());
            }
        } else {
            res.statusCode = 400;
            res.responseBody = Blob.valueOf('ID de caso no válido');
        }
    }  
}
  `
    }   
  ];

  const [isCopied, setIsCopied] = useState(new Array(codeBlocks.length).fill(false));
  const [showComponent, setShowComponent] = useState(true);

  const handleCopy = (index) => {
    const newIsCopied = new Array(codeBlocks.length).fill(false);
    newIsCopied[index] = true;
    setIsCopied(newIsCopied);
    setTimeout(() => setIsCopied(new Array(codeBlocks.length).fill(false)), 2000); 
  };

  const toggleVisibility = () => {
    setShowComponent(!showComponent);
  };

  return (
    <>
      <Button onClick={toggleVisibility} variant="light" className="m-3">
        {showComponent ? <FcCommandLine style={{ fontSize: "40px" }} /> : <FcBinoculars style={{ fontSize: "40px" }} />}
      </Button>
      {showComponent && codeBlocks.map((block, index) => (
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
