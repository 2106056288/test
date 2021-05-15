import { request } from './request'
export function getCategoryMultiData() {
    return request({
        url: '/category',
    })
}
export default function getCategoryData() {
    return request({
        url: '/category',
    })
}
export function getBaiDuData() {
    return request({
        url: '/'
    })
}