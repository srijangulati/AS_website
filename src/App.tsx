import React, { useEffect, useState } from 'react';
import AllRoutes from './app/routes/AllRoutes';

function App() {
  const [theme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute("class", `theme-${theme}`);
  },[theme]);

  return (
    <AllRoutes></AllRoutes>
  );
}

export default App;
