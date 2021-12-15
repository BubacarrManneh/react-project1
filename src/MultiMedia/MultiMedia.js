import React from 'react'
import Classes from './Multimedia.module.css'
import PageHeader from '../PageHeader/PageHeader'
import ReactThumb from '../Img/ReactThumb.jpg'
import ReduxThumb from '../Img/ReduxThumb.jpg'
import JavascriptThumb from '../Img/JavascriptThumb.jpg'
import Background from '../Img/Background.jpg'

const playBtnSvg = (url) => {
    return (
        <div className={Classes.PlayBtn}
        
            onClick={(e) => window.open(url, "_blank").focus}
            >
          <svg xmlns="http://www.w3.org/2000/svg"  
                viewBox="0 0 40 40" width="100px" height="100px">
                <path fill="#f78f8f" d="M37.625,28.838c-0.378,1.96-1.985,3.453-3.97,3.733c-3.119,0.467-7.817,0.928-13.677,0.928 
                c-5.765,0-10.558-0.533-13.772-1c-1.985-0.28-3.592-1.773-3.97-3.733c-0.378-2.147-0.732-4.82-0.732-8.74s0.397-6.718,0.775-8.865 
                c0.378-1.96,1.985-3.453,3.97-3.733c3.119-0.467,7.912-1.053,13.772-1.053S30.485,7.033,33.699,7.5 c1.985,0.28,3.592,1.773,3.97,3.733c0.378,2.147,0.832,4.945,0.832,8.865C38.405,24.018,38.003,26.692,37.625,28.838z"/>
                <path fill="#c74343" d="M20.003,7c5.815,0,10.841,0.553,14.037,1.017c1.575,0.222,2.832,1.401,3.124,2.917 
                C37.523,12.97,38,16.126,38,19.976c-0.106,4.38-0.569,7.576-0.833,9.075c-0.295,1.532-1.552,2.71-3.136,2.934 
                C31.991,32.29,26.538,33,20.003,33c-6.121,0-11.42-0.637-14.037-1.017c-1.575-0.222-2.832-1.401-3.124-2.917 
                C2.503,27.147,2.1,24.016,2.1,20s0.403-7.147,0.738-9.051c0.295-1.532,1.552-2.71,3.136-2.934C8.015,7.71,13.467,7,20.003,7 
                M20.003,6C14.143,6,8.945,6.56,5.826,7.027C3.841,7.307,2.234,8.8,1.856,10.76C1.478,12.907,1.1,16.08,1.1,20 
                s0.378,7.093,0.756,9.24c0.378,1.96,1.985,3.453,3.97,3.733C9.039,33.44,14.237,34,20.003,34c5.86,0,11.058-0.56,14.177-1.027 
                c1.985-0.28,3.592-1.773,3.97-3.733C38.527,27.093,38.905,23.92,39,20c0-3.92-0.473-7.093-0.851-9.24 c-0.378-1.96-1.985-3.453-3.97-3.733C30.966,6.56,25.863,6,20.003,6L20.003,6z"/>
                <polygon fill="red" points="16,26 16,14 27,20"/></svg>
        </div>
    )
}

const youtubeVideo = (url, thumbnail, detail) => {
    return (
        <div className={Classes.VideoContainer}>
            <div className={Classes.Thumbnail}>
                {playBtnSvg(url)}
                <img src={thumbnail} alt="Cannot load thumnail"></img>
            </div>
            <div className={Classes.Text}>
                <p>{detail}</p>
            </div>
        </div>
    )
}

const reactVideoDescription = `React for Beginner 2021, learn react and be a React netNinja`
const javascriptVideoDescription = `What you need to know about Javascript to boost your skills`
const reduxVideoDescription = `React-Redux tutorial for absolute beginners`

const Videos = () => {
    return (
        <div className={Classes.YouTube}>
            <img className={Classes.Background} src={Background} alt="Background"></img>
            <PageHeader title={'YouTube Videos'}/>
            <dive className={Classes.YouTubeContent}>
                <div className={Classes.Para}>
                    <p>
                        You can find web developement tutuorial videos under this section, you may wish to watch the full content from the content owner's youtube channel.
                    </p>
                </div>
                <div className={Classes.Videos}>
                    {youtubeVideo("https://youtu.be/OFHAIpw2oZI", ReactThumb ,reactVideoDescription)}
                    {youtubeVideo("https://youtu.be/2nZiB1JItbY", JavascriptThumb, javascriptVideoDescription )}
                    {youtubeVideo("https://youtu.be/CVpUuw9XSjY",ReduxThumb, reduxVideoDescription)}
                </div>
            </dive>
        </div>
    )
}

export default Videos