import React from 'react';

export const Display = ({content}) => {
    return(
    <div className='display'>{content}</div>
    )
}

// class Display extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             content:''
//         }
//     }

//     componentDidUpdate() {
//         fetch(`http://numbersapi.com/${this.props.query}?json`)
//             .then(response => response.json())
//             .then(info => {
//                 console.log(info)
//                 this.setState({ content: info.text })
//             })
//     }

//     render() {
//         return (
//             <div className='display'>{this.state.content}</div>
//         )
//     }

// }

// export default Display;