const {db} = require('./server/db')
const app = require('./server/index')
const PORT = 8000

db.sync().then(() => {
  console.log('db synced')
  app.listen(PORT, () => console.log(`A bit repetitive but it works. Serving on port ${PORT}`))
})
