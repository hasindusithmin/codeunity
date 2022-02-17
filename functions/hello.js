

exports.handler = async (event, context) => {

    const fetch = require('node-fetch')

    if (context.clientContext.user) {
       
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
        const posts = await response.json()
    
      return {
        statusCode: 200,
        body: JSON.stringify(posts)
      }
    }
  
    // return error status
    return {
      statusCode: 401,
      body: JSON.stringify({ mssg: 'ah ah ah, you must be logged into see this' })
    }
  
  }