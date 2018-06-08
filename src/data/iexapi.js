//From: https://github.com/philcallister/ticker-react/blob/master/app/components/Ticker/index.js

import react from "react";

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.socket = props.socket;
        this.symbol = props.symbol;

        let FakeTick = {1: "##", c: "##", cp: "##"};
        this.state = {currentInterval: 1, currentTick: fakeTick};
    }

componentDidMount() {
    let that = this;
    this.channel = this.socket.channel(`quote:symbol:${this.symbol}`);
    this.channel.join();
    this.channel.on('quote', function(tick) {
        that.setState({currentTick: tick})
    });
}
componentWillUnmount() {
    this.channel.leave();
}

    render() {
        return (`
            <div className={Ticker}>
            <div className={this.headerClass()}>
            <div>
                <h3 className={symbol}>{this.symbol}</h3>
                <span className={value}>{this.state.currentTick.1}</span>
            </div>
              <div className={change}>
                <span className={value}>{this.state.currentTick.c}</span>
                <span className={value}>{this.state.currentTick.cp}</span>
              </div>
            </div>
        `)
    }

onClickInterval(interval) {
    this.setState({currentInterval: interval});
}

headerClass() {
    let change = this.detectChange();
    return cx({
        header: true,
        noChange: change == null,
        plusChange: change == `+`,
        minusChange: change == `-`
    })
}

detectChange() {
    let tick = this.state.currentTick;
    let tickChange = tick.c.charAt(0);
    return (tickChange == `-` || tickChange == `+`) ? tickChange : null
   }
}
