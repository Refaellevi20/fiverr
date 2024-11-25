import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import { Provider } from 'react-redux'

import { HomePage } from './pages/HomePage.jsx'


export default function App() {
  return (
      // <Provider store={store}>
          <Router>
              <section className="app">
                  {/* <AppHeader /> */}
                  <main className=''>
                      <Routes>
                      <Route element={<HomePage />} path="/" />
                      </Routes>
                  </main>
                  {/* <AppFooter /> */}
              </section>
          </Router>
      // </Provider>

  )
}


