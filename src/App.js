import { ChatEngine } from 'react-chat-engine'

import './App.css'

import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />
  return (
    <ChatEngine
      height='100vh'
      projectID='6741943b-e08d-4ec0-8019-6e8599ed7838'
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App
