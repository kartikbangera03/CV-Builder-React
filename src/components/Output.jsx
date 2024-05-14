import '../styles/resumeFormat.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone , faLocationDot} from '@fortawesome/free-solid-svg-icons'

function Output(props){
    return (
        <>

            <div className="entireResume">
            <div className="personalDetails">
                             
               <div className="nameHeading">
                <p>{props.userInfo.userName}</p>  
                </div>
                <div className="otherPersonalInfo">
                {props.userInfo.userEmail && <p><FontAwesomeIcon icon={faEnvelope} />  {props.userInfo.userEmail}</p>}
                {props.userInfo.userPhoneNumber &&  <p><FontAwesomeIcon icon={faPhone} /> {props.userInfo.userPhoneNumber}</p>}
                {props.userInfo.userAddress &&   <p><FontAwesomeIcon icon={faLocationDot} /> {props.userInfo.userAddress}</p>}
                </div>
            </div>
            <div className="sectionHeading">Education</div>
            <div className="educationDetails">
                {
                    props.degreeInfo.map((degree)=>{
                        return (
                            <div key={degree.id} className="schoolCard">
                                  <div className="schoolLeftContainer">    
                                    <p className="year">{degree.startDate}-{degree.endDate}</p>
                                    <p className="location">{degree.location}</p>
                                    </div>
                                    <div className="schoolRightContainer" >
                                    <p className="degreeName subHeading">{degree.degreeName}</p>
                                    <p className="schoolName">{degree.schoolName}</p>
                                    
                                    </div>

                            </div>
                          
                          
                        )
                        // <li key={degree.id}>{degree.degreeName}</li>)
                    })
                }
            </div>
            <div className="sectionHeading">Experience</div>
            <div className="workExperience">
                {
                    props.workExpList.map((workExp)=>{
                        return (
                            <div key={workExp.id} className="workExpCard">
                                    <div className="workExpLeftContainer">
                                    
                                    <p className="year">{workExp.startDate}-{workExp.endDate}</p>
                                    <p className="location">{workExp.location}</p>
                                    </div>
                                    <div className="workExpRightContainer" >
                                    <p className="companyName subHeading">{workExp.companyName}</p>
                                    <p className="positionTitle subHeading">{workExp.positionTitle}</p>
                                    <p className="workDescription">{workExp.responsibilites}</p>
                                    </div>

                            </div>
                            
                            
                        )
                                
                    })
                }
            </div>
            </div>
        </>
        
    )
}

export default Output;