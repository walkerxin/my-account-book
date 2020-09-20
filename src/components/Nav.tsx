import styled from 'styled-components';
import React from 'react';
import NavLink from 'components/NavLink';

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
					<NavLink to="/tags" iconName="tag" text="标签" />
				</li>
				<li>
					<NavLink to="/money" iconName="money" text="记一笔" />
				</li>
				<li>
					<NavLink to="/statistics" iconName="statistic" text="统计" />
				</li>
			</ul>
		</NavWrapper>
	);
};

export default Nav;