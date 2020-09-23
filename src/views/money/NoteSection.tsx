import styled from 'styled-components';
import React, {useRef, useState} from 'react';

const Wrapper = styled.section`
	> label {
		font-size: 14px;
		background: #F5F5F5;
		display: flex;
		padding: 0 16px;
		align-items: center;
		> span {
			white-space: nowrap;
		}
		> input {
			border:none;
			background: none;
			margin-left: 16px;
			width: 100%;
			height: 72px;
		}
	}
`;

const NoteSection: React.FC = () => {
	const [note, setNote] = useState('');
	const refInput = useRef<HTMLInputElement>(null);

	function onBlur() {
		if (refInput.current !== null) {
			setNote(refInput.current.value);
			return;
		}
		setNote('');
	}

	return (
		<Wrapper>
			<label>
				<span>备注</span>
				<input type="text" placeholder="在这里添加备注"
							 defaultValue={note}
							 ref={refInput}
							 onBlur={onBlur}
				/>
			</label>
		</Wrapper>
	);
};

export {NoteSection};