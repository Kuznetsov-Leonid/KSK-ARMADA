import Styles from '../../styles/ShortAboutUs.module.scss';
import TitleComponent from '../TitleComponent';
import { Container, CardGroup, Card, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import { BG_NONE } from '../styleProps';
import ImgShortAboutUs from '../../public/imgComponents/imgShortAboutUs.png';
import { AnimBottom } from '../animation/WueScroll';
//-------------------------------------------------------
import Check from '../../public/ui_Kit/check.svg';
import Hanger from '../../public/ui_Kit/hanger.svg';
import Home from '../../public/ui_Kit/Home.svg';
import Login from '../../public/ui_Kit/Login.svg';
import Profile from '../../public/ui_Kit/Profile.svg';
//-------------------------------------------------------

const ShortAboutUs = () => {
    const ShortAboutUsAPI = [
        {id:1, img: Login, txt:'Опытный квалифицированный персонал находится в конюшне круглосуточно.'},
        {id:2, img: Home, txt:'Конюшня с высокими потолками и большими окнами. Денники стандартные, оборудованные автопоилками.'},
        {id:3, img: Hanger, txt:'Для владельцев: комната отдыха с бытовой техникой, индивидуальные шкафчики, амуничники.'},
        {id:4, img: Check, txt:'С нами сотрудничают лучшие ковали и конеперевозчики!'},
        {id:5, img: Profile, txt:'До конюшни легко добраться как на автомобиле, так и общественным транспортом.'},
    ];
    const BenefitsItem = (props) => {
        const ITEM_IMG = props.ITEM_IMG;
        const ITEM_TXT = props.ITEM_TXT;

        return(
            <>
                <div className={Styles.ShortAboutUs_Benefits}>
                    <Col> 
                        <div className={Styles.ShortAboutUs_Benefits_item}>
                            <div className={Styles.ShortAboutUs_Benefits_item_img}>
                                <Image src={ITEM_IMG.img}/>
                            </div>
                            <p>{ITEM_TXT.txt}</p>
                        </div>
                    </Col>
                </div>
            </>
        );
    }

    const BenefitsList = (props) => {
        const DATA = props.DATA;
        const ITEMS = DATA.map((item) => {
            return <BenefitsItem
                key      = {item.id}
                ITEM_IMG = {item}
                ITEM_TXT = {item}
            />
        });
        return (
            <>
                <Row lg={2} style={{'justify-content': 'center'}}>
                    <AnimBottom>
                        {ITEMS}
                    </AnimBottom>
                </Row>
            </>
        );
    }


    return(
        <>
            <div className={Styles.ShortAboutUs}>
                <Container>
                        <TitleComponent>Коротко о нас</TitleComponent>
                        <Card style={BG_NONE} className={Styles.ShortAboutUs_on}>
                            <AnimBottom>
                                <div className={Styles.ShortAboutUs_img}>
                                    <Image 
                                        style = {{'width':'100%', 'height':'auto'}} 
                                        src   = {ImgShortAboutUs} 
                                        alt   = 'Фотография: лошадь привязанная за недауздок, стоит в помещении конюшни.'
                                    />
                                </div>
                            </AnimBottom>
                        </Card>
                    <CardGroup>
                        <Card style={BG_NONE} className={Styles.ShortAboutUs_off}>
                            <AnimBottom>
                                <div className={Styles.ShortAboutUs_img}>
                                    <Image 
                                        style = {{'width':'100%', 'height':'auto'}} 
                                        src   = {ImgShortAboutUs} 
                                        alt   = 'Фотография: лошадь привязанная за недауздок, стоит в помещении конюшни.'
                                    />
                                </div>
                            </AnimBottom>
                        </Card>
                        <Card style={BG_NONE}>
                            <AnimBottom>
                                <h4>Создавать комфорт для вас и лошадей наша работа </h4>
                            </AnimBottom>
                            <BenefitsList DATA = {ShortAboutUsAPI}/>
                        </Card>
                    </CardGroup>
                </Container>
            </div>
        </>
    );
}

export default ShortAboutUs;
