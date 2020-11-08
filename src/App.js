// Bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//Component(s)
import TodoMain from "./components/todoMain";

function App() {
  return (
    <div className="d-flex justify-content-center text-white bg-dark">
      <TodoMain />
    </div>
  );
}

export default App;
