import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';

type TSProps = {
	theme:any
}

const ResumeButton:FunctionComponent<TSProps> = (props) => {

	// STATE //
	const [ui, setUi] = useState();

	return (
		<Button href="/assets/pdf/austin-spaeth-resume-2023.pdf" download="Austin-Spaeth-Resume.pdf">
            Résumé
		</Button>
	)
}

// STYLED COMPONENTS //
const Button = styled.a((props) => ({
    color:'#fff',
    fontWeight:600,
    textDecoration:'none',
    fontSize:17,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:45,
    height:44,
    width:115,
    boxSizing:'border-box',
    background: props.theme.darkMode ? '#ff1957':'#aa153d',
    border: props.theme.darkMode ? '2px solid #ff1957':'2px solid #aa153d',
    cursor:'pointer',
    transition:'background .2s ease-in-out',
    ':hover':{
        background: props.theme.darkMode ? '#ff3e72':'#d9426b',
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

export default connect(mapStateToProps,mapDispatchToProps)(ResumeButton);