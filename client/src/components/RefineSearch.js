import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

function RefineSearch({ onApplyFilters }) {
    const [show, setShow] = useState(false);
    const [keywords, setKeywords] = useState('');
    const [source, setSource] = useState('');
    const [isKeywordsApplied, setIsKeywordsApplied] = useState(false);
    const [isSourceApplied, setIsSourceApplied] = useState(false);

    const handleClose = () => {
        setShow(false);
    };

    const handleShow = () => setShow(true);

    const handleApply = () => {
        onApplyFilters({ keywords, source });
        setIsKeywordsApplied(keywords !== '');
        setIsSourceApplied(source !== '');
        handleClose();
    };

    return (
    <>
        <Button variant="primary" onClick={handleShow}>
            Refine Search
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Refine your search</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Keywords {isKeywordsApplied && <span className="applied-tag">Applied</span>}</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter keywords" 
                            value={keywords} 
                            onChange={e => setKeywords(e.target.value)} 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Source {isSourceApplied && <span className="applied-tag">Applied</span>}</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter source (e.g., Wikipedia)" 
                            value={source} 
                            onChange={e => setSource(e.target.value)} 
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleApply}>
                    Apply Filters
                </Button>
            </Modal.Footer>
        </Modal>
    </>
    );
}

export default RefineSearch;