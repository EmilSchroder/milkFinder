import request from 'superagent'

export function getAllCafes(){
    
    return request.get('/v1/cafes')
    .then(res => {
        
        
        const home = res.body
        return home
      })
      .catch(() => {
        throw Error('You need to implement an API route for /v1/cafes')
      })
}

export function getOneCafe(page){
    
    return request.get(`/v1/cafes/${page}`)
    .then(res => {
        const home = res.body
        
        return home
      })
      .catch(() => {
        throw Error(`You need to implement an API route for /v1/cafes/${id}`)
      })
}


export function addCafe(cafe){
    return request.post('/v1/cafes')
        .send(cafe)
          .catch(() => {
            throw Error('You need to implement an API route for /v1/cafes')
          })
}