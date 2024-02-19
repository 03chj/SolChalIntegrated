import { IoIosArrowBack } from "react-icons/io";import { FaArrowRight } from "react-icons/fa"
import { Link } from 'react-router-dom'
import './Question.css';

export default function Question3(){
    return (
        <div>
            <header className="Navbar">
                <Link to="/Q2">
                    <button><IoIosArrowBack size={'1.5rem'}/></button>
                </Link>
                <h3>Create Account</h3>
            </header>
            <body className="answer">
                <h2>Where are you from?</h2>
                <input></input>
            </body>
            
            <footer>
                <Link to="/Q4">
                    <button><FaArrowRight style={{color: "white"}} size={'2rem'}/></button>
                </Link>
            </footer>
        </div>
    )
}
