import logo from '../assets/ira_logo.png';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import SendFeedback from './SendFeedback';

function Navbar({ onApplyFilters }) {
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
        handleClose();
    };

    return (
    <>
        <div className="navbar">
            <img className="navbar-logo" src={logo} alt='logo'/>
            <Link to="/login"><button type='button'>Login</button></Link>
            <button type='button' variant="primary" onClick={handleShow}>Have Feedback?</button>
        </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Refine your search</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Enter feedback: {isKeywordsApplied && <span className="applied-tag">Applied</span>}</Form.Label>
                        <Form.Control 
                            as="textarea"
                            rows={8} 
                            placeholder="Enter feedback" 
                            value={keywords} 
                            onChange={e => setKeywords(e.target.value)} 
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button className="apply-filter" variant="primary" onClick={handleApply}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    </>
    );
}

export default Navbar;
