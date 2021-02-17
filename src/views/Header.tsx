import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';
import ResumeButton from '../components/header/ResumeButton';

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
                    <ResumeButton/>
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