import './Button.css';

type ButtonProps = {
	type: string;
	label: string;
	handleClick: () => void;
}

function Button({ type, label, handleClick }: ButtonProps) {
	return <div className={`Button ${type}`} onClick={(e) => handleClick()}>{label}</div>;
};

export default Button;
