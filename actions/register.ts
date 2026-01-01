'use server'
import {UserAuthService} from "@/services/user-auth";
import {RegisterUserData} from "@/types/auth";

export const register = async (data: RegisterUserData) => {
    try {
        const user = await UserAuthService.createUser(data);

        return {success: true, data: user}
    }catch (e) {
        return {error: e.message}
    }
}