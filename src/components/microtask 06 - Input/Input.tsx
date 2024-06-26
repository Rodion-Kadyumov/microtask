import { ChangeEvent } from "react"

type InputPropsType = { // Передаем Input необходимые значения
  setTitle: (title: string) => void
  title: string
}
export const Input = (props: InputPropsType) => {

  const onChangeInputHandler = (e:ChangeEvent<HTMLInputElement>) => {
    props.setTitle(e.currentTarget.value)
  }
  return (
    <div>
      <input value={props.title} onChange={onChangeInputHandler}/>
    </div>
  )
}