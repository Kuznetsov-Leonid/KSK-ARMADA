import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Card, Row, Col } from 'react-bootstrap';
import { SmallButtonSolid } from '../buttons/buttons_solid';
import Styles from '../../styles/Cards.module.scss';
import { BG_NONE } from '../styleProps';
import CardsModal from '../modal/cardsModal';
import { AnimBottom } from '../animation/WueScroll';
//---------------------------------------
import Calendar from '../../public/ui_Kit/Calendar.svg';
//---------------------------------------

const Cards = (props) => {
    

    const CardsItem = (props) => {
        const [modalShow, setModalShow] = useState(false);
        const IMG = props.IMG;
        const ALT = props.ALT;
        const TITLE = props.TITLE;
        const SHORTS = props.SHORTS;
        const DATERELISE = props.DATERELISE;
        return(
            <>
                <Card style = {BG_NONE} className = {Styles.CardsItem}>
                    <div className = {Styles.Imges}>
                        <Image 
                            className = {Styles.ImgesCard} 
                            src       = {IMG.img} 
                            alt       = {ALT.alt}
                        />
                    </div>
                    <div className = {Styles.DATERELISE}>
                        <Image 
                            src = {Calendar} 
                            alt = {'Маленькая картинка: календарь.'}
                        />
                        <span>{DATERELISE.relise}</span>
                    </div>
                    <AnimBottom>
                    <div className = {Styles.TITLE}>
                        <h5>{TITLE.title}</h5>
                    </div>
                    <div className = {Styles.SHORTS}>
                        <p>{SHORTS.shorts}</p>
                    </div>
                    <div className = {Styles.Btn}>
                        <SmallButtonSolid 
                            onClick = {() => setModalShow(true)} 
                            title   = "Подробнее"
                        />
                    </div>
                    </AnimBottom>
                </Card>
                <CardsModal
                    show   = {modalShow}
                    onHide = {() => setModalShow(false)}
                    title  = {TITLE.title}
                    markup = {SHORTS.markup}
                />
            </>
        );
    }

    const CardsList = (props) => {
        const DATA  = props.DATA;
        const ITEMS = DATA.map((item) => {
            return <CardsItem
                key        = {item.id}
                IMG        = {item}
                ALT        = {item}
                TITLE      = {item}
                SHORTS     = {item}
                DATERELISE = {item}
            />
        });
        return(
            <>
                {ITEMS}
            </>
        );
    }


    return(
        <>
            <CardsList DATA = {props.DATA}/>
        </>
    );
}

export default Cards;