import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./features/pages/Signin";
import SignUp from "./features/pages/Signup";
import Habits from "./features/pages/Habits";
import History from "./features/pages/History";
import Today from "./features/pages/Today";
import PageNotFounded from "./features/notFound/PageNotFound";

export const globalVars = React.createContext();


function App() {
    const [ todayList, setTodayList ] = useState();

    return (
        <globalVars.Provider value={
            {todayList, setTodayList}
        }>
            
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<PageNotFounded />} />
                    <Route path="/" element={<SignIn />} />
                    <Route path="/cadastro" element={<SignUp />} />
                    <Route path="/historia" element={<History />} />
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