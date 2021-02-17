import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';

type TSProps = {
	theme:string
}

const ProjectSelection:FunctionComponent<TSProps> = (props) => {

	// STATE //
	const [ui, setUi] = useState();

	return (
		<Projects>
            <SingleColumn>
                <VisibleFeeds>
                    <LeftSide>
                        <VFLogo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 119.3 24"><path d="M20.6,0H3.4A3.4,3.4,0,0,0,0,3.4V20.6A3.4,3.4,0,0,0,3.4,24H20.6A3.4,3.4,0,0,0,24,20.6V3.4A3.4,3.4,0,0,0,20.6,0ZM17.1,20.6a.7.7,0,0,1-.7.7H3.6a.7.7,0,0,1-.6-.7V8a.6.6,0,0,1,.6-.6H5.5a.7.7,0,0,1,.7.6v9.4c0,.4.2.7.6.7h9.6a.7.7,0,0,1,.7.6Zm3.9-.2a.8.8,0,0,1-.8.8H18.6a.8.8,0,0,1-.8-.8V8.6l-6.5,6.5a.6.6,0,0,1-.8,0L9.1,13.7a.6.6,0,0,1,0-.8l6.5-6.5H3.8A.8.8,0,0,1,3,5.6V4a.8.8,0,0,1,.8-.7H20.2A.8.8,0,0,1,21,4Z" /><g id="visiblefeeds" ><g ><path d="M30.9,8.9h1.9l2,6.4h.1l2-6.4h1.9l-3.2,9.2H34.1Z" /><path d="M40.2,5.2H42V7.1H40.2Zm0,3.7H42v9.2H40.2Z" /><path d="M44.7,15.3a3.9,3.9,0,0,0,2.8,1.1,2.8,2.8,0,0,0,1.3-.3.9.9,0,0,0,.4-.8c0-.4,0-.6-.2-.7a1.1,1.1,0,0,0-.8-.2l-1.6-.2a2.3,2.3,0,0,1-1.8-.8,2.5,2.5,0,0,1-.8-1.8,3,3,0,0,1,1-2.1,4.2,4.2,0,0,1,2.3-.7h1.1l1,.2a7.1,7.1,0,0,1,1.4,1l-1.1,1.3a2.4,2.4,0,0,0-1.1-.6,2.5,2.5,0,0,0-1.3-.3,1.6,1.6,0,0,0-1.1.3,1,1,0,0,0-.4.8.9.9,0,0,0,.3.6,1.9,1.9,0,0,0,.9.3h1.5a3.1,3.1,0,0,1,2,.9,3.6,3.6,0,0,1,.5,1.9,2.3,2.3,0,0,1-1,2,5.3,5.3,0,0,1-2.6.8,5.4,5.4,0,0,1-3.9-1.7Z" /><path d="M53.1,5.2h1.8V7.1H53.1Zm0,3.7h1.8v9.2H53.1Z" /><path d="M57.4,5.2h1.8V9.9l1-.8a2.8,2.8,0,0,1,1.3-.3A2.6,2.6,0,0,1,63.8,10a2.2,2.2,0,0,1,.5,1.1,12.5,12.5,0,0,1,.2,2.4,11.3,11.3,0,0,1-.2,2.3,2.2,2.2,0,0,1-.5,1.2,2.4,2.4,0,0,1-.9.8l-1.4.4a3.2,3.2,0,0,1-2.3-1.1v1H57.4Zm3.5,5.4a1.2,1.2,0,0,0-.9.3,2,2,0,0,0-.6.7,6.4,6.4,0,0,0-.2.9v2c.1.3.1.6.2.9a2,2,0,0,0,.6.7l.9.2,1-.2a1.2,1.2,0,0,0,.5-.7c.2-.2.2-.6.3-.9V12.4a3.2,3.2,0,0,0-.3-.9c-.1-.3-.2-.5-.5-.6A1.5,1.5,0,0,0,60.9,10.6Z" /><path d="M66.7,5.2h1.8V15.7c0,.4.2.6.7.6h.6v1.8H69a2.8,2.8,0,0,1-1.6-.5,2.5,2.5,0,0,1-.7-1.8Z" /><path d="M72.7,14.2a2.4,2.4,0,0,0,.6,1.7,2.5,2.5,0,0,0,1.5.5,2.7,2.7,0,0,0,2-.9l1.3,1.2a4.2,4.2,0,0,1-3.2,1.5,3.5,3.5,0,0,1-1.4-.3.9.9,0,0,1-.6-.3l-.7-.4a5.6,5.6,0,0,1-.9-1.4,7.1,7.1,0,0,1-.3-2.3,6.9,6.9,0,0,1,.3-2.2,5.3,5.3,0,0,1,.8-1.5,3.7,3.7,0,0,1,1.2-.7,3.1,3.1,0,0,1,1.3-.3,4,4,0,0,1,2.6,1,3.9,3.9,0,0,1,1,2.9v1.5Zm3.8-1.5a2.4,2.4,0,0,0-.6-1.6,1.7,1.7,0,0,0-2.6,0,2.4,2.4,0,0,0-.6,1.6Z" /><path d="M80.7,10.3h-.9V8.9h.9V7.7a2.3,2.3,0,0,1,2.4-2.5h1.1V7h-1c-.5-.1-.8.2-.8.7V8.9h1.8v1.4H82.4v7.8H80.7Z" /><path d="M86.7,14.2a2.4,2.4,0,0,0,.6,1.7,2.5,2.5,0,0,0,1.5.5,2.7,2.7,0,0,0,2-.9l1.3,1.2a4.2,4.2,0,0,1-3.2,1.5,3.5,3.5,0,0,1-1.4-.3.9.9,0,0,1-.6-.3l-.7-.4a5.6,5.6,0,0,1-.9-1.4,7.1,7.1,0,0,1-.3-2.3,6.9,6.9,0,0,1,.3-2.2,5.3,5.3,0,0,1,.8-1.5,3.7,3.7,0,0,1,1.2-.7,3.1,3.1,0,0,1,1.3-.3,4,4,0,0,1,2.6,1,3.9,3.9,0,0,1,1,2.9v1.5Zm3.8-1.5a2.4,2.4,0,0,0-.6-1.6,1.7,1.7,0,0,0-2.6,0,2.4,2.4,0,0,0-.6,1.6Z" /><path d="M95.7,14.2a2.4,2.4,0,0,0,.6,1.7,2.5,2.5,0,0,0,1.5.5,2.7,2.7,0,0,0,2-.9l1.3,1.2a4.2,4.2,0,0,1-3.2,1.5,3.5,3.5,0,0,1-1.4-.3.9.9,0,0,1-.6-.3l-.7-.4a5.6,5.6,0,0,1-.9-1.4,7.1,7.1,0,0,1-.3-2.3,6.9,6.9,0,0,1,.3-2.2,5.3,5.3,0,0,1,.8-1.5,3.7,3.7,0,0,1,1.2-.7,3.1,3.1,0,0,1,1.3-.3,4,4,0,0,1,2.6,1,3.9,3.9,0,0,1,1,2.9v1.5Zm3.8-1.5a2.4,2.4,0,0,0-.6-1.6,1.7,1.7,0,0,0-2.6,0,2.4,2.4,0,0,0-.6,1.6Z" /><path d="M108.7,17.1a3.4,3.4,0,0,1-2.3,1.1l-1.4-.4a3.9,3.9,0,0,1-1-.8,3.3,3.3,0,0,1-.5-1.2,13.5,13.5,0,0,1-.1-2.3,14.9,14.9,0,0,1,.1-2.4A3.7,3.7,0,0,1,104,10a2.6,2.6,0,0,1,2.4-1.2,2.4,2.4,0,0,1,1.2.3l1.1.8V5.2h1.7V18.1h-1.7Zm-1.8-6.5a1.2,1.2,0,0,0-.9.3.9.9,0,0,0-.6.6,2.9,2.9,0,0,0-.2.9v2.1a2.4,2.4,0,0,0,.2.9,1.3,1.3,0,0,0,.6.7l.9.2,1-.2a1.2,1.2,0,0,0,.5-.7l.3-.9v-2l-.3-.9a1.2,1.2,0,0,0-.5-.7A1.5,1.5,0,0,0,106.9,10.6Z" /><path d="M113,15.3a3.8,3.8,0,0,0,2.8,1.1,2.1,2.1,0,0,0,1.2-.3.8.8,0,0,0,.5-.8c0-.4-.1-.6-.3-.7s-.4-.2-.8-.2l-1.5-.2a2.2,2.2,0,0,1-1.8-.8,2.2,2.2,0,0,1-.8-1.8,2.7,2.7,0,0,1,1-2.1,4.2,4.2,0,0,1,2.3-.7h1.1l.9.2a5.6,5.6,0,0,1,1.5,1L118,11.4a2.4,2.4,0,0,0-1.1-.6,2.8,2.8,0,0,0-1.3-.3,1.6,1.6,0,0,0-1.1.3,1,1,0,0,0-.4.8.9.9,0,0,0,.3.6,1.3,1.3,0,0,0,.9.3h1.4a2.7,2.7,0,0,1,2,.9,2.9,2.9,0,0,1,.6,1.9,2.6,2.6,0,0,1-1,2,5,5,0,0,1-6.5-.9Z" /></g></g></VFLogo>
                        <Title>Private Social Networks For Enterprise</Title>
                        <Text>A personal startup that I’ve been developing in 2021 that brings the incredible usefulness of using feeds to communicate across teams without the risks and liabilities of leveraging existing public social networks. Currently have an MVP up and running. Always looking for new beta users ;)</Text>
                    </LeftSide>
                    <RightSide>
                        <VFScreenshot src={'/assets/img/screenshot-visiblefeeds.jpg'} alt={'VisibleFeeds screenshot'} />
                    </RightSide>
                </VisibleFeeds>
            </SingleColumn>
            <DualColumns>
                <Column>
                    <VDL>
                        <VDLLogo id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.7 51.8"><g id="Group_10" data-name="Group 10"><g id="_87686j.tif" data-name=" 87686j.tif"><g id="Group_1" data-name="Group 1"><path id="Path_1" data-name="Path 1" d="M33.2,26.1,3.9,7.1v38Z" /></g></g><path id="Path_2" data-name="Path 2" d="M3.2,45.1V5.7L23.1,17.9v-4L0,0V51.8L23.1,37.2V32.9Z" style={{opacity:.3}} /></g><g id="VDL" ><g ><path d="M45.1,16h4.6l4.5,12.1h.1L58.9,16h4.4L55.7,34.4H52.4Z"/><path d="M65.7,16h6.1a18.6,18.6,0,0,1,4.2.5,7.7,7.7,0,0,1,3.4,1.6A7.6,7.6,0,0,1,81.8,21a9,9,0,0,1,.9,4.2,8.4,8.4,0,0,1-.9,4A7.6,7.6,0,0,1,79.6,32a10.6,10.6,0,0,1-3.3,1.8,13.4,13.4,0,0,1-4,.6H65.7Zm4.1,14.7h2.1a10.9,10.9,0,0,0,2.6-.3,5.1,5.1,0,0,0,2.1-1A4.7,4.7,0,0,0,78,27.7a6.8,6.8,0,0,0,.5-2.7,5.6,5.6,0,0,0-.5-2.3A5.8,5.8,0,0,0,76.6,21a7.2,7.2,0,0,0-2-.9,6.9,6.9,0,0,0-2.5-.4H69.8Z" /><path d="M86.1,16h4.1V30.7h7.5v3.7H86.1Z" /></g></g></VDLLogo>
                        <Title>Interactive Video Platform For Higher Ed</Title>
                        <Text>While working for Oregon State University Ecampus, there was a need to incorporate interactive video into courses. While management investigated purchasing licenses to costly 3rd party platforms, I volunteered that I could build something better for much less. With a green light, I built VDL (short for Video Driven Learning). VDL is used extensively in OSU courses til this day, and has delivered over 90,000 interactive videos to our students!</Text>
                    </VDL>
                    <NES>

                    </NES>
                </Column>
                <Column>
                    <LabShell>

                    </LabShell>
                </Column>
            </DualColumns>
		</Projects>
	)
}

