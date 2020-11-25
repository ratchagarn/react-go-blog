import { QueryCache, ReactQueryCacheProvider } from 'react-query'

import './tailwind.css'

import Example from './components/Example'

const queryCache = new QueryCache()

function App() {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Example />
    </ReactQueryCacheProvider>
  )
}

export default App
