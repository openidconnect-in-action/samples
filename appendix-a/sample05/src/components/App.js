import React from "react";

const App = (props) => { 
    const [newName,setNewName] = React.useState('Peter')

    function updateName(event) {
       if (event.key == "Enter"){
           setNewName (event.target.value);
       }
    }
    return (
       <div>
           <h1>Welcome to the Book Club, {newName}!</h1>
           <input type="text" onKeyPress={updateName} />
       </div>
    );
}

export default App;