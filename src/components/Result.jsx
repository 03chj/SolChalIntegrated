import './Result.css';
import {Link} from "react-router-dom"

const RecommendedCountry="Korea"

export default function Result(){
    return(
        <div id="resultPage">
            <header className="Navbar">
                <h3>Recommendation Result</h3>
            </header>
            <body className="answer">
                <div id="result">
                    <h4>The country that suits you is</h4>
                    <h2>{RecommendedCountry}</h2>
                </div>
                <div id="resultButtons">                  
                    <Link to="https://www.youtube.com/">
                        <button>Go to the relevant website</button>
                    </Link>
                    <Link to="/Home">
                        <button>Go to search again</button>
                    </Link>
                </div>


            </body>
        </div>
    )
}