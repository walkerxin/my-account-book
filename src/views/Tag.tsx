import React from 'react';
import {useParams} from 'react-router-dom';
import {useTags} from 'useTags';
import Icon from 'components/Icon';
import Layout from 'components/Layout';
import styled from 'styled-components';
import {Button} from 'components/Button';
import {Center} from 'components/Center';
import {Space} from 'components/Space';
import {Input} from 'components/Input';

const Topbar = styled.header`
	background: #FFF;
	display: flex;
	justify-content: space-between;
	align-items: center;
	line-height: 20px;
	padding: 14px 24px;
`;

const Wrapper = styled.section`
	font-size: 16px;
	background: #FFF;
	margin-top: 8px;
	height: 44px;
`;

type Params = {
	tagId: string
}

const Tag: React.FC = () => {
	const {findTag} = useTags();
	const {tagId} = useParams<Params>();
	const currentTag = findTag(parseInt(tagId));
	return (
		<Layout>
			<Topbar>
				<Icon name="left"/>
				<span>编辑标签</span>
				<Icon/>
			</Topbar>
			<Wrapper>
				<Input label="标签名" value={currentTag ? currentTag.name : ''}/>
			</Wrapper>
			<Center>
				<Space/>
				<Space/>
				<Space/>
				<Button>删除标签</Button>
			</Center>
		</Layout>
	);
};

export {Tag};