
function Square({value,event}){ 
   return (
            <button className="square" onClick={event}>
            {value}
            </button>
            )

}

// class Square extends Component {

//     render(){
//     const{value,event} = this.props
//       return (
//             <button className="square" onClick={event}>
//                 {value}
//             </button>
//         ) 
//     }
// }

export {Square}