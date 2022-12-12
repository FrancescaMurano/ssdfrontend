import {createContext, useContext} from "react";
import {useNavigate} from "react-router-dom";
import AuthContext from "./AuthContext";
import jwtInterceptor from "../components/jwtInterceptor";


const DressContext = createContext();

export const DressContextProvider = ({children}) => {
    const {user} = useContext(AuthContext);

    const navigate = useNavigate();


    const dress_loan = (dress, start_date, end_date) => {
        const url = 'https://ssd.pingflood.tk/api/v1/loan/'
        const payload = {
            "startDate": start_date,
            "endDate": end_date,
            "dress": dress.id,
            "loaner": user.user_id
        }
        const apiResponse = jwtInterceptor.post(url, payload).then((response) => {
            if (response.status === 201) {
                alert("Dress Loaned successfully!")
            }
        }).catch((error) => {
            console.log(error)
            if (error.response.status === 400) 
                alert(error.response.data.detail)

            

        })
        navigate("/");

    }

    const dress_rendered = (dresses) => {
        let count = 0
        dresses.map((el) => {
            if (!el.deleted) {
                count += 1
            }

            return count

        })
    }

    const add_new_dress = (dress) => {

        const url = 'https://ssd.pingflood.tk/api/v1/dress/'
        let payload = {
            "brandType": dress[0].toString(),
            "priceInCents": parseInt(dress[1]),
            "materialType": dress[2].toString(),
            "colorType": dress[3].toString(),
            "size": parseInt(dress[4]),
            "description": dress[5].toString(),
            "deleted": false
        }

        const apiResponse = jwtInterceptor.post(url, payload).then((response) => {
            console.log(response)
            if (response.status === 201) {
                alert("Dress added successfully!")
            }
        }).catch((error) => {
            let errors = "";
            console.log(error)
            if (error.response.status === 400) {
                if (error.response.data.detail) {
                    errors += "\nBrand:\t" + error.response.data.detail +"\n"                    // error.response.data.detail.map((el)=>errors+=el)
                }
                if (error.response.data.priceInCents) {
                    errors += "\nPrice:\t"
                    error.response.data.priceInCents.map((el) => errors += el+"\n" )
                }
                if (error.response.data.size) {
                    errors += "\nSize:\t"
                    error.response.data.size.map((el) => errors += el+"\n" )
                }
                if (error.response.data.description) {
                    errors += "\nDescription:\t"
                    error.response.data.description.map((el) => errors += el+"\n" )
                }
                if (error.response.data.materialType) {
                    errors += "\nMaterial type:\t"
                    error.response.data.materialType.map((el) => errors += el+"\n" )
                }
                alert(errors)
            }

        })
        // navigate("/");

    }
    const remove_dress = (dress_id) => {


        const url = 'https://ssd.pingflood.tk/api/v1/dress/' + dress_id


        const apiResponse = jwtInterceptor.delete(url).then((response) => {
            console.log(response)
            if (response.status === 204) {
                alert("Dress removed successfully!")
                navigate("/")
            }

        }).catch((error) => {
            console.log(error)
            if (error.response.status === 400) 
                alert(error.response.data.detail)

            

        })


    }

    const modify_dress = (dress, dress_id) => {
        const url = 'https://ssd.pingflood.tk/api/v1/dress/' + dress_id
        let payload = {
            "id": dress_id.toString(),
            "brandType": dress[0].toString(),
            "priceInCents": parseInt(dress[1]),
            "colorType": dress[2].toString(),
            "materialType": dress[3].toString(),
            "size": parseInt(dress[4]),
            "description": dress[5].toString(),
            "deleted": false
        }
        console.log(payload)
        const apiResponse = jwtInterceptor.put(url, payload).then((response) => {
            console.log(response)
            if (response.status === 200) {
                alert("Dress modified successfully!")
                navigate(0)
                }
        }).catch((error) => {
            let errors = "";
            console.log(error)
            if (error.response.status === 400) {
                if (error.response.data.detail) {
                    errors += "\nBrand:\t" + error.response.data.detail
                    // error.response.data.detail.map((el)=>errors+=el)
                }
                if (error.response.data.priceInCents) {
                    errors += "\nPrice:\t"
                    error.response.data.priceInCents.map((el) => errors += el)
                }
                if (error.response.data.size) {
                    errors += "\nSize:\t"
                    error.response.data.size.map((el) => errors += el)
                }
                if (error.response.data.description) {
                    errors += "\nDescription:\t"
                    error.response.data.description.map((el) => errors += el)
                }
                if (error.response.data.materialType) {
                    errors += "\nMaterial type:\t"
                    error.response.data.materialType.map((el) => errors += el)
                }
                alert(errors)
            }

        })
    }

    const edit_loan=(loan,loan_id)=>{
        console.log("loan"+loan)
        const url = 'https://ssd.pingflood.tk/api/v1/loan/' + loan_id
        let payload = {
            "id": loan_id,
            "startDate": loan[1],
            "endDate": loan[2],
            "dress": loan[3],
            "loaner": loan[4],
            "totalPrice": loan[5],
            "loanDurationDays": loan[6],
            "insertBy": loan[7],
            "terminated": loan[8]
        }
        console.log(payload)
        const apiResponse = jwtInterceptor.put(url, payload).then((response) => {
            console.log(response)
            if (response.status === 200) {
                alert("Loan modified successfully!")
                navigate(0)
                }
        }).catch((error) => {
            let errors = "";
            console.log(error)
            if (error.response.status === 400) {
                // if (error.response.data.detail) {
                //     errors += "\nBrand:\t" + error.response.data.detail
                //     // error.response.data.detail.map((el)=>errors+=el)
                // }
                // if (error.response.data.priceInCents) {
                //     errors += "\nPrice:\t"
                //     error.response.data.priceInCents.map((el) => errors += el)
                // }
                // if (error.response.data.size) {
                //     errors += "\nSize:\t"
                //     error.response.data.size.map((el) => errors += el)
                // }
                // if (error.response.data.description) {
                //     errors += "\nDescription:\t"
                //     error.response.data.description.map((el) => errors += el)
                // }
                // if (error.response.data.materialType) {
                //     errors += "\nMaterial type:\t"
                //     error.response.data.materialType.map((el) => errors += el)
                // }
                alert(errors)
            }

        })
    

    }
    const remove_loan=(loan_id)=>{
        const url = 'https://ssd.pingflood.tk/api/v1/loan/' + loan_id


        const apiResponse = jwtInterceptor.delete(url).then((response) => {
            console.log(response)
            if (response.status === 204) {
                alert("Loan removed successfully!")
                navigate(0)
            }

        }).catch((error) => {
            console.log(error)
            if (error.response.status === 400) 
                alert(error.response.data.detail)

        })


    }

    return (<DressContext.Provider value={
        {
            dress_loan,
            add_new_dress,
            remove_dress,
            dress_rendered,
            modify_dress,
            edit_loan, 
            remove_loan
        }
    }> {children} </DressContext.Provider>);
};


export default DressContext;
