import React from "react";
import s from './Nav.module.css';

function Nav() {
    return (
        <div className={s.nav}>
            <a className={s.link} href="">Main</a>
            <a className={s.link} href="">Skills</a>
            <a className={s.link} href="">Projects</a>
            <a className={s.link} href="">Contacts</a>
        </div>
    );
}

export default Nav;
