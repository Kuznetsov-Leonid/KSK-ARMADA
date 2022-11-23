import Styles from "../styles/Button.module.scss";
/**
 *  Конструкция для ссылок
 *   <form action="https://getuikit.com/docs/icon" target="_blank">
 *      <LargeButtonOutline type="submit" title="LargeButtonOutline"/>
 *   </form>
 * 
 *  вызов компонентов
 *  1)<LargeButtonSolid/>
 *  2)<RegularButtonSolid/>
 *  3)<SmallButtonSolid/>
 */

/**
 * ButtonSolid
 * @param {href, onClick, disabled, type, value, id, title} props 
 * @returns кнопку со встроенными параметрами
 */
export const LargeButtonSolid = (props) => {
    return(
        <>
            <button 
                {...props}
                href      = {props.href}
                onClick   = {props.onClick}
                disabled  = {props.disabled}
                type      = {props.type}
                value     = {props.value}
                id        = {props.id}
                className = {`${Styles.LargeButtonSolid} ${Styles.Bg_none}`}
            >
                {props.title}
            </button>
        </>
    )
};

export const RegularButtonSolid = (props) => {
    return(
        <>
            <button 
                {...props}
                href      = {props.href}
                onClick   = {props.onClick}
                disabled  = {props.disabled}
                type      = {props.type}
                value     = {props.value}
                id        = {props.id}
                className = {`${Styles.RegularButtonSolid} ${Styles.Bg_none}`}
            >
                {props.title}
            </button>
        </>
    )
};

export const SmallButtonSolid = (props) => {
    return(
        <>
            <button 
                {...props}
                href      = {props.href}
                onClick   = {props.onClick}
                disabled  = {props.disabled}
                type      = {props.type}
                value     = {props.value}
                id        = {props.id}
                className = {`${Styles.SmallButtonSolid} ${Styles.Bg_none}`}
            >
                {props.title}
            </button>
        </>
    )
};