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
            <Preview>
                <Laptop id={'laptop'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1127.7 623.3"><g id="Page-1"><g id="Laptop"><path id="bezel" d="M967.1,1H160.4c-22,0-40.7,18-40.7,40.3V571.9h888.1V41.3C1007.8,19,989.1,1,967.1,1Z" style={{fill: props.theme.batmanMode ? 'rgb(57 58 60)':'#e1e2e4',stroke: props.theme.batmanMode ? 'rgb(77 79 82)':'#c4cad2',strokeWidth:2,fillRule:'evenodd'}}/><circle id="webcam" cx="565.5" cy="31.5" r="6.5" style={{fill:'none',stroke:props.theme.batmanMode ? 'rgb(77 79 82)':'#c4cad2',strokeWidth:2}}/><g id="bottom"><path id="Shape" d="M1043.3,622.3H84.4C34.6,622.3,1,605.2,1,598V575.8c0-2.1,2.2-3.9,4.9-3.9H1121.8c2.7,0,4.9,1.8,4.9,3.9v23C1126.7,604.6,1100.7,622.3,1043.3,622.3Z" style={{fill: props.theme.batmanMode ? 'rgb(57 58 60)':'#e1e2e4',stroke: props.theme.batmanMode ? 'rgb(77 79 82)':'#c4cad2',strokeWidth:2,fillRule:'evenodd'}}/><path id="Line" d="M1.8,595.5H1123.7" style={{fill:'none',stroke:props.theme.batmanMode ? 'rgb(77 79 82)':'#c4cad2',strokeLinecap:'square'}}/></g><rect id="screen" x="155.5" y="64.4" width="815" height="474.95" style={{fill: props.theme.batmanMode ? 'rgb(24 24 25)':'rgb(184 186 191)',stroke: props.theme.batmanMode ? 'rgb(77 79 82)':'#c4cad2'}}/><path id="touchpad" d="M685.7,573.5v5c0,3.6-7,4.7-12.3,4.7H454.5c-5.6,0-12.7-1.1-12.7-4.7v-5" style={{fill: props.theme.batmanMode ? 'rgb(57 58 60)':'#e1e2e4',stroke: props.theme.batmanMode ? 'rgb(77 79 82)':'#c4cad2',fillRule:'evenodd'}}/></g></g></Laptop>
            </Preview>
		</HeroContainer>
	)
}

// STYLED COMPONENTS //
const HeroContainer = styled.div({
    marginTop:160,
    width:'100%',
    position:'relative',
});
const Preview = styled.div({
    position:'relative',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    // @ts-ignore
    height: document.querySelector('#laptop') ? document.querySelector('#laptop').offsetHeight : 620
});
const Laptop = styled.svg({
    position:'absolute',
    height:600,
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