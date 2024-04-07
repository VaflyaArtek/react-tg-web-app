import './App.css';
import {useEffect} from "react";
import {useTelegram} from './hooks/useTelegram'
import Header from "./components/Header/Header";

// console.log(user)
function App() {
    const {onToggleButton, tg} = useTelegram()

    useEffect(() => {
        tg.ready();
    }, []);

    return (
        <div className="App">
            <Header/>
        </div>
    );
}

export default App;
