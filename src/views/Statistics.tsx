import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from 'views/money/CategorySection';
import {AccountItem, useAccountItems} from 'hooks/useAccountItems';
import {useTags} from 'hooks/useTags';
import day from 'dayjs';

const CategoryWrapper = styled.section`
	background: #FFF;
`;

const Record = styled.div`
	font-size: 18px;
	display:flex;
	justify-content: space-between;
	line-height: 20px;
	padding: 10px 16px;
	background: #FFF;
	> .note {
		margin-right: auto;
		margin-left: 14px;
		color: #999;
	}
	&.date-header {
		background: inherit;
	}
`;

export default function Statistics() {
	const [category, setCategory] = useState<'+' | '-'>('-');
	const {accountItems} = useAccountItems();
	const {getTagName} = useTags();
	const hash: { [K: string]: AccountItem[] } = {};
	const currentRecords = accountItems.filter(item => item.category === category);

	currentRecords.forEach(record => {
		const key = day(record.createAt).format('YYYY-MM-DD');
		(!(key in hash)) && (hash[key] = [])
		hash[key].push(record);
	});

	const array = Object.entries(hash).sort((a, b) => {
		return a[0] > b[0] ? -1 : 1;
	});

	return (
		<Layout>
			<CategoryWrapper>
				<CategorySection value={category}
												 onChange={category => setCategory(category)}/>
			</CategoryWrapper>
			<section>
				{array.map(([date, records]) =>
					<div key={date}>
						<Record className="date-header">
							<span>{date}</span>
							<span>¥ {records.reduce((sum, r) => sum + parseFloat(r.output), 0)}</span>
						</Record>
						{records.map(item =>
							<Record key={JSON.stringify(item)}>
								<span className="tags">{item.tagIds.sort().map(tagId => getTagName(tagId)).join('&')}</span>
								{item.note && <span className="note">{item.note}</span>}
								<span className="amount">¥ {item.output}</span>
							</Record>)}
					</div>)
				}
			</section>
		</Layout>
	);
}