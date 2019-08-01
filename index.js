const express = require('express')
const app = express()
const queryString = require('querystring')
const port = 7000

app.use(express.json());

const requestHandler = (request, response) => {
  console.log("Starting Response")
  console.log(request.url)
  if(request.body && request.body.value){
    console.log("resource",request.body.value[0].resource)
    console.log("changeType",request.body.value[0].changeType)
    console.log("resourceData",request.body.value[0].resourceData)
  }
  if (request.url.indexOf('?') >= 0) {
      const qs = queryString.parse(request.url.replace(/^.*\?/, ''));
      console.log(qs);
      const {validationToken} = qs;
      if(validationToken)
      {
        response.send(validationToken)
      }
        else{
            response.send('Hello Node.js Server!')
        }
    }
    else{
        response.send('Hello Node.js Server!')
    }
}

app.get('*',requestHandler)
app.post('*',requestHandler)

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})