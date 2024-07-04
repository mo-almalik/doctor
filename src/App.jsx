import { ConfigProvider } from 'antd';
import { RouterProvider } from 'react-router-dom';
import Routers from './routers/routes.js';

function App() {
  return <>
    <ConfigProvider direction="rtl">
    <RouterProvider router={Routers} />
    </ConfigProvider>
  </>
}

export default App;
