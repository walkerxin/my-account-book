import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagsSection = styled.section`
	background: #FFF;
	padding: 12px 16px;
	> ol {
		display:flex;
		font-size: 14px;
		color: #484848;
		margin: 0 -12px;
		> li {
			background: #D9D9D9;
			border-radius: 18px;
			padding: 4px 18px;
			margin: 0 12px;
		}
	}
	> button {
		border: none;
		background: none;
		border-bottom: 1px solid #666;
		padding: 1px 4px;
		color: #999;
		margin-top: 16px;
	}
`;

const NoteSection = styled.section`
	> label {
		font-size: 14px;
		background: #F5F5F5;
		display: flex;
		padding: 0 16px;
		align-items: center;
		> span {
			white-space: nowrap;
		}
		> input {
			border:none;
			background: none;
			margin-left: 16px;
			width: 100%;
			height: 72px;
		}
	}
`;

const CategorySection = styled.section`
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

const NumberPanelSection = styled.section`
	> .output {
		font-size: 36px;
		line-height: 72px;
		background: #FFF;
		text-align: right;
		padding: 0 16px;
		box-shadow: inset 0 -2px 2px -2px rgba(0,0,0,0.25),
								inset 0 2px 4px -2px rgba(0,0,0,0.25)
	}
	> .panel {
		> button {
			width: 25%;
			height: 64px;
			font-size: 18px;
			border: none;
			float: left;
			&.zero {
				width: 50%;
			}
			&.ok {
				height: 128px;
				float: right;
				background: #9A9A9A;
			}
			&:nth-child(1) {
				background: #F2F2F2;
			}
			&:nth-child(2),
			&:nth-child(5) {
				background: #E0E0E0;
			}
			&:nth-child(3),
			&:nth-child(6),
			&:nth-child(9) {
				background: #D3D3D3;
			}
			&:nth-child(4),
			&:nth-child(7),
			&:nth-child(10) {
				background: #C1C1C1;
			}
			&:nth-child(8),
			&:nth-child(11),
			&:nth-child(13) {
				background: #B8B8B8;
			}
			&:nth-child(14) {
				background: #A9A9A9;
			}
		}
	}
`;

export default function Money() {
	return (
		<Layout>
			<TagsSection>
				<ol>
					<li>衣</li>
					<li>住</li>
					<li>行</li>
					<li>食</li>
				</ol>
				<button>新增标签</button>
			</TagsSection>
			<NoteSection>
				<label>
					<span>备注</span>
					<input type="text" placeholder="在这里添加备注"/>
				</label>
			</NoteSection>
			<CategorySection>
				<ul>
					<li className="selected">支出</li>
					<li>收入</li>
				</ul>
			</CategorySection>
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
		</Layout>
	);
}