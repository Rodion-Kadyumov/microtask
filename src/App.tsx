import { useState } from 'react';
import { FullInput } from './components/microtask 06 - Input/FullInput';
import { Button } from './components/microtask 06 - Input/Button';
import { Input } from './components/microtask 06 - Input/Input';

function App() {

  let [messege, setMessege] = useState( [
    {messege: "Messege"}
  ])

  const addMessege = (title: string) => { // Функция добавления, прокидываем её...
    let newMessege = {messege: title};
    setMessege([newMessege, ...messege]) // Ставим новое сообщение впереди старых
  }


  let [title, setTitle] = useState("") // Локальный стейт для Input

  const callBackBtnHandler = () => { // ... сюда, и в...
    addMessege(title)
    setTitle("") // Отчистили поле ввода
  }

    return (
      <div className="App">
        <FullInput addMessege={addMessege}/>
        <Input setTitle={setTitle} title={title}/> 
        <Button name={"+"} callBack={callBackBtnHandler} />
        <div>
          {messege.map((el, i) => {
            return (
              <div key={i}>{el.messege}</div>
            )
          })}
        </div>
      </div>
    );
}

export default App;