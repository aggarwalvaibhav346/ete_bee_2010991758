import './index.css';
import logo from './../../assets/images/logo.jpg';
import navData from './../../assets/store/navData';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar=(props)=>{

    const navigate = useNavigate();
    window.onscroll = function() {scrollFunction()};


    useEffect(() => {
        if(props.login!==1)
        {
            navigate('/')
        }
        if(props.flag===1)
        {
            document.getElementById("nav").style.color="black";
        }
      }, []);

    useEffect(() => {
        
    }, []);
    
    
    function scrollFunction() 
    {
        if (document.body.scrollTop>80 || document.documentElement.scrollTop>80) 
        {
            document.getElementById("nav").style.backgroundColor="white";
            document.getElementById("nav").style.color="black";
            document.getElementById("setcolor").style.color="black";
            document.getElementById("nav").style.boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px";
        }
        else
        {
            document.getElementById("nav").style.boxShadow="none";
            document.getElementById("nav").style.backgroundColor="rgba(86, 86, 86, 0)";
            document.getElementById("nav").style.color="white";
            document.getElementById("setcolor").style.color="white";
        }
    }

















    function navButtonClicked(x)
    {
        if(x==="Post Property")
        {
            if(props.login!==1)
            {
                console.log("login first")
            }
        }
        else if(x==="login")
        {
            if(props.login===1)
            {
                navigate('/loggedIn')
            }
            else
            {
                navigate('/')
            }
        }
        else if(x==="Logout")
        {
            props.changeSetLogin("logout");
            navigate('/')
        }
    }


    return (
        <>
        <div className='navbar__outer' id="nav">
            <div className='navbar__inner'>
                <div className='navbar__inner__left' >
                    {/* <div className='navbar__inner__left__logo'>
                        <img src={logo} style={{width:"100%",height:"100%",borderRadius:"50%"}}/>
                    </div> */}
                    <div className='navbar__inner__left__heading'>
                        HOMLY
                    </div>
                </div>
            


                <div className='navbar__inner__right'>
                    {
                        props.login===1?(
                        <>
                        </>
                        ):(
                        <>
                        <div className='navbar__inner__right__each' onClick={()=>{navButtonClicked("login")}}>
                            Signin / Signup
                        </div>
                        </>
                        )
                    }
                    
                    {
                        props.login===1?(
                        <div className='navbar__inner__right__each' onClick={()=>{navButtonClicked("Logout")}}>
                            Logout
                        </div>
                        ):(
                        <>
                        </>
                        )
                    }
                    
                </div>
            </div>
            <div className='navbar__outer__err' style={{display:props.errModale}}>
                {props.errText}
            </div>
        </div>
        
        </>
    );
}

export default Navbar;