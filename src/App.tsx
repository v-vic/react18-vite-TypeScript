import { useRoutes } from "react-router-dom";
import router from './router';
function App() {
  const outlet = useRoutes(router)

  return (
    <div className="App">
      {/* <MyLayout></MyLayout> */}
      {outlet}
    </div>
  )
}

export default App
