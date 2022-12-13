import React, {useContext, useState} from 'react';
import Calendar from 'react-calendar';
import DressContext from "../context/DressContext";
import {IoIosCloseCircle} from 'react-icons/io';


const LoanRegisterCard = ({dress, close}) => {
    const [startDateValue, onChangeStartValue] = useState(new Date());
    const [endDateValue, onChangeEndValue] = useState(new Date());

    const [showStartForm, setShowStartForm] = useState(false);
    const [showEndForm, setShowEndForm] = useState(false);
    const {dress_loan} = useContext(DressContext);


    function create_correct_date_format(date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const correct_date_format = [year, month, day].join('-')
        return correct_date_format;

    }
    return (
        <div className=" flex flex-col m-auto z-index">
            <IoIosCloseCircle className="flex self-end h-8 w-8 m-2 " color="red"
                onClick={
                    () => close(false)
                }/>

            <h1>Code Dress: {
                dress.id
            } </h1>
            <div className="flex flex-col">
                <div className=" flex flex-col p-2">
                    <label className="self-center">Start Loan Date:
                    </label>
                    <input className="p-2 border-2 border-indigo-600 rounded focus:border-green-800 hover:border-green-800"
                        value={
                            create_correct_date_format(startDateValue)
                        }
                        onClick={
                            () => {
                                setShowStartForm(!showStartForm)
                                console.log(startDateValue.getDate())
                            }
                    }></input>
                {
                showStartForm && <>
                    <Calendar className="mt-2 p-2 border-2 border-indigo-600/20"
                        onChange={onChangeStartValue}
                        value={startDateValue}/>
                    <button className="bg-red-800 text-white"
                        onClick={
                            () => setShowStartForm(!showStartForm)
                    }>CLOSE</button>
                </>
            } </div>

            <div className=" flex flex-col p-2">
                <label className="self-center">End Date:
                </label>
                <input className="p-2 border-2 border-indigo-600 rounded focus:border-green-800 hover:border-green-800"
                    value={
                        create_correct_date_format(endDateValue)
                    }
                    onClick={
                        () => {
                            setShowEndForm(!showEndForm)
                            console.log(startDateValue.getDate())
                        }
                }></input>

            {
            showEndForm && <>
                <Calendar className="mt-2 p-2 border-2 border-indigo-600/20"
                    onChange={onChangeEndValue}
                    closeCalendar
                    value={endDateValue}/>
                <button className="bg-red-800 text-white"
                    onClick={
                        () => setShowEndForm(!showEndForm)
                }>CLOSE</button>

            </>
        } </div>
        <button className="rounded-xl bg-green-800 text-white mt-10 p-2"
            onClick={
                () => {
                    dress_loan(dress, create_correct_date_format(startDateValue), create_correct_date_format(endDateValue));
                    
                }
        }>
            CONFIRM ORDER</button>
    </div>
</div>
    );
}
export default LoanRegisterCard;
