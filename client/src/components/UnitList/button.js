// import * as React, {Component} from 'react';

// class MyComponent extends React.Component<{}, { count: number }> {
//     handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
//         // To access your button instance use `event.currentTarget`.
//         (event.currentTarget: HTMLButtonElement);

//         this.setState(prevState => ({
//             count: prevState.count + 1,
//         }));
//     };

//     render() {
//         return (
//             <div>
//                 <p>Count: {this.state.count}</p>
//                 <button onClick={this.handleClick}>
//                     Increment
//         </button>
//             </div>
//         );
//     }
// }