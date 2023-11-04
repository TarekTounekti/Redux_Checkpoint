
import ListTask from "./components/ListTask";
import AddTask from "./components/Addtask";

function App() {
 
  return (
    <div className="container mt-5 w-50">
       
      <h3 className="text-primary text-center">ToDo </h3> 
      <AddTask/>
      <ListTask />
  
     
    </div>
  );
}

export default App;
