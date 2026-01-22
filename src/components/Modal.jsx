import React from 'react'

const Modal = () => {
  const { modal, setModal } = useTodoStore()
  return (
    <div>
      <div className="modal">
        <div className="modal_card">
          <h2 className="modal_card_title">Qayd qo'shish</h2>
          <label className="modal_card_label">
            <span>Sarlavha</span>
            <input type="text" placeholder='Sarlavha' />
          </label>
          <label className="modal_card_label">
            <span>Matn</span>
            <input type="text" placeholder='Matn' />
          </label>
          <div className="modal_card_btns">
            <button className="btn btn_danger">BEKOR QILISH</button>
            <button className="btn btn_primary">QO'SHISH</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
