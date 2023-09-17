import React, { useState, useEffect } from 'react';
import { FaRegPaperPlane } from "react-icons/fa";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set , onValue} from "firebase/database";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: config.FIREBASE_KEY,
    authDomain: "shellhacksvanguardinvest.firebaseapp.com",
    databaseURL: "https://shellhacksvanguardinvest-default-rtdb.firebaseio.com",
    projectId: "shellhacksvanguardinvest",
    storageBucket: "shellhacksvanguardinvest.appspot.com",
    messagingSenderId: "86449418881",
    appId: "1:86449418881:web:80c7bdc10a53fb46709380",
    measurementId: "G-8GC9S5DEF9"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function Ai() {
    const [result, setResult] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [userInput, setUserInput] = useState("");
    const [loading, setLoading] = useState(false);
    const open_api_key = config.GPT_KEY;
    const url = "https://api.openai.com/v1/chat/completions";

    const db = getDatabase();
    const [history, setHistory] = useState("");
    const [prefix, setPrefix] = useState("");
    const [questions, setQuestions] = useState([]);
    let reff;

    const getQuestions = (prompt) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${open_api_key}`
            },
            body: JSON.stringify({
                'model': 'gpt-3.5-turbo',
                'messages': [{ "role": "user", "content": prompt }]
            })
        })
            .then(response => response.json())
            .then(data => {
                var res = (data.choices[0].message.content.trim()).split('.');
                setQuestions([res[1].slice(0, -1), res[2].slice(0, -1), res[3]]);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const askQuestion = (id) => {
        console.log(questions[id]);
        setUserInput(questions[id]);
        fetchResponse();
    }

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            // console.log(user);
            if (user) {
                setLoggedIn(true);
                reff = ref(db, 'users/' + user["uid"]);
                onValue(reff, (snapshot) => {
                    const data = snapshot.val();
                    setPrefix("I'm from " + data.country + " and my annual income is $" + data.income + ". My credit score is " + data.creditScore + ". ");
                    var prompt = (history + ". " + "I'm from " + data.country + " and my annual income is $" + data.income + ". My credit score is " + data.creditScore + ". List 3 very short potential questions I could have.");
                    // console.log(data);
                    getQuestions(prompt);
                });
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

    const fetchResponse = () => {
        setLoading(true);
        var userInputCopy = userInput;
        setUserInput("");
        // console.log(history + ". " + prefix + userInputCopy + ". Make the response personalized to me. not write more than 100 words. go straight to the point");
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${open_api_key}`
            },
            body: JSON.stringify({
                'model': 'gpt-3.5-turbo',
                'messages': [{ "role": "user", "content": history + ". " + prefix + userInputCopy + ". Make the response personalized to me and try to not write more than 100 words. go straight to the point and do not greet me." }]
            })
        })
            .then(response => response.json())
            .then(data => {
                setHistory(history + ". " + userInputCopy + ". " + data.choices[0].message.content.trim());
                // console.log(history);
                setResult(data.choices[0].message.content.trim());
                console.log(history);
                getQuestions(data.choices[0].message.content.trim() + "List 3 very short potential questions I could have.");
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const onEnterPress = (e) => {
        if (e.keyCode == 13 && e.shiftKey == false) {
            e.preventDefault();
            fetchResponse();
        }
    }

    return (
        <div className='ai-page-container'>
            <h1>AI Assistant</h1>
            <div className='ai-response-container'>
                {loading ?
                    <p className='ai-response'>Loading...</p> :
                    <span className='ai-response'>{result ? result : 'Hello, I am your personalized financial teacher, ask me any questions!'}</span>
                }
            </div>
            <div className='fixed-container'>

                {questions.length === 3 ? (
                    <>
                        <button
                            className="button-30 button-q"
                            onClick={() => askQuestion(0)}
                        >
                            {questions[0]}
                        </button>
                        <button
                            className="button-30 button-q"
                            onClick={() => askQuestion(1)}
                        >
                            {questions[1]}
                        </button>
                        <button
                            className="button-30 button-q"
                            onClick={() => askQuestion(2)}
                        >
                            {questions[2]}
                        </button>
                    </>
                ) : null}
                <div className="textarea-wrapper">

                    <textarea
                        value={userInput}
                        onKeyDown={onEnterPress}
                        onChange={e => setUserInput(e.target.value)}
                        placeholder="Enter question here"
                        className='user-input-box'
                        aria-label="Enter your question"
                        cols="50"
                    />
                    <button onClick={fetchResponse} className='button-30'><FaRegPaperPlane /></button>
                </div>
            </div>
        </div>
    )
}