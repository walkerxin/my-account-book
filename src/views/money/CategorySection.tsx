import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
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

const CategorySection = () => {
	const categoryMap = {'-': '支出', '+': '收入'};
	type CategoryMap = keyof typeof categoryMap;
	const [categoryList] = useState<CategoryMap[]>(['-', '+']);
	const [category, setCategory] = useState('-');

	return (
		<Wrapper>
			<ul>
				{categoryList.map(c =>
					<li key={c} className={category === c ? 'selected' : ''}
							onClick={() => setCategory(c)}
					>{categoryMap[c]}
					</li>
				)}
			</ul>
		</Wrapper>
	);
};

export {CategorySection};