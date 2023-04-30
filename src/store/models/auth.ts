import { createModel } from "@rematch/core";
import { RootModel } from ".";

interface IUserInfo {
    // TODO - complete UserInfo model!
    name: string;
}

export const authModel = createModel<RootModel>()({
    state: {
        authorization: "",
        isAuthorized: false,
        userInfo: {} as IUserInfo,
    },
    reducers: {
        setAuthorization(state, payload: string) {
            return { ...state, authorization: payload };
        },
        setIsAuthorized(state, payload: boolean) {
            return { ...state, isAuthorized: payload };
        },
        setUserInfo(state, payload: IUserInfo) {
            return { ...state, userInfo: payload };
        },
    },
    effects: (dispatch) => ({
        async authenticateAsync(token: string, state) {
            await new Promise((resolve, reject) => {
                // TODO - write authentication requests
            });
        }
    })
});
