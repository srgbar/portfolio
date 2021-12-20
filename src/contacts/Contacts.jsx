import React from "react";
import style from "./Contacts.module.css";
import styleContainer from "../common/styles/Container.module.css";
import FormSendMessage from "../form_send_message/FormSendMessage";

function Contacts() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div>
                    <h1>Get in touch_</h1>
                    <dl className={style.contacts}>
                        <p>Phone: <span>+7 (921) 555-09-03</span></p>
                        <p>Email: <span>frontend@gmail.com</span></p>
                        <p>Skype: <span>frontend_react</span></p>
                    </dl>
                    <div className={style.link}>
                        <p><a href="https://github.com/" style={{color: "white"}}>GitHub</a></p>
                        <p> <a href="https://t.me/durov" style={{color: "white"}}>Telegram</a></p>
                        <p> <a href="https://ru.linkedin.com/" style={{color: "white"}}>Linkedin</a></p>
                    </div>
                </div>
                <div>
                    <p>Or just write me a letter here_</p>
                    <FormSendMessage/>
                </div>
                <div className={style.footer}><p>© 2021 Sergey Barbolin. All Rights Reserved</p></div>
            </div>
        </div>
    );
}

export default Contacts;
