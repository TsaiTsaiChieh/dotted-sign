import './styles/App.scss'
import './i18n'
import 'react-pdf/dist/esm/Page/TextLayer.css'

import {StrictMode} from 'react'

import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {persistStore} from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react'

import App from './App'
import {store} from './store'

const persistor = persistStore(store)

const rootElement = document.getElementById('root')
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
  rootElement,
)
