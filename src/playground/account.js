class Account extends React.Component {
    constructor(props) {
        super(props)
        this.addToBalance = this.addToBalance.bind(this)
        this.subtractFromBalance = this.subtractFromBalance.bind(this)
        this.state = {
            balance: 0,
            deposit: 0,
            withdraw: 0
        }
    }
    componentDidUpdate() {
        console.log('component did update')
        console.log(this.state.balance, 'balance')
        console.log(this.state.deposit, 'deposit')
        console.log(this.state.withdraw, 'withdraw')

        localStorage.getItem('deposit', this.state)
    }

    addToBalance(e) {
        e.preventDefault()

        const deposit = parseInt(e.target.elements.deposit.value, 10)
        e.target.elements.deposit.value = ''

        this.setState((prevState) => {
            return { 
                balance: prevState.balance + deposit,
                deposit: prevState.deposit + deposit
            }
        })
    }

    subtractFromBalance(e) {
        e.preventDefault()

        const withdraw = parseInt(e.target.elements.withdrawal.value, 10)
        e.target.elements.withdrawal.value = ''

        this.setState((prevState) => {
            return { 
                balance: prevState.balance - withdraw,
                withdraw: prevState.withdraw + withdraw
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Account App</h1>
                    <p>Balance: ${this.state.balance}</p>
                    <p>Deposit Amount</p>
                <form onSubmit={this.addToBalance}>
                    <input type='number' name='deposit' />
                    <button>Deposit</button>
                </form>
                <p>Withdraw Amount</p>
                <form onSubmit={this.subtractFromBalance}>
                    <input type='number' name='withdrawal'></input>
                    <button>Withdraw</button>
                </form>
            </div>
        )
    }

}

ReactDOM.render(<Account />, document.getElementById('app'))