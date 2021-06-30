import {request} from "./request"

export function getHomeData(url='home/multidata') {
    return request(url);
}

export function getGoodsData(url='home/data') {
    return request(url);
}