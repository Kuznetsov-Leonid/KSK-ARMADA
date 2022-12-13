import { Container, Card, Row, Col, CardGroup } from 'react-bootstrap';
import Styles from '../../styles/Rent.module.scss';
import Image from 'next/image';
import HorseRide from '../../public/rent/horseRide.png';
import { BG_NONE } from '../styleProps';
import { AnimBottom } from '../animation/WueScroll';

const Rent2 = () => {
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
                </Container>
            </div>
        </>
    );
}

export default Rent2;