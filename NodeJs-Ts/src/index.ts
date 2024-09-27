type Handle = () => Promise<string>
const name = 'Dư Thanh Được'
const p: any = {}
const handle: Handle = () => Promise.resolve(name)
handle().then(console.log) // cú pháp rút gọn
