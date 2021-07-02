import {request} from "./request"

export function getHomeData(url='home/multidata') {
    return request(url);
}

export function getGoodsData(type='pop',page='1') {
    return request({
        url:'home/data?type=' + type + '&page=' + page,
        method:'get'
    });
}
