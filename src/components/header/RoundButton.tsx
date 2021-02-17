import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';

type TSProps = {
    isBatSignal?: boolean,
    svg: any,
	theme: string,
    triggered: Function,
}

const RoundButton:FunctionComponent<TSProps> = (props) => {

	// STATE //
	const [ui, setUi] = useState();

	return (
		<RoundButtonContainer isBatSignal={props.isBatSignal} onKeyDown={(e) => e.key == 'Enter' && props.triggered()} onClick={() => props.triggered()} dangerouslySetInnerHTML={{ __html: props.svg }} />
	)
}

// STYLED COMPONENTS //
const RoundButtonContainer = styled.div((props) => ({
    height:44,
    width:44,
    marginRight:12,
    borderRadius:45,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    background: props.isBatSignal ? (props.theme.batmanMode ? '#333436':'#E1E2E4' ) : props.theme.batmanMode ? '#46232E':'#EDE3E8',
    cursor:'pointer',
    transition:'background .2s ease-in-out',
    '> svg':{
        fill: props.isBatSignal ? ( props.theme.batmanMode ? '#ffffff':'#000000' ) : props.theme.batmanMode ? '#ff1957':'#aa153d',
        height:19,
        transition:'fill .2s ease-in-out',
    },
    ':hover':{
        background: props.isBatSignal ? ( props.theme.batmanMode ? '#000000':'#000000' ) : props.theme.batmanMode ? '#ff1957':'#aa153d',
        '> svg':{
            fill:'#fff'
        },
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

export default connect(mapStateToProps,mapDispatchToProps)(RoundButton);