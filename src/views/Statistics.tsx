import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from 'views/money/CategorySection';
import {useAccountItems} from 'hooks/useAccountItems';
import {useTags} from 'hooks/useTags';

const CategoryWrapper = styled.section`
	background: #FFF;
`;

const Record = styled.div`
	font-size: 18px;
	display:flex;
	justify-content: space-between;
	line-height: 20px;
	padding: 10px 16px;
	> .note {
		margin-right: auto;
		margin-left: 14px;
		color: #999;
	}
`;

export default function Statistics() {
	const [category, setCategory] = useState<'+' | '-'>('-');
	const {accountItems} = useAccountItems();
	const {getTagName} = useTags();
	const currentRecords = accountItems.filter(item => item.category === category);

	return (
		<Layout>
			<CategoryWrapper>
				<CategorySection value={category}
												 onChange={category => setCategory(category)}/>
			</CategoryWrapper>
			<section>
				{	currentRecords.map(item =>
						<Record key={JSON.stringify(item)}>
							<span className="tags">{item.tagIds.sort().map(tagId => getTagName(tagId)).join('&')}</span>
							{item.note && <span className="note">{item.note}</span>}
							<span className="amount">¥ {item.output}</span>
						</Record>
					)
				}
			</section>
		</Layout>
	);
}