import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';



const Shop = () => {
  return (
    <h1>Im a shopping page</h1>
  )
}

// in order nested routes to work we need to wrap them in a parent route and add Outlet component to the parent route (see home.component.js)

const App = () => {
  
  return (
    
    <Routes>

    <Route path='/' element={<Navigation />}>

        <Route index element={<Home />} />
        {/* index is equale to index="true". Match as a base component*/}
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />

    </Route>

</Routes>

  )
}

export default App;
