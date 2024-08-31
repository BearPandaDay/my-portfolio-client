import { Route, Routes } from 'react-router-dom';
import { 
  Home,
  Test
} from '../../pages';

const Err404 = ()=><>
  <button onClick={() => window.history.back() }>to Back</button>
  <h1>Error 404.</h1>
</>

export function WebRouter() {
  return (
    <>
      <Routes>
        {['/', '/home'].map( (path, index) => (
          <Route key={index} path={path} element={<Home />} />) 
        )}
          {/* <Route path='/test' Component={Test} /> */}
        <Route path='*' Component={Test} />
      </Routes>
    </>
  )
}
