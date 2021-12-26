import dns from 'dns'

function isOffline() {
  return new Promise<boolean>((resolve) => {
    return dns.lookup('google.com', (err) => {
      if (err && err.code === 'ENOTFOUND') {
        return resolve(true)
      } else {
        return resolve(false)
      }
    })
  })
}

export default isOffline
