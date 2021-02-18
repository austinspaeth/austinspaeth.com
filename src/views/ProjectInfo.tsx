import React, {FunctionComponent, useState, useEffect} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';

type TSProps = {
    page:string,
	theme:any
}

const ProjectInfo:FunctionComponent<TSProps> = (props) => {

    const [laptopWidth, setLaptopWidth] = useState(-999999);

    useEffect(() => {
        window.addEventListener('resize', (e) => handleResize(e));
        return  window.addEventListener('resize', (e) => handleResize(e));
    }, []);

    useEffect(() => {
        setLaptopWidth(window.document.querySelector('#laptop').getBoundingClientRect().width)
    }, [document?.querySelector('#laptop')]);

    const handleResize = (e) => {
        setLaptopWidth(window.document.querySelector('#laptop').getBoundingClientRect().width);
    }

    const apps = {
        visiblefeeds:{
            short:'vf',
            title:'Visible Feeds',
            subtitle:'Private Social Network Startup',
            for: 'Me (Personal Startup)',
            role: 'Creator/Principle Developer',
            frontend: 'React, Redux, TypeScript, Relay, Styled Components',
            backend: 'Serverless/AWS, AppSync/GraphQL, DynamoDB',
            video: 'https://www.youtube.com/embed/OVzFH9b1LtI?autoplay=1&loop=1&modestbranding=1',
            bullets:[
                'Current MVP built from scratch in 1 month',
                'Built to be highly scalable with small ongoing costs',
                'Very positive feedback from early testers'
            ],
            description: 'I started work on Visible Feeds in January 2021. Before the pandemic, I had another startup that didn’t gain a lot of traction, but had a small subset of loyal users who stuck with me despite infrequent updates. I took the feedback from that idea, and pivoted into my new app which focuses on taking the best qualities of social media tools, and leverage them for internal business social networks. Twitter might not be the best tool to communicate with your employees and teams, but Twitter itself is an effective and accepted means of communicating in day-to-day life, and I believe offering a private solution has potential to really take internal business communication to the next level.'
        },
        videodrivenlearning:{
            short:'vd',
            title:'Video Driven Learning (VDL)',
            subtitle:'Interactive Video Platform',
            for: 'Oregon State University Ecampus',
            role: 'Creator/Principle Developer',
            frontend: 'React, Redux, TypeScript',
            backend: 'Serverless/AWS, Lambda/NodeJS, DynamoDB',
            video: 'https://www.youtube.com/embed/dtQsGhn27P4?autoplay=1&loop=1&modestbranding=1',
            bullets:[
                'Over 90,000 interactive videos served',
                'WCAG 2.1 AAA accessible (just the software)',
                'Saves Ecampus hundreds of thousands in licensing costs each year'
            ],
            description: 'While working for Ecampus, there was a need to incorporate interactive video into courses. While management investigated purchasing licenses to costly 3rd party platforms, I volunteered that I could build something better for much less. With a green light, I built VDL (short for Video Driven Learning). VDL is used extensively in OSU courses til this day, and has delivered over 90,000 interactive videos to our students! As with all projects I head at Ecampus, this app focused on accessibility, performance and scale. Despite the massive usage, VDL costs Ecampus less than $20 a month to run and maintain.',
            demo:'https://vdl.oregonstate.education/demo'
        },
        neverendingstory:{
            short:'ne',
            title:'Never Ending Story (NES)',
            subtitle:'Interactive Long-Form Content Platform',
            for: 'Oregon State University Ecampus',
            role: 'Creator/Principle Developer',
            frontend: 'React, Redux',
            backend: 'Static JSON',
            video: 'https://www.youtube.com/embed/nsxJY8soQT8?autoplay=1&loop=1&modestbranding=1',
            bullets:[
                '2019 NWACC Instructional Technology Award',
                'Allowed our team to increase output by over 500%',
                'WCAG 2.1 AAA accesible'
            ],
            description: 'Before arriving at Ecampus, the team that produces educational apps for courses focused on one-off custom software. I believed that while the team was very talented and produced some very cool projects, it had some very big flaws. The development cycles were short and the complexity of the projects led to rushed projects that would never get revised. I pitched moving to a platform strategy where I would lead a team that built software we could build on top off at a more rapid pace. I got my team, and NES was my first offering, and it provided a way to rapidly deploy high quality and accessible long form content to courses. Instructors would provide reading content, and we would transform it into rich learning experiences for students. We went from delivering ~8 projects per term to over 50 in one term.',
            demo:'https://physics.oregonstate.education/docs/#/0/0'
        },
        labshell:{
            short:'ls',
            title:'LabShell',
            subtitle:'Virtual Lab Platform',
            for: 'Oregon State University Ecampus',
            role: 'Team Lead/Core Developer',
            frontend: 'React, Redux, TypeScript',
            backend: 'Serverless/AWS, Lambda/NodeJS, DynamoDB',
            video: 'https://www.youtube.com/embed/8-WI-ghkknk?autoplay=1&loop=1&modestbranding=1',
            bullets:[
                'Team can produce new original labs at 1 new lab per week',
                'Over 1,000 students use LabShell every term',
                'Exploring licensing to other universities and offering for free to high schools'
            ],
            description: 'At the start of 2020, Ecampus faced a crisis because a solution they had been using to offer labs virtually was being abandoned at the end of the year. My team was asked if we could come up with a viable solution, and we took the opportunity without hesitating. It was no small task; an entire platform would need to be planned and built out, along with 28 unique chemistry labs and a backend interface for instructors. What we were able to accomplish is nothing short of amazing. Our team of 3 worked tirelessly through the pandemic to deliver a masterpiece that will revolutionize how students around the world learn chemistry in the years to come.'
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
            <Preview style={{height: window.document.querySelector('#laptop')?.getBoundingClientRect().height}}>
                <Laptop id={'laptop'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1127.7 623.3"><g id="Page-1"><g id="Laptop"><path id="bezel" d="M967.1,1H160.4c-22,0-40.7,18-40.7,40.3V571.9h888.1V41.3C1007.8,19,989.1,1,967.1,1Z" style={{fill: props.theme.darkMode ? 'rgb(57 58 60)':'#e1e2e4',stroke: props.theme.darkMode ? 'rgb(77 79 82)':'#c4cad2',strokeWidth:2,fillRule:'evenodd'}}/><circle id="webcam" cx="565.5" cy="31.5" r="6.5" style={{fill:'none',stroke:props.theme.darkMode ? 'rgb(77 79 82)':'#c4cad2',strokeWidth:2}}/><g id="bottom"><path id="Shape" d="M1043.3,622.3H84.4C34.6,622.3,1,605.2,1,598V575.8c0-2.1,2.2-3.9,4.9-3.9H1121.8c2.7,0,4.9,1.8,4.9,3.9v23C1126.7,604.6,1100.7,622.3,1043.3,622.3Z" style={{fill: props.theme.darkMode ? 'rgb(57 58 60)':'#e1e2e4',stroke: props.theme.darkMode ? 'rgb(77 79 82)':'#c4cad2',strokeWidth:2,fillRule:'evenodd'}}/><path id="Line" d="M1.8,595.5H1123.7" style={{fill:'none',stroke:props.theme.darkMode ? 'rgb(77 79 82)':'#c4cad2',strokeLinecap:'square'}}/></g><rect id="screen" x="155.5" y="64.4" width="815" height="474.95" style={{fill: props.theme.darkMode ? 'rgb(24 24 25)':'rgb(184 186 191)',stroke: props.theme.darkMode ? 'rgb(77 79 82)':'#c4cad2'}}/><path id="touchpad" d="M685.7,573.5v5c0,3.6-7,4.7-12.3,4.7H454.5c-5.6,0-12.7-1.1-12.7-4.7v-5" style={{fill: props.theme.darkMode ? 'rgb(57 58 60)':'#e1e2e4',stroke: props.theme.darkMode ? 'rgb(77 79 82)':'#c4cad2',fillRule:'evenodd'}}/></g></g></Laptop>
                <YouTube laptopWidth={laptopWidth} width={window.document.querySelector('#screen')?.getBoundingClientRect().width} height={window.document.querySelector('#screen')?.getBoundingClientRect().height} src={apps[props.page?.replace(/\-+/g, '')]?.video + '&playsinline=1'} frameborder="0" allow="accelerometer; playsinline; allowsInlineMediaPlayback; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></YouTube>
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
                        <Private>Private <MobileHide>Github</MobileHide> Repo</Private>
                        <FurtherInstruction>Code snippets available <MobileHide>on request</MobileHide></FurtherInstruction>
                    </GithubStackedText>
                </Github>
                <DemoButton tabIndex={1} onKeyDown={(e) => e.key == 'Enter' && openDemo(apps[props.page?.replace(/\-+/g, '')]?.demo)} onClick={() => openDemo(apps[props.page?.replace(/\-+/g, '')]?.demo)} available={apps[props.page?.replace(/\-+/g, '')]?.demo}>
                    {apps[props.page?.replace(/\-+/g, '')]?.demo ? 'Try A Demo' : 'Not Available'}
                </DemoButton>
            </DemoBar>
            <Screenshots>
                <Screenshot src={'/assets/img/'+apps[props.page?.replace(/\-+/g, '')]?.short+'-1.jpg'} alt={'Screenshot of the application in use.'} />
                <Screenshot src={'/assets/img/'+apps[props.page?.replace(/\-+/g, '')]?.short+'-2.jpg'} alt={'Screenshot of the application in use.'} />
                <Screenshot src={'/assets/img/'+apps[props.page?.replace(/\-+/g, '')]?.short+'-3.jpg'} alt={'Screenshot of the application in use.'} />
                <Screenshot src={'/assets/img/'+apps[props.page?.replace(/\-+/g, '')]?.short+'-4.jpg'} alt={'Screenshot of the application in use.'} />
            </Screenshots>
		</HeroContainer>
	)
}

// STYLED COMPONENTS //
const HeroContainer = styled.div({
    marginTop:160,
    width:'100%',
    position:'relative',
});
const MobileHide = styled.span({
    '@media(max-width:600px)':{
        display:'none'
    }
});
const Screenshots = styled.section({
    marginTop:50,
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'space-between',
    alignItems:'center',
    '@media(max-width:750px)':{
        marginTop:40,
        marginBottom:-10
    }
});
const Screenshot = styled.img((props) => ({
    width:'calc(50% - 15px)',
    marginBottom:15,
    borderRadius:10,
    boxSizing:'border-box',
    border: props.theme.darkMode ? '15px solid #353639':'15px solid #dcdee2',
    '@media(max-width:750px)':{
        width:'100%',
        marginBottom:30,
    }
}));
const DemoBar = styled.div((props) => ({
    width:'100%',
    height:120,
    marginTop:50,
    background: props.theme.darkMode ? '#353639':'#DCDEE2',
    display:'flex',
    borderRadius:10,
    justifyContent:'space-between',
    alignItems:'center',
    '@media(max-width:900px)':{
        height:100,
        marginBottom:-10,
        marginTop:40
    }
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
    fill:props.theme.darkMode?'#d3d3db':'#7F7F89',
    '@media(max-width:900px)':{
        height:40
    }
}));
const GithubStackedText = styled.div({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'flex-start',
});
const Private = styled.div((props) => ({
    fontSize:22,
    color: props.theme.darkMode ? '#d3d3db':'#7F7F89',
    fontWeight:700,
    '@media(max-width:900px)':{
        fontSize:16
    }
}));
const FurtherInstruction = styled.div((props) => ({
    fontSize:20,
    color: props.theme.darkMode? '#d3d3db':'#7F7F89',
    fontWeight:400,
    '@media(max-width:900px)':{
        fontSize:12
    }
}));
const YouTube = styled.iframe((props) => ({
    height:window.document.querySelector('#screen')?.getBoundingClientRect().height,
    width:window.document.querySelector('#screen')?.getBoundingClientRect().width,
    position:'absolute',
    zIndex:2,
    top:Math.min(68, 68 - (0.058 * (1200 - window.document.querySelector('#laptop')?.getBoundingClientRect().width))),
    left:Math.min(165, 165 - (0.138 * (1200 - window.document.querySelector('#laptop')?.getBoundingClientRect().width))),
    border:0,
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
    background: props.available ? props.theme.darkMode ? '#ff1957':'#aa153d' : props.theme.darkMode ? '#48484c':'#aeaeb2',
    border: props.available ?  props.theme.darkMode ? '2px solid #ff1957':'2px solid #aa153d': props.theme.darkMode ? '#48484c' :'#aeaeb2',
    cursor:'pointer',
    transition:'background .2s ease-in-out',
    ':hover':{
        background: props.theme.darkMode ? '#ff3e72':'#d9426b',
    },
    '@media(max-width:900px)':{
        height:45,
        fontSize:16,
        width:140
    }
}));
const TwoColumns = styled.div({
    marginTop:50,
    display:'flex',
    alignItems:'flex-start',
    '@media(max-width:900px)':{
        flexDirection:'column'
    }
});
const Vitals = styled.div((props) => ({
    fontSize:17,
    lineHeight:'28px',
    color:props.theme.darkMode ? '#d3d3db':'#4e4e52',
    '@media(max-width:900px)':{
        fontSize:16
    }
}));
const Vital = styled.div({

});
const LeftColumn = styled.div((props) => ({
    width:'50%',
    boxSizing:'border-box',
    borderRight:props.theme.darkMode ? '1px solid #3b3b3d' : '1px solid #e1e2e4',
    paddingRight:25,
    '@media(max-width:900px)':{
        width:'100%',
        paddingRight:0,
        borderRight:0
    }
}));
const RightColumn = styled.div({
    width:'calc(50%)',
    boxSizing:'border-box',
    paddingLeft:25,
    '@media(max-width:900px)':{
        width:'100%',
        paddingLeft:0
    }
});
const Bullets = styled.ul((props) => ({
    lineHeight:'33px',
    color:props.theme.darkMode ? '#d3d3db':'#4e4e52',
    fontSize:17,
    fontWeight:600,
    paddingInlineStart:17,
    '@media(max-width:900px)':{
        marginTop:30,
        marginBottom:30,
        fontSize:16
    }
}));
const Bullet = styled.li({

});
const Description = styled.div((props) => ({
    color:props.theme.darkMode ? '#fff':'#000',
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
});
const Laptop = styled.svg({
    position:'absolute',
    width:'100%',
});
const Introduction = styled.div({
  
});
const Title = styled.h1((props) => ({
    fontSize:32,
    margin:0,
    marginTop:50,
    padding:0,
    fontWeight:800,
    color: props.theme.darkMode ? '#d3d3db' :'#4E4E52',
    '@media(max-width:900px)':{
        fontSize:28
    }
}));
const Subtitle = styled.h2((props) => ({
    fontSize:20,
    margin:0,
    marginTop:5,
    padding:0,
    fontWeight:300,
    color: props.theme.darkMode ? '#fff' :'#000',
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