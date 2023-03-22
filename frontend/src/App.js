import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ListUsers from './components/ListUsers';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path='/' element={<ListUsers/>}/>
          <Route path="add" element={<AddUser />} />
          <Route path="edit/:id" element={<EditUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
