import { useState } from "react";
import '../styles/formWorkExp.css'

function FormWorkExp(props) {

    let editedDegreeList = [...props.workExpList];

    console.log("INDEX : " + props.index);
    console.log("FORM DEGREE VALUE : ");
    console.log(props.workExpList[props.index]);

    function changeStateOfDegreeList(newdegreeInfo) {
        console.log("INDEX : ");
        console.log(props.index);
        editedDegreeList[props.index] = newdegreeInfo;
        props.setWorkExpList(editedDegreeList);
    }

    function changeCompanyName(e) {
        const newdegreeInfo = { ...props.workExpList[props.index], companyName: e.target.value };
        changeStateOfDegreeList(newdegreeInfo);
    }

    function changePositionTitle(e) {
        const newdegreeInfo = { ...props.workExpList[props.index], positionTitle: e.target.value };

     
        changeStateOfDegreeList(newdegreeInfo);
    }

    function changePositionStartDate(e) {
        const newdegreeInfo = { ...props.workExpList[props.index], startDate: e.target.value };
        changeStateOfDegreeList(newdegreeInfo);
    }

    function changePositionEndDate(e) {
        const newdegreeInfo = { ...props.workExpList[props.index], endDate: e.target.value };
        changeStateOfDegreeList(newdegreeInfo);
    }

    function changeWorkLocation(e) {
        const newdegreeInfo = { ...props.workExpList[props.index], location: e.target.value };
        changeStateOfDegreeList(newdegreeInfo);
    }

    function changeWorkResponsibilities(e) {
        const newdegreeInfo = { ...props.workExpList[props.index], responsibilites: e.target.value };
        changeStateOfDegreeList(newdegreeInfo);
    }


    function deleteDegree(){
        editedDegreeList.splice(props.index,1);
        props.setWorkExpList(editedDegreeList);
        props.setWorkExpIndex()
    }


    return (
        <div className="workExpForm">
            <form>
                <label> Company Name :</label><br />
                <input
                    id="companyName"
                    value={props.workExpList[props.index].companyName}
                    onChange={changeCompanyName}
                ></input>
                <br></br>
                <br></br>
                <label>Position Title :</label><br />
                <input
                    id="positionTitle"
                    value={props.workExpList[props.index].positionTitle}
                    onChange={changePositionTitle}
                ></input>
                <br></br>
                <br></br>
                <label>Start Date:</label><br />
                <input
                    id="positionStartDate"
                    value={props.workExpList[props.index].startDate}
                    onChange={changePositionStartDate}
                ></input>
                <br></br>
                <br></br>
                <label>End Date :</label><br />
                <input
                    id="positionEndDate"
                    value={props.workExpList[props.index].endDate}
                    onChange={changePositionEndDate}
                ></input>
                <br></br>
                <br></br>

                <label>Location :</label><br />
                <input
                    id="workLocation"
                    value={props.workExpList[props.index].location}
                    onChange={changeWorkLocation}
                ></input>
                <br></br>
                <br></br>

                <label>Work Description :</label><br />
                <textarea
                    type="textarea"
                    id="workResponsibilities"
                    value={props.workExpList[props.index].responsibilites}
                    onChange={changeWorkResponsibilities}
                ></textarea>

                <br></br>
                <br></br>
                <div className="formBottomButtons">
                    <button className="bottomButtons deleteButton" onClick={()=>deleteDegree()}>Delete</button>
                    <div className="rightButtons">
                        <button className="bottomButtons" onClick={() => props.setWorkExpIndex()}>Cancel </button>
                        <button className="bottomButtons saveButton" onClick={() => props.setWorkExpIndex()}>Save </button>
                    </div>
                    
                </div>
                
            </form>

        </div>
    )
}

export default FormWorkExp;