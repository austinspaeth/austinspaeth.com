import React, {FunctionComponent, useState, useEffect} from "react";

// REDUX //
import { connect } from 'react-redux';
import {  } from './redux/Actions';

// VIEWS //
import Header from './views/Header';
import HomeHero from './views/HomeHero';
import ProjectInfo from './views/ProjectInfo';
import ProjectSelection from './views/ProjectSelection';

// COMPONENTS //
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

// STYLES //
import './assets/css/styles.css';

type TSProps = {
    page: string,
    theme: any, // Going for speed
    view: string,
};

const App:FunctionComponent<TSProps> = (props) => {

    // COMPONENT STATE //

    useEffect(() => {
        document.querySelector('#viewer').scrollTo({top:0, behavior:'smooth'});
    }, [props.page]);

    switch(props.view){
        case 'home':
            return (
                <ThemeProvider theme={props.theme}>
					<AppContainer id={'viewer'}>
                        <Centered>
                            <Header page={props.page} view={props.view}/>
                            <HomeHero />
                            <ProjectSelection />
                        </Centered>
                    </AppContainer>
                </ThemeProvider>
            );
        case 'project':
            return (
                <ThemeProvider theme={props.theme}>
                    <AppContainer id={'viewer'}>
                        <Centered>
                            <Header page={props.page} view={props.view}/>
                            <ProjectInfo page={props.page} />
                            <ProjectSelection />
                        </Centered>
                    </AppContainer>
                </ThemeProvider>
            );
        default:
            return (
                <ThemeProvider theme={props.theme}>
					<AppContainer>
                        Project
                    </AppContainer>
                </ThemeProvider>
            );
    }
}

const AppContainer = styled.div((props) => ({
    height:'100%',
    width:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'flex-start',
    overflowY:'auto',
	background:props.theme.darkMode ? '#242527':'#F2F3F5',
}));
const Centered = styled.div({
    position:'relative',
    width:'calc(100% - 30px)',
    maxWidth:1200,
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
});

// REDUX MAPPINGS //
const mapStateToProps = (state) => {
	return {
        theme: state.theme
    };
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps,mapDispatchToProps)(App);