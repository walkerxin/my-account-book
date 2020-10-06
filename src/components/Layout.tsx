import React, {useEffect, useRef} from 'react';
import Nav from './Nav';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  display:flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex-grow: 1;
  flex-basis: 0;
  overflow: auto;
`;

type Props = {
	className?: string;
	scrollTop?: number;
}

const Layout: React.FC<Props> = (props) => {
	const mainRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		setTimeout(() => {
			mainRef.current && (mainRef.current.scrollTop = props.scrollTop || 0);
		}, 0)
	}, [props.scrollTop])
	return (
		<Wrapper>
			<Main ref={mainRef} className={props.className}>
				{ props.children }
			</Main>
			<Nav/>
		</Wrapper>
	)
}

export default Layout;