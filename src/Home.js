import React from 'react'
import './Home.css'
import Banner from './Banner';
import Card from './Card';

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        <Card 
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=480
          "
          title="Online Experiences"
          description="Unique activities we can do together, Led by a world of hosts."
        />
        <Card 
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=480"
          title="Unique Stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card 
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=480"
          title="Unique Stays"
          description="Spaces that are more than just a place to sleep."
        />
       

      </div>

      <div className="home__section">

      <Card 
          src="https://a0.muscache.com/im/pictures/a32db393-e6a7-4b7c-b332-d975f0451648.jpg?aki_policy=large"
          title="Entire apartment hosted by Gabriele"
          description="New central loft 50 mt from the BEACH"
          price="$41 / night"
        />

        <Card 
          src="https://a0.muscache.com/im/pictures/8f88b709-bd1b-47a5-af5f-9b0fd95f03b2.jpg?aki_policy=large"
          title="Entire apartment hosted by Cassandra And Bryan"
          description="LUXURY Palms Place VEGAS STRIPVIEW Condo Kitchen B"
          price="$98 / night"
        />

        <Card 
          src="https://a0.muscache.com/im/pictures/95e76ebc-e22a-4592-a3f5-7c9c04eb5852.jpg?aki_policy=large"
          title="Entire apartment hosted by Phil"
          description="LED Onyx Wall 1bdrm Suite/Balcony & Pool view "
          price="$279 / night"
        />



        <Card 
          src="https://a0.muscache.com/im/pictures/8a8babd9-43ae-40dd-99ea-06715ae1e0d4.jpg?aki_policy=large"
          title="Entire apartment hosted by Phil"
          description="LED Onyx Wall 1bdrm Suite/Balcony & Pool view"
          price="$279/ night"
        />

      </div>

      
 
      
      
    </div>
  )
}

export default Home

