import React, {FunctionComponent, useEffect, useState} from "react";

// REDUX //
import { connect } from "react-redux";
import { setTheme } from '../redux/Actions';

// COMPONENTS //
import styled from 'styled-components';
import CTAButton from '../components/header/CTAButton';
import RoundButton from '../components/header/RoundButton';
import { Link } from 'react-router-dom';

type TSProps = {
    page:string,
    setTheme:Function,
	theme:any,
    view: string,
}

const Header:FunctionComponent<TSProps> = (props) => {

	// STATE //
	const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        window.document.querySelector('#viewer').scrollTo({top:0, behavior:'smooth'});
        window.document.querySelector('#viewer').addEventListener('scroll', (e) => handleScroll(e), {passive:true});
        return  window.document.querySelector('#viewer').removeEventListener('scroll', (e) => handleScroll(e));
    }, []);

    const openExternalWebsite = (path:string) => {
        const newTab = window.open(path, '_blank');
        newTab.focus();
    }

    const handleScroll = (e) => {
        setScrollPosition(e.target.scrollTop);
    }

    const toggleTheLights = () => {
        props.setTheme({batmanMode:!props.theme.batmanMode});
    }

	return (
		<HeaderContainer scrollPosition={scrollPosition}>
            <Centered>
                <LeftItems>
                    <Name view={props.view} scrollPosition={scrollPosition}>Austin Spaeth</Name>
                    <Back view={props.view}>
                        <Link style={{display:'flex', alignItems:'center',}} to={'/'}>
                            <BackIcon id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 99.3 97.7"><path d="M0,48.8,46.9,0,57.2,9.7,26.8,41.4H99.3V55.9H26.6l30.5,32L46.9,97.7Z"/></BackIcon>
                            Back
                        </Link>
                    </Back>
                </LeftItems>
                <CenterItems view={props.view}>
                    <PageTitle>{props.page?.replace(/\-+/g, ' ')}</PageTitle>
                    <Subtitle>{props.page && 'by Austin Spaeth'}</Subtitle>
                </CenterItems>
                <RightItems>
                    <RoundButton triggered={() => toggleTheLights()} isBatSignal={true} svg={props.theme.batmanMode ? '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280.7 280.8"><path d="M65.5,140.3a74.9,74.9,0,0,1,149.7.1c.2,41.2-33.3,74.7-74.7,74.8S65.7,182.2,65.5,140.3Zm122.8.8c.1-26.8-21.2-48.5-47.6-48.7s-48.3,21.3-48.3,47.4,21.2,48.6,48,48.6S188.3,166.9,188.3,141.1Z"/><path d="M154,21.3c-.2,3-.1,6-.5,8.9a12.9,12.9,0,0,1-12.9,11.4c-7,.1-12.7-4.4-13.4-11.4a101.6,101.6,0,0,1,.1-18.3A13.1,13.1,0,0,1,140.4,0a13.4,13.4,0,0,1,13.1,11.9,73.5,73.5,0,0,1,.1,9.4Z"/><path d="M20.1,154.1c-2.9-.2-6.1-.2-9.1-.7A13.3,13.3,0,0,1,0,140.5c0-6.2,4.5-12.4,10.8-13a114.7,114.7,0,0,1,20.3,0c6.4.7,10.6,6.6,10.5,13.1s-4.4,11.9-10.8,12.9C27.4,154,23.8,153.9,20.1,154.1Z"/><path d="M154,259.8c-.2,3.1-.1,6.5-.6,9.7a13.2,13.2,0,0,1-13.1,11.3c-6.3-.1-12.2-4.6-12.9-11a109.1,109.1,0,0,1,0-19.8c.6-6.6,6.7-11,13.4-10.8a12.8,12.8,0,0,1,12.7,11C153.9,253.3,153.8,256.5,154,259.8Z"/><path d="M260,154a89.8,89.8,0,0,1-9.3-.4,13,13,0,0,1-11.6-13.3c.1-6.7,4.6-12.3,11.4-12.9a98.4,98.4,0,0,1,18.8,0c6.6.6,11.4,6.5,11.4,12.9a13.4,13.4,0,0,1-11.2,13.2A79.7,79.7,0,0,1,260,154Z"/><path d="M74.6,219.9c-.2,7.9-15.6,23.3-23.5,23.4a12.7,12.7,0,0,1-12.2-7.1c-2.6-4.7-2.6-9.8.9-13.9a117.3,117.3,0,0,1,13.6-13.7c4.2-3.4,9.3-3.4,14.1-.9A12.8,12.8,0,0,1,74.6,219.9Z"/><path d="M220.7,74.4c-6.3.2-9.9-2.5-12.4-6.7s-3.1-9.6.2-13.6a113.4,113.4,0,0,1,14.7-14.7c4.4-3.7,11.3-2.7,15.6,1.1s6.8,10.9,3.4,15.3c-5.1,6.5-11.7,11.9-17.8,17.6C223.3,74.4,221.3,74.3,220.7,74.4Z"/><path d="M51,37.7c8.4,0,23.5,14.9,23.6,23.3a12.8,12.8,0,0,1-6.9,11.9c-4.5,2.6-9.6,3-13.5-.3A114.2,114.2,0,0,1,39.6,57.7c-3.1-3.8-2.8-8.7-.4-13.1S45.6,37.5,51,37.7Z"/><path d="M231.3,243.3c-8.9.1-25-15.5-24.9-23.6a12.8,12.8,0,0,1,7.4-12.1c4.8-2.4,9.8-2.2,14,1.4a121.7,121.7,0,0,1,13.1,12.8c3.6,4.1,3.9,9,1.5,14S235.8,243.1,231.3,243.3Z"/></svg>':'<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 275.4 153.7"><path d="M58.1.2C55,5.7,51.9,10.5,49.6,15.6,44.1,28,48.2,36.8,61.4,40.3c16.2,4.4,32.9,4.3,49.5,3.2,1.1-.1,2.7-2.1,3-3.5,2.8-12,5.3-24,7.9-36,.2-.9.6-1.8,1.1-3.6,2.1,4.6,3.5,8.5,5.6,12a6.2,6.2,0,0,0,4.3,2.9c12.7.8,12.7.7,17.7-10.7L152.6,0l3.9,17.9c1.7,7.4,3.1,14.9,5,22.3.3,1.3,2,3.2,3.2,3.3,16.3,1,32.6,1.2,48.5-3,14.2-3.6,18.3-12.3,12.3-25.5-2.2-5-5.3-9.5-8.1-14.5.8.1,1.6-.1,2.1.2,23.4,12.4,42.8,28.9,51.8,54.8s2.8,48.4-13.4,69.2c-9.6,12.3-21.7,21.7-35.4,29,.7-8.8,1.5-17.4,2.1-26a27.6,27.6,0,0,0-.5-6.4c-2.9-16.3-14.3-20.9-27.9-11.4-1.4.9-2.7,1.9-4.4,3.2a26.4,26.4,0,0,0-1.3-3.7c-2.6-6.9-7.5-11.3-14.8-12.5s-13.2,1.3-17.7,6.9c-8.4,10.3-12.9,22.7-17.4,35.1-.8,2.3-1.6,4.6-2.9,8.1-2.2-6.1-3.7-11.3-6-16.1-4.2-8.7-8.5-17.3-13.3-25.6-4-6.7-10.5-9.6-18.3-8.5s-13.5,6.1-15.7,14.1c-.2.6-.5,1.2-.8,1.9-3.2-2-6.1-4.1-9.3-5.7-10.4-5.1-20.6-.7-22.2,10.9-1.3,9.4,0,19.1.2,28.7a46.2,46.2,0,0,0,1.1,6.3c-.4.2-.7.5-.9.4C29.5,140.7,11,123.7,3.2,97.9s-.7-48.6,16-68.8C29.1,17.2,41.5,8.2,55.2,1A24.9,24.9,0,0,1,58.1.2Z"/></svg>'} />
                    <RoundButton triggered={() => openExternalWebsite('https://github.com/austinspaeth')} svg={'<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511 499"><path d="M263.5,0c9.7,1,19.6,1.5,29.2,3,83.2,13.4,145.5,57.1,187,130.2,25.7,45.3,34.8,94.5,30.2,146.2-5.7,64.4-33.3,118.3-79.6,162.9-26.3,25.3-57.1,43.2-91.5,55.2-12.1,4.1-19.6-1.1-19.6-13.9-.1-22,0-44-.1-65.9-.1-13.6-1.4-27-8.9-38.9-2.1-3.4-4.9-6.5-7.4-9.9,10-1.9,20-3.2,29.8-5.7,26-6.6,49.3-18.1,65.2-40.9,11.6-16.8,17-36,19.3-56,1.8-15.1,2.3-30.2-.7-45.2A92.9,92.9,0,0,0,395,177.3c-1.9-2.3-2.6-4.1-1.6-7.1,7.5-21,4.7-41.5-3.1-61.8a5.8,5.8,0,0,0-4-2.7c-8.8-1.4-17.3,1.1-25.1,4.8-12.6,5.8-24.9,12.4-37.1,19.1-3.3,1.7-6,2.5-9.8,1.6a235.7,235.7,0,0,0-117.4-.1c-4,1.1-6.9.4-10.2-1.8a165.1,165.1,0,0,0-50.6-22.8c-13-3.3-15.1-1.9-18.8,10.9-5.1,18.1-5.9,36,.5,54a6.1,6.1,0,0,1-1,4.7c-21.6,24.5-26.5,53.5-23.4,84.8,1.7,18.1,6,35.4,14.1,51.6,11.4,23.2,30.9,37.3,54.4,45.5,14.8,5.2,30.4,7.9,44.8,11.5-3.1,5.7-6.9,12.3-10.5,19.2a18.5,18.5,0,0,0-2.2,7.6c-.1,5.7-3.4,8-8.3,9.3-16,4.3-31.9,7.1-47.2-2.3-8.2-5-14.2-12-19-20.1-7.4-12.5-17.7-21.7-31.7-25.9-5-1.5-10.7-1.3-16.1-1s-5.1,3-2.5,6.3,4.4,5.8,7.3,7.4c13.9,8,21.6,20.8,27.8,34.8,3.4,7.8,6.7,15.5,13.3,21.4,10.7,9.7,23.6,13.4,37.5,14,12,.5,24.1.1,36.6.1a10.7,10.7,0,0,1,.2,2.1c.2,13.8.4,27.6.4,41.4.1,11.8-7.6,17.9-18.7,14.1-31.7-10.6-60.4-26.6-85.5-48.8a262,262,0,0,1-67.3-91.8,246.6,246.6,0,0,1-20-81.9c-.2-2-.5-3.9-.8-5.9V239.6a40.5,40.5,0,0,0,.9-4.8c2.8-36.3,12.6-70.6,30.7-102.2C73.3,59.9,135.4,16.3,218.4,3c9.6-1.5,19.4-2,29.1-3Z"/></svg>'} />
                    <RoundButton triggered={() => openExternalWebsite('https://www.linkedin.com/in/austinspaeth/')} svg={'<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 225 208.3"><path d="M225,208.3c-13.3-.1-26.6-.5-39.9-.3-4.7.1-5.9-1.3-5.9-5.9q.5-32.8,0-65.9a82.3,82.3,0,0,0-2-17.8c-2.5-10.9-9.9-16-21.2-16.6-20.5-1.1-28.9,11.7-29.3,27.4-.6,24.1-.8,48.3-.8,72.4,0,5-1.2,6.6-6.4,6.4-11.3-.4-22.6-.2-33.9,0-3.3,0-4.4-1.1-4.4-4.4q.1-67.3,0-134.9c0-3.3,1.3-4.3,4.4-4.3q17.3.3,34.5,0c3.7,0,4.5,1.6,4.4,4.9-.1,5.6,0,11.2,0,18.1a43.1,43.1,0,0,0,2.9-3.2c9.7-12.8,22.7-19.3,38.6-19.5,7.3-.1,14.7.1,21.8,1.6,19.2,3.9,30,16.7,33.8,35.5,1.2,5.8,1.4,11.9,2.2,17.8a57.8,57.8,0,0,0,1.2,5.7Z"/><path d="M0,64.3c14.1.1,28.3.3,42.4.1,4.2-.1,5.3,1.3,5.3,5.4q-.2,66.5,0,132.9c0,4.1-1.2,5.3-5.3,5.3-14.1-.1-28.3.2-42.4.3Z"/><path d="M0,20.3c.5-1.2,1.1-2.3,1.5-3.5C5.2,4.7,17.4-2.3,30.1.7,41,3.2,49.3,15.6,47.5,26.5,45.4,39.3,34,48.2,21.5,46.9,12.2,46,3.8,38.6,1.4,29.3a16.4,16.4,0,0,0-1.4-3Z"/></svg>'} />
                    <CTAButton/>
                </RightItems>
            </Centered>
		</HeaderContainer>
	)
}

