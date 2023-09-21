

import './App.css'
import AnotherNav from './Components/AnotherNav/AnotherNav'
import LineChart from './Components/LineChart/lineChart'
import Phones from './Components/Phones/Phones'

import PriceOptions from './Components/PriceOptions/PriceOptions'
// import Navbar from './Components/Navbar/Navbar'

function App() {


  return (
    <>
    <AnotherNav></AnotherNav>
      {/* <Navbar></Navbar> */}
      
    <PriceOptions></PriceOptions>
    <LineChart ></LineChart>
    <Phones></Phones>
    </>
  )
}

export default App
