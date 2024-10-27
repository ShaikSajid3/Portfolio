import React from 'react';
import './Intro.css';
import { useNavigate } from 'react-router-dom';
function Intro() {
    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate('/home');
    }

    return (
        <div className='introcontainer'>
            <div className='introleft'>
                <div className='introcard'>
                    <span style={{ position: 'absolute', left: 200,top:320 }}>Full Stack Web Developer</span>
                    <h1 id='introname'>I'm Sajid Shaik</h1>
                    <button id='introbtn' onClick={handleRedirect}>Know more about me <sub><i class="bi bi-arrow-right"></i> </sub></button>
                </div>
            </div>
            <div className='introright'></div>
        </div>
    )
}

export default Intro;