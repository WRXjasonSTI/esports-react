import React, {useEffect, useContext} from 'react';
import {useHistory} from "react-router-dom";
import UserContext from "../../context/UserContext";
import GameButtons from "../GameButtons/GameButtons"

import Footer from "../Footer/Footer"

export default function Home() {
    const { userData } = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if(!userData.user) history.push("/login");
    }, [userData, history]); // if gives issues add => ,[userData]

    return (
        <div>
            <div>
                <GameButtons />
            </div>
            <Footer />
        </div>
        
    )
}
