import { ApiInstance } from ".";
import { IUser } from "../interfaces";



export const getUserFn = async (): Promise<IUser[]> => {
    const response = await ApiInstance.get<IUser[]>('/users')
    return response.data
}
