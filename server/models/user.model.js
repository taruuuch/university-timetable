// const { v4: uuid } = require('uuid')

// module.exports = (sequelize, type) => {
//   return sequelize.define('user', {
//     id: {
//       type: type.UUID,
//       primaryKey: true,
//       allowNull: false,
//       defaultValue: () => uuid(),
//     },
//     email: {
//       type: type.STRING,
//       allowNull: false,
//     },
//     password: {
//       type: type.STRING,
//       allowNull: false,
//     },
//     username: {
//       type: type.STRING,
//       allowNull: true,
//     },
//     fullname: {
//       type: type.STRING,
//       allowNull: true,
//     },
//     status: {
//       type: type.INTEGER,
//       allowNull: true,
//       defaultValue: 1
//     }
//   }, {
//     timestamps: false
//   })
// }
