import React, { useState } from 'react';
import { Container, CardGroup, Card } from 'react-bootstrap';
import Styles from '../../styles/Invite.module.scss';
import Image from 'next/image';
import { RegularButtonSolid } from '../buttons/buttons_solid';
import Phone from '../../public/ui_Kit/iPhone.svg';
import { BG_NONE } from '../styleProps';
import { AnimLeft, AnimRight } from '../animation/WueScroll';
import FormModal from '../modal/formModal';


const Invite = () => {
    const [show, setShow] = useState(false);
    
    return(
        <>
        <div className = {Styles.Invite}>
            <Container>
                <CardGroup>
                    <Card style={BG_NONE}>
                        <div className={Styles.Invite_txt}>
                            <AnimLeft>
                                <p>Конно-спортивный клуб &quot;Армада&quot; приглашает на постой лошадей любого пола и возраста!</p>
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
                                <RegularButtonSolid 
                                    onClick = {() => setShow(true)}
                                    title = "Оставить заявку"
                                />
                            </div>
                        </AnimRight>
                    </Card>
                </CardGroup>
            </Container>
        </div>
        <FormModal
            show   = {show}
            onHide = {() => setShow(false)}
        />
        </>
    );
}

export default Invite;