import { createSlice } from '@reduxjs/toolkit'
import { Video } from '../../types/videoTypes'
import { videoData } from '../../datas/videos'

interface VideoState {
  videos: Video[]
  loading: boolean
}

const { videos } = videoData

const initialState: VideoState = {
  videos: videos,
  loading: true,
};

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    setIsLoading(state, action) {
      state.loading = action.payload
    },
  },
});

export const { setIsLoading } = videoSlice.actions
export default videoSlice.reducer
