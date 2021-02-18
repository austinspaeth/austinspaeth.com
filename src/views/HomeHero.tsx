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
            <MyCreed>
                No matter the role or challenge, I have the skills and work ethic to make any project a success. I’m always learning, and I’m always ready.
            </MyCreed>
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
    color: props.theme.darkMode ? '#878791':'#4E4E52',
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
    color: props.theme.darkMode ? '#c6c6c6' : '#aa153d',
    background: props.theme.darkMode ? '#353639':'#EFE9ED',
    '@media(max-width:1250px)':{
        padding:'40px 40px'
    },
    '@media(max-width:600px)':{
        padding:'30px 30px',
        fontSize:18,
        lineHeight:'28px',
        marginTop:30
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