import './index.css';
import Navbar from '../navbar';
import { useState,useEffect } from 'react';
import Axios from 'axios';
// import LoadingScreen from '../../atom/loadingScreen';
import RecommCard1 from '../../atom/recommCard1';
import NewsData from '../../assets/store/newsData';

const EachPageDemand=(props)=>{

    const[Loading,setLoading]=useState(false);
    const[Display,setDisplay]=useState([])
  

    // useEffect(() => {
    //   Axios.get('http://localhost:3001/home/project/get-data',
    //   {
    //       name:"check",
    //   }).then((res)=>{
    //     setDisplay(res.data);
    //     setLoading(false)
    //   });
    // }, []);


return (
    <>
        <div className='each__outer'>
            <Navbar 
            changeSetLogin={props.changeSetLogin}
            errModale={props.errModale} errText={props.errText} changeErrDisplay={props.changeErrDisplay} changeLogin={props.changeLogin} login={props.login} showErrorLogin={props.showErrorLogin}/>
            <div className='each__inner'>
                <div className='each__inner__head'>
                Recommended Projects
                </div>
                <div className='each__inner__smallhead'>
                The most searched projects
                </div>
                
                    <div className='each__inner__card' style={{width:"100%",marginBottom:"none",overflowY:"scroll",height:"fit-content",display:'flex',justifyContent:"space-around",flexWrap:"wrap",paddingTop:"3rem"}}>
                    {NewsData.map((ele)=>{
                        const{id,image,name,title,desc}=ele;
                        return(
                            <RecommCard1  eachPageFlag={1} flag={1}  id={id} image={image} title={title} description={desc} price={name}/>
                        )
                    })}
                    </div>
            </div>
        </div>

    </>
);
}

export default EachPageDemand;