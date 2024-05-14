import { useState } from "react"
import { v4 } from 'uuid'
import Generalinformation from './Generalinformation'
import EducationalExperience from './EducationalExperience'
import WorkExperience from "./WorkExperience"
import Output from './Output'


function MainContainer() {
    const [userInfo, setUserInfo] = useState({
        userName: 'Allison Rachelle',
        userEmail: 'allisonRachelle222@gmail.com',
        userPhoneNumber: '+1 97865 43210',
        userAddress: 'San Diego, California',
    });

    const [degreeList, setDegreeList] = useState([{
        schoolName: "Cornell University",
        degreeName: "Bachelor of Science in New Media and Internet Marketing",
        startDate: '2011',
        endDate: '2016',
        location: 'Ithaca , Ny',
        id: v4()
    },
    {
        schoolName: "Massachusetts Institute of Technology (MIT)",
        degreeName: "Master of Science in Digital Marketing",
        startDate: '2017',
        endDate: '2019',
        location: 'Mumbai',
        id: v4()
    }
    ]);

    const [workExpList, setWorkExpList] = useState([
        {
            companyName: 'Warner & Spencer',
            positionTitle: 'Senior Brand Strategist',
            startDate: '2020',
            endDate: '2022',
            location: 'San Jose, California',
            responsibilites: `Assit in managing the company brand portfolio, including oversight of naming strategies, brand name hierarchy, trademark management and enforcement. Serve as project manager for brand projects`,
            id: v4()
        },
        {
            companyName: 'Wardiere Inc',
            positionTitle: 'Brand Strategist',
            startDate: '2019',
            endDate: '2018',
            location: 'LA, California',
            responsibilites: `Support Premium Business Teams to align their strategies and execution to the brand. Collaborate with other relevant functions to develop strategies that drive the Premium brand vision and objectives`,
            id: v4()
        },

        {
            companyName: 'Laurana Inc',
            positionTitle: 'Junior Brand Strategist',
            startDate: '2018',
            endDate: '2016',
            location: 'Miami, Florida',
            responsibilites: `Manage and track project budgets to ensure effective deployment and spend in line with budget. Ensure quality of marketing and creative briefs. Dedicatedly pitch new ideas to solve business challenges`,
            id: v4()
        }
    ]);

    return (

        <div className="mainContainer">
            <div className="inputContainer">
                <Generalinformation
                    userInfo={userInfo}
                    setUserInfo={(updatedUserInfo) => { setUserInfo(updatedUserInfo) }}
                />
                <EducationalExperience
                    degreeList={degreeList}
                    setDegreeList={(updatedDegreeInfo) => { setDegreeList(updatedDegreeInfo) }}
                />
                <WorkExperience
                    workExpList={workExpList}
                    setWorkExpList={(newWorkExpList) => { setWorkExpList(newWorkExpList) }}
                />

            </div>

            <div className="outputContainer">
                <Output
                    userInfo={userInfo}
                    degreeInfo={degreeList}
                    workExpList={workExpList}
                />
            </div>
        </div>


    )
}

export default MainContainer;