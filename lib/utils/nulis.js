const fetch = require('node-fetch')
const Nulis = (text) => new Promise(async (resolve, reject) => {
    let url = 'http://salism3.pythonanywhere.com/write?text='
    if (typeof text === 'undefined') { reject('masukan text nya kak.') }
    res = await fetch(url+text)
    ress = await res.json()
    resolve(ress.images)
})

Nulis(process.argv.slice(2).join(' ')).then(data => console.log('.')).catch(err => console.log(err))
module.exports = Nulis
