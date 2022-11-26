import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import Logotype from '../../public/logotypes/Logo-web-leather_white.svg';
import Styles from '../../styles/Header.module.scss';
import Social_kit from '../socialKit/social_kit';
import { NavigationAPI } from '../../pages/api/NavigationAPI';
import { useRouter } from 'next/router';
import Link from 'next/link';

/**
 * 
 * @returns Хедер навбар
 */
const Header = () => {
    const {pathname} = useRouter()
    
    const AlternativeLogo = `
    "Логотип: тройка лошадей на квадратном, 
    розовом фоне с скруглёнными углами, 
    справа название компании - Армада, 
    снизу подпись конно-спортивный клуб."
    `;
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" className={pathname === '/rent' ? Styles.Navbar_DeepGray : Styles.Navbar_Accent} variant="dark">
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
                        <Nav 
                            className={`me-auto ${Styles.Nav}`} 
                            style={{'margin':'auto'}}
                            >
                            {NavigationAPI.map(({ id, title, path }) => (
                                <Link
                                    key       = {id} 
                                    href      = {path} 
                                    className = {`${pathname === path ? Styles.Active : Styles.Link}`}
                                >
                                    {title}
                                </Link>
                            ))}
                        </Nav>
                        <Nav className={`${Styles.Nav_social}`}>
                            <div>
                                <Social_kit/>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header