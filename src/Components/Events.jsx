import listEvents from '../../data/events.json';
import Event from './Event.jsx';
import { Container, Col, Row } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import { useEffect, useState } from 'react';

export default function Events() {
    const [showAlert, setShowAlert] = useState(false);
    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
    }
    const [showWelcome, setShowWelcome] = useState(false);
    useEffect(() => {
        setShowWelcome(true);
        setTimeout(() => {
            setShowWelcome(false);
        }, 2000);
    },[]);
    return <>
        <Container>
            {showWelcome && <Alert variant="success">Welcome to the events list!</Alert>}
            <Row>
                {listEvents.map((e) => {
                    return <Col><Event e={e} showAlert={handleShowAlert}></Event></Col>
                })}
            </Row>
            {showAlert && <Alert variant="success">you have booked an event!</Alert>}
        </Container>
    </>
}