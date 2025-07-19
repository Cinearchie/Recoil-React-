import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { jobAtom, messageAtom, networkAtom, notificationAtom, totalNotificationSelector } from './atoms.js'

function App() {
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobCount = useRecoilValue(jobAtom)
  const notificationCount = useRecoilValue(notificationAtom)
  const [messageCount, setMessageCount] = useRecoilState(messageAtom)
  const totalNotifications = useRecoilValue(totalNotificationSelector)

  return (
    <>
      <h1>Total Message: {totalNotifications}</h1>
      <button>Home()</button>
      <button>Network({networkNotificationCount >= 100 ? '99+' : networkNotificationCount})</button>
      <button>Job({jobCount})</button>
      <button>Messaging({messageCount})</button>
      <button>Notification({notificationCount})</button>
    </>
  )
}

export default App
