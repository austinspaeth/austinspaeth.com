import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';
import CTAButton from '../components/header/CTAButton';
import RoundButton from '../components/header/RoundButton';

type TSProps = {
	theme:any
}

const Header:FunctionComponent<TSProps> = (props) => {

	// STATE //
	const [ui, setUi] = useState();

	return (
		<HeaderContainer>
            <Centered>
                <LeftItems></LeftItems>
                <CenterItems></CenterItems>
                <RightItems>
                    <RoundButton svg={'<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 225 208.3"><path d="M225,208.3c-13.3-.1-26.6-.5-39.9-.3-4.7.1-5.9-1.3-5.9-5.9q.5-32.8,0-65.9a82.3,82.3,0,0,0-2-17.8c-2.5-10.9-9.9-16-21.2-16.6-20.5-1.1-28.9,11.7-29.3,27.4-.6,24.1-.8,48.3-.8,72.4,0,5-1.2,6.6-6.4,6.4-11.3-.4-22.6-.2-33.9,0-3.3,0-4.4-1.1-4.4-4.4q.1-67.3,0-134.9c0-3.3,1.3-4.3,4.4-4.3q17.3.3,34.5,0c3.7,0,4.5,1.6,4.4,4.9-.1,5.6,0,11.2,0,18.1a43.1,43.1,0,0,0,2.9-3.2c9.7-12.8,22.7-19.3,38.6-19.5,7.3-.1,14.7.1,21.8,1.6,19.2,3.9,30,16.7,33.8,35.5,1.2,5.8,1.4,11.9,2.2,17.8a57.8,57.8,0,0,0,1.2,5.7Z"/><path d="M0,64.3c14.1.1,28.3.3,42.4.1,4.2-.1,5.3,1.3,5.3,5.4q-.2,66.5,0,132.9c0,4.1-1.2,5.3-5.3,5.3-14.1-.1-28.3.2-42.4.3Z"/><path d="M0,20.3c.5-1.2,1.1-2.3,1.5-3.5C5.2,4.7,17.4-2.3,30.1.7,41,3.2,49.3,15.6,47.5,26.5,45.4,39.3,34,48.2,21.5,46.9,12.2,46,3.8,38.6,1.4,29.3a16.4,16.4,0,0,0-1.4-3Z"/></svg>'} />
                    <CTAButton/>
                </RightItems>
            </Centered>
		</HeaderContainer>
	)
}

// STYLED COMPONENTS //
const HeaderContainer = styled.header({
    height: 160,
    width: '100%',
    position:'fixed',
    top:0,
    left:0,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
});
const Centered = styled.div({
    position:'relative',
    width:'calc(100% - 30px)',
    maxWidth:1200,
    height:'100%',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
});
const LeftItems = styled.div({
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
});
const RightItems = styled.div({
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'center',
});
const CenterItems = styled.div({
    position:'absolute',
    left:0,
    top:0,
    width:'100%',
    height:'100%',
    pointerEvents:'none',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
});

// REDUX MAPPING //
const mapStateToProps = (state) => {
	return {
		theme: state.theme
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);