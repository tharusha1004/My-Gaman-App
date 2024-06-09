import React from 'react'

// import PropertyList.css
import '../propertylist/PropertyList.css'

//import images 
import hotel from '../../assets/property - hotel.jpg'
import apartment from '../../assets/property - apartment.jpg'
import villa from '../../assets/property - villa.jpg'
import resort from '../../assets/property - resort.jpg'
import cabin from '../../assets/property - cabins.jpg'

const PropertyList = () => {
  return (
    <div className='propertyList'>
        <div className="propertyListItem">
            <img src={hotel} alt="" className="propertyListImage" />
            <div className="propertyListTitle">
                <h1>Hotels</h1>
                <h2>200 hotels</h2>
            </div>
        </div>
        <div className="propertyListItem">
            <img src={apartment} alt="" className="propertyListImage" />
            <div className="propertyListTitle">
                <h1>Apartments</h1>
                <h2>150 apartments</h2>
            </div>
        </div>
        <div className="propertyListItem">
            <img src={villa} alt="" className="propertyListImage" />
            <div className="propertyListTitle">
                <h1>Villas</h1>
                <h2>140 villa</h2>
            </div>
        </div>
        <div className="propertyListItem">
            <img src={resort} alt="" className="propertyListImage" />
            <div className="propertyListTitle">
                <h1>Resorts</h1>
                <h2>250 resorts</h2>
            </div>
        </div>
        <div className="propertyListItem">
            <img src={cabin} alt="" className="propertyListImage" />
            <div className="propertyListTitle">
                <h1>Cabins</h1>
                <h2>100 cabins</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList