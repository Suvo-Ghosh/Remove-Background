import React from 'react'
import Header from '../component/Header'
import Steps from '../component/Steps'
import BgSlider from '../component/BgSlider'
import Testimonial from '../component/Testimonial'
import Upload from '../component/Upload'
function Home() {
    return (
        <div>
            <Header></Header>
            <Steps></Steps>
            <BgSlider></BgSlider>
            <Testimonial></Testimonial>
            <Upload></Upload>
        </div>
    )
}

export default Home