import React from 'react';
import Hello from './passwordInput';
import Password from "./passwordInput";
import Input2 from "./Input2";
import PasswordInput from "./passwordInput";
import StudentId from "./StudentId";
import Email from "./Email";
import Name from "./Name";
import Count from "./Count";
import Time from "./Time";

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