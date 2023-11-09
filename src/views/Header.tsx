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

	return (
		<HeaderContainer scrollPosition={scrollPosition}>
            <Centered>
                <LeftItems>
                    <Name view={props.view} scrollPosition={scrollPosition}>
                        <Me src={'/assets/img/austin-spaeth.jpeg'} alt={'Me with an Audi R8 :D'} />
                        Austin Spaeth
                    </Name>
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
                    <RoundButton triggered={'https://github.com/austinspaeth'} svg={'<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511 499"><path d="M263.5,0c9.7,1,19.6,1.5,29.2,3,83.2,13.4,145.5,57.1,187,130.2,25.7,45.3,34.8,94.5,30.2,146.2-5.7,64.4-33.3,118.3-79.6,162.9-26.3,25.3-57.1,43.2-91.5,55.2-12.1,4.1-19.6-1.1-19.6-13.9-.1-22,0-44-.1-65.9-.1-13.6-1.4-27-8.9-38.9-2.1-3.4-4.9-6.5-7.4-9.9,10-1.9,20-3.2,29.8-5.7,26-6.6,49.3-18.1,65.2-40.9,11.6-16.8,17-36,19.3-56,1.8-15.1,2.3-30.2-.7-45.2A92.9,92.9,0,0,0,395,177.3c-1.9-2.3-2.6-4.1-1.6-7.1,7.5-21,4.7-41.5-3.1-61.8a5.8,5.8,0,0,0-4-2.7c-8.8-1.4-17.3,1.1-25.1,4.8-12.6,5.8-24.9,12.4-37.1,19.1-3.3,1.7-6,2.5-9.8,1.6a235.7,235.7,0,0,0-117.4-.1c-4,1.1-6.9.4-10.2-1.8a165.1,165.1,0,0,0-50.6-22.8c-13-3.3-15.1-1.9-18.8,10.9-5.1,18.1-5.9,36,.5,54a6.1,6.1,0,0,1-1,4.7c-21.6,24.5-26.5,53.5-23.4,84.8,1.7,18.1,6,35.4,14.1,51.6,11.4,23.2,30.9,37.3,54.4,45.5,14.8,5.2,30.4,7.9,44.8,11.5-3.1,5.7-6.9,12.3-10.5,19.2a18.5,18.5,0,0,0-2.2,7.6c-.1,5.7-3.4,8-8.3,9.3-16,4.3-31.9,7.1-47.2-2.3-8.2-5-14.2-12-19-20.1-7.4-12.5-17.7-21.7-31.7-25.9-5-1.5-10.7-1.3-16.1-1s-5.1,3-2.5,6.3,4.4,5.8,7.3,7.4c13.9,8,21.6,20.8,27.8,34.8,3.4,7.8,6.7,15.5,13.3,21.4,10.7,9.7,23.6,13.4,37.5,14,12,.5,24.1.1,36.6.1a10.7,10.7,0,0,1,.2,2.1c.2,13.8.4,27.6.4,41.4.1,11.8-7.6,17.9-18.7,14.1-31.7-10.6-60.4-26.6-85.5-48.8a262,262,0,0,1-67.3-91.8,246.6,246.6,0,0,1-20-81.9c-.2-2-.5-3.9-.8-5.9V239.6a40.5,40.5,0,0,0,.9-4.8c2.8-36.3,12.6-70.6,30.7-102.2C73.3,59.9,135.4,16.3,218.4,3c9.6-1.5,19.4-2,29.1-3Z"/></svg>'} />
                    <RoundButton triggered={'https://www.linkedin.com/in/austinspaeth/'} svg={'<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 225 208.3"><path d="M225,208.3c-13.3-.1-26.6-.5-39.9-.3-4.7.1-5.9-1.3-5.9-5.9q.5-32.8,0-65.9a82.3,82.3,0,0,0-2-17.8c-2.5-10.9-9.9-16-21.2-16.6-20.5-1.1-28.9,11.7-29.3,27.4-.6,24.1-.8,48.3-.8,72.4,0,5-1.2,6.6-6.4,6.4-11.3-.4-22.6-.2-33.9,0-3.3,0-4.4-1.1-4.4-4.4q.1-67.3,0-134.9c0-3.3,1.3-4.3,4.4-4.3q17.3.3,34.5,0c3.7,0,4.5,1.6,4.4,4.9-.1,5.6,0,11.2,0,18.1a43.1,43.1,0,0,0,2.9-3.2c9.7-12.8,22.7-19.3,38.6-19.5,7.3-.1,14.7.1,21.8,1.6,19.2,3.9,30,16.7,33.8,35.5,1.2,5.8,1.4,11.9,2.2,17.8a57.8,57.8,0,0,0,1.2,5.7Z"/><path d="M0,64.3c14.1.1,28.3.3,42.4.1,4.2-.1,5.3,1.3,5.3,5.4q-.2,66.5,0,132.9c0,4.1-1.2,5.3-5.3,5.3-14.1-.1-28.3.2-42.4.3Z"/><path d="M0,20.3c.5-1.2,1.1-2.3,1.5-3.5C5.2,4.7,17.4-2.3,30.1.7,41,3.2,49.3,15.6,47.5,26.5,45.4,39.3,34,48.2,21.5,46.9,12.2,46,3.8,38.6,1.4,29.3a16.4,16.4,0,0,0-1.4-3Z"/></svg>'} />
                    <CTAButton/>
                </RightItems>
            </Centered>
		</HeaderContainer>
	)
}

