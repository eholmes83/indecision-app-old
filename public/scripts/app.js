'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Account = function (_React$Component) {
    _inherits(Account, _React$Component);

    function Account(props) {
        _classCallCheck(this, Account);

        var _this = _possibleConstructorReturn(this, (Account.__proto__ || Object.getPrototypeOf(Account)).call(this, props));

        _this.addToBalance = _this.addToBalance.bind(_this);
        _this.state = {
            balance: 0
        };
        return _this;
    }

    _createClass(Account, [{
        key: 'addToBalance',
        value: function addToBalance(e) {
            e.preventDefault();

            var depositAmount = parseInt(e.target.elements.depositAmount.value, 10);
            e.target.elements.depositAmount.value = '';

            this.setState(function (prevState) {
                return { balance: prevState.balance + depositAmount };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Account App'
                ),
                React.createElement(
                    'p',
                    null,
                    'Balance: ',
                    this.state.balance
                ),
                React.createElement(
                    'p',
                    null,
                    'Deposit Amount'
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.addToBalance },
                    React.createElement('input', { type: 'number', name: 'depositAmount' }),
                    React.createElement(
                        'button',
                        null,
                        'Submit'
                    )
                )
            );
        }
    }]);

    return Account;
}(React.Component);

ReactDOM.render(React.createElement(Account, null), document.getElementById('app'));
