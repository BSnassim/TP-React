
import { Button, Container, Form } from "react-bootstrap";
import EventsApi from "../api/EventsApi";

export default function AddEvent() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newEvent = {
      name: formData.get("name"),
      description: formData.get("description"),
      price: formData.get("price"),
      nbTickets: formData.get("nbTickets"),
      nbParticipants: 0,
      img: formData.get("img").name,
    };
    // console.log(newEvent);
    EventsApi.createEvent(newEvent);
  };

  return (
    <Container style={{ marginTop: "30px" }}>
      <h2>Add a new Event to your Event List</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter a Name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description "
            name="description"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Number of Tickets</Form.Label>
          <Form.Control
            type="number"
            name="nbTickets"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            name="img"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add an Event
        </Button>
        <Button  variant="secondary" >
          Cancel
        </Button>
      </Form>
    </Container>
  );
}