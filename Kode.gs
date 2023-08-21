// masukkan TOKEN BOT dari BOT Father
const token = '6212079642:AAEGGt1Cd6AprQeAzzWoEcBJ_FXwmSlNvnA'

const tg = new telegram.daftar(token)

// masukkan ID kamu, jika belum tau cek di @strukturbot
const adminBot = 1683238396

const debug = false

function getMe(){
  let me = tg.getMe()
  return Logger.log(me)
}

function setWebhook() {
  var url = "https://script.google.com/macros/s/AKfycbydzCUDtyb52hteuMo5P0IHdN9KnXs2iQqK2LlL4GuCIGR15rLXVQyPt1D47Rw124e1/exec"
  var r = tg.setWebhook(url)
  return Logger.log(r)
}

function getWebhookInfo() {
  let hasil = tg.getWebhookInfo()
  return Logger.log(hasil)
}

function deleteWebhook() {
  let hasil = tg.deleteWebhook()
  return Logger.log(hasil)
  
}


