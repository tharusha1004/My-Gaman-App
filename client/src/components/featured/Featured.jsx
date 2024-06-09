import React from 'react'

// import Featured.css 
import '../featured/Featured.css'

//import images
import Featured001 from '../../assets/featured-001.jpg'
import Featured002 from '../../assets/featured-002.jpg'
import Featured003 from '../../assets/featured-003.jpg'

const Featured = () => {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <img src={Featured001} alt="" className="featuredImage" />
                <div className="featuredTitles">
                    <h1>Colombo</h1>
                    <h2>25 Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src={Featured002} alt="" className="featuredImage" />
                <div className="featuredTitles">
                    <h1>Kandy</h1>
                    <h2>20 Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src={Featured003} alt="" className="featuredImage" />
                <div className="featuredTitles">
                    <h1>Galle</h1>
                    <h2>12 Properties</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured