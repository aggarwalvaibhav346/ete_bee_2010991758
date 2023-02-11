import './index.css';
import * as React from 'react';
import RecommCard1 from './../../atom/recommCard1';
import HomeData from '../../assets/store/homeData';
import Carousel from "react-multi-carousel";
import "./../../../../node_modules/react-multi-carousel/lib/styles.css";
import Axios from 'axios';
import { useState,useEffect } from 'react';
import LoadingScreen from '../../atom/loadingScreen';
import { useNavigate } from 'react-router-dom';
import NewsData from './../../assets/store/newsData';


const RecommProp=(props)=>{
    const[recommLoading,setRecommLoading]=useState(false);
    const[recommDisplay,setRecommDisplay]=useState([])
    const navigate = useNavigate();
  
  
    // useEffect(() => {
    //   Axios.get('http://localhost:3001/home/recommended/get-data',
    //   {
    //       name:"check",
    //   }).then((res)=>{
    //     setRecommDisplay(res.data);
    //     setRecommLoading(false)
    //   });
    // }, []);



    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1181 },
          items: 4,
          slidesToSlide: 1
        },
        tablet: {
          breakpoint: { max: 1181, min: 750 },
          items: 2,
          slidesToSlide: 1
        },
        mobile: {
          breakpoint: { max: 749, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
      };
return (
    <>
    <div className='recomm__outer'>
        <div className='recomm__inner'>
            <div className='recomm__inner__heading'>
                <div className='recomm__inner__heading__left'>
                    Recommended Properties
                </div>
                <div className='recomm__inner__heading__right' onClick={()=>{navigate('/each-page-recomm')}}>
                    View All
                </div>
            </div>
            <div className='recomm__inner__heading__small'>
                Handpicked projects for you
            </div>
            <div className='recomm__inner__display'>
            {/* {
                recommLoading ? (
                    <div className='loading__outer' style={{width:"100%",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <LoadingScreen/>    
                    </div>
                    
                ):( */}
                <Carousel 
                    responsive={responsive} 
                    draggable
                    pauseOnHover
                    infinite
                    showDots={true}
                    removeArrowOnDeviceType={["tablet", "mobile","desktop"]}>
                    {NewsData.map((ele)=>{
                        const{id,image,name,desc,date}=ele;
                        return(
                            <RecommCard1 id={id} image={image} title={name} description={desc} price={date} bhk={id}/>
                        )
                    })}  
                </Carousel>
                {/* )
            } */}
            </div>
        </div>
    </div>
    </>
);
}

export default RecommProp;