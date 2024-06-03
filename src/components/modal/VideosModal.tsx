import { useEffect } from 'react'
import { Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Video } from '../../types/videoTypes'
import VideoComponent from '../videos/Video'
import { RootState } from '../../app/store'
import { useSelector } from 'react-redux'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './modal.scss'

const Popup = ({ isOpen, close }: { isOpen: boolean; close: () => void }) => {
    const videos = useSelector((state: RootState) => state.video.videos)

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
          if (event.key === 'Escape') {
            close()
          }
        }
    
        window.addEventListener('keydown', handleEsc);
    
        return () => {
          window.removeEventListener('keydown', handleEsc);
        }
    }, [close])


	return (
		<>
			{isOpen && (
				<div onClick={close} className="fixed z-50 left-0 top-0 w-full h-full">
					<div className="bg-[rgba(0,0,0,0.2)] backdrop-blur-[10px] w-full h-full flex justify-center items-center">
						<div onClick={e => e.stopPropagation()} className="w-[80vw] h-[80vh]">
							<div className="h-[80vh]">
								<Swiper
									slidesPerView={1}
									spaceBetween={20}
									keyboard={{
										enabled: true
									}}
									navigation={true}
									modules={[Keyboard, Pagination, Navigation]}
									className='mySwiper'
								>
									{
                                        videos.map((video: Video, index) => (
										    <SwiperSlide key={index}>
											    <VideoComponent url={video.url} />
										    </SwiperSlide>
									    ))
                                    }
								</Swiper>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Popup
