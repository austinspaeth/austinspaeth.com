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

    React.useEffect(() => {
        if (!apps[props.page?.replace(/\-+/g, '')]) {
            window.location.href = 'https://austinspaeth.com/';
        }
    }, []);

    const apps = {
        visiblefeeds:{
            short:'vf',
            title:'Visible Feeds',
            subtitle:'Private Social Network Startup',
            for: 'Me (Personal Startup)',
            role: 'Creator/Principle Developer',
            demo: 'https://visiblefeeds.com/',
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
            demo:'https://labs.oregonstate.education/demo',
            description: 'At the start of 2020, Ecampus faced a crisis because a solution they had been using to offer labs virtually was being abandoned at the end of the year. My team was asked if we could come up with a viable solution, and we took the opportunity without hesitating. It was no small task; an entire platform would need to be planned and built out, along with 28 unique chemistry labs and a backend interface for instructors. What we were able to accomplish is nothing short of amazing. Our team of 3 worked tirelessly through the pandemic to deliver a masterpiece that will revolutionize how students around the world learn chemistry in the years to come.'
        },
        detailpages:{
            short:'dp',
            title:'Detail Pages',
            subtitle:'Real Estate Listing Platform',
            for: 'Realtor.com',
            role: 'Project Owner/Tech Lead',
            frontend: 'NextJS/React, Redux, TypeScript, Styled Components',
            backend: 'Node, ECS, GraphQL',
            video: 'https://www.youtube.com/embed/45XzD3aCFDI?autoplay=1&loop=1&modestbranding=1',
            bullets:[
                'Led the effort to migrate our detail pages from Ruby to NextJS',
                'Platform used by multiple teams, and houses multiple critical pages',
                'Generates over 1M views per day, and over 90% of the site\'s revenues'               
            ],
            demo:'https://realtor.com/realestateandhomes-detail/',
            description: 'When I joined RDC, I was given the opportunity to lead a team to migrate our off-market detail pages from Ruby to NextJS. We rebuilt the pages from scratch and comlpeted the project in 3 months. Due to the success of the project, I was given another opportunity to assemble a team to migrate RDC\'s most important page, for sale listings, to the platform I had created for off-market pages. My team of 5 engineers completed the migration swiftly in 1.5 months, and that platform now houses a number of critical pages and is used by multiple teams at the company.'
        },
        homeapp:{
            short:'ho',
            title:'Home App',
            subtitle:'Home Owners Dashboard',
            for: 'Realtor.com',
            role: 'Team Lead/Core Developer',
            frontend: 'React Native/Expo, Redux, TypeScript',
            backend: 'GraphQL',
            video: 'https://www.youtube.com/embed/QkCw8cfrrCM?autoplay=1&loop=1&modestbranding=1',
            bullets:[
                'Hackathon project completed in 24 hours & fully functional',
                'Was recognized by the CEO and considered for production',
                'Concepts from the app ended up becoming production features'
            ],
            description: 'For one of the annual internal Hackathons at Realtor.com, I formed a team of myself and another developer (Byresha), and set out on an ambitious mission to take our home owner products, and replace them with a unified native mobile app. The app was completely functional and self-contained, merging Realtor\'s offmarket detail pages, our MyHome product, and sellers marketplace product (along with some new ideas I had). Both the CPO and CEO recognized what we built, and explored the possibility of it going to production. While it didn\'t make it to production in the end, many concepts became features in our products.'
        },
        discoverymark:{
            short:'dm',
            title:'DiscoveryMark',
            subtitle:'Consumer Feedback Widget',
            for: 'Me (Personal Startup)',
            role: 'Co-Founder/Principle Developer',
            frontend: 'React, Svelte, Redux, TypeScript',
            backend: 'Serverless, NestJS, ChatGPT',
            demo: 'https://discoverymark.com',
            video: 'https://www.youtube.com/embed/eEwTvsO0EeU?autoplay=1&loop=1&modestbranding=1',
            bullets:[
                'Feedback widget built in Svelte and is smaller than 8kb',
                'Built in 2 weeks with my cofounder Victor Cho',
                'Architecture costs pennies, even with high usage'
            ],
            description: 'I started DiscoveryMark because I was blown away at how poorly designed and performing the feedback forms I was seeing online were. Ugly, clunky forms with 20 questions didn\'t seem condusive to leaving feedback. I decided something better could be built. With typical forms, you have to click a small, hard to see tab saying "feedback," then fill out a massive form and click submit before that info sends. I took a different approach, removing friction by giving users easy and appealing UI to interact with, and streaming data as its given so sites can get as much feedback as they can get.'
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
                <YouTube laptopWidth={laptopWidth} width={window.document.querySelector('#screen')?.getBoundingClientRect().width} height={window.document.querySelector('#screen')?.getBoundingClientRect().height} src={apps[props.page?.replace(/\-+/g, '')]?.video + '&playsinline=1&autohide=1&controls=0&showinfo=0&showsearch=0&loop=1&modestbranding=1&wmode=transparent&hd=1&mute=1'} frameborder="0" allow="accelerometer; playsinline; allowsInlineMediaPlayback; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></YouTube>
            </Preview>
            <Introduction>
                <TwoColumns style={{ justifyContent: 'space-between', alignItems: 'center'}}>
                    <Cols>
                        <Title>{apps[props.page?.replace(/\-+/g, '')]?.title}</Title>
                        <Subtitle>{apps[props.page?.replace(/\-+/g, '')]?.subtitle}</Subtitle>
                    </Cols>
                    <Cols>
                        <DemoButton href={apps[props.page?.replace(/\-+/g, '')]?.demo} available={apps[props.page?.replace(/\-+/g, '')]?.demo}>
                            {apps[props.page?.replace(/\-+/g, '')]?.demo ? 'Try It Out' : 'Not Available'}
                        </DemoButton>
                    </Cols>
                </TwoColumns>
            </Introduction>
            <TwoColumns style={{ marginBottom: 20, paddingBottom: 50, borderBottom: '1px solid #e1e2e4'}}>
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
const Cols = styled.div({
    '@media(max-width:900px)':{
        width:'100%',
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
    pointerEvents: 'none',
}));
const DemoButton = styled.a((props) => ({
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
        width:'100%',
        marginTop:16,
    }
}));
const TwoColumns = styled.div({
    marginTop:50,
    display:'flex',
    alignItems:'flex-start',
    '@media(max-width:900px)':{
        flexDirection:'column',
        width: '100%',
        justifyContent:'flex-start',
        alignItems:'center',
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
    marginTop:0,
    padding:0,
    fontWeight:800,
    color: props.theme.darkMode ? '#d3d3db' :'#4E4E52',
    '@media(max-width:900px)':{
        fontSize:28,
        width:'100%',
    }
}));
const Subtitle = styled.h2((props) => ({
    fontSize:20,
    margin:0,
    marginTop:5,
    padding:0,
    fontWeight:300,
    color: props.theme.darkMode ? '#fff' :'#000',
    opacity:.5,
    '@media(max-width:900px)':{
        width:'100%',
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

export default connect(mapStateToProps,mapDispatchToProps)(ProjectInfo);