import { createContext, useEffect } from "react";
import { useState } from "react";

export const PaymentContext = createContext()

export const PaymentProvider = ({ children }) => {
    const [paymentJson, setPaymentJson] = useState([])
    
    useEffect(() => {
        const fetchPaymentJson = async() => {
            const data = await fetch('json/payment.json')
            const json = await data.json()
    
            setPaymentJson(Object.values(json))
        }

        fetchPaymentJson()
    }, [])

    return (
        <PaymentContext.Provider value={{paymentJson}}>
            {children}
        </PaymentContext.Provider>
    )
}