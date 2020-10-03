import React from 'react';
import {Wrapper} from './NumberPanelSection/Wrapper';
import {generateOutput} from './NumberPanelSection/generateOutput';

type Props = {
	value: string;
	ok: () => void;
	onChange: (output: string) => void;
}
const NumberPanelSection: React.FC<Props> = (props) => {
	const output = props.value.toString();
	const setOutput = (output: string) => {
		if (output.length <= 16) {
			output.length === 0 && (output = '0');
			props.onChange(output);
		}
	};
	const onClickButtonWrapper = (e: React.MouseEvent) => {
		const text = (e.target as HTMLButtonElement).textContent;
		if (text === null) { return; }
		if (text === 'OK') {
			props.ok();
		}
		if ('1234567890.'.split('').concat(['清空', '删除']).indexOf(text) >= 0) {
			setOutput(generateOutput(text, output));
		}
	};
	return (
		<Wrapper>
			<div className="output">{output}</div>
			<div className="panel clearfix" onClick={onClickButtonWrapper}>
				<button>1</button>
				<button>2</button>
				<button>3</button>
				<button>删除</button>
				<button>4</button>
				<button>5</button>
				<button>6</button>
				<button>清空</button>
				<button>7</button>
				<button>8</button>
				<button>9</button>
				<button className="ok">OK</button>
				<button className="zero">0</button>
				<button>.</button>
			</div>
		</Wrapper>
	);
};

export {NumberPanelSection};