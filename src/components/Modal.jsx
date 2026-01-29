import { useTodoStore } from '../store'
import { v4 } from 'uuid'

const Modal = () => {
  const id = v4();
  const { modal, setModal, title, text, setTitle, setText, setNotes, notes, lang, update, setUpdate } = useTodoStore()
  const closeModal = () => {
    setModal(false)
    setTitle('')
    setText('')
    setUpdate({ edit: false, note: null })
  }
  const addNote = () => {
    if (text.length > 2 && title.length > 2) {
      const newNote = {
        id: update.edit ? update.note.id : id,
        title: title,
        text: text,
        date: new Date().toLocaleDateString()
      }
      if (update.edit) {
        setNotes(notes.map(note => note.id == update.note.id ? newNote : note))
        setUpdate({ edit: false, note: null })
      } else {
        setNotes([...notes, newNote])
      }
      closeModal()
    }
  }
  if (modal) {
    return (
      <div>
        <div className="modal">
          <div className="modal_card">
            <h2 className="modal_card_title">{update.edit ? lang.changeNote : lang.addNote}</h2>
            <label className="modal_card_label">
              <span>{lang.noteTitle}</span>
              <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder={lang.noteTitle} />
            </label>
            <label className="modal_card_label">
              <span>{lang.noteText}</span>
              <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder={lang.noteText} />
            </label>
            <div className="modal_card_btns">
              <button className="btn btn_danger" onClick={closeModal}>{lang.noteCancel}</button>
              <button className="btn btn_primary" onClick={addNote}>{update.edit ? lang.change : lang.add}</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal
