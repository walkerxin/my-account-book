import React from 'react';
import {useParams, Link} from 'react-router-dom';
import {useTags} from 'hooks/useTags';
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
	line-height: 44px;
`;

type Params = {
	tagId: string
}

const Tag: React.FC = () => {
	const {findTag, updateTag, deleteTag} = useTags();
	const {tagId} = useParams<Params>();
	const currentTag = findTag(parseInt(tagId));

	const genEditContent = (tag: { id: number, name: string }) => {
		return tag ? (
			<div>
				<Wrapper>
					<Input label="标签名" value={tag ? tag.name : ''}
								 onChange={(e) => updateTag(currentTag.id, {name: e.target.value})}/>
				</Wrapper>
				<Center>
					<Space/>
					<Space/>
					<Space/>
					<Button onClick={onDeleteTag}>删除标签</Button>
				</Center>
			</div>
		) : <Center>tag 已被删除</Center>;
	};

	const onDeleteTag = () => {
		deleteTag(currentTag.id);
		window.location.hash = 'tags';
	};

	return (
		<Layout>
			<Topbar>
				<Link to="/tags">
					<Icon name="left"/>
				</Link>
				<span>编辑标签</span>
				<Icon/>
			</Topbar>
			{genEditContent(currentTag)}
		</Layout>
	);
};

export {Tag};