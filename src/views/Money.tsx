import Layout from 'components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from './money/TagsSection';
import {NoteSection} from './money/NoteSection';
import {CategorySection} from './money/CategorySection';
import {NumberPanelSection} from './money/NumberPanelSection';

const MyLayout = styled(Layout)`
	display: flex;
	flex-direction: column;
`;

type Category = '-' | '+';
export default function Money() {
	const [selected, setSelected] = useState({
		tags: [] as string[],
		note: '',
		category: '-' as Category,
		output: '0'
	});
	const onChange = (obj: Partial<typeof selected>) => {
		setSelected({...selected, ...obj});
	};
	return (
		<MyLayout>
			<TagsSection value={selected.tags}
									 onChange={tags => onChange({tags})}/>
			<NoteSection value={selected.note}
									 onChange={note => onChange({note})}/>
			<CategorySection value={selected.category}
											 onChange={category => onChange({category})}/>
			<NumberPanelSection value={selected.output}
													onChange={output => onChange({output})}/>
		</MyLayout>
	);
}