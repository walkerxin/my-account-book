import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import {Input} from '../../components/Input';

const Wrapper = styled.section`
	font-size: 14px;
	line-height: 72px;
`;

type Props = {
	value: string;
	onChange: (note: string) => void;
}

const NoteSection: React.FC<Props> = (props) => {
	const note = props.value;

	const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		props.onChange(e.target.value);
	};

	return (
		<Wrapper>
			<Input label="备注" placeholder="在这里添加备注" value={note} onChange={onChange}/>
		</Wrapper>
	);
};

export {NoteSection};