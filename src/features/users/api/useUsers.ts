import {useEffect, useState} from "react";
import type {UserType} from "../types/userType.ts";

export const useUsers = ()=>{
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    const [data, setData] = useState<UserType[]>();
    const getUsers = ()=>{
        setIsLoading(true)
        setError(false)
        fetch(`${import.meta.env.VITE_BASE_URL}/users`).then(async (data)=>{
            const response = await data.json()
            setIsLoading(false)
            setError(false)
            setData(response.users)
        }).catch(()=>{
            setError(true)
            setIsLoading(false)
        });
    }
    useEffect(()=>{

getUsers()
    },[])

    return {isLoading, data , error, getUsers}
}
