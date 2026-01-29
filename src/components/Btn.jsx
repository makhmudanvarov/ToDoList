import white_pencil from '../assets/images/white_pencil.svg'
import { useTodoStore } from '../store'

const Btn = () => {
  const setModal = useTodoStore(state => state.setModal)
  return (
    <button className="addBtn" onClick={() => setModal(true)}>
      <img src={white_pencil} alt="" />
    </button>
  )
}

export default Btn
