import { ApiResponse, Iuser } from "../interface/user"
import { post } from "./axiosConexion"
import axios, { AxiosResponse } from "axios";

export const postRegister = async(user:Iuser) =>{
 
    const res = await post<ApiResponse, Iuser>("http://127.0.0.1:3000/api/register",user)
  
     return res

}

