import Layout from 'components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from './money/TagsSection';
import {NoteSection} from './money/NoteSection';
import {CategorySection} from './money/CategorySection';
import {NumberPanelSection} from './money/NumberPanelSection';
import {useAccountItems} from '../hooks/useAccountItems';

const MyLayout = styled(Layout)`
	display: flex;
	flex-direction: column;
`;

const CategoryWrapper = styled.div`
		background: #C4C4C4;
`;

const defaultData = {
	tagIds: [] as number[],
	note: '',
	category: '-' as Category,
	output: '0'
};

type Category = '-' | '+';
export default function Money() {
	const [selected, setSelected] = useState(defaultData);
	const onChange = (obj: Partial<typeof selected>) => {
		setSelected({...selected, ...obj});
	};
	const {addAccountItems} = useAccountItems();
	const submit = () => {
		if (addAccountItems(selected)) {
			alert('保存成功');
			setSelected(defaultData);
		}
	};
	return (
		<MyLayout scrollTop={9999}>
			<TagsSection value={selected.tagIds}
									 onChange={tagIds => onChange({tagIds})}/>
			<NoteSection value={selected.note}
									 onChange={note => onChange({note})}/>
			<CategoryWrapper>
				<CategorySection value={selected.category}
												 onChange={category => onChange({category})}/>
			</CategoryWrapper>
			<NumberPanelSection value={selected.output}
													onChange={output => onChange({output})}
													ok={submit}/>
		</MyLayout>
	);
}