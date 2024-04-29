type BtnPropsType = {
  name: string
  callBack: () => void
}

export const Button = (props:BtnPropsType) => {

  const onClickBtnHandler = () => { // Вынесли логику на верх
    props.callBack() // Компонента должна быть глупой...
  }

  return (
    <button onClick={onClickBtnHandler}>{props.name}</button> // Универсальная кнопка
  );
}