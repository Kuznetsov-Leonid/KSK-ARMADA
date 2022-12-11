import React, { useEffect, useState } from 'react';
import Styles from '../../styles/ServiceCard.module.scss';
import { Container, CardGroup, Card, Button } from 'react-bootstrap';
import Image from 'next/image';
import { RegularButtonSolid } from '../buttons/buttons_solid';
import ServiceModal from '../modal/serviceModal';
import { AnimBottom } from "../animation/WueScroll";

/**
 * Компонент лист услуг
 * Массив сводных элементов услуг из ServiceAPI
 * @param {*className,DATA} props 
 * @returns <ServiceCard className={*} DATA={*} />
 */
export const ServiceCard = (props) => {

    /**
     * Назначение полей API
     * @param {*
     * ITEM_TITLE,                  Заголовок
     * ITEM_DISCRIPTION,            Краткое описание услуги
     * ITEM_PRICE,                  Цена услуги
     * ITEM_IMG,                    Изображение услуги Any image
     * ITEM_ALT,                    Альтернативное описание иллюстрации или изображения
     * ITEM_BG_COLOR,               Фоновый цвет White/Leather/Pearl/DeepGray/Lasur
     * ITEM_DOP_INFO_BTN,           Отображени кнопки доп. инфо.
     * ITEM_DOP_INFO_TITLE,         Заголовок текста доп инфо в модальном окне
     * ITEM_DOP_INFO_DISCRIPTION    Описание дополнительной информации в модальном окне
     * } props 
     * @returns <ServiceCardItem/>
     */
    const ServiceCardItem = (props) => {
        const [modalShow, setModalShow] = useState(false);
        const ITEM_TITLE                = props.ITEM_TITLE;
        const ITEM_DISCRIPTION          = props.ITEM_DISCRIPTION;
        const ITEM_PRICE                = props.ITEM_PRICE;
        const ITEM_IMG                  = props.ITEM_IMG;
        const ITEM_ALT                  = props.ITEM_ALT;
        const ITEM_BG_COLOR             = props.ITEM_BG_COLOR;
        const ITEM_DOP_INFO_BTN         = props.ITEM_DOP_INFO_BTN;
        const ITEM_DOP_INFO_TITLE       = props.ITEM_DOP_INFO_TITLE;
        const ITEM_DOP_INFO_DISCRIPTION = props.ITEM_DOP_INFO_DISCRIPTION;

        const [title, setTitle]                     = useState('title');
        const [discription, setDiscription]         = useState('discription');
        const [price, setPrice]                     = useState('price');
        const [img, setImg]                         = useState();
        const [alt, setAlt]                         = useState('alt');
        const [color, setColor]                     = useState('White');
        const [btn, setBtn]                         = useState('btn');
        const [infoTitle, setInfoTitle]             = useState('infoTitle');
        const [infoDiscription, setInfoDiscription] = useState('infoDiscription');

        useEffect(() => setImg(ITEM_IMG.img), []);
        useEffect(() => setAlt(ITEM_ALT.alt), []);
        useEffect(() => setTitle(ITEM_TITLE.title), []);
        useEffect(() => setDiscription(ITEM_DISCRIPTION.discription), []);
        useEffect(() => setPrice(ITEM_PRICE.price), []);
        useEffect(() => setColor(ITEM_BG_COLOR.bgColor), []);
        useEffect(() => setBtn(ITEM_DOP_INFO_BTN.dopInfoBtn), []);
        useEffect(() => setInfoTitle(ITEM_DOP_INFO_TITLE.dopInfoTitle_1), []);
        useEffect(() => setInfoDiscription(ITEM_DOP_INFO_DISCRIPTION.dopInfoDicription_1), []);

        return(
            <>
                <div 
                    className={`
                        ${Styles.ServiceCard} 
                        ${color}`
                    }
                    >
                    <CardGroup>
                        <Card className={`${Styles.bg_none}`}>
                            <CardGroup>
                                <Card 
                                    className={`
                                        ${Styles.ImgCard} 
                                        ${Styles.bg_none}`
                                    }
                                >
                                    <div className={`${Styles.ImgZone}`}>
                                        <Image
                                            className = {Styles.IMG}
                                            src       = {img}
                                            alt       = {alt}
                                        />
                                    </div>
                                </Card>
                                <Card 
                                    className={`
                                        ${Styles.Description} 
                                        ${Styles.bg_none}`
                                    }
                                >
                                    <div className={`${Styles.DescriptionZone}`}>
                                        <h1 className={`${Styles.Right}`}>
                                            {title}
                                        </h1>
                                        <p>{discription}</p>
                                        <p><b>{price}</b></p>
                                        <div className = {btn}>
                                            <Button onClick   = {() => setModalShow(true)} variant="link">
                                                Дополнительная информация
                                            </Button>
                                        </div>
                                    </div>
                                    <div className={`${Styles.DescriptionBtn}`}>
                                        <RegularButtonSolid title="Онлайн запись"/>
                                    </div>
                                </Card>
                            </CardGroup>
                        </Card>
                    </CardGroup>
                </div>
                <ServiceModal
                    show   = {modalShow}
                    onHide = {() => setModalShow(false)}
                    title  = {infoTitle}
                    body   = {infoDiscription}
                />
            </>
        );
    }

    /**
     * Назначение пропс на парсинг API
     * @param {*DATA} props 
     * @returns <ServiceCardList/>
     */
    const ServiceCardList = (props) => {
        const DATA  = props.DATA;
        const ITEMS = DATA.map((item) =>{
            return <ServiceCardItem
                    key                       = {item.id}
                    ITEM_TITLE                = {item}
                    ITEM_DISCRIPTION          = {item}
                    ITEM_PRICE                = {item}
                    ITEM_IMG                  = {item}
                    ITEM_ALT                  = {item}
                    ITEM_BG_COLOR             = {item}
                    ITEM_DOP_INFO_BTN         = {item}
                    ITEM_DOP_INFO_TITLE       = {item}
                    ITEM_DOP_INFO_DISCRIPTION = {item}
                />
        });
        return(
            <>
                <div>
                    <AnimBottom>
                        {ITEMS} 
                    </AnimBottom>
                </div>
            </>
        );
    }

    return(
        <>
            <div className={props.className}>
                <Container>
                    <ServiceCardList DATA = {props.DATA}/>
                </Container>
            </div>
        </>
    );
}

