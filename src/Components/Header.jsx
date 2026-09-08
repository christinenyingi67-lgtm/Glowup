import {Link} from 'react-router-dom'
import Home from '../Pages/Home'
import { useState } from 'react'

function Header(){
    const [isOpen, setIsOpen]= useState(false)
    return(
        <>
        <header style={{
            backgroundColor:"beige",
            width:"100%",
            height:"15vh",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            gap:"235px",
            color:"brown",
                
           }}>
            <div>
                <h1>glow up</h1>
            </div>
            <div style={{
                display:"flex",
                gap:"35px",
            }}>
            <Link style={{ textDecoration:"none",}} to="/">Home</Link>
            <Link style={{ textDecoration:"none",}} to="/About">About</Link>
            <Link style={{ textDecoration:"none",}} to="/Contacts">Contacts</Link>
            <Link style={{ textDecoration:"none", }} to="/Products">Products</Link>
            <div style={{
                position:"relative"
            }}>
            <Link onClick={()=>setIsOpen(!isOpen)} style={{textDecoration:"none"}} >▼</Link>
                {isOpen &&(
                <div style={{
                    position:"absolute",
                    background:"pink",
                    display:"flex",
                    flexDirection:"column",
                    left:0,
                    top:"100%",
                    width:"100px"
                       
                }}>
                    <Link style={{textDecoration:"none", marginTop:"15px"}} to="Beauty">Beauty</Link>
                    <Link style={{textDecoration:"none", marginTop:"15px"}} to="HairCare"> HairCare</Link>
                    <Link style={{textDecoration:"none", marginTop:"15px"}} to="Skincare">Skincare</Link>
                </div>
                )}
            </div>


            <Link style={{ textDecoration:"none",}} to="/Routine">Routine</Link>
            </div>
            <div style={{ 
                display:"flex",
                gap:"20px",
                cursor:"pointer"
            }}>
                <i className='bi-whatsapp'></i>
                <i className='bi-instagram'></i>
                <i className='bi-facebook'></i>
                <i className='bi-twitter'></i>

            </div>
            
        </header>
        </>
    )
}
export default Header