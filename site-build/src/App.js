import logo from "./logo.svg";
import "./App.css";
import data from "./data.json";
import CardContainer from "./components/CardContainer";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=EB+Garamond&family=Montserrat:wght@500&display=swap');
</style>;

function App() {
  return (
    <div className="App">
      <CardContainer data={data.data}></CardContainer>
    </div>
  );
}

export default App;
