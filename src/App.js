import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./features/pages/Signin";
import SignUp from "./features/pages/Signup";
import Habits from "./features/pages/Habits";
import Today from "./features/pages/Today";

const globalVars = React.createContext();


function App() {
    const [haveHeaders, setHaveHeaders] = React.useState(false); 

    return (
        <globalVars.Provider value>
            
            <Header visible={haveHeaders}></Header>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/cadastro" element={<SignUp />} />
                    <Route path="/habitos" element={<Habits />} />
                    <Route path="/hoje" element={<Today />} />
                </Routes>
            </BrowserRouter>

        </globalVars.Provider>
    );
}


const Header = styled.div`
    display: ${({visible}) => visible? "block": "none"};
    
`;

export default App;