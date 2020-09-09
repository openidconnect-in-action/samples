import React from "react";
import Books from "./Books";
import BookList from "../services/Books";

const App = (props) => { 
    return (
       <div>
           <h1>Welcome to the Book Club!</h1>
           <Books bookList={BookList}/>
       </div>
    );
}


export default App;