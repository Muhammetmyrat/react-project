import Videos from './components/videos/Videos'
import Loader from './components/loader/Loader'
import { useSelector } from 'react-redux'
import { RootState } from './app/store'

function App() {
const loading = useSelector((state: RootState) => state.video.loading)

  return (
    <>
        <div className="h-screen w-full p-4">
            <Videos />
            { loading && <Loader /> }
        </div>
    </>
  )
}

export default App
