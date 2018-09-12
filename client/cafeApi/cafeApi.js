import request from 'superagent'

let apiLink = 'https://milkfinder.herokuapp.com/v1/cafes'

export function getAllCafes(){
    
    return request.get(apiLink)
    .then(res => {
        
        
        const home = res.body
        return home
      })
      .catch(() => {
        throw Error('You need to implement an API route for /v1/cafes')
      })
}

export function getOneCafe(page){
    
    return request.get(`${apiLink}/${page}`)
    .then(res => {
        const home = res.body
        
        return home
      })
      .catch(() => {
        throw Error(`You need to implement an API route for ${apiLink}/${id}`)
      })
}


export function addCafe(cafe){
    return request.post(apiLink)
        .send(cafe)
        .then(res => {
          return 'done'
        })
          .catch(() => {
            throw Error('You need to implement an API route for /v1/cafes')
          })
}