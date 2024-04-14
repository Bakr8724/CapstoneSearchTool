import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function RefineSearch() {
    const [show, setShow] = useState(false);
    const [selectedKeywords, setSelectedKeywords] = useState([]);// stores the selected keywords that user has clicked
    const keywords = ['keyword1', 'keyword2', 'keyword3', 'keyword4', 'keyword5', 'keyword6', 'keyword7','keyword8','keyword9', 'keyword10', 'keyword11', 'keyword12' ]; // modify this with refined keywords
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <div className="refine-search">
        <Button className="refine-search-button" variant="primary" onClick={handleShow}>
          Refine
        </Button>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton >
            <Modal.Title>Pick keywords</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
                {Array.from({ length: 4 }).map((_, rowIndex) => (
                <Row key={rowIndex}>
                    {keywords.slice(rowIndex * 3, rowIndex * 3 + 3).map((keyword) => (
                    <Col key={keyword}>
                        <Button className="keyword-button" onClick={() => setSelectedKeywords([...selectedKeywords, keyword])}>
                        {keyword}
                        </Button>
                    </Col>
                    ))}
                </Row>
                ))}
            </Container>
            </Modal.Body>
          <Modal.Footer>
            <Button className="close-button" variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button className="save-button" variant="primary" onClick={handleClose}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
export default RefineSearch;
  
  //export default RefineSearch;