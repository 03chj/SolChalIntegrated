import { IoIosArrowBack } from "react-icons/io";import { FaArrowRight } from "react-icons/fa"
import { Link } from 'react-router-dom'
import './Question.css';

export default function Question1(){
    return (
        <div>
            <header className="Navbar">
                <Link to="/">
                    <button><IoIosArrowBack size={'1.5rem'}/></button>
                </Link>
                <h3>Create Account</h3>
            </header>
            <body className="answer">
                <h2>What is your name?</h2>
                <input>
                </input>
            </body>
            
            <footer>
                <Link to="/Q2">
                    <button><FaArrowRight style={{color: "white"}} size={'2rem'}/></button>
                </Link>
            </footer>
        </div>
    )
}
