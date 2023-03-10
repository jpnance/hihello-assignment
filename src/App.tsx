import React from 'react';
import IoDisplay from './IoDisplay';
import Button from './Button';
import './App.css';

function App() {
	//const [result, setResult] = React.useState(0);
	const [input, setInput] = React.useState(0);
	const [operand, setOperand] = React.useState(0);
	const [decimals, setDecimals] = React.useState(0);
	const [operation, setOperation] = React.useState('none');

	const appendDigitToInput = (digit: number) => {
		let newInput = input;

		newInput *= Math.pow(10, decimals || 1);
		newInput += digit;

		if (decimals > 0) {
			newInput /= Math.pow(10, decimals);
			setDecimals(decimals + 1);
		}

		setInput(newInput);
	};

	const computeResult = () => {
		let newResult = 0;

		switch (operation) {
			case 'add':
				newResult = operand + input;
				break;

			case 'subtract':
				newResult = operand - input;
				break;

			case 'multiply':
				newResult = operand * input;
				break;

			case 'divide':
				newResult = operand / input;
				break;

			case 'none':
			default:
				newResult = input;
				break;
		}

		setInput(newResult);
	};

	const negateInput = () => {
		setInput(input * -1);
	};

	const percentize = () => {
		setInput(input / 100);
		setDecimals(3);
	};

	const resetInput = () => {
		setInput(0);
		setOperand(0);
		setOperation('none');
		setDecimals(0);
	};

	const setOperator = (operation: string) => {
		setOperand(input);
		setOperation(operation);
		setInput(0);
		setDecimals(0);
	};

	const startUsingDecimals = () => {
		if (decimals === 0) {
			setDecimals(1);
		}
	};

	return (
		<div className="App">
			<IoDisplay result={input} />
			<div className="ButtonGrid">
				<Button label="AC" handleClick={resetInput} />
				<Button label="±" handleClick={negateInput} />
				<Button label="%" handleClick={percentize} />
				<Button label="0" handleClick={appendDigitToInput.bind(null, 0)} />
				<Button label="1" handleClick={appendDigitToInput.bind(null, 1)} />
				<Button label="2" handleClick={appendDigitToInput.bind(null, 2)} />
				<Button label="3" handleClick={appendDigitToInput.bind(null, 3)} />
				<Button label="4" handleClick={appendDigitToInput.bind(null, 4)} />
				<Button label="5" handleClick={appendDigitToInput.bind(null, 5)} />
				<Button label="6" handleClick={appendDigitToInput.bind(null, 6)} />
				<Button label="7" handleClick={appendDigitToInput.bind(null, 7)} />
				<Button label="8" handleClick={appendDigitToInput.bind(null, 8)} />
				<Button label="9" handleClick={appendDigitToInput.bind(null, 9)} />
				<Button label="." handleClick={startUsingDecimals} />
				<Button label="+" handleClick={setOperator.bind(null, 'add')} />
				<Button label="-" handleClick={setOperator.bind(null, 'subtract')} />
				<Button label="÷" handleClick={setOperator.bind(null, 'divide')} />
				<Button label="×" handleClick={setOperator.bind(null, 'multiply')} />
				<Button label="=" handleClick={computeResult} />
			</div>
		</div>
	);
}

export default App;
