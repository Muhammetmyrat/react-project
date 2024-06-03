import{ useEffect, useState } from 'react'
import VideoComponent from './Video'
import VideosModal from '../modal/VideosModal'
import { Video } from '../../types/videoTypes'
import { useSelector, useDispatch} from 'react-redux'
import { RootState } from '../../app/store'
import { setIsLoading } from '../../app/videos/videoSlice'

const Videos = () => {
    const videos = useSelector((state: RootState) => state.video.videos)
    const loading = useSelector((state: RootState) => state.video.loading)

	const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        const promises = videos.map((video) => {
            return new Promise<void>((resolve) => {
              const videoElement = document.createElement('video')
              videoElement.src = video.url
              videoElement.oncanplaythrough = () => resolve()
              videoElement.onerror = () => resolve()
            })
          })
      
          Promise.all(promises).then(() => {
            dispatch(setIsLoading(false))
          })
      }, [])

    return (
      <div>
        <div className="flex overflow-x-auto space-x-2">
            {videos.map((video: Video) => (
                <div key={video.id} className="flex-none w-[67px] h-[145px] shadow-lg">
                    <VideoComponent url={video.url} />
                </div>
            ))}
         </div>
        <div className="flex items-center justify-end p-5">
            <button className="bg-blue-500 text-white py-2 px-4 rounded" disabled={loading} onClick={() => setIsOpen(current => !current)}>
                Start
            </button>
        </div>
		<VideosModal close={() => setIsOpen(false)} isOpen={isOpen} />
      </div>
    );
  };
  
  export default Videos