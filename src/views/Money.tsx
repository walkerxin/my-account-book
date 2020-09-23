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
	return (
		<MyLayout>
			<TagsSection value={selected.tags}
									 onChange={(tags) => setSelected({
										 ...selected, tags
									 })}
			/>
			<NoteSection value={selected.note}
									 onChange={(note) => setSelected({
										 ...selected, note
									 })}
			/>
			<CategorySection value={selected.category}
											 onChange={(category) => setSelected({
												 ...selected, category
											 })}
			/>
			<NumberPanelSection value={selected.output}
													onChange={(output) => setSelected({
														...selected, output
													})}
			/>
		</MyLayout>
	);
}