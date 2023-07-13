import Head from "next/head";
import { useContext, useState } from "react";
import axios from "axios";
import { GeneralContext } from "@/components/layouts/DefaultLayout";
import { useRouter } from "next/router";

export default function Checkout({ title = "Checkout" }) {
    const [order, setOrder] = useState('');
    const [paymentMethodId, setPaymentMethodId] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false)
    const [isCheckout, setIsCheckout] = useState(false)
    const { token } = useContext(GeneralContext)
    const router = useRouter()

    let titleView;
    if (title !== null) {
        titleView = process.env.title + " | " + title;
    } else {
        titleView = process.env.title + " | " + process.env.titleDescription;
    }

    const handlePayment = async (e) => {
        e.preventDefault();

        try {
            setLoading(true)
            const headers = {
                'Content-Type': 'application/json',
                'authorization': token
            }
            const response = await axios.post('http://localhost:4000/api/checkout', {
                order: order,
                paymentMethodId: paymentMethodId,
            }, {
                headers: headers
            });

            setMessage(response.data.message);
            setLoading(false)

            if (response.status === 200) {
                router.push("/order-history")
            }
        } catch (error) {
            setMessage(error.response?.data.message);
        }
    };
    return (
        <>
            <Head>
                <title>{titleView}</title>
            </Head>
            <div className="flex min-h-screen flex-col p-5">
                {!isCheckout ? (
                    <div className="m-auto max-w-sm text-justify bg-slate-100 rounded-lg shadow-lg p-4 mt-6">
                        You can <span onClick={() => {
                            setIsCheckout(true)
                        }} className="text-purple-950 font-medium cursor-pointer italic">click here</span> to checkout an order or {" "}
                        <span onClick={() => {
                            router.push("/order-history")
                        }} className="text-purple-950 font-medium cursor-pointer italic">view your available orders</span> if you already have one
                    </div>
                ) : (
                    <div className="flex flex-col max-w-sm rounded-lg shadow-lg p-4 m-auto mt-6 bg-slate-100">
                        <h2 className="flex justify-center items-center text-xl text-black  font-medium">Checkout Page</h2>
                        <form onSubmit={handlePayment} className="mt-3">
                            <div className="flex justify-center items-center mb-3 m-auto">
                                <p className="flex text-sm text-center text-black mt-3">{message}</p>
                            </div>
                            <input className="p-3 w-full rounded-lg bg-slate-50 mb-2"
                                value={order} onChange={(e) => setOrder(e.target.value)} type="text" placeholder="Order details" required />
                            <input className="p-3 w-full rounded-lg bg-slate-50 mb-2"
                                value={paymentMethodId} onChange={(e) => setPaymentMethodId(e.target.value)} type="text" placeholder="Payment method ID" required />
                            {loading ? (
                                <div className="flex justify-center items-center m-auto">
                                    <button className="flex mt-4 justify-center items-center m-auto text-black w-44 bg-purple-300 rounded-lg p-2" type="submit">
                                        Submitting
                                    </button>
                                </div>
                            ) : (
                                <div className="flex justify-center items-center m-auto">
                                    <button className="mt-4 justify-center items-center m-auto text-white w-44 bg-purple-600 rounded-lg p-2 hover:bg-white hover:text-black hover:border hover:border-slate-600" type="submit">Pay</button>
                                </div>
                            )}
                        </form>
                    </div>
                )}
            </div>
        </>
    )
}