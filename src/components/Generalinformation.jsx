import '../styles/GeneralInformation.css'



function Generalinformation(props){

    function changeName(e){
        const newUserInfo = {...props.userInfo , userName : e.target.value};
        props.setUserInfo(newUserInfo);
    }

    function changeEmail(e){
        const newUserInfo = {...props.userInfo , userEmail : e.target.value};
        props.setUserInfo(newUserInfo);
    }

    function changePhoneNumber(e){
        const newUserInfo = {...props.userInfo , userPhoneNumber : e.target.value};
        props.setUserInfo(newUserInfo);
    }

    function changeAddress(e){
        const newUserInfo = {...props.userInfo , userAddress : e.target.value};
        props.setUserInfo(newUserInfo);
    }

    function reEdit(){
        const newUserInfo = {...props.userInfo , submitStatus:false}
        props.setUserInfo(newUserInfo);
        // setSubmittedUserInfo(defaultUserInfo)
    }


    return(
        <>
            <div className="personalInfoForm">
            
            <h1 className="personalInfoHeading">Personal Info</h1>
            <br></br>

            <form>
                <label >Full Name</label><br/>
                <input 
                    id="userName"
                    value={props.userInfo.userName}
                    onChange={changeName}
                ></input>
                <br></br>
                <br></br>
                <div className="labelContainer">
                    <label>Email  </label>
                    <small>recommended</small><br/>
                </div>
                
                <input 
                    id="userEmail"
                    value={props.userInfo.userEmail}
                    onChange={changeEmail}
                ></input>
                <br></br>
                <br></br>
                <div className="labelContainer">
                    <label>Phone  </label>
                    <small>recommended</small><br/>
                </div>
                <input 
                    id="userPhoneNumber"
                    value={props.userInfo.userPhoneNumber}
                    onChange={changePhoneNumber}
                ></input>
                <br></br>
                <br></br>
                <label>Address  </label><br/>
                <input 
                    id="userAddress"
                    value={props.userInfo.userAddress}
                    onChange={changeAddress}
                ></input>
                <br></br>
                <br></br>
            </form>

                </div>

            
        
        </>
        )
}

export default Generalinformation;