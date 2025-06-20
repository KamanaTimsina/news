import React from 'react'
import Breaking from '../Components/Home/Breaking'
import Trending from '../Components/Home/Trending'
import Article from '../Components/Home/Article'
import Opinion from '../Components/Home/Opinion'
import Advertisement from '../Components/Home/Advertisement'
import Latest from '../Components/Home/Latest'
import Youvideo from '../Components/Home/Youvideo'
import Highlights from '../Components/Home/Highlights'




function Home() {
  return (
    <div>
       
        <Breaking/>
        <Trending/>
        <Advertisement/>
        <Latest/>
        <Article/>
        <Highlights/>
    <Youvideo/>
        <Opinion/>
        
        
        
    </div>
  )
}

export default Home