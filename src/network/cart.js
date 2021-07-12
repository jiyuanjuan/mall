import { request } from "./request"

export function getCart(iid) {
    return request({
        url:'detail',
        params:{
            iid
        }
    })
}