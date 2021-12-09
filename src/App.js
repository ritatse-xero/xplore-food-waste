import './App.css';
import Selection from './Selection';
import Map from './Map';
import { locations } from "./locations";

function App() {
  var foodBanks;
  var test = ["abc", "efg"]


  // fetch('./locations.json').then(response => {
  //   console.log(response);
  //   return response.json();
  // }).then(data => {
  //   // Work with JSON data here
  //   console.log(data);
  // }).catch(err => {
  //   // Do something for an error here
  //   console.log("Error Reading data " + err);
  // });
  return (
    <div className="App">
      <h1>Food waste donation finder</h1>
      <Selection />
      <Map data={locations}/>
    </div>
  );
}

export default App;
