import Layout from 'components/Layout';
import React from 'react';
import styled from 'styled-components';
import {TagsSection} from './money/TagsSection';
import {CategorySection} from './money/CategorySection';
import {NumberPanelSection} from './money/NumberPanelSection';
import {NoteSection} from './money/NoteSection';

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
			<NumberPanelSection>
				<div className="output">100</div>
				<div className="panel clearfix">
					<button>1</button>
					<button>2</button>
					<button>3</button>
					<button>删除</button>
					<button>4</button>
					<button>5</button>
					<button>6</button>
					<button>清空</button>
					<button>7</button>
					<button>8</button>
					<button>9</button>
					<button className="ok">OK</button>
					<button className="zero">0</button>
					<button>.</button>
				</div>
			</NumberPanelSection>
		</MyLayout>
	);
}