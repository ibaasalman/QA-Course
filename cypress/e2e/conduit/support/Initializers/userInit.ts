import { userAPIPayload } from "../API-Helpers/payloads/userAPIPayload";
import genericFunctions from "../genericFunctions";

export default class userInit{
    static initUser(): userAPIPayload {
        return {
            user: {
                username: `ibaa${genericFunctions.genericRandomNumber()}`,
                email:`ibaa${genericFunctions.genericRandomNumber()}@gmail.com`,
                password: '123456'
            }
        }
    }
}