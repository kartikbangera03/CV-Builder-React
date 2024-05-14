   {/* {
                    displayStatus && props.degreeList.length > 0
                    && props.degreeList.map((degree) => {
                        return showFormId === degree.id
                            ? <Form 
                            degree={degree} 
                            editDegreeList = {(newDegreeList)=>props.setDegreeList(newDegreeList)} 
                            allDegree = {props.degreeList}
                            />
                            : <li key={degree.id} onClick={() => setShowFormId(degree.id)}>{degree.degreeName}</li>;
                    })
                } */}







// ---------------------
// function renderOutputContainer(newUserInfo){
//     const userNameResume =  document.querySelector("#userNameResume");
//     userNameResume.textContent = newUserInfo.userName;
// }


// function submitForm(e){
//     e.preventDefault();
//     const newUserInfo = {...userInfo , submitStatus:true}
//     setUserInfo(newUserInfo);
//     setSubmittedUserInfo(newUserInfo);
//     // renderOutputContainer(newUserInfo);
//     renderPersonalDetails(newUserInfo);    
// }

// function changeName(e){
//     const newUserInfo = {...userInfo , userName : e.target.value};
//     setUserInfo(newUserInfo);
// }

// function changeEmail(e){
//     const newUserInfo = {...userInfo , userEmail : e.target.value};
//     setUserInfo(newUserInfo);
// }

// function changePhoneNumber(e){
//     const newUserInfo = {...userInfo , userPhoneNumber : e.target.value};
//     setUserInfo(newUserInfo);
// }

// function changeAddress(e){
//     const newUserInfo = {...userInfo , userAddress : e.target.value};
//     setUserInfo(newUserInfo);
// }

// function reEdit(){
//     const newUserInfo = {...userInfo , submitStatus:false}
//     setUserInfo(newUserInfo);
//     setSubmittedUserInfo(defaultUserInfo)
// }

// return(
//     <>
//         <h1>Personal Info</h1>
//         <br></br>

//         <form onSubmit={submitForm}>
//             <label>Name :</label><br/>
//             <input 
//                 id="userName"
//                 disabled = {userInfo.submitStatus}
//                 value={userInfo.userName}
//                 onChange={changeName}
//             ></input>
//             <br></br>
//             <br></br>
//             <label>Email :</label><br/>
//             <input 
//                 id="userEmail"
//                 disabled = {userInfo.submitStatus}
//                 value={userInfo.userEmail}
//                 onChange={changeEmail}
//             ></input>
//             <br></br>
//             <br></br>
//             <label>Phone Number ::</label><br/>
//             <input 
//                 id="userPhoneNumber"
//                 disabled = {userInfo.submitStatus}
//                 value={userInfo.userPhoneNumber}
//                 onChange={changePhoneNumber}
//             ></input>
//             <br></br>
//             <br></br>
//             <label>Location :</label><br/>
//             <input 
//                 id="userAddress"
//                 disabled = {userInfo.submitStatus}
//                 value={userInfo.userAddress}
//                 onChange={changeAddress}
//             ></input>
//             <br></br>
//             <br></br>
//             <button type="submit">Submit </button>
//             <button type="button" onClick={reEdit}>Edit</button>
//         </form>

       
//     </>
    
// )