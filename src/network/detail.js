import { request } from "./request"
export function detailData(iid) {
return request({
    url:'/detail',
    params:{
        iid
    }
})
}

export class shopBaseInfo{
    constructor(baseInfo, baseColumns, baseServe){
        this.title = baseInfo.title;
        this.price = baseInfo.price;
        this.oldPrice = baseInfo.oldPrice;
        this.discountDesc = baseInfo.discountDesc;
        this.columns = baseColumns;
        this.serve = baseServe;
    }
}

// export class goodsDetailParams{
//     constructor(detailParams){
//         this.info = detailParams.info;
//         this.rule = detailParams.rule;
//     }
// }

export function getRecommentData(page='1') {
    return request({
        url:'home/data?type=sell' + '&page=' + page,
        method:'get'
    });
}