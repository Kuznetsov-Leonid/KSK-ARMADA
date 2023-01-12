import React, { useEffect, useState } from 'react';
import { Container, Card, Row, Col, CardGroup, Modal } from 'react-bootstrap';
import Styles from '../../styles/Rent.module.scss';
import Image from 'next/image';
import HorseRide from '../../public/rent/horseRide.png';
import { BG_NONE } from '../styleProps';
import { AnimBottom } from '../animation/WueScroll';
//--------------------------------------------------
import rent1 from '../../public/rent/gallery/rent1.jpg';
import rent2 from '../../public/rent/gallery/rent2.jpg';
import rent3 from '../../public/rent/gallery/rent3.jpg';
import rent4 from '../../public/rent/gallery/rent4.jpg';
import rent5 from '../../public/rent/gallery/rent5.jpg';
import rent6 from '../../public/rent/gallery/rent6.jpg';
import rent7 from '../../public/rent/gallery/rent7.jpg';
import rent8 from '../../public/rent/gallery/rent8.jpg';
import rent9 from '../../public/rent/gallery/rent9.jpg';
//--------------------------------------------------

const Rent2 = () => {
    
    const Data = [
        {id:'1', img: rent1, alt:''},
        {id:'2', img: rent2, alt:''},
        {id:'3', img: rent3, alt:''},
        {id:'4', img: rent4, alt:''},
        {id:'5', img: rent5, alt:''},
        {id:'6', img: rent6, alt:''},
        {id:'7', img: rent7, alt:''},
        {id:'8', img: rent8, alt:''},
        {id:'9', img: rent9, alt:''},
    ]
    const GalleryItemModal = (props) => {
        const Src = props.Src;
        const onHide = props.onHide;
        const Alt    = props.ALT;
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
                    <div className={Styles.Img_Layout}> 
                        <Image 
                            src = {Src} 
                            alt = {Alt} 
                            placeholder='blurDataURL'
                        />
                    </div>
            </Modal>
            </>
        );
    }

    const GalleryItem = (props) => {
        const [modalShow, setModalShow] = useState(false);
        const IMAGE = props.IMAGE;
        const ALT   = props.ALT; 
        return(
            <>
                <Col>
                    <AnimBottom>
                        <Card style = {BG_NONE}>
                            <Image 
                                src={IMAGE.img} 
                                placeholder='blurDataURL'
                                className={Styles.Rent2__gallery__img}
                                alt = {ALT.alt}
                                onClick = {() => setModalShow(true)}
                            />
                        </Card>
                    </AnimBottom>
                </Col>
                <GalleryItemModal
                    show   = {modalShow}
                    Src = {IMAGE.img}
                    Alt = {ALT.alt}
                    onHide = {() => setModalShow(false)}
                />
            </>
        );
    }

    const GalleryList = (props) => {
        const DATA  = props.DATA;
        const ITEMS = DATA.map((item) => {
            return <GalleryItem
                key   = {item.id}
                IMAGE = {item}
                ALT   = {item}
            />
        });
        return (
            <>
                <Row md={3}>
                    {ITEMS}
                </Row>
            </>
        );
    }
    return(
        <>
            <div className={Styles.Rent2}>
                <Container>
                    <div className={Styles.Rent2_txt}>
                        <AnimBottom>
                        <p>Вакцинация и дегельминтизация - по графику, согласно противоэпизоотическому плану. С нами сотрудничают лучшие ковали и конеперевозчики!</p>
                        </AnimBottom>
                    </div>
                    <div className={Styles.Rent2_prise}>
                        <AnimBottom>
                        <p>Стоимость постоя: 16000/18000 р.</p>
                        </AnimBottom>
                    </div>
                    <div className={Styles.Rent2_dop}>
                        <CardGroup>
                            <Card style = {BG_NONE}>
                                <div className={Styles.Rent2_dop__txt}>
                                    <AnimBottom>
                                    <p>За дополнительную плату:</p>
                                    <p>-занятия с тренером</p>
                                    <p>-берейтор</p>
                                    <p>-коновод</p>
                                    <p>-выполнение ветеринарных назначений</p>
                                    <p>(при длительном лечении)</p>
                                    </AnimBottom>
                                </div>
                            </Card>
                            <Card style = {BG_NONE}>
                                <div className={Styles.Rent2_dop__img}>
                                    <AnimBottom>
                                    <Image 
                                        src         = {HorseRide} 
                                        placeholder = 'blur' 
                                        alt         = 'Иллюстрация: всадник едет на лошади.'
                                    />
                                    </AnimBottom>
                                </div>
                            </Card>
                        </CardGroup>
                    </div>
                    <div className={Styles.Rent2__gallery}>
                        <GalleryList DATA = {Data}/>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Rent2;