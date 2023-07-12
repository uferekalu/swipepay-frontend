import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import Loading from "@/components/loading/Loading";

export default function Signup({ title = "Signup" }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    let titleView;
    if (title !== null) {
        titleView = process.env.title + " | " + title;
    } else {
        titleView = process.env.title + " | " + process.env.titleDescription;
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const response = await axios.post('http://localhost:4000/api/auth/register', {
                name,
                email,
                password
            })
            console.log(response)
            setMessage(response.data.message)
            setLoading(false)

            if (response.status === 200) {
                router.push("/login")
            }
        } catch (error) {
            setMessage(error.response.data.message);
            setLoading(false)
        }
    }

    return (
        <>
            <Head>
                <title>{titleView}</title>
            </Head>
            <div className="flex min-h-screen flex-col">
                <div className="flex flex-col max-w-sm rounded-lg shadow-lg p-4 m-auto mt-6 bg-slate-100">
                    <h2 className="flex justify-center items-center text-xl text-black  font-medium">Register</h2>
                    <div className="flex space-x-2 italic mt-4 text-green-700">
                        <h4 className="font-medium text-sm">Already have an account? </h4>
                        <button
                            onClick={() => router.push("/login")}
                            className="flex text-sm text-black py-1 px-2 -mt-1 w-30 bg-white w-30 h rounded-lg ">Login</button>
                    </div>
                    <form onSubmit={handleRegister} className="mt-3">
                        <p className="flex text-sm text-center text-black mt-3">{message}</p>
                        <input className="p-3 w-full rounded-lg bg-slate-50 mb-2"
                            value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" required />
                        <input className="p-3 w-full rounded-lg bg-slate-50 mb-2"
                            value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" required />
                        <input className="p-3 w-full rounded-lg bg-slate-50 mb-2"
                            value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
                        {loading ? (
                            <div className="flex justify-center items-center m-auto">
                                <button className="flex mt-4 justify-center items-center m-auto text-black w-44 bg-purple-300 rounded-lg p-2" type="submit">
                                    <Loading /> Registering
                                </button>
                            </div>

                        ) : (
                            <div className="flex justify-center items-center m-auto">
                                <button className="mt-4 justify-center items-center m-auto text-white w-44 bg-purple-600 rounded-lg p-2 hover:bg-white hover:text-black hover:border hover:border-slate-600" type="submit">Register</button>
                            </div>
                        )}
                    </form>
                </div>

            </div>
        </>
    )
}