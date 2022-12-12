import React, { useRef, useState } from 'react';
import Styles from '../../styles/Form.module.scss';
import { Container, Form, Modal, Button, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { RegularButtonSolidForm } from "../buttons/buttons_solid";
import { FormAPI } from '../../pages/api/FormAPI';

const Forms = () => {
    const [modalShowSuccess, setModalShowSuccess] = useState(false);
    const [modalShowError, setModalShowError] = useState(false);
    const [modalShowLoad, setModalShowLoad] = useState(false);

    /**
     * Модальное окно: Сообщение об успешной отправки сообщения.
     * @param {*} props 
     * @returns 
     */
    const ModalSucces = (props) =>{
        const onHide = props.onHide;
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
                    </Modal.Title>
                    </Modal.Header>
                        <Container>
                            <h4>Мы получили сообщение и скоро с Вами свяжемся!)))</h4>
                        </Container>
                    <Modal.Footer>
                        <Button onClick = {onHide}>Отлично</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
    /**
     * Модальное окно: Сообщение об отказе.
     * @param {*} props 
     * @returns 
     */
    const ModalErrror = (props) =>{
        const onHide = props.onHide;
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
                        Что-то пошло не так(
                    </Modal.Title>
                    </Modal.Header>
                        <Container>
                            <h3>Вы можете связаться с нами по телефону)</h3>
                            <h1>+7(967)017-99-63</h1>
                        </Container>
                    <Modal.Footer>
                        <Button onClick = {onHide}>Закрыть</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
    /**
     * Модальное окно: отправка сообщения.
     * @param {*} props 
     * @returns 
     */
    const SendLoad = (props) =>{
        const onHide = props.onHide;
        return(
            <>
                <Modal
                    {...props}
                    aria-labelledby = 'contained-modal-title-vcenter'
                    centered
                >
                    <div className={Styles.SendLoad}>
                        <h5>Отправляем...</h5>
                        <br />
                        <Spinner animation="border" variant="danger" />
                    </div>
                </Modal>
            </>
        );
    }

    //Валидация формы
    const form = useRef();
    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onTouched"
    }); 

    //Отправка сообщения
    const sendEmail = () => {
        emailjs.sendForm(FormAPI.dataSend, FormAPI.selector, form.current, FormAPI.token)
        .then((result) => {
            console.log(result.text);
                function success() {
                    setModalShowLoad(false);
                    setModalShowSuccess(true);
                    console.log("Успешное отправление формы.");
                    reset();
                }
                    success();
            }, (error) => {
                console.log(error.text);
                function notSuccess() {
                    setModalShowLoad(false);
                    setModalShowError(true);
                    console.log("Ошибка отправки формы.");
                    reset();
                } 
                    notSuccess();
            });
    }   
    const onSubmit = () => {
        //alert(JSON.stringify(data));
        sendEmail();
    }
    return(
        <>
            <div className = {Styles.Form}>
                <Container>
                    <Form ref = {form} onSubmit = {handleSubmit(onSubmit)}>
                        <Form.Group className = "mb-3" controlId = "formBasicEmail">
                            <Form.Label>Имя*</Form.Label>
                            <Form.Control
                                {...register("name", {
                                    required: "Имя обязательно к заполнению*",
                                })}
                                type        = "name"
                                placeholder = "Ваше имя"
                                name        = "name"
                            />
                        </Form.Group>
                        <Form.Group className = "mb-3" controlId = "formBasicEmail">
                            <Form.Label>E-mail*</Form.Label>
                            <Form.Control
                                {...register("email", {
                                    required: "Email обязателен к заполнению*",
                                    pattern: {
                                        value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                                        message: "Некорректный email*"
                                    }
                                })}
                                type        ="email"
                                placeholder = "Ваша актуальная почта"
                                name        = "email"
                            />
                        </Form.Group>
                        <Form.Group className = "mb-3" controlId = "formBasicEmail">
                            <Form.Label>Телефон*</Form.Label>
                            <Form.Control
                                {...register("tel", {
                                    required: "Номер телефона обязателен к заполнению*",
                                    pattern: {
                                        value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){8,14}(\s*)?$/,
                                        message: "Некорректный номер*"
                                    }
                                })}
                                type        = "phone"
                                placeholder = "Ваш номер телефона"
                                name        = "tel"
                            />
                        </Form.Group>
                        <Form.Group className = "mb-3" controlId = "exampleForm.ControlTextarea1">
                            <Form.Label>Сообщение</Form.Label>
                            <Form.Control
                                {...register("message")}
                                type        = "massege"
                                as          = "textarea" 
                                rows        = {3}
                                placeholder = "Ваше сообщение"
                                name        = "message"
                            />
                        </Form.Group>
                        <Form.Group className = "mb-3" controlId = "formBasicCheckbox" name = "checkbox1">
                        <div className={Styles.Check}>
                            <Form.Check {...register("checkbox1",{
                                    required: true
                                }
                                )} 
                                type = "checkbox" 
                                name = "checkbox1"
                            />
                            <span>&nbsp; Согласие на <a href="#">обработку&nbsp;персональных данных*</a></span>
                        </div>
                        </Form.Group>
                        <div className={Styles.Wornig}>
                            <div style={{color:'red'}}>{errors?.tel && <p>{errors?.tel?.message || "Error!"}</p>}</div>
                            <div style={{color:'red'}}>{errors?.name && <p>{errors?.name?.message || "Error!"}</p>}</div>
                            <div style={{color:'red'}}>{errors?.email && <p>{errors?.email?.message || "Error!"}</p>}</div>
                        </div>
                        <br/>
                        <div className={Styles.Send}>
                            <RegularButtonSolidForm 
                                disabled  = {!isValid} 
                                title     = "Отправить"
                                type      = 'submit' 
                                value     = 'Send'
                                id        = 'send'
                                onClick = {() => setModalShowLoad(true)}
                                />
                        </div>
                    </Form>
                </Container>
            </div>
            <ModalSucces show = {modalShowSuccess} onHide = {() => setModalShowSuccess(false)}/>
            <ModalErrror show = {modalShowError} onHide = {() => setModalShowError(false)}/>
            <SendLoad show = {modalShowLoad} onHide = {() => setModalShowLoad(false)}/>
        </>
    );
}

export default Forms;