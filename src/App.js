import React, { useState, useEffect, Suspense } from 'react'

// ** Router Import
import Router from './router/Router'

// ** Routes & Default Routes
import { getRoutes } from './router/routes'

// ** Hooks Imports
import { useLayout } from '@hooks/useLayout'
import { useLocation } from 'react-router-dom'

const App = () => {
  const [allRoutes, setAllRoutes] = useState([])
  const location = useLocation();

  // ** Hooks
  const { layout } = useLayout()

  useEffect(() => {
    setAllRoutes(getRoutes(layout))
    window.scroll(0,0)
  }, [layout,location])
  ;

  
 
  return (
    <Suspense fallback={null}>
      <Router allRoutes={allRoutes} />
    </Suspense>
  )
}

export default App
