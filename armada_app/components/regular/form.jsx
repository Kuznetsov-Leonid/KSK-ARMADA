import React, { useRef, useState } from 'react';
import Styles from '../../styles/Form.module.scss';
import { Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { RegularButtonSolidForm } from "../buttons/buttons_solid";

const Forms = (props) => {
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
    const sendEmail = (e) => {
        //  test ---- 'service_td3yqi6', 'template_g27ul53', form.current, 'user_RBIjAEvAriwtz46L0hxec'
        //  ARMADA ---- 'service_rla1tl2', 'template_04b0tu1', form.current, 'user_W6DyZvFT710FcvSPQiVd2'
        emailjs.sendForm('service_rla1tl2', 'template_04b0tu1', form.current, 'user_W6DyZvFT710FcvSPQiVd2')
        .then((result) => {
            console.log(result.text);
                function success() {
                    alert("Спасибо, мы скоро с Вами свяжемся!");
                    console.log("Успешное отправление формы.");
                    reset();
                }
                    success();
            }, (error) => {
                console.log(error.text);
                function notSuccess() {
                    alert("Что-то пошло не так, ошибка отправки.");
                    console.log("Ошибка отправки формы.");
                    reset();
                } 
                    notSuccess();
            });
        return (e.preventDefault())
    }   

    const onSubmit = (data) => {
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
                                as          = "textarea" 
                                rows        = {3}
                                placeholder = "Ваше сообщение"
                                name        = "massege"
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
                                />
                        </div>
                    </Form>
                </Container>
            </div>
        </>
    );
}

export default Forms;