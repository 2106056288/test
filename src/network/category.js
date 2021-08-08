import { request } from './request'

export function getCategory(type, page) {
    return request({
        url: '/category',
        params: {
            type,
            page
        }
    })
}
export function getSubcategory(maitKey) {
    return request({
        url: '/subcategory',
        params: {
            maitKey
        }
    })
}

export function getCategoryDetail(miniWallKey, type) {
    return request({
        url: '/subcategory/detail',
        params: {
            miniWallKey,
            type
        }
    })
}