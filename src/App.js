import { Container, Content, Row, Column } from './styles';
import Input from './components/Input';
import Buttons from './components/Buttons';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === "0" ? '' : prev}${num}`);
  }

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation('');
  }

  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')
    }
  }

  const handleMinusNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation('-');
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')
    }
  }

  const handleEquals = () => {
    if (!firstNumber !== "0" && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case '*':
          handlePlusNumbers();
          break;
        case '/':
          handleSplitNumbers();
          break;
        default:
          break;
      }
    }
  }

  const handlePlusNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation('*');
    } else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')
    }
  }

  const handleSplitNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation('/');
    } else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('')
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />

        <Row>
          <Buttons label="C" onClick={handleOnClear} />
          <Buttons label="0" onClick={() => handleAddNumber('0')} />
          <Buttons label="+" onClick={handleSumNumbers} />
          <Buttons label="-" onClick={handleMinusNumbers} />
          
        </Row>

        <Row>
          <Buttons label="7" onClick={() => handleAddNumber('7')} />
          <Buttons label="8" onClick={() => handleAddNumber('8')} />
          <Buttons label="9" onClick={() => handleAddNumber('9')} />
          <Buttons label="/" onClick={handleSplitNumbers} />
          

        </Row>

        <Row>
          <Buttons label="4" onClick={() => handleAddNumber('4')} />
          <Buttons label="5" onClick={() => handleAddNumber('5')} />
          <Buttons label="6" onClick={() => handleAddNumber('6')} />
          <Buttons label="*" onClick={handlePlusNumbers} />
        </Row>

        <Row>
          <Buttons label="1" onClick={() => handleAddNumber('1')} />
          <Buttons label="2" onClick={() => handleAddNumber('2')} />
          <Buttons label="3" onClick={() => handleAddNumber('3')} />
          <Buttons label="=" onClick={handleEquals} />
          
        </Row>

      </Content>
    </Container>


  );
}

export default App;
