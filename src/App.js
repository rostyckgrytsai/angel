import './App.css';
import React, { useState } from 'react';

const Variant = (props) => {
  return (
    <div className={'variant ' + (props.isClicked && (props.right == props.option ? 'green' : 'red'))} onClick={() => { props.setChosen(props.option); props.setClicked(true) }}>
      {props.option}
    </div>
  )
}


const Card = (props) => {

  const [choosen, setChosen] = useState()
  const [clicked, setClicked] = useState(false)

  return (
    <div className="card">
      <div className={'question'}>{props.question}</div>
      {props.options.map((option) => {
        return (<Variant option={option} setChosen={setChosen} setClicked={setClicked} isClicked={clicked && (choosen == option)} right={props.right} />)
      })}
      {clicked && (props.right == choosen ? <div className="next" onClick={() => { props.setCardNumber(props.cardNumber + 1); setClicked(false) }}>Next</div> : <div className="tryAgain" onClick={() => { setClicked(false) }}>Try again</div>)}
    </div>
  )
}


const LastCard = () =>{
  return(
    <div className='card'>
      <h1>Вітаю, ти пройшла вікторину!</h1>
      Зірочка, просто знай що ти найкраща в цьому світі! Може я іноді і лажаю, але знай ти найкраще що є в моєму житті, я тебе ціную  і люблю, ти просто найкраща, цьом!
      Ти в мене дуже дуже красива і розумна,  в тебе все все вийде, я дуже вірю  в тебе, ти моя зірочка, пам'ятай це завжди!
      Люблю тебе, твій Ростик)
      P.S. Якщо захочеш віддячити розробнику вікторини, просто посміхнися, я відчую :)&#10084;
    </div>
  )
}

const Cards = () => {

  const QUESTIONS = [
    {
      question: "Найяскравіша зірка на небі?",
      options: [
        "Сіріус",
        "Ангеліна",
        "Бетельгейзе",
      ],
      right: "Ангеліна",
    },
    {
      question: "Найдорожча річ у світі?",
      options: [
        "Твоя посмішка",
        "Злиток золота",
        "Діамант",
      ],
      right: "Твоя посмішка",
    },
    {
      question: "Місс всесвіту 2024-до бізкінечності",
      options: [
        "Родом з британії",
        "Лев за знаком зодіаку",
        "Має кота",
      ],
      right: "Лев за знаком зодіаку",
    },
    {
      question: "Ідеальна пара для Ткачук Ангеліни Андріївни",
      options: [
        "Накачаний мачо",
        "Грицай Ростислав Ігорович",
        "Успішний бізнесмен",
      ],
      right: "Грицай Ростислав Ігорович",
    },
    {
      question: "В кого найстункіші і найгарніші ніжки у світі?",
      options: [
        "Якщо це читає Ангеліна то в тебе,  якщо ні, то в Ангеліни!!!",
        "Дженіфер Лопес",
        "Фанджеліна Джолі",
      ],
      right: "Якщо це читає Ангеліна то в тебе,  якщо ні, то в Ангеліни!!!",
    },
    {
      question: "Чий запах неможливо забути?",
      options: [
        "Коко Щанель",
        "Маминих булочок",
        "Ангеліни",
      ],
      right: "Ангеліни",
    },
    {
      question: "--- завідувач хірургічного відділення в обласній лікарні міста Львів",
      options: [
        "Ткачук А.А",
        "Тарас Степанович",
        "Степан Тарасович",
      ],
      right: "Ткачук А.А",
    },
    {
      question: "Хто робить так що я посміхаюся кожного дня?",
      options: [
        "Морфій",
        "Ти, Ангеліна!",
        "Антидепресанти",
      ],
      right: "Ти, Ангеліна!",
    },
  ]

  const [cardNumber, setCardNumber] = useState(0)

  return (
    <div className="cards">
      {cardNumber<QUESTIONS.length?<Card question={QUESTIONS[cardNumber].question} options={QUESTIONS[cardNumber].options} right={QUESTIONS[cardNumber].right} setCardNumber={setCardNumber} cardNumber={cardNumber} />:<LastCard/>}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Cards />
    </div>
  );
}

export default App;
