import { login } from "../api/auth-api";

export const useLogin = () => {
    const loginHandler = async (email, password) => {
            const result = await login(email,password);
            console.log(result);
            // TODO: Update!
    };

    return loginHandler;
};