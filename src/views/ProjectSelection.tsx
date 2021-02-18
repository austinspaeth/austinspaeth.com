import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';
import { withRouter } from "react-router-dom";

type TSProps = {
    history:any,
	theme:string
}

const ProjectSelection:FunctionComponent<TSProps> = (props) => {

	const changeProject = (project) => {
        props.history.push('/'+project);
    }

	return (
		<Projects>
            <DualColumns>
                <Column>
                    <VisibleFeeds tabIndex={1} onKeyDown={(e) => e.key == 'Enter' && changeProject('visible-feeds')} onClick={() => changeProject('visible-feeds')}>
                        <VFLogo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 119.3 24"><path d="M20.6,0H3.4A3.4,3.4,0,0,0,0,3.4V20.6A3.4,3.4,0,0,0,3.4,24H20.6A3.4,3.4,0,0,0,24,20.6V3.4A3.4,3.4,0,0,0,20.6,0ZM17.1,20.6a.7.7,0,0,1-.7.7H3.6a.7.7,0,0,1-.6-.7V8a.6.6,0,0,1,.6-.6H5.5a.7.7,0,0,1,.7.6v9.4c0,.4.2.7.6.7h9.6a.7.7,0,0,1,.7.6Zm3.9-.2a.8.8,0,0,1-.8.8H18.6a.8.8,0,0,1-.8-.8V8.6l-6.5,6.5a.6.6,0,0,1-.8,0L9.1,13.7a.6.6,0,0,1,0-.8l6.5-6.5H3.8A.8.8,0,0,1,3,5.6V4a.8.8,0,0,1,.8-.7H20.2A.8.8,0,0,1,21,4Z" /><g id="visiblefeeds" ><g ><path d="M30.9,8.9h1.9l2,6.4h.1l2-6.4h1.9l-3.2,9.2H34.1Z" /><path d="M40.2,5.2H42V7.1H40.2Zm0,3.7H42v9.2H40.2Z" /><path d="M44.7,15.3a3.9,3.9,0,0,0,2.8,1.1,2.8,2.8,0,0,0,1.3-.3.9.9,0,0,0,.4-.8c0-.4,0-.6-.2-.7a1.1,1.1,0,0,0-.8-.2l-1.6-.2a2.3,2.3,0,0,1-1.8-.8,2.5,2.5,0,0,1-.8-1.8,3,3,0,0,1,1-2.1,4.2,4.2,0,0,1,2.3-.7h1.1l1,.2a7.1,7.1,0,0,1,1.4,1l-1.1,1.3a2.4,2.4,0,0,0-1.1-.6,2.5,2.5,0,0,0-1.3-.3,1.6,1.6,0,0,0-1.1.3,1,1,0,0,0-.4.8.9.9,0,0,0,.3.6,1.9,1.9,0,0,0,.9.3h1.5a3.1,3.1,0,0,1,2,.9,3.6,3.6,0,0,1,.5,1.9,2.3,2.3,0,0,1-1,2,5.3,5.3,0,0,1-2.6.8,5.4,5.4,0,0,1-3.9-1.7Z" /><path d="M53.1,5.2h1.8V7.1H53.1Zm0,3.7h1.8v9.2H53.1Z" /><path d="M57.4,5.2h1.8V9.9l1-.8a2.8,2.8,0,0,1,1.3-.3A2.6,2.6,0,0,1,63.8,10a2.2,2.2,0,0,1,.5,1.1,12.5,12.5,0,0,1,.2,2.4,11.3,11.3,0,0,1-.2,2.3,2.2,2.2,0,0,1-.5,1.2,2.4,2.4,0,0,1-.9.8l-1.4.4a3.2,3.2,0,0,1-2.3-1.1v1H57.4Zm3.5,5.4a1.2,1.2,0,0,0-.9.3,2,2,0,0,0-.6.7,6.4,6.4,0,0,0-.2.9v2c.1.3.1.6.2.9a2,2,0,0,0,.6.7l.9.2,1-.2a1.2,1.2,0,0,0,.5-.7c.2-.2.2-.6.3-.9V12.4a3.2,3.2,0,0,0-.3-.9c-.1-.3-.2-.5-.5-.6A1.5,1.5,0,0,0,60.9,10.6Z" /><path d="M66.7,5.2h1.8V15.7c0,.4.2.6.7.6h.6v1.8H69a2.8,2.8,0,0,1-1.6-.5,2.5,2.5,0,0,1-.7-1.8Z" /><path d="M72.7,14.2a2.4,2.4,0,0,0,.6,1.7,2.5,2.5,0,0,0,1.5.5,2.7,2.7,0,0,0,2-.9l1.3,1.2a4.2,4.2,0,0,1-3.2,1.5,3.5,3.5,0,0,1-1.4-.3.9.9,0,0,1-.6-.3l-.7-.4a5.6,5.6,0,0,1-.9-1.4,7.1,7.1,0,0,1-.3-2.3,6.9,6.9,0,0,1,.3-2.2,5.3,5.3,0,0,1,.8-1.5,3.7,3.7,0,0,1,1.2-.7,3.1,3.1,0,0,1,1.3-.3,4,4,0,0,1,2.6,1,3.9,3.9,0,0,1,1,2.9v1.5Zm3.8-1.5a2.4,2.4,0,0,0-.6-1.6,1.7,1.7,0,0,0-2.6,0,2.4,2.4,0,0,0-.6,1.6Z" /><path d="M80.7,10.3h-.9V8.9h.9V7.7a2.3,2.3,0,0,1,2.4-2.5h1.1V7h-1c-.5-.1-.8.2-.8.7V8.9h1.8v1.4H82.4v7.8H80.7Z" /><path d="M86.7,14.2a2.4,2.4,0,0,0,.6,1.7,2.5,2.5,0,0,0,1.5.5,2.7,2.7,0,0,0,2-.9l1.3,1.2a4.2,4.2,0,0,1-3.2,1.5,3.5,3.5,0,0,1-1.4-.3.9.9,0,0,1-.6-.3l-.7-.4a5.6,5.6,0,0,1-.9-1.4,7.1,7.1,0,0,1-.3-2.3,6.9,6.9,0,0,1,.3-2.2,5.3,5.3,0,0,1,.8-1.5,3.7,3.7,0,0,1,1.2-.7,3.1,3.1,0,0,1,1.3-.3,4,4,0,0,1,2.6,1,3.9,3.9,0,0,1,1,2.9v1.5Zm3.8-1.5a2.4,2.4,0,0,0-.6-1.6,1.7,1.7,0,0,0-2.6,0,2.4,2.4,0,0,0-.6,1.6Z" /><path d="M95.7,14.2a2.4,2.4,0,0,0,.6,1.7,2.5,2.5,0,0,0,1.5.5,2.7,2.7,0,0,0,2-.9l1.3,1.2a4.2,4.2,0,0,1-3.2,1.5,3.5,3.5,0,0,1-1.4-.3.9.9,0,0,1-.6-.3l-.7-.4a5.6,5.6,0,0,1-.9-1.4,7.1,7.1,0,0,1-.3-2.3,6.9,6.9,0,0,1,.3-2.2,5.3,5.3,0,0,1,.8-1.5,3.7,3.7,0,0,1,1.2-.7,3.1,3.1,0,0,1,1.3-.3,4,4,0,0,1,2.6,1,3.9,3.9,0,0,1,1,2.9v1.5Zm3.8-1.5a2.4,2.4,0,0,0-.6-1.6,1.7,1.7,0,0,0-2.6,0,2.4,2.4,0,0,0-.6,1.6Z" /><path d="M108.7,17.1a3.4,3.4,0,0,1-2.3,1.1l-1.4-.4a3.9,3.9,0,0,1-1-.8,3.3,3.3,0,0,1-.5-1.2,13.5,13.5,0,0,1-.1-2.3,14.9,14.9,0,0,1,.1-2.4A3.7,3.7,0,0,1,104,10a2.6,2.6,0,0,1,2.4-1.2,2.4,2.4,0,0,1,1.2.3l1.1.8V5.2h1.7V18.1h-1.7Zm-1.8-6.5a1.2,1.2,0,0,0-.9.3.9.9,0,0,0-.6.6,2.9,2.9,0,0,0-.2.9v2.1a2.4,2.4,0,0,0,.2.9,1.3,1.3,0,0,0,.6.7l.9.2,1-.2a1.2,1.2,0,0,0,.5-.7l.3-.9v-2l-.3-.9a1.2,1.2,0,0,0-.5-.7A1.5,1.5,0,0,0,106.9,10.6Z" /><path d="M113,15.3a3.8,3.8,0,0,0,2.8,1.1,2.1,2.1,0,0,0,1.2-.3.8.8,0,0,0,.5-.8c0-.4-.1-.6-.3-.7s-.4-.2-.8-.2l-1.5-.2a2.2,2.2,0,0,1-1.8-.8,2.2,2.2,0,0,1-.8-1.8,2.7,2.7,0,0,1,1-2.1,4.2,4.2,0,0,1,2.3-.7h1.1l.9.2a5.6,5.6,0,0,1,1.5,1L118,11.4a2.4,2.4,0,0,0-1.1-.6,2.8,2.8,0,0,0-1.3-.3,1.6,1.6,0,0,0-1.1.3,1,1,0,0,0-.4.8.9.9,0,0,0,.3.6,1.3,1.3,0,0,0,.9.3h1.4a2.7,2.7,0,0,1,2,.9,2.9,2.9,0,0,1,.6,1.9,2.6,2.6,0,0,1-1,2,5,5,0,0,1-6.5-.9Z" /></g></g></VFLogo>
                        <Title>Private Social Networks For Enterprise</Title>
                        <Text>A personal startup that I’ve been developing in 2021 that brings the incredible usefulness of using feeds to communicate across teams without the risks and liabilities of leveraging existing public social networks. Currently have an MVP up and running. Always looking for new beta users ;)</Text>
                        <Screenshot src={'/assets/img/screenshot-visiblefeeds.jpg'} alt={'VisibleFeeds screenshot'} />
                        <Arrow id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 99.3 97.7" class="sc-kEjbxe MzrWX"><path d="M0,48.8,46.9,0,57.2,9.7,26.8,41.4H99.3V55.9H26.6l30.5,32L46.9,97.7Z"></path></Arrow>
                    </VisibleFeeds>
                    <LabShell tabIndex={1} onKeyDown={(e) => e.key == 'Enter' && changeProject('labshell')} onClick={() => changeProject('labshell')}>
                        <LSLogo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168.6 51.9"><g id="Group_11" data-name="Group 11"><path id="Path_41" data-name="Path 41" d="M38.8,44.1V40.3l-.6.2L23,47.9a.7.7,0,0,1-.9,0l-9.7-4.7-6-2.9v3.9L10,45.9l.6.3,11.5,5.6a1.7,1.7,0,0,0,1,0l11.5-5.6.3-.2,1.5-.7Z" /><path id="Path_42" data-name="Path 42" d="M9.8,4.6,0,8V34.1l9.8,4.3Z" /><path id="Path_43" data-name="Path 43" d="M36.4,4.6l9.9,3.5v26l-9.9,4.5Z" /><path id="Path_44" data-name="Path 44" d="M24.3.1l9.8,3.4v36l-9.8,4.4Z" /><path id="Path_45" data-name="Path 45" d="M21.7,0,11.9,3.4V39.5l9.8,4.3Z" /></g><g id="LabShell" ><g ><path d="M61.2,34.3a.5.5,0,0,1-.2-.4v-17a.5.5,0,0,1,.2-.4l.5-.2h2.4l.4.2a.5.5,0,0,1,.2.4V31.4h8.2l.5.2a.8.8,0,0,1,.2.5v1.8a.5.5,0,0,1-.2.4l-.5.2H61.7Z" /><path d="M77.8,34.2a3.9,3.9,0,0,1-1.7-1.4,3.1,3.1,0,0,1-.7-2,3.5,3.5,0,0,1,1.5-2.9,8.8,8.8,0,0,1,3.9-1.5l3.5-.5v-.5c0-.8-.1-1.4-.5-1.7a2.5,2.5,0,0,0-1.9-.6,3.2,3.2,0,0,0-1.4.3l-.8.6c-.2.3-.4.4-.4.5s-.2.3-.4.3h-2l-.4-.2a.5.5,0,0,1-.2-.4,2.5,2.5,0,0,1,.7-1.5,5.4,5.4,0,0,1,1.8-1.4,7.6,7.6,0,0,1,3.2-.6,6.1,6.1,0,0,1,4.4,1.4,4.5,4.5,0,0,1,1.4,3.6v8.2c0,.2,0,.3-.1.4l-.5.2H85.1l-.4-.2c-.2-.1-.2-.2-.2-.4v-1a4.2,4.2,0,0,1-1.6,1.3,5.4,5.4,0,0,1-2.7.6A5,5,0,0,1,77.8,34.2Zm5.7-2.8a4.1,4.1,0,0,0,.9-2.8v-.5l-2.6.4a7.9,7.9,0,0,0-2.3.7,1.7,1.7,0,0,0-.8,1.3,1.6,1.6,0,0,0,.7,1.3,3.4,3.4,0,0,0,1.7.5A3.2,3.2,0,0,0,83.5,31.4Z" /><path d="M95,32.9v1c0,.2,0,.3-.2.4l-.4.2H92.3l-.4-.2a.5.5,0,0,1-.2-.4V16.7a.8.8,0,0,1,.2-.5l.4-.2h2.2l.5.2a.8.8,0,0,1,.2.5v5.7a5.1,5.1,0,0,1,4-1.7,5,5,0,0,1,4,1.7,8.1,8.1,0,0,1,1.5,4.5v1.7a8.1,8.1,0,0,1-1.5,4.5,5,5,0,0,1-4,1.7A5.2,5.2,0,0,1,95,32.9Zm6.2-4.4V27c-.1-2.3-1.1-3.5-3-3.5a2.7,2.7,0,0,0-2.2.9,3.5,3.5,0,0,0-.8,2.2v2.1A3.6,3.6,0,0,0,96,31a2.5,2.5,0,0,0,2.2,1C100.1,32,101.1,30.8,101.2,28.5Z" /><path d="M110.8,34.1a5.5,5.5,0,0,1-2.5-1.9,4,4,0,0,1-.9-2.5.4.4,0,0,1,.1-.3c.1-.2.2-.2.4-.2h2.8l.3.4a2.9,2.9,0,0,0,1.2,1.5,4.8,4.8,0,0,0,2.6.6,5.5,5.5,0,0,0,2.8-.6,2,2,0,0,0,.9-1.7,1.7,1.7,0,0,0-.5-1.2,2.7,2.7,0,0,0-1.4-.8l-2.8-.9a10.6,10.6,0,0,1-4.5-1.9,4.2,4.2,0,0,1-1.4-3.5,3.8,3.8,0,0,1,.8-2.6,5.5,5.5,0,0,1,2.3-1.9,10.5,10.5,0,0,1,3.6-.7,8.1,8.1,0,0,1,3.7.8,5.2,5.2,0,0,1,2.4,1.9,4.1,4.1,0,0,1,.9,2.2.7.7,0,0,1-.6.6h-2.4a.8.8,0,0,1-.7-.5,2.1,2.1,0,0,0-1.1-1.4,3.8,3.8,0,0,0-2.2-.6,3.6,3.6,0,0,0-2.2.6,1.7,1.7,0,0,0-.9,1.6,2.8,2.8,0,0,0,.4,1.2,7.4,7.4,0,0,0,1.3.8l2.6.8a12.3,12.3,0,0,1,3.7,1.2,4.1,4.1,0,0,1,2,1.6,4.9,4.9,0,0,1,.7,2.5,4.8,4.8,0,0,1-1,2.9,5.7,5.7,0,0,1-2.6,1.9,11.2,11.2,0,0,1-3.8.7A11.5,11.5,0,0,1,110.8,34.1Z" /><path d="M125.6,34.3c-.2-.1-.2-.2-.2-.4V16.7c0-.2,0-.4.2-.5a.5.5,0,0,1,.4-.2h2.3l.5.2a.7.7,0,0,1,.1.5v5.9a5.3,5.3,0,0,1,4.3-1.9,4.9,4.9,0,0,1,3.8,1.6,6.3,6.3,0,0,1,1.4,4.3v7.3a.7.7,0,0,1-.6.6h-2.4l-.4-.2a.5.5,0,0,1-.2-.4V26.7a3.6,3.6,0,0,0-.7-2.4,3.3,3.3,0,0,0-4.4.1,3.2,3.2,0,0,0-.8,2.3v7.2c0,.2,0,.3-.1.4l-.5.2H126A.5.5,0,0,1,125.6,34.3Z" /><path d="M143.5,33.1a6.1,6.1,0,0,1-1.8-4.7V27.1a6.5,6.5,0,0,1,1.8-4.7,6.1,6.1,0,0,1,4.5-1.7,5.9,5.9,0,0,1,4.8,1.9,7.2,7.2,0,0,1,1.7,5v.5a.8.8,0,0,1-.2.5l-.5.2h-8.6V29a4.1,4.1,0,0,0,.8,2.4,2.5,2.5,0,0,0,2,.9,3,3,0,0,0,2.5-1.2l.4-.3h3a.4.4,0,0,1,.2.4,2.5,2.5,0,0,1-.7,1.5,6.4,6.4,0,0,1-2.2,1.4,6.3,6.3,0,0,1-3.2.7A6.1,6.1,0,0,1,143.5,33.1Zm7.4-6.5h0a3.9,3.9,0,0,0-.7-2.5,2.7,2.7,0,0,0-2.2-.9,2.6,2.6,0,0,0-2.1.9,3.9,3.9,0,0,0-.7,2.5h5.7Z" /><path d="M158,34.3c-.2-.1-.2-.2-.2-.4V16.7c0-.2,0-.4.2-.5a.5.5,0,0,1,.4-.2h2.2l.4.2a.8.8,0,0,1,.2.5V33.9a.5.5,0,0,1-.2.4l-.4.2h-2.2A.5.5,0,0,1,158,34.3Z" /><path d="M165.4,34.3c-.2-.1-.2-.2-.2-.4V16.7c0-.2,0-.4.2-.5a.5.5,0,0,1,.4-.2H168l.4.2a.8.8,0,0,1,.2.5V33.9a.5.5,0,0,1-.2.4l-.4.2h-2.2A.5.5,0,0,1,165.4,34.3Z" /></g></g></LSLogo>
                        <Title>In-Person Chemistry Labs, Online</Title>
                        <Text>One of the main missions of Oregon State University is to expand access to students to students across the globe. I was fortunate that leadership entrusted me and my team to build a robust platform that delivers complex labs to thousands of students every term.</Text>
                        <Screenshot src={'/assets/img/screenshot-labshell.jpg'} alt={'LabShell lab screenshot'} />
                        <Arrow id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 99.3 97.7" class="sc-kEjbxe MzrWX"><path d="M0,48.8,46.9,0,57.2,9.7,26.8,41.4H99.3V55.9H26.6l30.5,32L46.9,97.7Z"></path></Arrow>
                    </LabShell>
                    <VDL tabIndex={1} onKeyDown={(e) => e.key == 'Enter' && changeProject('video-driven-learning')} onClick={() => changeProject('video-driven-learning')}>
                        <VDLLogo id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97.7 51.8"><g id="Group_10" data-name="Group 10"><g id="_87686j.tif" data-name=" 87686j.tif"><g id="Group_1" data-name="Group 1"><path id="Path_1" data-name="Path 1" d="M33.2,26.1,3.9,7.1v38Z" /></g></g><path id="Path_2" data-name="Path 2" d="M3.2,45.1V5.7L23.1,17.9v-4L0,0V51.8L23.1,37.2V32.9Z" style={{opacity:.3}} /></g><g id="VDL" ><g ><path d="M45.1,16h4.6l4.5,12.1h.1L58.9,16h4.4L55.7,34.4H52.4Z"/><path d="M65.7,16h6.1a18.6,18.6,0,0,1,4.2.5,7.7,7.7,0,0,1,3.4,1.6A7.6,7.6,0,0,1,81.8,21a9,9,0,0,1,.9,4.2,8.4,8.4,0,0,1-.9,4A7.6,7.6,0,0,1,79.6,32a10.6,10.6,0,0,1-3.3,1.8,13.4,13.4,0,0,1-4,.6H65.7Zm4.1,14.7h2.1a10.9,10.9,0,0,0,2.6-.3,5.1,5.1,0,0,0,2.1-1A4.7,4.7,0,0,0,78,27.7a6.8,6.8,0,0,0,.5-2.7,5.6,5.6,0,0,0-.5-2.3A5.8,5.8,0,0,0,76.6,21a7.2,7.2,0,0,0-2-.9,6.9,6.9,0,0,0-2.5-.4H69.8Z" /><path d="M86.1,16h4.1V30.7h7.5v3.7H86.1Z" /></g></g></VDLLogo>
                        <Title>Interactive Video Platform For Higher Ed</Title>
                        <Text>While working for Oregon State University Ecampus, there was a need to incorporate interactive video into courses. While management investigated purchasing licenses to costly 3rd party platforms, I volunteered that I could build something better for much less. With a green light, I built VDL (short for Video Driven Learning). VDL is used extensively in OSU courses til this day, and has delivered over 90,000 interactive videos to our students!</Text>
                        <Screenshot src={'/assets/img/screenshot-vdl.jpg'} alt={'VDL interactive video screenshot'} />
                        <Arrow id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 99.3 97.7" class="sc-kEjbxe MzrWX"><path d="M0,48.8,46.9,0,57.2,9.7,26.8,41.4H99.3V55.9H26.6l30.5,32L46.9,97.7Z"></path></Arrow>
                    </VDL>
                    <NES tabIndex={1} onKeyDown={(e) => e.key == 'Enter' && changeProject('never-ending-story')} onClick={() => changeProject('never-ending-story')}>
                        <NESLogo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 246 44.3"><g id="SqrCWd.tif"><path id="Path_46" data-name="Path 46" d="M8.7,42.5h-7C.7,42.3,0,42,0,41.3s.6-1,1.6-1.1a2.1,2.1,0,0,1,1.1,0H14.8c2,0,2.8.3,2.7,1.2s-.7,1.1-2.6,1.1Z" transform="translate(0 0)"/><path id="Path_47" data-name="Path 47" d="M7.4,33.1H1.9c-.7-.2-1.1-.6-1-1a1.6,1.6,0,0,1,.9-.9A2.5,2.5,0,0,1,3,31h9c1.5,0,2.3.3,2.2,1s-.7,1-2.2,1.1Z" transform="translate(0 0)"/><path id="Path_48" data-name="Path 48" d="M9,37.9H2.3a2.3,2.3,0,0,1-1.7-.7c-.2-.3.2-.8.5-1.2a2.2,2.2,0,0,1,1.4-.2c4.3-.1,8.7-.1,13,0,1.2,0,2,.5,2,1.1s-.7,1.1-1.9,1.1Z" transform="translate(0 0)"/><path id="Path_49" data-name="Path 49" d="M7.7,26.3h4.4c1.1,0,1.6.3,1.6.9s-.5.9-1.5.9H2.9c-1,0-1.5-.4-1.5-.9s.5-.9,1.5-.9Z" transform="translate(0 0)"/><path id="Path_50" data-name="Path 50" d="M9.6,24.2c-1.9,0-3.9.1-5.8,0s-1.9-.3-2-1S2.4,22,3.7,22H15.4c1.2,0,2.1.6,2,1.2s-.7,1-2.1,1-3.8,0-5.7,0Z" transform="translate(0 0)"/><path id="Path_51" data-name="Path 51" d="M9.9,17.5h5.5c1.3,0,2,.5,2,1.1s-.8,1.1-2.1,1.1c-3.7.1-7.3.1-11,0q-2.1,0-2.1-1.2c.1-.7.7-1,2.2-1Z" transform="translate(0 0)"/><path id="Path_52" data-name="Path 52" d="M44.6,23.4h3.6l7.9,10.7V23.4h3.6V39.9H56.1l-8-10.7V39.9H44.6Z" transform="translate(0 0)"/><path id="Path_53" data-name="Path 53" d="M70.6,36l2.2,2.3a7.8,7.8,0,0,1-5.1,1.9A6.4,6.4,0,0,1,61.1,34v-.4a6.3,6.3,0,0,1,6.1-6.4h.3c3.9,0,6.2,2.9,6.2,7.6h-9a3.1,3.1,0,0,0,3,2.3A4.6,4.6,0,0,0,70.6,36Zm-5.8-3.7h5.5a2.5,2.5,0,0,0-2.6-2,3,3,0,0,0-2.9,2Z" transform="translate(0 0)"/><path id="Path_54" data-name="Path 54" d="M73.7,27.5h3.6l3.4,8.4L84,27.5h3.6L82.3,39.9H79Z" transform="translate(0 0)"/><path id="Path_55" data-name="Path 55" d="M96.3,36l2.2,2.3a7.8,7.8,0,0,1-5.1,1.9A6.4,6.4,0,0,1,86.8,34v-.4a6.3,6.3,0,0,1,6.1-6.4h.3c3.9,0,6.2,2.9,6.2,7.6h-9a3.1,3.1,0,0,0,3,2.3A4.6,4.6,0,0,0,96.3,36Zm-5.8-3.7H96a2.5,2.5,0,0,0-2.6-2,3,3,0,0,0-2.9,2Z" transform="translate(0 0)"/><path id="Path_56" data-name="Path 56" d="M108.4,27.2v2.9c-2.6,0-4.3,1.5-4.3,3.9v5.9h-3.5V27.5h3.5v2.3a4.6,4.6,0,0,1,4.3-2.6Z" transform="translate(0 0)"/><path id="Path_57" data-name="Path 57" d="M114.6,26.6v3.3h8.3v3.2h-8.3v3.6h9.1v3.2H111V23.4h12.7v3.2Z" transform="translate(0 0)"/><path id="Path_58" data-name="Path 58" d="M137,32v7.9h-3.4V32.7a2.5,2.5,0,0,0-2.2-2.6h-.2a2.5,2.5,0,0,0-2.6,2.4h0v7.4h-3.5V27.5h3.5V29a4.1,4.1,0,0,1,3.7-1.8,4.6,4.6,0,0,1,4.7,4.4Z" transform="translate(0 0)"/><path id="Path_59" data-name="Path 59" d="M151.5,23.1V39.9H148V38.1a5,5,0,0,1-4.2,2.1c-3.3,0-5.7-2.7-5.7-6.5s2.4-6.5,5.7-6.5a5,5,0,0,1,4.2,2.1V23.1ZM148,33.7a3.3,3.3,0,0,0-2.9-3.6h-.3a3.7,3.7,0,0,0-3.3,3.8,3.5,3.5,0,0,0,3.3,3.3,3.2,3.2,0,0,0,3.2-3.3v-.2Z" transform="translate(0 0)"/><path id="Path_60" data-name="Path 60" d="M153.2,23.8a1.9,1.9,0,0,1,2-1.8,1.8,1.8,0,0,1,1.8,1.9,1.9,1.9,0,0,1-1.8,1.9,2,2,0,0,1-2-2Zm.2,3.7h3.5V39.9h-3.5Z" transform="translate(0 0)"/><path id="Path_61" data-name="Path 61" d="M170.6,32v7.9h-3.4V32.7a2.4,2.4,0,0,0-2.2-2.6h-.2a2.6,2.6,0,0,0-2.6,2.4h0v7.4h-3.5V27.5h3.5V29a4.4,4.4,0,0,1,3.8-1.8,4.5,4.5,0,0,1,4.6,4.4Z" transform="translate(0 0)"/><path id="Path_62" data-name="Path 62" d="M184.9,27.5V38.6c0,3.2-2.8,5.5-6.7,5.5a9.7,9.7,0,0,1-5.5-1.7l1.2-2.5a6.3,6.3,0,0,0,3.7,1.2c2.3,0,3.8-1,3.8-2.7V37.1a5.7,5.7,0,0,1-4.2,1.9,5.6,5.6,0,0,1-5.5-5.9c0-3.5,2.4-5.9,5.5-5.9a5.3,5.3,0,0,1,4.2,2V27.5Zm-3.6,5.6a2.9,2.9,0,0,0-2.9-3.1,3.1,3.1,0,0,0-3.1,3,3,3,0,0,0,3,3h0a2.8,2.8,0,0,0,3-2.7c.1,0,.1-.1,0-.2Z" transform="translate(0 0)"/><path id="Path_63" data-name="Path 63" d="M187.5,37.5l2-2.5a8.2,8.2,0,0,0,5.5,2.2c1.8,0,2.7-.8,2.7-1.9s-1-1.5-3.5-2.1-6-1.8-6-5,2.5-5.1,6.1-5.1a9.1,9.1,0,0,1,6.5,2.3L199,27.9a8.3,8.3,0,0,0-4.8-1.8c-1.5,0-2.4.8-2.4,1.8s1,1.6,3.6,2.1,5.9,1.9,5.9,5-2.4,5.2-6.5,5.2A10.4,10.4,0,0,1,187.5,37.5Z" transform="translate(0 0)"/><path id="Path_64" data-name="Path 64" d="M209.9,39.1a4.3,4.3,0,0,1-2.8,1.1,3.7,3.7,0,0,1-3.8-3.5V30.3h-1.7V27.5h1.7V24h3.4v3.5h2.7v2.8h-2.7v5.5a1.2,1.2,0,0,0,1.1,1.4h.1a1.5,1.5,0,0,0,1.2-.4Z" transform="translate(0 0)"/><path id="Path_65" data-name="Path 65" d="M210.2,33.7a6.8,6.8,0,1,1,7.1,6.5H217A6.7,6.7,0,0,1,210.2,33.7Zm10.2,0a3.4,3.4,0,0,0-6.8.2,3.4,3.4,0,0,0,3.4,3.3A3.4,3.4,0,0,0,220.4,33.7Z" transform="translate(0 0)"/><path id="Path_66" data-name="Path 66" d="M232.8,27.2v2.9c-2.6,0-4.3,1.5-4.3,3.9v5.9H225V27.5h3.5v2.3A4.5,4.5,0,0,1,232.8,27.2Z" transform="translate(0 0)"/><path id="Path_67" data-name="Path 67" d="M233.3,43.5l.7-2.4a3.4,3.4,0,0,0,1.7.5,1.4,1.4,0,0,0,1.4-.6l.5-1-5.2-12.5H236l3.3,8.7,3.1-8.7H246l-5.1,13c-1,2.5-2.5,3.8-4.5,3.8a7.9,7.9,0,0,1-3.1-.8Z" transform="translate(0 0)"/><g id="MVIsaz.tif"><path id="Path_68" data-name="Path 68" d="M31.8,21.9v8.3A12.7,12.7,0,0,1,19.1,43.1a12.9,12.9,0,0,1-2-25.6h2.6c.5,0,.6.2.6.6v7.1c0,.7-.4.7-.9.7A4.4,4.4,0,0,0,14.7,29a4.3,4.3,0,0,0,2.9,5.5,4.4,4.4,0,0,0,5.6-2.9.4.4,0,0,1,.1-.3,9.1,9.1,0,0,0,.1-1.7c.1-5.6,0-11.2.1-16.8A12.1,12.1,0,0,1,31,1.2,12.8,12.8,0,0,1,47.9,7.3a11.8,11.8,0,0,1,1,3,12.8,12.8,0,0,1-9.6,15.1l-3.7.4c-.5,0-.6-.2-.6-.6V18c0-.5.3-.5.7-.6a9.6,9.6,0,0,0,2.8-.7,4,4,0,0,0,2.1-4.8,4.4,4.4,0,0,0-8.5-.4,5.7,5.7,0,0,0-.3,1.8Z" transform="translate(0 0)"/></g></g></NESLogo>
                        <Title>A Reading Platform</Title>
                        <Text>The first platform I built for Oregon State University Ecampus. While a modest app, it served an important purpose and saw extensive usage over the past 3 years. Allows our instructors to take PDFs or long form verbiage they’d normally send as PDFs to students, and instead make it interactive and engaging.</Text>
                        <Screenshot src={'/assets/img/screenshot-nes.jpg'} alt={'Never Ending Story screenshot'} />
                        <Arrow id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 99.3 97.7" class="sc-kEjbxe MzrWX"><path d="M0,48.8,46.9,0,57.2,9.7,26.8,41.4H99.3V55.9H26.6l30.5,32L46.9,97.7Z"></path></Arrow>
                    </NES>
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
    '@media(max-width:1200px)':{
        marginTop:40,
    },
});
const DualColumns = styled.div({
    width:'100%',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'flex-start',
    '@media(max-width:1200px)':{
        flexDirection:'column',
    },
});
const Column = styled.div({
    width:'100%',
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    '@media(max-width:1200px)':{
        width:'100%'
    },
});
const VisibleFeeds = styled.section((props) => ({
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
    background:props.theme.batmanMode ? '#363639':'#FCFCFD',
    boxShadow: '0px 12px 16px rgba(0,0,0,.035)',
    cursor:'pointer',
    border:'1px solid transparent',
    transition:'border .2s ease-out',
    ':hover':{
        border:props.theme.batmanMode ? '1px solid #ff1957':'1px solid #ecc6d0',
        'svg:last-of-type':{
            transform:'rotate(180deg) translateX(-5px)!important'
        },
        '> *':{
            color:props.theme.batmanMode ? '#ff1957':'#aa153d',
            fill:props.theme.batmanMode ? '#ff1957':'#aa153d',
        }
    },
    outline:0,
    ':focus':{
        border:props.theme.batmanMode ? '1px solid #ff1957':'1px solid #ecc6d0',
        'svg:last-of-type':{
            transform:'rotate(180deg) translateX(-5px)!important'
        },
        
        '> *':{
            color:props.theme.batmanMode ? '#ff1957':'#aa153d',
            fill:props.theme.batmanMode ? '#ff1957':'#aa153d',
        }
    },
    '@media(max-width:1200px)':{
        height:'initial',
    },
    '@media(max-width:600px)':{
        height:'intitial',
    }
}));
const NES = styled.section((props) => ({
    width:'100%',
    marginTop:40,
    boxSizing:'border-box',
    padding:25,
    position:'relative',
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    overflow:'hidden',
    borderRadius:10,
    background:props.theme.batmanMode ? '#363639':'#FCFCFD',
    boxShadow: '0px 12px 16px rgba(0,0,0,.035)',
    cursor:'pointer',
    border:'1px solid transparent',
    transition:'border .2s ease-out',
    ':hover':{
        border:props.theme.batmanMode ? '1px solid #ff1957':'1px solid #ecc6d0',
        'svg:last-of-type':{
            transform:'rotate(180deg) translateX(-5px)!important'
        },
        
        '> *':{
            color:props.theme.batmanMode ? '#ff1957':'#aa153d',
            fill:props.theme.batmanMode ? '#ff1957':'#aa153d',
        }
    },
    outline:0,
    ':focus':{
        border:props.theme.batmanMode ? '1px solid #ff1957':'1px solid #ecc6d0',
        'svg:last-of-type':{
            transform:'rotate(180deg) translateX(-5px)!important'
        },
        '> *':{
            color:props.theme.batmanMode ? '#ff1957':'#aa153d',
            fill:props.theme.batmanMode ? '#ff1957':'#aa153d',
        }
    },
    '@media(max-width:1200px)':{
        marginTop:30,
        height:'initial',
    },
    '@media(max-width:600px)':{
        marginTop:30,
        height:'intitial',
    }
}));
const VDL = styled.section((props) => ({
    width:'100%',
    boxSizing:'border-box',
    padding:25,
    position:'relative',
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    marginTop:40,
    justifyContent:'flex-start',
    overflow:'hidden',
    borderRadius:10,
    background:props.theme.batmanMode ? '#363639':'#FCFCFD',
    boxShadow: '0px 12px 16px rgba(0,0,0,.035)',
    cursor:'pointer',
    border:'1px solid transparent',
    transition:'border .2s ease-out',
    ':hover':{
        border:props.theme.batmanMode ? '1px solid #ff1957':'1px solid #ecc6d0',
        'svg:last-of-type':{
            transform:'rotate(180deg) translateX(-5px)!important'
        },
        '> *':{
            color:props.theme.batmanMode ? '#ff1957':'#aa153d',
            fill:props.theme.batmanMode ? '#ff1957':'#aa153d',
        }
    },
    outline:0,
    ':focus':{
        border:props.theme.batmanMode ? '1px solid #ff1957':'1px solid #ecc6d0',
        'svg:last-of-type':{
            transform:'rotate(180deg) translateX(-5px)!important'
        },
        '> *':{
            color:props.theme.batmanMode ? '#ff1957':'#aa153d',
            fill:props.theme.batmanMode ? '#ff1957':'#aa153d',
        }
    },
    '@media(max-width:1200px)':{
        height:'initial',
        marginTop:30,
    },
    '@media(max-width:600px)':{
        height:'intitial',
    }
}));
const LabShell = styled.section((props) => ({
    width:'100%',
    boxSizing:'border-box',
    padding:25,
    position:'relative',
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    overflow:'hidden',
    marginTop:40,
    borderRadius:10,
    background:props.theme.batmanMode ? '#363639':'#FCFCFD',
    boxShadow: '0px 12px 16px rgba(0,0,0,.035)',
    cursor:'pointer',
    border:'1px solid transparent',
    transition:'border .2s ease-out',
    ':hover':{
        border:props.theme.batmanMode ? '1px solid #ff1957':'1px solid #ecc6d0',
        'svg:last-of-type':{
            transform:'rotate(180deg) translateX(-5px)!important'
        },
        '> *':{
            color:props.theme.batmanMode ? '#ff1957':'#aa153d',
            fill:props.theme.batmanMode ? '#ff1957':'#aa153d',
        },
    },
    outline:0,
    ':focus':{
        border:props.theme.batmanMode ? '1px solid #ff1957':'1px solid #ecc6d0',
        'svg:last-of-type':{
            transform:'rotate(180deg) translateX(-5px)!important'
        },
        '> *':{
            color:props.theme.batmanMode ? '#ff1957':'#aa153d',
            fill:props.theme.batmanMode ? '#ff1957':'#aa153d',
        }
    },
    '@media(max-width:1200px)':{
        marginTop:30,
        height:'initial',
    },
    '@media(max-width:600px)':{
        marginTop:30,
        height:'initial',
    }
}));
const Arrow = styled.svg((props) => ({
    position:'absolute',
    left: 575,
    height:20,
    fill:props.theme.batmanMode ? '#d3d3db':'#4E4E52',
    top:28,
    transform:'rotate(180deg) translateX(0px)',
    transition:'all .2s ease-in-out',
    '@media(max-width:600px)':{
        right:25,
        left:'initial',
    }
}));
const LeftSide = styled.div({
   
});
const RightSide = styled.div({
   
});
const Title = styled.h1((props) => ({
    fontSize:46,
    fontWeight:900,
    color:props.theme.batmanMode ? '#d3d3db':'#4E4E52',
    maxWidth:550,
    margin:0,
    marginTop:15,
    padding:0,
    transition:'color .2s ease-in-out',
    '@media(max-width:600px)':{
        fontSize:25,
    }
}));
const Text = styled.div((props) => ({
    maxWidth:600,
    color: props.theme.batmanMode ? '#fff!important':'#4E4E52!important',
    opacity:.7,
    fontWeight:300,
    lineHeight:'28px',
    marginTop:13,
    transition:'color .2s ease-in-out',
    '@media(max-width:600px)':{
        fontSize:15,
    }
}));
const VFLogo = styled.svg((props) => ({
    height:32,
    fill:props.theme.batmanMode ? '#b7b7be':'#4e4e52',
    transition:'fill .2s ease-in-out',
}));
const VDLLogo = styled.svg((props) => ({
    height:42,
    fill:props.theme.batmanMode ? '#b7b7be':'#4e4e52',
    transition:'fill .2s ease-in-out',
 }));
const NESLogo = styled.svg((props) => ({
    height:40,
    fill:props.theme.batmanMode ? '#b7b7be':'#4e4e52',
    transition:'fill .2s ease-in-out',
}));
const LSLogo = styled.svg((props) => ({
    height:36,
    fill:props.theme.batmanMode ? '#b7b7be':'#4e4e52',
    transition:'fill .2s ease-in-out',
}));
const Screenshot = styled.img((props) => ({
    position:'absolute',
    left:680,
    top:0,
    borderLeft: props.theme.batmanMode ? '5px solid #464747':'5px solid #edeff3',
    width:520,
    '@media(max-width:600px)':{
        display:'none'
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ProjectSelection));