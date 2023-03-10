import './Button.css';

type ButtonProps = {
	label: string;
	handleClick: () => void;
}

function Button({ label, handleClick }: ButtonProps) {
	return <div className="Button" onClick={(e) => handleClick()}>{label}</div>;
};

export default Button;
