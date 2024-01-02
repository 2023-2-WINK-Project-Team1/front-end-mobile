import React from 'react';
import PasswordInput from "../input/PasswordInput";
import StudentId from "../input/StudentId";
import Email from "../input/Email";
import Name from "../input/Name";
import Count from "../input/Count";
import Time from "../input/Time";

function App() {
    return (
        <div>
            <PasswordInput />
            <StudentId/>
            <Email/>
            <Name/>
            <Count/>
            <Time/>
        </div>
    );
}

export default App;