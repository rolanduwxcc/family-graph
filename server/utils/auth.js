const jwt = require('jsonwebtoken');

const secret = 'bmwSecret';
const expiration = '2h';

module.exports = {
  signToken: function({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
  authMiddleware: function({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) { return req; }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    }
    catch {
      console.log('Invalid token');
    }
    return req;
  }
};

//------------------------------------------------------------
//ATTEMPT 2
// const jwt = require('jsonwebtoken');
// const secret = 'mysecretsshhhhh';
// const expiration = '2h';
// module.exports = {
//   authMiddleware: function ({ req }) {
//     // allows token to be sent via req.body, req.query, or headers
//     let token = req.body.token || req.query.token || req.headers.authorization;
//     // ["Bearer", "<tokenvalue>"]
//     if (req.headers.authorization) {
//       token = token
//         .split(' ')
//         .pop()
//         .trim();
//     }
//     if (!token) {
//       return req;
//     }
//     try {
//       const { data } = jwt.verify(token, secret, { maxAge: expiration });
//       req.user = data;
//     } catch {
//       console.log('Invalid token');
//     }
//     return req;
//   }, 
//   signToken: function ({ username, email, _id }) {
//     const payload = { username, email, _id };
//     return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
//   }
// };
// const jwt = require('jsonwebtoken');
// const secret = 'mysecretshhhh';
// const expiration = '2h';
// module.exports = {
//     signToken: function({ username, email, _id }) {
//         const payload = { username, email, _id };
//         return jwt.sign(
//             { data: payload },
//             secret,
//             {expiresIn: expiration}
//         );
//     },
//     authMiddleware: function({ req }) {
//         //allows token to be sent via req.body, req.query, or headers
//         let token = req.body.token || req.query.token || req.headers.authorization;
//         //separate "Bearer" from "<tokenvalue>"
//         if (req.headers.authorization) {
//             token = token
//                 .split(' ')
//                 .pop()
//                 .trim();
//         }
//         //if no token, return request object as is
//         if (!token) {
//             return req;
//         }
//         try {
//             //decode and attach user data to request object
//             const { data } = jwt.verify(token, secret, { maxAge: expiration });
//             req.user = data;
//         } catch {
//             console.log('Invalid token');
//         }
//         //return updated request object
//         return req;
//     }
// };
//-------------------------------------------------
////ATTEMPT 1
// const jwt = require('jsonwebtoken');
// const secret = 'mysecretsshhhhh';
// const expiration = '2h';
// module.exports = {
//   authMiddleware: function ({ req }) {
//     // allows token to be sent via req.body, req.query, or headers
//     let token = req.body.token || req.query.token || req.headers.authorization;
//     // ["Bearer", "<tokenvalue>"]
//     if (req.headers.authorization) {
//       token = token
//         .split(' ')
//         .pop()
//         .trim();
//     }
//     if (!token) {
//       return req;
//     }
//     try {
//       const { data } = jwt.verify(token, secret, { maxAge: expiration });
//       req.user = data;
//     } catch {
//       console.log('Invalid token');
//     }
//     return req;
//   },
//   signToken: function ({ username, email, _id }) {
//     const payload = { username, email, _id };
//     return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
//   }
// };