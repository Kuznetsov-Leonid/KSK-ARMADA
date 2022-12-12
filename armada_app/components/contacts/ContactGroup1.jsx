import TitlePage from "../TitlePage";
import { Container, Card, CardGroup } from 'react-bootstrap';
import Styles from "../../styles/Contacts.module.scss";
import { BG_NONE } from "../styleProps";
import Image from 'next/image';
import Mail from '../../public/contacts/Mail.svg';
import iPhone from '../../public/contacts/iPhone.svg';
import Vector from '../../public/contacts/Vector.svg';
import { AnimLeft, AnimRight } from "../animation/WueScroll";
import Forms from "../regular/form";

const ContactGroup1 = () => {
    return(
        <>
            <div className={Styles.ContactGroup1}>
                <Container>
                    <TitlePage>Контакты</TitlePage>
                    <CardGroup>
                        <Card style = {BG_NONE}>
                            <br />
                            <AnimLeft>
                                <div className={Styles.ItemConact}>
                                    <Image className={Styles.Mail} src={Mail} alt='Электронная почта'/>
                                    <h2>ksk_armada@yahoo.com</h2>
                                </div>
                                <div className={Styles.ItemConact}>
                                    <Image className={Styles.iPhone} src={iPhone} alt='Номер телефона'/>
                                    <h2>+7(967)017-99-63</h2>
                                </div>
                                <div className={Styles.ItemConact}>
                                    <Image className={Styles.Vector} src={Vector} alt='Адрес'/>
                                    <h2>Новорязанское шоссе, дер. Дурниха Раменского района, 25&nbsp;км от&nbsp;МКАД.</h2>
                                </div>
                            </AnimLeft>
                        </Card>
                        <Card style = {BG_NONE}>
                            <AnimRight>
                                <Container>
                                    <br />
                                    <h2>Остались вопросы?</h2>
                                    <h6>Оставте сообщение и мы обязательно на них ответим <b>;)</b></h6>
                                    <br />
                                </Container>
                                <Forms/>
                            </AnimRight>
                        </Card>
                    </CardGroup>
                </Container>
            </div>
        </>
    );
}

export default ContactGroup1;