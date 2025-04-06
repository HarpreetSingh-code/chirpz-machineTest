import { View, Text } from 'react-native'
import React from 'react'
import Routes from './routes/root'
import { Provider } from 'react-redux'
import store from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default App