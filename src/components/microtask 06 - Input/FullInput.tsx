import { ChangeEvent, useState } from "react"

type FullInputPropsType = {
  addMessege: (title: string) => void // ...через FullInput из App сюда
}
export const FullInput = (props:FullInputPropsType) => {

  let [title, setTitle] = useState("") // Локальный стейт

  const onChangeInputHandler = (e:ChangeEvent<HTMLInputElement>) => { // Вынесли логику на верх
    setTitle(e.currentTarget.value) // currentTarget - тольк элемент, target - можно нажимать на дочерние элементы
  }

  const onClickBtnHandler = () => { // Вынесли логику на верх
    props.addMessege(title) // Передали функцию
    setTitle("") // очистили поле ввода
  }

  return (
    <div>
      <input type="text" value={title} onChange={onChangeInputHandler}/>
      <button onClick={onClickBtnHandler}>+</button>
    </div>
  )
}