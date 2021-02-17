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

                </VisibleFeeds>
            </SingleColumn>
            <DualColumns>
                <Column>
                    <VDL>

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
    background:'#ffffff',
    border:'1px solid #E2E4EB',
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
    borderRadius:10,
    background:'#ffffff',
    border:'1px solid #E2E4EB',
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