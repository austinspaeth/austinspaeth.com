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
            <Me src={'/assets/img/austin-spaeth.jpeg'} alt={'Me with an Audi R8 :D'} />
            <Name>Austin Spaeth</Name>
            <CatchyPhrase>
				I build beautiful React apps that are inclusive, performant and effective
            </CatchyPhrase>
            <Examples>
                Here are some examples of my work:
            </Examples>
		</HeroContainer>
	)
}

// STYLED COMPONENTS //
const HeroContainer = styled.div({
    paddingTop:400,
    width:'100%',
    position:'relative',
    '@media(max-width:600px)':{
        paddingTop:300
    }
});
const Me = styled.img((props) => ({
    borderRadius:500,
    height:175,
    marginTop:-195,
    position:'absolute',
    '@media(max-width:600px)':{
        height:100,
        marginTop:-120
    }
}));
const Name = styled.h1((props) => ({
    fontSize:46,
    color: props.theme.darkMode ? '#ff1957':'#aa153d',
    fontWeight:900,
    margin:0,
    padding:0,
    '@media(max-width:600px)':{
        fontSize:40
    }
}));
const CatchyPhrase = styled.h2((props) => ({
    fontSize:30,
    color: props.theme.darkMode ? '#878791':'#666464',
    fontWeight:600,
    maxWidth:550,
    lineHeight:'42px',
    margin:0,
    padding:0,
    marginTop:5,
    '@media(max-width:600px)':{
        fontSize:22,
        lineHeight:'38px'
    }
}));
const Examples = styled.h3((props) => ({
    fontSize:34,
    color: props.theme.darkMode ? '#878791':'#4E4E52',
    fontWeight:900,
    lineHeight:'46px',
    margin:0,
    padding:0,
    marginTop:30,
    '@media(max-width:600px)':{
        fontSize:24,
        lineHeight:'20px'
    }
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