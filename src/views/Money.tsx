import Layout from 'components/Layout';
import React from 'react';
import styled from 'styled-components';
import {TagsSection} from './money/TagsSection';
import {NoteSection} from './money/NoteSection';
import {CategorySection} from './money/CategorySection';
import {NumberPanelSection} from './money/NumberPanelSection';

const MyLayout = styled(Layout)`
	display: flex;
	flex-direction: column;
`;

export default function Money() {
	return (
		<MyLayout>
			<TagsSection/>
			<NoteSection/>
			<CategorySection/>
			<NumberPanelSection/>
		</MyLayout>
	);
}