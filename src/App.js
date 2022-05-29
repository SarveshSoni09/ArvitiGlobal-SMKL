import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Events from './Pages/Events' 
import ErrorPage from './Pages/ErrorPage'
import Sidebar from './Components/Sidebar';
import MyFamily from './Pages/MyFamily'
import MobileBottomNav from './Components/MobileBottomNav'
import MobileSideNav from './Components/MobileSideNav'
import News from './Pages/News'
import MobileSearchPage from './Pages/MobileSearchPage'
 
function App() {
  return (
    <div className="App">
      <Router>
        <div className='MainApp'>
            <div id="MSideNav">
              <MobileSideNav/>
            </div>
            <Sidebar/>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/Events' element={<Events/>} />
              <Route path='/MyFamily' element={<MyFamily/>} />
              <Route path='/News' element={<News/>} />
              <Route path='/MobileSearchPage' element={<MobileSearchPage/>} />
              <Route path='*' element={<ErrorPage/>} />
            </Routes>
            <div className="MNavigator">
              <MobileBottomNav />
            </div>
        </div>
      </Router>
    </div>
    
  );
}

export default App;
