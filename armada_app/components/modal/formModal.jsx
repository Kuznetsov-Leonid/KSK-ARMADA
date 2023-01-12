import Forms from '../regular/form';
import Modal from 'react-bootstrap/Modal';

const FormModal = ( props ) => {
    return(
        <>
            <Modal
                {...props}
                size            = 'lg'
                aria-labelledby = 'contained-modal-title-vcenter'
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title>Онлайн запись</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Forms/>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default FormModal;