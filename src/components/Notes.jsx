import { useState } from 'react'
import gridIcon from '../assets/images/grid.svg'
import listIcon from '../assets/images/list.svg'
import pencil from '../assets/images/pencil.svg'
import trash from '../assets/images/trash.svg'

const Notes = () => {
    const [grid, setGrid] = useState(true)
    return (
        <div className="notes">
            <div className="container">
                <div className="notes_top">
                    <h2 className="notes_top_title">Barcha qaydlar</h2>
                    <button className="notes_top_btn" onClick={() => setGrid(!grid)}>
                        {
                            grid ?
                                <>
                                    <img src={listIcon} alt="" />
                                    <span>Ro'yxat</span>
                                </>
                                : <>
                                    <img src={gridIcon} alt="" />
                                    <span>Jadval</span>
                                </>
                        }
                    </button>
                </div>
                <div className={`notes_box ${!grid && 'active'}`}>
                    <div className="notes_card">
                        <div className="notes_card_info">
                            <h3 className="notes_card_title">Sarlavha</h3>
                            <p className="notes_card_date">05.12.2025</p>
                        </div>
                        <p className="notes_card_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        <div className="notes_card_btns">
                            <button className="btn btn_primary">
                                <img src={pencil} alt="" />
                                TAHRIRLASH
                            </button>
                            <button className="btn btn_danger">
                                <img src={trash} alt="" />
                                O'CHIRISH
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notes
