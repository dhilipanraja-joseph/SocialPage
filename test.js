const jwt = require('jsonwebtoken');

let payload = {
 color:'purple',
 number:123,
 bool:false
};

let secret ='Dlipnraj';
// jwt.sign(payload,secret,{},(err,token)=>{
//  console.log('err:', err);
//  console.log('token:', token)
// })
let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2xvciI6InB1cnBsZSIsIm51bWJlciI6MTIzLCJib29sIjpmYWxzZSwiaWF0IjoxNDcyMDY0NzU0fQ.Lxy2LfIqaNV2PYAthV_gGjA4mRvPIfxH2uxZlpTuwig';

jwt.verify(token,secret,(err,payload)=>{
  console.log('err:',err);
  console.log('payload: ',payload);
})
