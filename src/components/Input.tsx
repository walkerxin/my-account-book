import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
	font: inherit;
	display: flex;
	padding: 0 16px;
	align-items: center;
	justify-content: center;
	height: 100%;
	> span {
		white-space: nowrap;
	}
	> input {
		border:none;
		background: none;
		margin-left: 16px;
		width: 100%;
	}
`;

type Props = {
	label: string;
} & React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<Props> = (props) => {
	const {label, children, ...rest} = props;
	return (
		<Label>
			<span>{props.label}</span>
			<input type="text" {...rest} />
		</Label>
	);
};

export {Input};