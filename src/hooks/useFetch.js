import { useState, useEffect } from 'react'



export const useFetch = (url) =>{
    const [data, setData] = useState(null)

    const [config, setConfig] = useState(null)
    const [method, setMethods] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    const httpConfig = (data, method) =>{
        if (method==='POST') {
            setConfig({
                method,
                headers: { 'Content-Type':'application/json' },
                body: JSON.stringify(data)
        }

    

            )
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
        if (method==='POST') {
        const fetchOptions = [url, config]
        const res = await fetch(...fetchOptions)
        const json = await res.json()
        setCallFetch(json)
            
        }


        }
        httpRequest()
    }, config)


    return { data, httpConfig }
}