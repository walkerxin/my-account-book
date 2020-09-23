import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
	> .output {
		font-size: 36px;
		line-height: 72px;
		background: #FFF;
		text-align: right;
		padding: 0 16px;
		box-shadow: inset 0 -2px 2px -2px rgba(0,0,0,0.25),
								inset 0 2px 4px -2px rgba(0,0,0,0.25)
	}
	> .panel {
		> button {
			width: 25%;
			height: 64px;
			font-size: 18px;
			border: none;
			float: left;
			&.zero {
				width: 50%;
			}
			&.ok {
				height: 128px;
				float: right;
				background: #9A9A9A;
			}
			&:nth-child(1) {
				background: #F2F2F2;
			}
			&:nth-child(2),
			&:nth-child(5) {
				background: #E0E0E0;
			}
			&:nth-child(3),
			&:nth-child(6),
			&:nth-child(9) {
				background: #D3D3D3;
			}
			&:nth-child(4),
			&:nth-child(7),
			&:nth-child(10) {
				background: #C1C1C1;
			}
			&:nth-child(8),
			&:nth-child(11),
			&:nth-child(13) {
				background: #B8B8B8;
			}
			&:nth-child(14) {
				background: #A9A9A9;
			}
		}
	}
`;

const NumberPanelSection = () => {
	const [output, _setOutput] = useState('0');
	const setOutput = (output: string) => {
		if (output.length <= 16) {
			output.length === 0 && (output = '0');
			_setOutput(output);
		}
	};
	const onClickButtonWrapper = (e: React.MouseEvent) => {
		const text = (e.target as HTMLButtonElement).textContent;
		switch (text) {
			case '.':
				if (output.indexOf('.') >= 0) {
					return;
				}
				setOutput(output + text);
				break;
			case '删除':
				setOutput(output.slice(0, -1));
				break;
			case '清空':
				setOutput('');
				break;
			case 'OK':
				break;
			default:
				if (!text) { return; }
				if (output === '0') {
					setOutput(text);
					return;
				}
				setOutput(output + text);
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