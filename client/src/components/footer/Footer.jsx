import React from 'react'
import '../footer/Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="fLists">
                <ul className="fList">
                    <li className="fListTitle">Company</li>
                    <li className="fListItem">About</li>
                    <li className="fListItem">Careers</li>
                    <li className="fListItem">Advertising</li>
                    <li className="fListItem">Contact us</li>
                </ul>
                <ul className="fList">
                    <li className="fListTitle">Explore</li>
                    <li className="fListItem">Anuradhapura</li>
                    <li className="fListItem">Kandy</li>
                    <li className="fListItem">Colombo</li>
                    <li className="fListItem">Galle</li>
                </ul>
                <ul className="fList">
                    <li className="fListTitle">Terms and Policies</li>
                    <li className="fListItem">Privacy Policy</li>
                    <li className="fListItem">Terms of Use</li>
                </ul>
                <ul className="fList">
                    <li className="fListTitle">Help</li>
                    <li className="fListItem">Support</li>
                    <li className="fListItem">Cancel Booking</li>
                    <li className="fListItem">Use Coupon</li>
                    <li className="fListItem">Travel Documents</li>
                </ul>
            </div>
            <div className="fText">Copyright &copy; 2024 MyGaman.lk</div>
        </div>
    )
}

export default Footer