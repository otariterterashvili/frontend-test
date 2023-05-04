import { ApiInstance } from ".";
import { IPost } from "../interfaces";


export const getPostFn = async (userId: string): Promise<IPost[]> => {
    const response = await ApiInstance.get<IPost[]>(`/posts?userId=${userId}`)
    return response.data
}
