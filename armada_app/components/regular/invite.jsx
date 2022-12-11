import { Container, CardGroup, Card } from 'react-bootstrap';
import Styles from '../../styles/Invite.module.scss';
import Image from 'next/image';
import { RegularButtonSolid } from '../buttons/buttons_solid';
import Phone from '../../public/ui_Kit/iPhone.svg';
import { BG_NONE } from '../styleProps';
import { AnimLeft, AnimRight } from '../animation/WueScroll';


const Invite = () => {
    return(
        <>
        <div className = {Styles.Invite}>
            <Container>
                <CardGroup>
                    <Card style={BG_NONE}>
                        <div className={Styles.Invite_txt}>
                            <AnimLeft>
                                <p>Конно-спортивный клуб "Армада" приглашает на постой лошадей любого пола и возраста!</p>
                            </AnimLeft>
                        </div>
                    </Card>
                    <Card style={BG_NONE}>
                        <AnimRight>
                            <div className={Styles.Invite_contacts}>
                                <Image src={Phone}/>
                                <p>+7(967)017-99-63</p>
                            </div>
                            <div className={Styles.Invite_btn}>
                                <RegularButtonSolid title="Оставить заявку"/>
                            </div>
                        </AnimRight>
                    </Card>
                </CardGroup>
            </Container>
        </div>
        </>
    );
}

export default Invite;