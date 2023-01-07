export class favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
    }

    load () {
        this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
        /*this.entries =  [
            {
                login: 'NixonDelfino',
                name: "Nixon Delfino",
                publc_repos: '5',
                followers: '0',
            },
            {
                login: 'maykbrito',
                name: "Mayk Brito",
                publc_repos: '76',
                followers: '120000',
            }
        ]*/   
    }

    delete(user) {
        this.entries = this.entries
        .filter(entry => entry.login !== user.login)

        this.update()
    }
}

export class favoritesView extends favorites {
    constructor(root){
        super(root)
        this.tbody = this.root.querySelector('table tbody')
        this.update()
    }

    update() {
        this.removeAllTr()

        this.entries.forEach(user => {
            const row = this.createRow()
            
            row.querySelector('.user img').src = `https:/github.com/${user.login}.png`
            row.querySelector('.user img').alt = `image of ${user.name}`
            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user span').textContent = user.login
            row.querySelector('.repositories').textContent = user.publc_repos
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

aula 9
