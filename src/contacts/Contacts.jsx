import React from "react";
import s from "./Contacts.module.css";
import st from "../common/styles/Container.module.css";
import FormSendMessage from "../form_send_message/FormSendMessage";
import {FaGithub, FaLinkedin, FaTelegramPlane} from "react-icons/fa";

function Contacts() {
    return (
        <div className={s.mainBlock}>
            <div className={` ${st.container} ${s.contactsContainer} `}>
                <h1 className={st.title}>Get in touch_</h1>
                <div className={s.contacts}>
                    <div className={s.link}>
                        <p>Phone: <span>+7 (921) 555-09-03</span></p>
                        <p>Email: <span>frontend@gmail.com</span></p>
                        <p>Address: <span>Vologda Russia</span></p>
                    </div>
                    <div className={s.link}>
                        <p><a href="https://github.com/" target="_blank"><i><FaGithub
                            color={"white"}/></i> GitHub</a></p>
                        <p><a href="https://t.me/durov" target="_blank"><i><FaTelegramPlane
                            color={"white"}/></i> Telegram</a></p>
                        <p><a href="https://ru.linkedin.com/" target="_blank"><i><FaLinkedin
                            color={"white"}/></i> Linkedin</a></p>
                    </div>
                </div>
                <div className={s.blockConnect}>
                    <p>Or just write me a letter here_</p>
                    <FormSendMessage/>
                </div>
            </div>
            <div className={s.footer}><p>© 2022 app created by Sergey Barbolin</p></div>
        </div>
    )
}

export default Contacts;
