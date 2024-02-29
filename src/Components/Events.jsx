import Event from './Event.jsx';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import EventsApi from '../api/EventsApi.jsx';
import { Link, Outlet } from 'react-router-dom';

export default function Events() {
    // States
    const [showAlert, setShowAlert] = useState(false);
    const [listEvents, setListEvents] = useState([]);
    // Data
    const getData = () => {
        EventsApi.getEvents().then((data) => {
            setListEvents(data);
        });
    }
    useEffect(() => {
        getData()
    }, []);

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

    const deleteEvent = (id) => {
        EventsApi.deleteEvent(id).then(() => {
            getData();
        });
    }

    return <>
        <Container>
            <Link to="add"><Button variant="primary">Add</Button></Link>
            
            {showWelcome && <Alert variant="success">Welcome to the events list!</Alert>}
            <Row>
                {listEvents.map((e) => {
                    return <Col><Event key={e.id} e={e} delete={deleteEvent} showAlert={handleShowAlert}></Event></Col>
                })}
            </Row>
            {showAlert && <Alert variant="success">you have booked an event!</Alert>}
        </Container>
        <Outlet/>
    </>
}