import axios from 'axios'

export const List = () => {
    return axios({
        method: 'GET',
        url: '/api/ranking/gender',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res)
}

//获取列表书籍
export const List2 = (size) => {
    return axios({
        method: 'GET',
        url: '/api/ranking/' + size,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res)
}

//获取评价
export const List3 = (size) => {
    return axios({
        method: 'GET',
        url: '/api/post/review/by-book',
        headers: {
            'Content-Type': 'application/json'
        },
        params: {
            book: size,
            sort: "update",
            start: 0,
            limit: 20
        }
    }).then(res => res)
}

// 书籍详情
export const List5 = (size) => {
    return axios({
        method: 'GET',
        url: '/api/book/' + size,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res)
}

// //获取章节
export const List6 = (size) => {
    return axios({
        method: 'GET',
        url: '/api/atoc/' + size + "?view=chapters",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res)
}



//获取章节内容
export const List8 = (size) => {
    return axios({
        method: 'GET',
        url: '/test/chapter/' + size,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res)
}

//查询搜索
export const List9 = (size) => {
    return axios({
        method: 'GET',
        url: '/api/book/fuzzy-search',
        headers: {
            'Content-Type': 'application/json'
        },
        params: {
            query: size
        }
    }).then(res => res)
}

//获取搜索热词
export const List7 = () => {
    return axios({
        method: 'GET',
        url: '/api/book/search-hotwords',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res)
}

//搜索自动补充
export const List4 = (size) => {
    return axios({
        method: 'GET',
        url: '/api/book/auto-complete',
        headers: {
            'Content-Type': 'application/json'
        },
        params: {
            query: size
        }
    }).then(res => res)
}

//获取全部分类

export const all = () => {
    return axios({
        method: 'GET',
        url: '/api/cats/lv2/statistics',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res)
}

//获取小说源

export const List10 = (size) => {
    return axios({
        method: 'GET',
        url: '/api/atoc',
        headers: {
            'Content-Type': 'application/json'
        },
        params: {
            view: "summary",
            book: size
        }
    }).then(res => res)
}