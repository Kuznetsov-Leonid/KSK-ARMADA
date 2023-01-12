import { Modal, Button, Container } from 'react-bootstrap';

const ServiceModal = (props) => {
    const onHide = props.onHide
    const title  = props.title
    const body   = props.body
    return(
        <>
            <Modal
            {...props}
            size            = 'lg'
            aria-labelledby = 'contained-modal-title-vcenter'
            centered
            >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {title}
                </Modal.Title>
                </Modal.Header>
                    <Container>
                        {body}
                    </Container>
                <Modal.Footer>
                    <Button onClick = {onHide}>Закрыть</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ServiceModal