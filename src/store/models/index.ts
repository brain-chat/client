import { Models } from "@rematch/core";
import { authModel } from "./auth";

export interface RootModel extends Models<RootModel> { auth: typeof authModel; };

const models: RootModel = {
    auth: authModel
};

export { models };
