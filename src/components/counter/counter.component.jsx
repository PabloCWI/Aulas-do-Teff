import React from 'react'

class Counter extends React.Component {
    render () {
        return (null);
    }
}

//   constructor(props) {
//     super(props)

//     this.state = {
//       title: "Garrafa 0"
//     }
//   }

//   componentDidMount() {
//     setInterval(() => this.setState({
//       title: 'Garrafa ' + + (new Date() % 71)
//     }), 1000)
//   }
//     render() {
//         return <CounterComponent name={this.state.title}/>
//     }
// }

// class CounterComponent extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             count: 0
//         }

//         this.subtract = subtract.bind(this)
//     }

//     add() {
//         const { count } = this.state
//         this.setState({
//             count: count + 1
//         })
//     }

//                 <h1>{this.props.name}</h1>
//                 <div className="counter-container">
//                     <button onClick={() => this.add()}>+</button>
//                     <div>{this.state.count}</div>
//                     <button onClick={this.subtract}>-</button>
//                 </div>
//             </div>
//         )
//     }
// }

// function subtract() {
//     const count = this.state.count - 1
//     this.setState({ count })


export default Counter;