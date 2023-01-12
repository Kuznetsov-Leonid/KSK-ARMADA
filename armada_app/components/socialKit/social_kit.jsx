import Image from 'next/image';
import Vk from '../../public/social/Vk.svg';
import Tel from '../../public/social/Telegram.svg';
import Inst from '../../public/social/Instagram.svg';
import What from '../../public/social/Whatsup.svg';
import { Button } from 'react-bootstrap';
import Styles from '../../styles/Social_kit.module.scss';

/**
 * 
 * @returns Массив иконок ссылок на социальные сети
 */
const Social_kit = () => {
    return(
        <>
            <Button 
                variant   = 'link'
                target    = '_blank'
                rel="noopener"
                href      = 'https://vk.com/ksk_armada'
                className = {`${Styles.linkIco}`}
                >
                <Image 
                    src       = {Vk} 
                    alt       = "В контакте"
                    className = {`${Styles.Vk}`}
                />
            </Button>
            <Button 
                variant   = 'link'
                target    = '_blank'
                rel="noopener"
                href      = 'https://web.telegram.org/k/#1688111826'
                className = {`${Styles.linkIco}`}
                >
                <Image 
                    src       = {Tel} 
                    alt       = "Телеграм"
                    className = {`${Styles.Tel}`}
                />
            </Button>
            <Button 
                variant   = 'link'
                target    = '_blank'
                rel="noopener"
                href      = 'https://api.whatsapp.com/send/?phone=79670179963&text=Здравствуйте%2C+у+меня+есть+вопрос'
                className = {`${Styles.linkIco}`}
                >
                <Image 
                    src       = {What} 
                    alt       = "Вотсап"
                    className = {`${Styles.What}`}
                />
            </Button>
            <Button 
                variant   = 'link'
                target    = '_blank'
                rel="noopener"
                href      = 'https://www.instagram.com/ksk_armada/'
                className = {`${Styles.linkIco}`}
                >
                <Image 
                    src       = {Inst} 
                    alt       = "Инстагам"
                    className = {`${Styles.Inst}`}
                />
            </Button>
        </>
    );
}

export default Social_kit