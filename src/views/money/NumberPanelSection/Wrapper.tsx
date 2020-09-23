import styled from 'styled-components';

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

export {Wrapper};