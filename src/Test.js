import React, { useEffect, useState } from 'react';
import reactDom from 'react-dom';
import { useCookies } from 'react-cookie';
const Test_Cookies = () => {
    
    const [username, setUserName] = useState('');
    const [cookies, setCookie] = useCookies(['user']);
    const handleSubmit = (event) => {
        setCookie('username', 'Vinh', { path: '/'});
    }
    console.log(cookies.username);
    
    return(
        <button type="submit" onClick={handleSubmit}>Set Cookie</button>
    );
}

const Test_Get_CORS = () => {
    const [Name, setName] = useState(null);
    
    

    useEffect(() => {
        fetch('http://127.0.0.1:5000/student-list')
        .then(response => response.json())
        .then((data) => {
            console.log(data.name); 
            setName(data.name);
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
        })
    }, []);

    return(
        <h1>This is {Name} from BackEnd</h1>
    );
}

const Test_Post_CORS = () => {
    const [FirstName, setFirstName] = useState();
    const [LastName, setLastName] = useState();
    const [Response, setResponse] = useState();
    const handleSubmit = () => {
        const requestOptions = {
            method: "POST",
            //headers: { 'Content-Type': "application/json" },
            //body: JSON.stringify({name : "vinhtq279"})
        };
        fetch('http://127.0.0.1:5000/post-student-data', requestOptions)
        .then(response => response.json())
        .then((data) => {
            console.log(data); 
            setResponse(data);
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
        })
    }
    
    return(
        <div>
        <form action="http://127.0.0.1:5000/submit-employee-data" method="POST">
            <input type="text" name="firstName" onChange={(e) => {setFirstName(e.target.value)}}/>
            <input type="text" name="lastName" onChange={(e) => {setLastName(e.target.value)}}/>
            <button type="submit" onClick={handleSubmit}/>
        </form>
        <p>{Response}</p>
        </div>
    )
}

export default Test_Post_CORS;