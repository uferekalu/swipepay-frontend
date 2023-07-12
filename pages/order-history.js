import { GeneralContext } from "@/components/layouts/DefaultLayout";
import axios from "axios";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";

export default function OrderHistory({ title = "Order History" }) {
    const [orderHistory, setOrderHistory] = useState([])
    const [message, setMessage] = useState('')
    const { token } = useContext(GeneralContext)

    let titleView;
    if (title !== null) {
        titleView = process.env.title + " | " + title;
    } else {
        titleView = process.env.title + " | " + process.env.titleDescription;
    }

    useEffect(() => {
        const fetchOrderHistory = async () => {
            try {
                const headers = {
                    'Content-Type': 'application/json',
                    'authorization': token
                }
                const response = await axios.get("http://localhost:4000/api/orderHistory",
                    {
                        headers: headers
                    })

                setOrderHistory(response.data.orderHistory)
            } catch (error) {
                setMessage(error.response.data.message);
            }
        }
        fetchOrderHistory()
    }, [token])

    return (
        <>
            <Head>
                <title>{titleView}</title>
            </Head>
            <div className="max-w-sm items-center text-center justify-center mt-4 m-auto">
                <h3 className="text-xl text-black font-medium ">
                    Order History
                </h3>
            </div>
            <div className="flex min-h-screen flex-col">
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4 mt-4">
                    {orderHistory.map((order, idx) => (
                        <div key={`${order._id}-${idx}`}
                        className="flex flex-col p-4 rounded-lg shadow-lg border border-slate-500 ">
                            {order.order}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}