import { useState } from "react";
import {v4} from 'uuid'
import FormWorkExp from "./FormWorkExp";
import '../styles/WorkExperience.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp, faBriefcase } from '@fortawesome/free-solid-svg-icons'

function DisplayList(props){
    return(
        <div className="displayedList">
            {
                props.workExpList.map((workExp) => {
                    return (
                        <>
                            <li className="eachWorkExpEntry" key={workExp.id} onClick={() => props.setWorkExpIndex(props.workExpList.indexOf(workExp))}>{workExp.positionTitle}</li>
                        </>
                        )
                })      
            }
            <div className="addButtonContainer">
            <button className="addExperienceButton" onClick={props.handleClick}>+ Experience</button> 
            </div>
            
        </div>

    )

}


function WorkExperience(props) {
    // const [showFormId, setShowFormId] = useState({});

    // displaystatus for toggle button to drop down and show list of degrees 
    const [displayStatus, setDisplayStatus] = useState(false)

    const [editWorkExpIndex, setWorkExpIndex] = useState(-1);

    console.log("editWorkExpIndex : ");
    console.log(editWorkExpIndex);
    console.log("Display Status : ");
    console.log(displayStatus);
    console.log("Work List : ");
    console.log(props.workExpList);



    function handleClick(){
        console.log("ADD EXPERIENCE CLICKED")
        setDisplayStatus(true);
        const degreeListLength = props.workExpList.length;
        const indexVal = degreeListLength<=0 ? 0 : degreeListLength;
        console.log("IndexVal : "+indexVal); 
        let editedDegreeList = [...props.workExpList];
        editedDegreeList[indexVal] = {
            companyName : '',
            positionTitle:  '',
            startDate:'',
            endDate:'',
            workDescription:'',
            location:'',
            id : v4()
        }
        props.setWorkExpList(editedDegreeList);
        setWorkExpIndex(indexVal)
    }


    return (
        <div className="workExpInfoContainer">

            <div className="workExpHeadingContainer">
            <div className="workHeadingIcon">
                <h1><FontAwesomeIcon icon={faBriefcase} size={"xs"}/>  Experience</h1>
            </div>
            
            <button onClick={() => {
                console.log("Toggle Clicked");
                setDisplayStatus(!displayStatus);

            }}>{displayStatus 
                ? <FontAwesomeIcon icon={faChevronUp} /> 
                :<FontAwesomeIcon icon={faChevronDown} />
                }</button>
            </div>
           

            
            {
                displayStatus && ((editWorkExpIndex > -1)
                ? <FormWorkExp
                    index={editWorkExpIndex}
                    workExpList={props.workExpList}
                    setWorkExpList={(updatedDegreeInfo) => { props.setWorkExpList(updatedDegreeInfo) }}
                    setWorkExpIndex= {()=>setWorkExpIndex(-1)}
                />
                : <DisplayList 
                    workExpList = {props.workExpList}
                    handleClick = {handleClick}
                    setWorkExpIndex = {(newIndexVal)=>setWorkExpIndex(newIndexVal)}
                />
                ) 
            }

        </div>
    )
}


export default WorkExperience