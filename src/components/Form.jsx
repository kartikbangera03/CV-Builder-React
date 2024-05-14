import { useState } from "react";
import '../styles/Form.css'

function Form(props) {

    let editedDegreeList = [...props.degreeList];

    console.log("INDEX : " + props.index);
    console.log("FORM DEGREE VALUE : ");
    console.log(props.degreeList[props.index]);

    // console.log(degreeInfo);

    function changeStateOfDegreeList(newdegreeInfo) {
        console.log("INDEX : ");
        console.log(props.index);
        editedDegreeList[props.index] = newdegreeInfo;
        props.setDegreeList(editedDegreeList);
    }

    function changeSchoolName(e) {
        const newdegreeInfo = { ...props.degreeList[props.index], schoolName: e.target.value };
        changeStateOfDegreeList(newdegreeInfo);
    }

    function changeDegreeName(e) {
        const newdegreeInfo = { ...props.degreeList[props.index], degreeName: e.target.value };

     
        changeStateOfDegreeList(newdegreeInfo);
    }

    function changeDegreeStartDate(e) {
        const newdegreeInfo = { ...props.degreeList[props.index], startDate: e.target.value };
        changeStateOfDegreeList(newdegreeInfo);
    }

    function changeDegreeEndDate(e) {
        const newdegreeInfo = { ...props.degreeList[props.index], endDate: e.target.value };
        changeStateOfDegreeList(newdegreeInfo);
    }

    function changeDegreeLocation(e) {
        const newdegreeInfo = { ...props.degreeList[props.index], location: e.target.value };
        changeStateOfDegreeList(newdegreeInfo);
    }


    function deleteDegree(){
        editedDegreeList.splice(props.index,1);
        props.setDegreeList(editedDegreeList);
        props.setEditIndex()
    }


    return (
        <>  
        <div className="educationForm">
        <form>
                <label> School Name :</label><br />
                <input
                    id="schoolName"
                    value={props.degreeList[props.index].schoolName}
                    onChange={changeSchoolName}
                ></input>
                <br></br>
                <br></br>
                <label>Degree :</label><br />
                <input
                    id="DegreeName"
                    value={props.degreeList[props.index].degreeName}
                    onChange={changeDegreeName}
                ></input>
                <br></br>
                <br></br>
                <label>Start Date:</label><br />
                <input
                    id="degreeStartDate"
                    value={props.degreeList[props.index].startDate}
                    onChange={changeDegreeStartDate}
                ></input>
                <br></br>
                <br></br>
                <label>End Date :</label><br />
                <input
                    id="degreeEndDate"
                    value={props.degreeList[props.index].endDate}
                    onChange={changeDegreeEndDate}
                ></input>
                <br></br>
                <br></br>
                <label>Location :</label><br />
                <input
                    id="degreeLocation"
                    value={props.degreeList[props.index].location}
                    onChange={changeDegreeLocation}
                ></input>
                <br></br>
                <br></br>
                <div className="formBottomButtons">
                    <button className="bottomButtons deleteButton" onClick={()=>deleteDegree()}>Delete</button>
                    <div className="rightButtons">
                    <button className="bottomButtons" onClick={() => props.setEditIndex()}>Cancel </button>
                    <button className="bottomButtons saveButton" onClick={() => props.setEditIndex()}>Save </button>

                </div>
                </div>
                
                
            </form>

        </div>
            
        </>
    )
}

export default Form;