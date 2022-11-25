import Input from './components/Input'
import Button from './components/Button'

import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  

  const handleAddNumber = (numero) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${numero}`)
  }

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }

  const handleSumNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleSubNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('-')
    } else {
      const sub = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(sub))
      setOperation('')
    }
  }

  const handleMultNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('x')
    } else {
      const mult = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(mult))
      setOperation('')
    }
  }

  const handleDivNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('/')
    } else {
      const div = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(div))
      setOperation('')
    }
  }

  const handleResult = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumbers()
          break
        case '-':
          handleSubNumbers()
          break
        case 'x':
          handleMultNumbers()
          break
        case '/':
          handleDivNumbers()
          break
        default: 
          break
      }
    }
  }



  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="x" onClick={handleMultNumbers} />
          <Button label="/" onClick={handleDivNumbers} />
          <Button label="+" onClick={handleSumNumbers} />
          <Button label="-" onClick={handleSubNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="C" onClick={handleOnClear} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="=" onClick={handleResult} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="." onClick={() => handleAddNumber('.')} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
