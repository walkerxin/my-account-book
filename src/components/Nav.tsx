import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
require('icons/tag.svg');
require('icons/money.svg');
require('icons/statistic.svg');

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  >ul {
    display: flex;
    >li {
      width: 33.3333%;
      text-align: center;
      display:flex;      
      flex-direction: column;
      .linkWrapper {
				display:flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				padding: 6px 0 2px;
				>.icon {
					width: 24px;
					height: 24px;
				}
      }
    }
  }
`;

const Nav = () => {
	return (
		<NavWrapper>
			<ul>
				<li>
					<Link to="/tags" className="linkWrapper">
						<svg className="icon">
							<use xlinkHref="#tag"/>
						</svg>
						<span>标签</span>
					</Link>
				</li>
				<li>
					<Link to="/money" className="linkWrapper">
						<svg className="icon">
							<use xlinkHref="#money"/>
						</svg>
						<span>记一笔</span>
					</Link>
				</li>
				<li>
					<Link to="/statistics" className="linkWrapper">
						<svg className="icon">
							<use xlinkHref="#statistic"/>
						</svg>
						<span>统计</span>
					</Link>
				</li>
			</ul>
		</NavWrapper>
	);
};

export default Nav;