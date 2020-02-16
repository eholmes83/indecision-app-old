class Account extends React.Component {
    constructor(props) {
        super(props)
        this.addToBalance = this.addToBalance.bind(this)
        this.state = {
            balance: 0
        }
    }
    addToBalance(e) {
        e.preventDefault()
        
        console.log(this.state.balance, 'state')

        const depositAmount = e.target.elements.depositAmount.value
        e.target.elements.depositAmount.value = ''

        console.log('deposit amount', Number(depositAmount))
        
        const newBalance = Number(depositAmount + this.state.balance)

        console.log('new bal', Number(newBalance))

        this.setState((prevState) => {console.log(typeof prevState.balance)
            
            { balance: prevState.balance + depositAmount }})

        // this.setState((prevState) => ({ count: prevState.count + 1 }))
        

    }

    render() {
        return (
            <div>
                <h1>Account App</h1>
                    <p>Balance: {this.state.balance}</p>
                    <p>Deposit Amount</p>
                <form onSubmit={this.addToBalance}>
                    <input type='number' name='depositAmount' />
                    <button>Submit</button>
                </form>
            </div>
        )
    }

}

ReactDOM.render(<Account />, document.getElementById('app'))