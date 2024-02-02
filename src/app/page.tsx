'use client'
import { Provider } from 'jotai'
import { TodoList } from './components/TodoList'

const App = () => (
  <Provider>
    <main style={{ backgroundColor: 'white', width: '100%', height: '100vh' }}>
      <h1>Jōtai Todo Application</h1>
      <TodoList />
    </main>
  </Provider>
)

export default App