// STYLED COMPONENTS //
const HeaderContainer = styled.header((props) => ({
    height: props.scrollPosition > 50 ? 80 : 160,
    borderBottom:props.scrollPosition > 50 ? props.theme.batmanMode ? '1px solid #343537' : '1px solid #e2e4eb':'1px solid transparent',
    width: '100%',
    position:'fixed',
    zIndex:9,
    top:0,
    left:0,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    background:props.scrollPosition > 50 ? props.theme.batmanMode ? 'rgba(28,29,30,.9)':'rgba(246,248,250,.9)':'transparent',
    backdropFilter: props.scrollPosition > 50 ? 'blur(16px)':'blur(0px)',
    transition:'all .2s ease-in-out'
}));
const PageTitle = styled.div((props) => ({
    fontSize:18,
    fontWeight:700,
    color:props.theme.batmanMode ? '#d5d6e0':'#4A4C57',
    textTransform:'capitalize',
    '@media(max-width:600px)':{
        transformOrigin:'left center',
        transform:'scale(.8)',
    }
}));
const Subtitle = styled.div({
    fontSize:14,
    fontWeight:400,
    color:'#787B84',
    '@media(max-width:600px)':{
        transformOrigin:'left center',
        transform:'scale(.8)',
    }
});
const Centered = styled.div({
    position:'relative',
    width:'calc(100% - 30px)',
    maxWidth:1200,
    height:'100%',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
});
const LeftItems = styled.div({
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
});
const RightItems = styled.div({
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'center',
    '@media(max-width:600px)':{
        transformOrigin:'right center',
        transform:'scale(.8)',
    }
});
const CenterItems = styled.div((props) => ({
    position:'absolute',
    left:0,
    top:0,
    width:'100%',
    height:'100%',
    pointerEvents:'none',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    transform: props.view !== 'home' ? 'translateX(0px)':'translateX(20px)',
    opacity: props.view !== 'home' ? 1:0,
    transition:'all .2s ease-in-out',
    '@media(max-width:600px)':{
        left:40,
        alignItems:'flex-start'
    }
}));
const Name = styled.div((props) => ({
    fontSize:25,
    color: props.theme.batmanMode ? '#ff1957':'#aa153d',
    fontWeight:700,
    opacity: (props.scrollPosition > 370 && props.view == 'home') ? 1 : 0,
    transform: (props.scrollPosition > 370 && props.view == 'home') ? 'translateY(0px)' : 'translateY(20px)',
    transition:'all .2s ease-in-out',
    '@media(max-width:600px)':{
        display:'none'
    }
}));
const Back = styled.div((props) => ({
    fontSize:20,
    color: props.theme.batmanMode ? '#ff1957':'#aa153d',
    cursor:'pointer',
    TextDecoration:'none',
    display:'flex',
    justifyContent:'flex-start',
    transform: props.view !== 'home' ? 'translateX(0px)':'translateX(20px)',
    opacity: props.view !== 'home' ? 1:0,
    pointerEvents: props.view === 'home' && 'none',
    alignItems:'center',
    position:'absolute',
    transition:'all .2s ease-in-out',
    ':hover':{
        color: props.theme.batmanMode ? '#ff3e72':'#d9426b',
        '> *':{
            '> *':{
                fill: props.theme.batmanMode ? '#ff3e72':'#d9426b',
            }
        }
    },
    '@media(max-width:1200px)':{
        fontSize:18
    },
    '@media(max-width:600px)':{
        fontSize:0.01
    }
}));
const BackIcon = styled.svg((props) => ({
    height:20,
    marginRight:10,
    fill: props.theme.batmanMode ? '#ff1957':'#aa153d',
    transition:'fill .2s ease-in-out',
}));

// REDUX MAPPING //
const mapStateToProps = (state) => {
	return {
		theme: state.theme
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setTheme: (themeState) => dispatch(setTheme(themeState))
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);