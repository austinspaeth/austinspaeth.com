import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';

type TSProps = {
    page:string,
	theme:any
}

const ProjectInfo:FunctionComponent<TSProps> = (props) => {

    const apps = {
        visiblefeeds:{
            title:'Visible Feeds',
            subtitle:'Private Social Network Startup',
            for: 'Me (Personal Startup)',
            role: 'Creator/Principle Developer',
            frontend: 'React, Redux, TypeScript, Relay, Styled Components',
            backend: 'Serverless/AWS, AppSync/GraphQL, DynamoDB'
        },
        videodrivenlearning:{
            title:'Video Driven Learning (VDL)',
            subtitle:'Interactive Video Platform',
            for: 'Oregon State University Ecampus',
            role: 'Creator/Principle Developer',
            frontend: 'React, Redux, TypeScript',
            backend: 'Serverless/AWS, Lambda/NodeJS, DynamoDB',
            bullets:[
                'Over 90,000 interactive videos served',
                'WCAG 2.1 AAA accessible (just the software)',
                'Saved Ecampus hundreds of thousands in license costs'
            ],
            description: 'While working for Oregon State University Ecampus, there was a need to incorporate interactive video into courses. While management investigated purchasing licenses to costly 3rd party platforms, I volunteered that I could build something better for much less. With a green light, I built VDL (short for Video Driven Learning). VDL is used extensively in OSU courses til this day, and has delivered over 90,000 interactive videos to our students!'
        },
        neverendingstory:{
            title:'Never Ending Story (NES)',
            subtitle:'Interactive Long-Form Content Platform',
            for: 'Oregon State University Ecampus',
            role: 'Creator/Principle Developer',
            frontend: 'React, Redux',
            backend: 'Static JSON'
        },
        labshell:{
            title:'LabShell',
            subtitle:'Virtual Lab Platform',
            for: 'Oregon State University Ecampus',
            role: 'Team Lead/Core Developer',
            frontend: 'React, Redux, TypeScript',
            backend: 'Serverless/AWS, Lambda/NodeJS, DynamoDB'
        }
    }

    const openDemo = (demoURL) => {
        if(demoURL){
            const newTab = window.open(demoURL, '_blank');
            newTab.focus();
        }
    }

	return (
		<HeroContainer>
            <Preview>
                <Laptop id={'laptop'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1127.7 623.3"><g id="Page-1"><g id="Laptop"><path id="bezel" d="M967.1,1H160.4c-22,0-40.7,18-40.7,40.3V571.9h888.1V41.3C1007.8,19,989.1,1,967.1,1Z" style={{fill: props.theme.batmanMode ? 'rgb(57 58 60)':'#e1e2e4',stroke: props.theme.batmanMode ? 'rgb(77 79 82)':'#c4cad2',strokeWidth:2,fillRule:'evenodd'}}/><circle id="webcam" cx="565.5" cy="31.5" r="6.5" style={{fill:'none',stroke:props.theme.batmanMode ? 'rgb(77 79 82)':'#c4cad2',strokeWidth:2}}/><g id="bottom"><path id="Shape" d="M1043.3,622.3H84.4C34.6,622.3,1,605.2,1,598V575.8c0-2.1,2.2-3.9,4.9-3.9H1121.8c2.7,0,4.9,1.8,4.9,3.9v23C1126.7,604.6,1100.7,622.3,1043.3,622.3Z" style={{fill: props.theme.batmanMode ? 'rgb(57 58 60)':'#e1e2e4',stroke: props.theme.batmanMode ? 'rgb(77 79 82)':'#c4cad2',strokeWidth:2,fillRule:'evenodd'}}/><path id="Line" d="M1.8,595.5H1123.7" style={{fill:'none',stroke:props.theme.batmanMode ? 'rgb(77 79 82)':'#c4cad2',strokeLinecap:'square'}}/></g><rect id="screen" x="155.5" y="64.4" width="815" height="474.95" style={{fill: props.theme.batmanMode ? 'rgb(24 24 25)':'rgb(184 186 191)',stroke: props.theme.batmanMode ? 'rgb(77 79 82)':'#c4cad2'}}/><path id="touchpad" d="M685.7,573.5v5c0,3.6-7,4.7-12.3,4.7H454.5c-5.6,0-12.7-1.1-12.7-4.7v-5" style={{fill: props.theme.batmanMode ? 'rgb(57 58 60)':'#e1e2e4',stroke: props.theme.batmanMode ? 'rgb(77 79 82)':'#c4cad2',fillRule:'evenodd'}}/></g></g></Laptop>
            </Preview>
            <Introduction>
                <Title>{apps[props.page?.replace(/\-+/g, '')]?.title}</Title>
                <Subtitle>{apps[props.page?.replace(/\-+/g, '')]?.subtitle}</Subtitle>
            </Introduction>
            <TwoColumns>
                <LeftColumn>
                    <Vitals>
                        <Vital>Made For: <strong>{apps[props.page?.replace(/\-+/g, '')]?.for}</strong></Vital>
                        <Vital>My Role: <strong>{apps[props.page?.replace(/\-+/g, '')]?.role}</strong></Vital>
                        <Vital>Front End: <strong>{apps[props.page?.replace(/\-+/g, '')]?.frontend}</strong></Vital>
                        <Vital>Backend: <strong>{apps[props.page?.replace(/\-+/g, '')]?.backend}</strong></Vital>
                    </Vitals>
                    <Bullets>
                        {apps[props.page?.replace(/\-+/g, '')]?.bullets?.map((bullet) => 
                            <Bullet key={bullet}>
                                {bullet}
                            </Bullet>
                        )}
                    </Bullets>
                </LeftColumn>
                <RightColumn>
                    <Description>
                        {apps[props.page?.replace(/\-+/g, '')]?.description}
                    </Description>
                </RightColumn>
            </TwoColumns>
            <DemoBar>
                <Github>
                    <GithubIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511 499"><path d="M263.5,0c9.7,1,19.6,1.5,29.2,3,83.2,13.4,145.5,57.1,187,130.2,25.7,45.3,34.8,94.5,30.2,146.2-5.7,64.4-33.3,118.3-79.6,162.9-26.3,25.3-57.1,43.2-91.5,55.2-12.1,4.1-19.6-1.1-19.6-13.9-.1-22,0-44-.1-65.9-.1-13.6-1.4-27-8.9-38.9-2.1-3.4-4.9-6.5-7.4-9.9,10-1.9,20-3.2,29.8-5.7,26-6.6,49.3-18.1,65.2-40.9,11.6-16.8,17-36,19.3-56,1.8-15.1,2.3-30.2-.7-45.2A92.9,92.9,0,0,0,395,177.3c-1.9-2.3-2.6-4.1-1.6-7.1,7.5-21,4.7-41.5-3.1-61.8a5.8,5.8,0,0,0-4-2.7c-8.8-1.4-17.3,1.1-25.1,4.8-12.6,5.8-24.9,12.4-37.1,19.1-3.3,1.7-6,2.5-9.8,1.6a235.7,235.7,0,0,0-117.4-.1c-4,1.1-6.9.4-10.2-1.8a165.1,165.1,0,0,0-50.6-22.8c-13-3.3-15.1-1.9-18.8,10.9-5.1,18.1-5.9,36,.5,54a6.1,6.1,0,0,1-1,4.7c-21.6,24.5-26.5,53.5-23.4,84.8,1.7,18.1,6,35.4,14.1,51.6,11.4,23.2,30.9,37.3,54.4,45.5,14.8,5.2,30.4,7.9,44.8,11.5-3.1,5.7-6.9,12.3-10.5,19.2a18.5,18.5,0,0,0-2.2,7.6c-.1,5.7-3.4,8-8.3,9.3-16,4.3-31.9,7.1-47.2-2.3-8.2-5-14.2-12-19-20.1-7.4-12.5-17.7-21.7-31.7-25.9-5-1.5-10.7-1.3-16.1-1s-5.1,3-2.5,6.3,4.4,5.8,7.3,7.4c13.9,8,21.6,20.8,27.8,34.8,3.4,7.8,6.7,15.5,13.3,21.4,10.7,9.7,23.6,13.4,37.5,14,12,.5,24.1.1,36.6.1a10.7,10.7,0,0,1,.2,2.1c.2,13.8.4,27.6.4,41.4.1,11.8-7.6,17.9-18.7,14.1-31.7-10.6-60.4-26.6-85.5-48.8a262,262,0,0,1-67.3-91.8,246.6,246.6,0,0,1-20-81.9c-.2-2-.5-3.9-.8-5.9V239.6a40.5,40.5,0,0,0,.9-4.8c2.8-36.3,12.6-70.6,30.7-102.2C73.3,59.9,135.4,16.3,218.4,3c9.6-1.5,19.4-2,29.1-3Z"/></GithubIcon>
                    <GithubStackedText>
                        <Private>Private Github Repo</Private>
                        <FurtherInstruction>Code snippets available on request</FurtherInstruction>
                    </GithubStackedText>
                </Github>
                <DemoButton tabIndex={1} onKeyDown={(e) => e.key == 'Enter' && openDemo(apps[props.page?.replace(/\-+/g, '')]?.demo)} onClick={() => openDemo(apps[props.page?.replace(/\-+/g, '')]?.demo)} available={apps[props.page?.replace(/\-+/g, '')]?.demo}>
                    {apps[props.page?.replace(/\-+/g, '')]?.demo ? 'Try A Demo' : 'Not Available'}
                </DemoButton>
            </DemoBar>
		</HeroContainer>
	)
}

// STYLED COMPONENTS //
const HeroContainer = styled.div({
    marginTop:160,
    width:'100%',
    position:'relative',
});
const DemoBar = styled.div((props) => ({
    width:'100%',
    height:120,
    marginTop:50,
    background: props.theme.batmanMode ? '#353639':'#DCDEE2',
    display:'flex',
    borderRadius:10,
    justifyContent:'space-between',
    alignItems:'center',
}));
const Github = styled.div({
    marginLeft:25,
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
});
const GithubIcon = styled.svg((props) => ({
    height:48,
    marginRight:10,
    fill:props.theme.batmanMode?'#d3d3db':'#7F7F89',
}));
const GithubStackedText = styled.div({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'flex-start',
});
const Private = styled.div((props) => ({
    fontSize:22,
    color: props.theme.batmanMode ? '#d3d3db':'#7F7F89',
    fontWeight:700,
}));
const FurtherInstruction = styled.div((props) => ({
    fontSize:20,
    color: props.theme.batmanMode? '#d3d3db':'#7F7F89',
    fontWeight:400,
}));
const DemoButton = styled.div((props) => ({
    color:'#fff',
    fontWeight:600,
    fontSize:20,
    outline:0,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:45,
    height:54,
    width:160,
    pointerEvents: props.available ? 'all':'none',
    marginRight:25,
    boxSizing:'border-box',
    background: props.available ? props.theme.batmanMode ? '#ff1957':'#aa153d' : props.theme.batmanMode ? '#48484c':'#aeaeb2',
    border: props.available ?  props.theme.batmanMode ? '2px solid #ff1957':'2px solid #aa153d': props.theme.batmanMode ? '#48484c' :'#aeaeb2',
    cursor:'pointer',
    transition:'background .2s ease-in-out',
    ':hover':{
        background: props.theme.batmanMode ? '#ff3e72':'#d9426b',
    }
}));
const TwoColumns = styled.div({
    marginTop:50,
    display:'flex',
    alignItems:'flex-start',
});
const Vitals = styled.div((props) => ({
    fontSize:17,
    lineHeight:'28px',
    color:props.theme.batmanMode ? '#d3d3db':'#4e4e52'
}));
const Vital = styled.div({

});
const LeftColumn = styled.div((props) => ({
    width:'calc(50%)',
    boxSizing:'border-box',
    borderRight:props.theme.batmanMode ? '1px solid #3b3b3d' : '1px solid #e1e2e4',
    paddingRight:25,
}));
const RightColumn = styled.div({
    width:'calc(50%)',
    boxSizing:'border-box',
    paddingLeft:25,
});
const Bullets = styled.ul((props) => ({
    lineHeight:'33px',
    color:props.theme.batmanMode ? '#d3d3db':'#4e4e52',
    fontSize:17,
    fontWeight:600,
    paddingInlineStart:17
}));
const Bullet = styled.li({

});
const Description = styled.div((props) => ({
    color:props.theme.batmanMode ? '#fff':'#000',
    opacity:.5,
    lineHeight:'31px',
    fontSize:16,
}));
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
const Introduction = styled.div({
  
});
const Title = styled.h1((props) => ({
    fontSize:32,
    margin:0,
    marginTop:50,
    padding:0,
    fontWeight:800,
    color: props.theme.batmanMode ? '#d3d3db' :'#4E4E52',
}));
const Subtitle = styled.h2((props) => ({
    fontSize:20,
    margin:0,
    marginTop:5,
    padding:0,
    fontWeight:300,
    color: props.theme.batmanMode ? '#fff' :'#000',
    opacity:.5
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

export default connect(mapStateToProps,mapDispatchToProps)(ProjectInfo);