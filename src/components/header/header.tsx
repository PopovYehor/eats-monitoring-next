import style from "./header.module.scss"
export function Header (){
    return(
        <header className={style.header}>
            <figure className={style.header_icon_wrap}>
                <img className={style.header_icon} src="https://i.ibb.co/2cjMbjh/title.png" alt="" />
            </figure>
            <div>
                
            </div>
        </header>
    )
}