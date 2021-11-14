import * as React from 'react'
import Layout from '../components/layout'
import Slider from "react-slick";

const images = [
  {
    original: '../images/icon.png'
  },
  {
    original: '../images/01_Enero.png'
  },
  {
    original: '../images/icon.png'
  },
  {
    original: ''
  },
  {
    original: ''
  },
  {
    original: ''
  }
]

const IllustrationPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Layout pageTitle="Illustrations" coverHeader="ILLUSTRATION AND CHARACTER DESIGN">
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export default IllustrationPage