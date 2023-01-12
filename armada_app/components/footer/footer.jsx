import Styles from '../../styles/Footer.module.scss';
import { Container, CardGroup, Card } from 'react-bootstrap';
import Logo from '../../public/logotypes/Logo-txt_black.svg';
import Image from 'next/image';
import Social_kit from '../socialKit/social_kit';
import Phone from '../../public/ui_Kit/iPhone.svg';
import Mail from '../../public/ui_Kit/Mail.svg';
import { useRouter } from 'next/router';
import { BG_NONE } from '../styleProps';
import Link from 'next/link';
/**
 * Футтер содержит 2 зоны.
 * 1 зона содержит 4 блока в первом блоке логотип + приемущественный текст + компонет social_kit,
 * во втором блоке карта сайта, в третьем блоке карта услуг, в четвёртом блоке карта контактов.
 * При достижении медиа ниже 992px 2 и 3 блоки скрываются по соображениям не нужности в отображении на 
 * мобильных устройствах т.к. по экспириенсу применяются другие механники взаимодействия с UI.
 * Во 2 зоне содержится копирайта с динамически изменяемой датой методом getFullYear().
 * При смене каллендарного года дата меняется автоматически.
 * @returns Footer
 */
const Footer = () => {
    let bg_none = BG_NONE
    let AlternativeLogo = `"Логотип: надпись - Армада, ниже конно-спортивный клуб."`;
    let date = new Date();
    let year = date.getFullYear();
    const {pathname} = useRouter()
    return(
        <footer>
            <div className = {`${Styles.Footer}`}>
                <div className={`
                    ${Styles.Aria1} 
                    ${pathname === '/rent' ? Styles.Light : Styles.Basic}`
                    }>
                    <Container>
                        <CardGroup>
                            <Card style={bg_none}>
                                <Image
                                    src = {Logo}
                                    alt = {AlternativeLogo}
                                    className = {`
                                    ${Styles.Logo} 
                                    ${Styles.MrAuto}`
                                }/>
                                <div className={Styles.Txt}>
                                    <p>
                                        Наш клуб&nbsp;&mdash; лидер обучения. У&nbsp;нас есть множество программ от&nbsp;ведущих тренеров спорта. Мы&nbsp;предлагаем актуальные подходы к&nbsp;обучению и&nbsp;высокое качество обслуживание.
                                    </p>
                                </div>
                                <div className = {Styles.MrAuto}>
                                    <Social_kit />
                                </div>
                            </Card>
                            <Card 
                                style     = {bg_none}
                                className = {`${Styles.DisplayNoneOnMobile}`}
                            >
                                <h1>Карта сайта</h1>
                                <div className={`${Styles.MapSite}`}>
                                    <Link href="/">Главная</Link>
                                    <Link href="/service">Услуги</Link>
                                    <Link href="/horses">Лошади</Link>
                                    <Link href="/blog">Блог</Link>
                                    <Link href="/contacts">Контакты</Link>
                                    <Link href="/rent">Постой</Link>
                                </div>
                            </Card>
                            <Card 
                                style     = {bg_none}
                                className = {`${Styles.DisplayNoneOnMobile}`}
                            >
                                <h1>Услуги</h1>
                                <div className={`
                                    ${Styles.MapService} 
                                    ${Styles.MapSite}`
                                    }>
                                    <Link href="/service">Конный прокат</Link>
                                    <Link href="/service">Обучение верховой езде</Link>
                                    <Link href="/service">Фотосессии</Link>
                                    <Link href="/service">Экскурсии</Link>
                                    <Link href="/service">Аренда денников</Link>
                                </div>
                            </Card>
                            <Card 
                                style={bg_none}
                                >
                                <h1>наши контакты</h1>
                                <div className={`${Styles.MapUsContacts}`}>
                                    <div style={{'display':'flex'}}>
                                        <Image src={Phone}/>
                                        <p>+7(967)017-99-63</p>
                                    </div>
                                    <div style={{'display':'flex'}}>
                                        <Image src={Mail}/>
                                        <p>ksk_armada@yahoo.com</p>
                                    </div>
                                    <div className={`
                                        ${Styles.MapService} 
                                        ${Styles.MapSite}`
                                        }>
                                            <br />
                                        <Link href={'/documents/doc'}>Документация</Link>
                                    </div>
                                </div>
                            </Card>
                        </CardGroup>
                    </Container>
                </div>
                <div className={`
                    ${Styles.Aria2} 
                    ${pathname === '/rent' ? Styles.Dark : Styles.Light}`
                    }>
                    <Container>
                        <div className={`${Styles.Copirited}`}>
                            <p><b>&copy;&ensp;All rights reserved KSK ARMADA&ensp;</b>{year}</p>
                        </div>
                    </Container>
                </div>
            </div>
        </footer>
    );
}

export default Footer