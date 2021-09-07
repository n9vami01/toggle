import React, {useState, useEffect, useRef} from 'react'
import { Text } from 'react-native';
import Toggle from './Toggle';

export default function clock() {
    const timerRef = useRef();
    const [time, setTime] = useState(new Date());
    
    useEffect(() => {
    start();
    return () => {
        stop();
    }
    }, [])

    function start() {
        const id = setInterval(() => {
            setTime(new Date());
        },1000);
        timerRef.current = id;
    }

    function stop() {
        clearInterval(timerRef.current);
    }

    return (
        <div>
            <Text>{time.toLocaleTimeString()}</Text>
            <Toggle start={start} stop={stop}></Toggle>
        </div>
    )
}
