module.exports = {
  port: 3000,
  session: {
    secret: 'nodedemo',
    key: 'nodedemo',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://loclahost:27017/nodedemo'
}