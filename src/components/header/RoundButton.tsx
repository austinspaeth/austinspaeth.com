import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';

type TSProps = {
    svg: any,
	theme: string
}

const RoundButton:FunctionComponent<TSProps> = (props) => {

	// STATE //
	const [ui, setUi] = useState();

	return (
		<RoundButtonContainer dangerouslySetInnerHTML={{ __html: props.svg }} />
	)
}

// STYLED COMPONENTS //
const RoundButtonContainer = styled.div({
    height:44,
    width:44,
    borderRadius:45,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    '> svg':{
        height:21
    }
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

export default connect(mapStateToProps,mapDispatchToProps)(RoundButton);