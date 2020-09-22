import styled from 'styled-components';

const CategorySection = styled.section`
	> ul {
		font-size: 24px;
		display: flex;
		background: #C4C4C4;
		> li {
			flex: 1;
			text-align: center;
			padding: 18px 0;
			position: relative;
			&.selected::after {
				content: '';
				position: absolute;
				left: 0;
				bottom: 0;
				width: 100%;
				height: 4px;
				background: #333;
			}
		}
	}
`;

export {CategorySection};