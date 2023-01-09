import { githubUser } from "./githubuser.js"

export class favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
    }

    load () {
        this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
    }

    save() {
        localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
    }

    async add(username){
        try{
            const userExists = this.entries.find(entry => entry.login === username)

            if(userExists) {
                throw new Error ('User already registered')
            }

            const user = await githubUser.search(username)
            
            if (user.login === undefined) {
                throw new Error('User not found')
            }

            this.entries = [user, ...this.entries]
            this.update()
            this.save()

        }catch(error){
            alert(error.message)
        }

    }

    delete(user) {
        this.entries = this.entries
        .filter(entry => entry.login !== user.login)

        this.update()
        this.save()
    }
}

export class favoritesView extends favorites {
    constructor(root){
        super(root)
        this.tbody = this.root.querySelector('table tbody')
        this.update()
        this.onadd()
    }

    onadd() {
        const addButton = this.root.querySelector('.search button')
        
        document.addEventListener('keydown', function (e) {
            if (e.key === "Enter") {
                addButton.click()
            } 
        })
        
        addButton.onclick = () => {
            const {value} = this.root.querySelector('.search input')
        

            this.add(value)
        }
    }    

    update() {
        this.removeAllTr()

        this.entries.forEach(user => {
            const row = this.createRow()
            
            row.querySelector('.user img').src = `https:/github.com/${user.login}.png`
            row.querySelector('.user img').alt = `image of ${user.name}`
            row.querySelector('.user a').href = `https://github.com/${user.login}`
            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user span').textContent = user.login
            row.querySelector('.repositories').textContent = user.public_repos
            row.querySelector('.followers').textContent = user.followers

            row.querySelector('td button').onclick = () => {
                const isOk = confirm('Are you sure you want to delete?')
                if (isOk) {
                    this.delete(user)
                }
            }

            this.tbody.append(row)
        })

    }

    createRow() {
        const tr = document.createElement('tr')
        
        tr.innerHTML = `
            <td class="user">
                <img src="https://github.com/maykbrito.png" alt="MaykImage">
                <a href="https://github.com/maykbrito" target="_blank">
                    <p>Mayk Brito</p>
                    <span>
                        maykbrito
                    </span>
                </a>
            </td>
            <td class="repositories">76</td>
            <td class="followers">9589</td>
            <td>
                <button>&times;</button>
            </td>
            `
        
        return tr
    }

    removeAllTr(){
        this.tbody.querySelectorAll('tr').forEach((tr) => {
            tr.remove()
    })
    
    }
}
