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
		<Button>
            Résumé
		</Button>
	)
}

// STYLED COMPONENTS //
const Button = styled.div((props) => ({
    color:'#fff',
    fontWeight:600,
    fontSize:16,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:45,
    height:44,
    width:115,
    boxSizing:'border-box',
    background: props.theme.batmanMode ? '#ff1957':'#aa153d',
    border: props.theme.batmanMode ? '2px solid #ff1957':'2px solid #aa153d',
    cursor:'pointer',
    transition:'background .2s ease-in-out',
    ':hover':{
        background: props.theme.batmanMode ? '#ff3e72':'#d9426b',
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