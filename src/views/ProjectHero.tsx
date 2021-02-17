import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';

type TSProps = {
	theme:any
}

const ProjectHero:FunctionComponent<TSProps> = (props) => {

	return (
		<HeroContainer>
            
		</HeroContainer>
	)
}

// STYLED COMPONENTS //
const HeroContainer = styled.div({
    marginTop:400,
    width:'100%',
    position:'relative',
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

export default connect(mapStateToProps,mapDispatchToProps)(ProjectHero);