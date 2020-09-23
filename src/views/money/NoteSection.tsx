import styled from 'styled-components';
import React, {useRef} from 'react';

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

type Props = {
	value: string;
	onChange: (note: string) => void;
}

const NoteSection: React.FC<Props> = (props) => {
	const note = props.value;
	const refInput = useRef<HTMLInputElement>(null);

	function onBlur() {
		if (refInput.current !== null) {
			props.onChange(refInput.current.value);
			return;
		}
		props.onChange('');
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