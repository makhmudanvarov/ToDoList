import React, { useState } from 'react'
import uzFlag from '../assets/images/UzFlag.png'
import ruFlag from '../assets/images/RuFlag.png'
import searchIcon from '../assets/images/search.svg'
import backIcon from '../assets/images/back.svg'
import clearIcon from '../assets/images/clear.svg'
import { uz, ru } from '../utils/lang.js'

const Nav = () => {
    const [lang, setLang] = useState(uz)
    const [active, setActive] = useState(false)
    const [search, setSearch] = useState(false)

    const changeActive = (str) => {
        setActive(!active)
        setLang(str == 'uz' ? uz : ru)
    }

    return (
        <>
            <nav className="nav">
                <div className="nav_lang">
                    <button className={`nav_lang_btn ${active && 'active'}`} onClick={() => changeActive('uz')}>
                        Uz
                        <img src={uzFlag} alt="" />
                    </button>
                    <button className={`nav_lang_btn ${!active && 'active'}`} onClick={() => changeActive('ru')}>
                        Ru
                        <img src={ruFlag} alt="" />
                    </button>
                </div>
                <h2 className="nav_title">{lang.navTitle}</h2>
                <button className="nav_btn" onClick={() => setSearch(true)}>
                    <img src={searchIcon} alt="" />
                </button>
            </nav>
            <nav className={`nav nav_search ${search && 'active'}`}>
                <button className="nav_back" onClick={() => setSearch(false)}>
                    <img src={backIcon} alt="" />
                </button>
                <div className="container">
                    <input className='nav_search_input' type="text" placeholder={lang.search} />
                </div>
                <button className="nav_clear">
                    <img src={clearIcon} alt="" />
                </button>
            </nav>
        </>
    )
}

export default Nav
