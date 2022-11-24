import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import Logotype from '../../public/logotypes/Logo-web-leather_white.svg';
import Styles from '../../styles/Header.module.scss';
import Social_kit from '../socialKit/social_kit';


/**
 * 
 * @returns Хедер навбар
 */
const Header = () => {
    const AlternativeLogo = `
    "Логотип: тройка лошадей на квадратном, 
    розовом фоне с скруглёнными углами, 
    справа название компании - Армада, 
    снизу подпись конно-спортивный клуб."
    `
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className={`${Styles.Navbar_Accent}`} variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <Image
                            src       = {Logotype}
                            className = {`${Styles.Logotype}`}
                            alt       = {AlternativeLogo}
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className={`me-auto ${Styles.Nav}`}>
                            <Nav.Link href="#features" className={`${Styles.Active}`}>Главная</Nav.Link>
                            <Nav.Link href="#features" className={`${Styles.Link}`}>Услуги</Nav.Link>
                            <Nav.Link href="#features" className={`${Styles.Link}`}>Лушади</Nav.Link>
                            <Nav.Link href="#features" className={`${Styles.Link}`}>Блог</Nav.Link>
                            <Nav.Link href="#features" className={`${Styles.Link}`}>Контакты</Nav.Link>
                            <Nav.Link href="#features" className={`${Styles.Link}`}>Постой</Nav.Link>
                        </Nav>
                        <Nav className={`${Styles.Nav_social}`}>
                            <div eventKey={2} href="#memes">
                                <Social_kit/>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header