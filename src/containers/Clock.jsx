import { useEffect, useState } from "react";

const CountDown = () => {

    const dateTarget = new Date('05/19/2022 0:01 AM');

    const [days, setDays] = useState("")
    const [hours, setHours] = useState("")
    const [minutes, setMinutes] = useState("")
    const [seconds, setSeconds] = useState("")


    const milliseconds_of_a_Second = 1000;
    const milliseconds_of_a_minute = milliseconds_of_a_Second * 60;
    const milliseconds_of_a_hour = milliseconds_of_a_minute * 60;
    const milliseconds_of_a_day = milliseconds_of_a_hour * 24

    function updateCountdown() {
        // Calcs
        const now = new Date()
        const duration = dateTarget - now;
        const remainingDays = Math.floor(duration / milliseconds_of_a_day);
        const remainingHours = Math.floor((duration % milliseconds_of_a_day) / milliseconds_of_a_hour);
        const remainingMinutes = Math.floor((duration % milliseconds_of_a_hour) / milliseconds_of_a_minute);
        const remainingSeconds = Math.floor((duration % milliseconds_of_a_minute) / milliseconds_of_a_Second);

        setDays(remainingDays)
        setHours(remainingHours)
        setMinutes(remainingMinutes)
        setSeconds(remainingSeconds)

    }

    useEffect(() => {
        setInterval(updateCountdown, milliseconds_of_a_Second)
    }, )

    return (
        <div>
            <p>
                <span>{days}</span> días / <span>{hours}</span> horas / <span>{minutes}</span> minutos / <span>{seconds}</span> segundos
            </p>
        </div>
    )
}

export default CountDown;