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

        const depositAmount = parseInt(e.target.elements.depositAmount.value, 10)
        e.target.elements.depositAmount.value = ''

        this.setState((prevState) => {
            return { balance: prevState.balance + depositAmount }
        })
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