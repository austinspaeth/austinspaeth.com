import React, {FunctionComponent, useState, useEffect} from "react";

// REDUX //
import { connect } from 'react-redux';
import {  } from './redux/Actions';

// VIEWS //

// COMPONENTS //
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

// STYLES //
import './assets/css/styles.css';

type TSProps = {
    view: string,
    theme: any // Going for speed
};

const App:FunctionComponent<TSProps> = (props) => {

    // COMPONENT STATE //

    useEffect(() => {
        
    }, []);

    switch(props.view){
        case 'home':
            return (
                <ThemeProvider theme={props.theme}>
					<AppContainer>

                    </AppContainer>
                </ThemeProvider>
            );
        case 'example':
            return (
                <ThemeProvider theme={props.theme}>
                    <AppContainer>
                        
                    </AppContainer>
                </ThemeProvider>
            );
        default:
            return (
                <ThemeProvider theme={props.theme}>
					<AppContainer>
                        
                    </AppContainer>
                </ThemeProvider>
            );
    }
}

const AppContainer = styled.div((props) => ({
    height:'100%',
    width:'100%',
	background:props.theme.main == 'dark' ? '#000':'fff',
}));

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