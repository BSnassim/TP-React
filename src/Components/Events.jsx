import listEvents from '../../data/events.json';
import Event from './Event.jsx';
import { Container, Col, Row } from 'react-bootstrap';

export default function Events(props) {
    return <>
        <Container>
            <Row>
                {listEvents.map((e) => {
                    return <Col><Event e={e} ></Event></Col>
                })}
            </Row>
        </Container>
    </>
}