// STYLED COMPONENTS //
const Projects = styled.div({
    width:'100%',
    display:'flex',
    marginTop:40,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'space-between',
    marginBottom:40,
});
const SingleColumn = styled.div({
    width:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'flex-start',
});
const DualColumns = styled.div({
    width:'100%',
    marginTop:40,
    display:'flex',
    justifyContent:'space-between',
    alignItems:'flex-start',
});
const Column = styled.div({
    width:'calc(50% - 20px)',
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'flex-start',
});
const VisibleFeeds = styled.div({
    width:'100%',
    height:340,
    borderRadius:10,
    background:'#A82828',
    boxSizing:'border-box',
    padding:25,
    position:'relative',
    display:'flex',
    overflow:'hidden',
    boxShadow: '0px 12px 16px rgba(0,0,0,.035)',
});
const NES = styled.div({
    height:320,
    width:'100%',
    marginTop:40,
    borderRadius:10,
    background:'#ffffff',
    border:'1px solid #E2E4EB',
    boxShadow: '0px 12px 16px rgba(0,0,0,.035)',
});
const VDL = styled.div({
    height:460,
    width:'100%',
    boxSizing:'border-box',
    padding:25,
    position:'relative',
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    overflow:'hidden',
    borderRadius:10,
    background:'#000',
    boxShadow: '0px 12px 16px rgba(0,0,0,.035)',
});
const LabShell = styled.div({
    height:820,
    width:'100%',
    borderRadius:10,
    background:'#ffffff',
    border:'1px solid #E2E4EB',
    boxShadow: '0px 12px 16px rgba(0,0,0,.035)',
});
const LeftSide = styled.div({
   
});
const RightSide = styled.div({
   
});
const Title = styled.div({
    fontSize:46,
    fontWeight:900,
    color:'#fff',
    maxWidth:550,
    margin:0,
    marginTop:15,
    padding:0,
});
const Text = styled.div({
    maxWidth:600,
    color:'#fff',
    opacity:.7,
    fontWeight:300,
    lineHeight:'28px',
    marginTop:13,
});
const VFLogo = styled.svg({
    height:32,
    fill:'#fff',
});
const VDLLogo = styled.svg({
    height:50,
    fill:'#fff',
 });
const VFScreenshot = styled.img({
    position:'absolute',
    right:0,
    bottom:0,
    borderTopLeftRadius:10,
    boxShadow:'-15px -10px 15px rgba(0,0,0,.025)'
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

export default connect(mapStateToProps,mapDispatchToProps)(ProjectSelection);