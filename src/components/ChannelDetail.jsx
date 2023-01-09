import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"

import { Videos, ChannelCard } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState(null)
  const { id } = useParams()

  console.log(channelDetail, videos);

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`)

      setChannelDetail(data?.items[0])

      const videoData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`)

      setVideos(videoData?.items)
    }

    fetchResults()
    // fetchFromAPI(`channels?part=snippet&id=${id}`)
    //   .then((data) => setChannelDetail(data?.items[0]))
  }, [id])  

  return (
    <Box>
      <Box>
        <div style={{
          height: '300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex:10
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>

      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: ' 100px' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>    
  )
}

export default ChannelDetail