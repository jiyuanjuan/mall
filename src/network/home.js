import {request} from "./request"

export function getHomeData(url='home/multidata') {
    return request(url);
}