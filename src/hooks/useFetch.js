import { useState, useEffect } from 'react'



export const useFetch = (url) =>{
    const [data, setData] = useState(null)

    const [config, setConfig] = useState(null)
    const [method, setMethods] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    const httpConfig = (data, method) =>{
        if (method==="POST") {



            console.log("chegou no POST")
            setConfig({
                method,
                headers: { 'Content-Type':'application/json' },
                body: JSON.stringify(data),
             })



            setMethods(method)

        }


    }



    useEffect(()=>{


        const fetchData = async () =>{

        const res = await fetch(url)
        const json = await res.json()
        setData(json)


        }

        fetchData()




    }, [url, callFetch])

    useEffect(()=>{

        const httpRequest = async () =>{



            console.log(method)
        if (method === "POST") {
        const fetchOptions = [url, config]
        const res = await fetch(...fetchOptions)
        const json = await res.json()
        setCallFetch(json)


            console.log("Chegou no httpRequest")


        }


        }
        httpRequest()
    }, [config, method, url] )


    return { data, httpConfig }
}