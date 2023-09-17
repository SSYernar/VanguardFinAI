import { FaAlignJustify } from "react-icons/fa"
import { Link } from "react-router-dom"; // Import the Link component
import { useState, useEffect } from "react"
import { getAuth, onAuthStateChanged } from 'firebase/auth';



export default function Header() {
    const [isDropDown, setisDropDown] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    // toggle drop down function
    const toggleisDropDown = () => {
        setisDropDown(!isDropDown)
    }

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log(user);
            if (user) {
                setLoggedIn(true);
                console.log("Logged in ");
            } else {
                setLoggedIn(false);
                console.log("Logged out");
            }
        });
        
        // Cleanup the listener when the component unmounts
        return () => {
            unsubscribe();
        };
    }, []);


    return (
        <div className='header-container'>
            <Link to='/'>
                <img 
                    src='https://1000logos.net/wp-content/uploads/2021/05/Vanguard-logo.png' 
                    className='vanguard-logo'
                    alt='Vanguard Logo'
                />
            </Link>

            <h3 className="header-drop-down-icon" onClick={toggleisDropDown}>
                {isDropDown ?  <FaAlignJustify /> : <FaAlignJustify />}
            </h3>

            {/* dropped down, only shows if user click the drop down icon */}
            {isDropDown && (
                <div className="dropped-down">
                    <Link to='/'>
                        <p onClick={toggleisDropDown} className="dropped-down-item">Home</p>
                    </Link>
                    <Link to='/ai'> 
                        <p className="dropped-down-item" onClick={toggleisDropDown}>AI Assistant</p>
                    </Link>
                    <Link to='/budget'> 
                        <p className="dropped-down-item" onClick={toggleisDropDown}>Budget</p>
                    </Link>
                    {loggedIn === false ? (
                        <div>
                            <Link to='signup'> 
                                <p className="dropped-down-item" onClick={toggleisDropDown}>Sign Up</p>
                            </Link>
                            <Link to='login'> 
                                <p className="dropped-down-item" onClick={toggleisDropDown}>Login</p>
                            </Link>
                        </div>
                    ) : (
                        <Link to='logout'> 
                            <p className="dropped-down-item" onClick={toggleisDropDown}>Log out</p>
                        </Link>
                    )}
                </div>
            )}
        </div>
    )
}