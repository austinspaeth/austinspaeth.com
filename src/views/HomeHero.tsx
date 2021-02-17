import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';

type TSProps = {
	theme:any
}

const HomeHero:FunctionComponent<TSProps> = (props) => {

	return (
		<HeroContainer>
            <Name>Austin Spaeth</Name>
            <CatchyPhrase>
                {props.theme.batmanMode ?
                    'I always create dark modes, because that is always users’ #1 feature request'
                :
                    'I build beautiful React apps that are inclusive, performant and effective'
                }
            </CatchyPhrase>
            <MyCreed>
                No matter the role or challenge, I have the skills and work ethic to make any project a success. I’m always learning, and I’m always ready.
            </MyCreed>
		</HeroContainer>
	)
}

// STYLED COMPONENTS //
const HeroContainer = styled.div({
    marginTop:400,
    width:'100%',
});
const Name = styled.h1((props) => ({
    fontSize:46,
    color: props.theme.batmanMode ? '#ff1957':'#aa153d',
    fontWeight:900,
    margin:0,
    padding:0,
}));
const CatchyPhrase = styled.h2((props) => ({
    fontSize:30,
    color: props.theme.batmanMode ? '#878791':'#4E4E52',
    fontWeight:600,
    maxWidth:550,
    lineHeight:'42px',
    margin:0,
    padding:0,
    marginTop:5,
}));
const MyCreed = styled.div((props) => ({
    width:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    boxSizing:'border-box',
    padding:'40px 230px',
    lineHeight:'36px',
    borderRadius:10,
    marginTop:50,
    textAlign:'center',
    fontSize:22,
    fontWeight:900,
    color: props.theme.batmanMode ? '#c6c6c6' : '#aa153d',
    background: props.theme.batmanMode ? '#353639':'#EFE9ED'
}));

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

export default connect(mapStateToProps,mapDispatchToProps)(HomeHero);