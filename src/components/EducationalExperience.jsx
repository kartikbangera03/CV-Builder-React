import { useState } from "react";
import {v4} from 'uuid'
import Form from "./Form";
import '../styles/EducationInformation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp, faGraduationCap } from '@fortawesome/free-solid-svg-icons'

function DisplayList(props){


    return(
        <div className="displayedList">
            {
                props.degreeList.map((degree) => {
                    return (
                        <>
                            <li className="eachDegreeEntry" key={degree.id} onClick={() => props.setEditIndex(props.degreeList.indexOf(degree))}>{degree.degreeName}</li>
                        </>
                        )
                })      
            }
            <div className="addButtonContainer">
                <button className="addExperienceButton" onClick={props.handleClick}>+ Education</button>
            </div>
            
        </div>

    )
}


function EducationalExperience(props) {
    // displaystatus for toggle button to drop down and show list of degrees 
    const [displayStatus, setDisplayStatus] = useState(false)

    const [editIndex, setEditIndex] = useState(-1);

    console.log("EditIndex : ");
    console.log(editIndex);
    console.log("Display Status : ");
    console.log(displayStatus);
    console.log("Degree List : ");
    console.log(props.degreeList);

    function handleClick(){
        console.log("ADD EXPERIENCE CLICKED")
        setDisplayStatus(true);
        const degreeListLength = props.degreeList.length;
        const indexVal = degreeListLength<=0 ? 0 : degreeListLength;
        console.log("IndexVal : "+indexVal); 
        let editedDegreeList = [...props.degreeList];
        editedDegreeList[indexVal] = {
            schoolName: "",
            degreeName: "",
            startDate: '',
            endDate: '',
            location: '',
            id : v4()
        }

        props.setDegreeList(editedDegreeList);
        setEditIndex(indexVal)
    }


    return (
        
        <div className="educationInfoContainer">

            <div className="educationHeadingContainer">

                <div className="educationeHeadingIcon">
                <h1><FontAwesomeIcon icon={faGraduationCap} size={"xs"}/> Education</h1>
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
                displayStatus && ((editIndex > -1)
                ? <Form
                    index={editIndex}
                    degreeList={props.degreeList}
                    setDegreeList={(updatedDegreeInfo) => { props.setDegreeList(updatedDegreeInfo) }}
                    setEditIndex= {()=>setEditIndex(-1)}
                />
                : <DisplayList 
                    degreeList = {props.degreeList}
                    handleClick = {handleClick}
                    setEditIndex = {(newIndexVal)=>setEditIndex(newIndexVal)}
                />
                )

            }
        </div>
        
    )
}


export default EducationalExperience