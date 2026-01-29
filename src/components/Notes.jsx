import { useState } from 'react'
import gridIcon from '../assets/images/grid.svg'
import listIcon from '../assets/images/list.svg'
import pencil from '../assets/images/pencil.svg'
import trash from '../assets/images/trash.svg'
import { useTodoStore } from '../store'

const Notes = () => {
    const [grid, setGrid] = useState(true)
    const removeNote = useTodoStore(state => state.removeNote)
    const setUpdate = useTodoStore(state => state.setUpdate)
    const setModal = useTodoStore(state => state.setModal)
    const setTitle = useTodoStore(state => state.setTitle)
    const setText = useTodoStore(state => state.setText)
    const notes = useTodoStore(state => state.notes)
    const lang = useTodoStore(state => state.lang)

    const updateNote = (note) => {
        setModal(true)
        setUpdate({ edit: true, note: note })
        setTitle(note.title)
        setText(note.text)
    }
    if(notes.length) {
        return (
            <div className="notes">
                <div className="container">
                    <div className="notes_top">
                        <h2 className="notes_top_title">{lang.allNotes}</h2>
                        <button className="notes_top_btn" onClick={() => setGrid(!grid)}>
                            {
                                grid ?
                                    <>
                                        <img src={listIcon} alt="" />
                                        <span>{lang.list}</span>
                                    </>
                                    : <>
                                        <img src={gridIcon} alt="" />
                                        <span>{lang.grid}</span>
                                    </>
                            }
                        </button>
                    </div>
                    <div className={`notes_box ${!grid && 'active'}`}>
                        {notes.map(note => (
                            <div className="notes_card" key={note.id}>
                                <div className="notes_card_info">
                                    <h3 className="notes_card_title">{note.title}</h3>
                                    <p className="notes_card_date">{note.date}</p>
                                </div>
                                <p className="notes_card_text">{note.text}</p>
                                <div className="notes_card_btns">
                                    <button className="btn btn_primary" onClick={() => updateNote(note)}>
                                        <img src={pencil} alt="" />
                                        {lang.edit}
                                    </button>
                                    <button className="btn btn_danger" onClick={() => removeNote(note.id)}>
                                        <img src={trash} alt="" />
                                        {lang.delete}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    } else {
        return <h1 className='noNote'>{lang.noNotes}</h1>
    }
}

export default Notes
