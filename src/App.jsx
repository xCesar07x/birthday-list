import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import CarsForm from './components/CarsForm'
import axios from 'axios'
import './App.css'
import CarsList from './components/CarsList'

function App() {
  // const [count, setCount] = useState(0)
//   {
//     "email": "john@gmail.com",
//     "password": "john1234",
//     "first_name": "John",
//     "last_name": "Doe",
//     "birthday": "1993-10-10"
// }
  const [ carsList, setCarsList ] = useState([]);
  const [carSelected, setCarSelected] = useState(null);

  useEffect(() => {
    axios.get('https://users-crud.academlo.tech/users/')
      .then(res => setCarsList(res.data));
  }, [])

  const getCars = () => {
    axios.get('https://users-crud.academlo.tech/users/')
    .then(res => setCarsList(res.data));
  }

  // console.log(carsList)

  const selectCar = (car) => {
    setCarSelected(car)

  }

  return (
    <div className="App">
      <CarsForm getCars={getCars} carSelected={carSelected} selectCar={selectCar}/>
      <CarsList carsList={carsList} selectCar={selectCar} getCars={getCars}/>
    </div>
  )
}

export default App
