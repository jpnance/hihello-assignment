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
			<div className="Display">
				<IoDisplay result={input} />
			</div>
			<div className="ButtonGrid">
				<Button type="action" label="AC" handleClick={resetInput} />
				<Button type="action" label="±" handleClick={negateInput} />
				<Button type="action" label="%" handleClick={percentize} />
				<Button type="operation" label="÷" handleClick={setOperator.bind(null, 'divide')} />
				<Button type="digit" label="7" handleClick={appendDigitToInput.bind(null, 7)} />
				<Button type="digit" label="8" handleClick={appendDigitToInput.bind(null, 8)} />
				<Button type="digit" label="9" handleClick={appendDigitToInput.bind(null, 9)} />
				<Button type="operation" label="×" handleClick={setOperator.bind(null, 'multiply')} />
				<Button type="digit" label="4" handleClick={appendDigitToInput.bind(null, 4)} />
				<Button type="digit" label="5" handleClick={appendDigitToInput.bind(null, 5)} />
				<Button type="digit" label="6" handleClick={appendDigitToInput.bind(null, 6)} />
				<Button type="operation" label="-" handleClick={setOperator.bind(null, 'subtract')} />
				<Button type="digit" label="1" handleClick={appendDigitToInput.bind(null, 1)} />
				<Button type="digit" label="2" handleClick={appendDigitToInput.bind(null, 2)} />
				<Button type="digit" label="3" handleClick={appendDigitToInput.bind(null, 3)} />
				<Button type="operation" label="+" handleClick={setOperator.bind(null, 'add')} />
				<Button type="digit zero" label="0" handleClick={appendDigitToInput.bind(null, 0)} />
				<Button type="digit" label="." handleClick={startUsingDecimals} />
				<Button type="operation" label="=" handleClick={computeResult} />
			</div>
		</div>
	);
}

export default App;
