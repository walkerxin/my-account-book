import styled from 'styled-components';

const NoteSection = styled.section`
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

export {NoteSection};