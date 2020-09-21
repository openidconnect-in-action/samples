import React from "react";

const App = () => { 
    const [sum,setSum] = React.useState(0);
    return (
       <div>
           <h1>Sum of Numbers: {sum}</h1>
           <input type="text" onKeyPress={event=>event.key=="Enter" ? setSum(parseInt(sum)+parseInt(event.target.value)) : undefined} />
       </div>
    );
}

export default App;