import { GeneralContext } from "@/components/layouts/DefaultLayout";
import Loading from "@/components/loading/Loading";
import axios from "axios";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";

export default function OrderHistory({ title = "Order History" }) {
    const [orderHistory, setOrderHistory] = useState([])
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState()
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
                setLoading(true)
                const headers = {
                    'Content-Type': 'application/json',
                    'authorization': token
                }
                const response = await axios.get("http://localhost:4000/api/orderHistory",
                    {
                        headers: headers
                    })

                setOrderHistory(response.data.orderHistory)
                setLoading(false)
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
                {loading ? (
                    <div className="flex m-auto">
                        <Loading width="50" height="50" />
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4 mt-4">
                        {orderHistory.map((order, idx) => (
                            <div key={`${order._id}-${idx}`}
                                onMouseEnter={() => setOrderId(order._id)}
                                onMouseLeave={() => setOrderId("")}
                                className={`${orderId === order._id && "bg:purple-slate-500"}flex flex-col py-4 px-4 cursor-pointer rounded-lg shadow-lg border border-slate-500 space-y-4 hover:bg-purple-500`}>
                                <div className="flex space-x-4 w-full">
                                    <span className={`flex text-sm font-medium text-black w-1/4 ${orderId === order._id && "text-white"}`}>Order:</span>
                                    <span className={`flex text-sm  w-3/4 ${orderId === order._id && "text-white"}`}>{order.order}</span>
                                </div>
                                <div className="flex space-x-4 w-full">
                                    <span className={`flex text-sm font-medium text-black w-1/4 ${orderId === order._id && "text-white"}`}>PaymentID:</span>
                                    <span className={`flex text-sm w-3/4 ${orderId === order._id && "text-white"}`}>{order.paymentId}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}