// STYLED COMPONENTS //
const HeaderContainer = styled.header((props) => ({
    height: props.scrollPosition > 50 ? 80 : 160,
    borderBottom:props.scrollPosition > 50 ? props.theme.darkMode ? '1px solid #343537' : '1px solid #e2e4eb':'1px solid transparent',
    width: '100%',
    position:'fixed',
    zIndex:9,
    top:0,
    left:0,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    background:props.scrollPosition > 50 ? props.theme.darkMode ? 'rgba(28,29,30,.9)':'rgba(255,255,255,.9)':'transparent',
    backdropFilter: props.scrollPosition > 50 ? 'blur(10px)':'blur(0px)',
    transition:'all .2s ease-in-out',
    '@media(max-width:600px)':{
        height:80
    }
}));
const PageTitle = styled.div((props) => ({
    fontSize:18,
    fontWeight:700,
    color:props.theme.darkMode ? '#d5d6e0':'#4A4C57',
    textTransform:'capitalize',
    '@media(max-width:600px)':{
        display:'none'
    }
}));
const Subtitle = styled.div({
    fontSize:14,
    fontWeight:400,
    color:'#787B84',
    '@media(max-width:600px)':{
        display:'none'
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
    '@media(max-width:900px)':{
        left:30,
        alignItems:'flex-start'
    }
}));
const Name = styled.div((props) => ({
    fontSize:25,
    color: props.theme.darkMode ? '#ff1957':'#aa153d',
    fontWeight:700,
    opacity: (props.scrollPosition > 370 && props.view == 'home') ? 1 : 0,
    transform: (props.scrollPosition > 370 && props.view == 'home') ? 'translateY(0px)' : 'translateY(20px)',
    transition:'all .2s ease-in-out',
    '@media(max-width:600px)':{
        fontSize: 19,
    }
}));
const Me = styled.img({
    borderRadius:500,
    height:28,
    marginBottom:-5,
    marginRight:10,
});
const Back = styled.div((props) => ({
    fontSize:20,
    color: props.theme.darkMode ? '#ff1957':'#aa153d',
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
        color: props.theme.darkMode ? '#ff3e72':'#d9426b',
        '> *':{
            '> *':{
                fill: props.theme.darkMode ? '#ff3e72':'#d9426b',
            }
        }
    },
    '@media(max-width:900px)':{
        fontSize:0.01
    }
}));
const BackIcon = styled.svg((props) => ({
    height:20,
    marginRight:10,
    fill: props.theme.darkMode ? '#ff1957':'#aa153d',
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