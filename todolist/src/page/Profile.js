import './profile.css';
import React from 'react';

export default function Profile({props}) {
    const profileP = '/assets/MyCroppedFaceShot.jpeg';
    const technologies = ['React','Javascript','html','CSS','Spring','SQL','React-Router','Java 11','Git','Jira'];
    return (
        <>
        <div className="wrapper">
            <div className="internal-wrapper">
                <div className="profile-page">
                    <div className='profile-pic'>
                        <img src={`${process.env.PUBLIC_URL}${profileP}`}  alt='Profile Pic'/>
                    </div>
                    <div className="name-desc">
                        <h1>Abhijeet Mishra</h1>
                        <p className="near-heading">A Full stack developer with experience in Front and Back End development.</p>
                        <p className="resume-desc">
                            Extensive backend development experience in <span class="special">Java Technologies</span>, Software design. 
                            Good experience in Spring Technologies, dependency injection, Concerns and others.
                            Front-end experience in <span class="special">React, Javascript, HTML and CSS Technologies</span>.
                        </p>
                    </div>
                    
                </div>
                <div className="technologies-used">
                            <div className="technologies">
                                <h1>Technologies</h1></div>
                            <div className="tech-vals">
                                <ul>{technologies.map((item) => {return (<li className="tech-item">{item}</li>)})}
                                </ul>
                            </div>
                </div>
                
            </div>
        </div>
        <div className="footer"> 
                    <p>@All rights reserved!</p>
        </div>
        </>
    )
}
