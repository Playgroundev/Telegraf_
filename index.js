const request = require('request')

class Bot {
    init(TOKEN){
        return new Promise((resolve, reject) => {
            let url = `https://api.telegram.org/bot${TOKEN}/getMe`
            request(url, (error, r, body) => {
                const response = JSON.parse(body).result
                if(error) return
                if(!response) return
                this.id = response.id || ''
                this.first_name = response.first_name || ''
                this.last_name = response.last_name || ''
                this.username = response.username || ''
                this.language_code = response.language_code || ''
                resolve()
            })
        })
    }
    getName(){
        if(this.last_name){
            return `${this.last_name} ${this.last_name}`
        }else{
            return `${this.first_name}`
        }
    }
    introduceYourself(){
        console.log(`Hello My Name is ${this.getName()}. You Can Talk to me through my 
        username : @${this.username}`)
    }

}
Token = ''
const b = new Bot()
b.init(Token).then(() => {
    b.introduceYourself()
})