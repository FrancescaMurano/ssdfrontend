import {useState, useEffect, useContext} from "react";
import jwtInterceptor from "./jwtInterceptor";
import DressCard from "./DressCard";
import {v4 as uuidv4} from 'uuid';
import AuthContext from "../context/AuthContext";

const Dresses = () => {
    const [dresses, setDresses] = useState([]);
    const [dresses_for_price, setDressesForPrice] = useState([]);
    const [ordered, setOrdered] = useState(false);
    const {role} = useContext(AuthContext);


    function dress_ordered(dresses) {
        setOrdered(true)
        let arr = [... dresses];
        arr.sort(function (a, b) {
            return a.priceInCents > b.priceInCents;
        })
        setDressesForPrice(arr)
    }
    function ordered_by_terminated(dresses) {
        console.log(dresses)
        let arr = [... dresses];
        arr.sort(function (a, b) {
            return a.deleted > b.deleted;
        })
        setDresses(arr)
    }

    function before_available(dresses) {
        let arr = [];
        if (role === "commessi") {
            ordered_by_terminated(dresses)
        } else {
            dresses.map((el) => {
                if (el.terminated !== true) 
                    arr.push(el)
                
            })
            setDresses(arr)
        }

    }

    useEffect(() => {
        jwtInterceptor.get('https://ssd.pingflood.tk/api/v1/dress/').then((response) => {
            setDresses(response.data);
            before_available(response.data)
        }).catch((error) => console.log(error));
    }, []);


    return (
        <>
            <div className="flex bg-white-800/70 text-white p-2">
                <button className="p-2 m-1 bg-red-800/90  rounded hover:bg-black-800/80"
                    onClick={
                        () => setOrdered(false)
                }>Suggested</button>
                <button className="p-2 m-1 bg-red-800/90 rounded hover:bg-black-800/80"
                    onClick={
                        () => dress_ordered(dresses)
                }>Increasing price</button>

            </div>

            <div className="grid m-10 grid-cols-auto-fit place-items-center  md:items-center md:grid-cols-2 lg:grid-cols-3 gap-3  ">
                {
                ordered ? (dresses_for_price.map((el) => {
                    return (
                        <DressCard key={
                                uuidv4()
                            }
                            dress={el}></DressCard>
                    )
                })) : (dresses.map((el) => {
                        return <DressCard key={
                                uuidv4()
                            }
                            dress={el}></DressCard>
                }
            ))
            } </div>

        </>
    );
};
export default Dresses;
