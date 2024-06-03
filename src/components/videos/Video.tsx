const Video = ({ url }: { url: string }) => {

    return (
        <video
            src={url}
            loop
            preload={'auto'}
            controls
            className="w-full h-full"
        />
    )
  }
  
  export default Video