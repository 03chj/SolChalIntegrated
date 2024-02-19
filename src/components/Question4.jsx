import {useState} from "react";
import { IoIosArrowBack } from "react-icons/io";import {FaArrowRight} from "react-icons/fa";
import { Link } from "react-router-dom";
import './Question.css';

export default function Question4(){
    const [visible, setVisible] = useState(false);
    // const [religion, setReligion] = useState(false);

    return (
        <div>
            <header className="Navbar">
                <Link to="/Q3">
                    <button><IoIosArrowBack size = {'1.5rem'}/></button>
                </Link>    
                <h3>Profile Setting</h3>
            </header>
            <body className="answer">
                <h2>Are you religious?</h2>
                <button onClick={() => {    
                    // setReligion("None")        
                    }}>No. I am not</button> 
                <button onClick={() => {
                    setVisible(!visible)
                }}>Yes. I am.</button>
                {visible && <div>
                    <h3>Religion</h3>
                    <input >
                        {/* // type="text" 
                        // name="religion"
                        // placeholder="What is your religion?"
                        // value={this.religion.religion}
                        // onChange={this.setReligion({
                        //     religion: e.target.value
                        // })}
                        setReligion() */}
                    </input>
                </div>}
            </body>
            
            <footer>
                <Link to="/Q5">
                    <button><FaArrowRight style={{color: "white"}} size={'2rem'}/></button>
                </Link>
            </footer>
        </div>
    )
}
