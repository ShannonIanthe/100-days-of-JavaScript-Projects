import React from 'react'
import image2 from '../assets/two.jpg'
import image3 from '../assets/three.jpg'
import image4 from '../assets/four.jpg'


const Destinations = () => {
  return (
    <>
    <section className='grid'>
        <h3>We are currently in 46 countries!</h3>
        <div className="grid-items">
            <div>
                <img src={image2} alt='' />
                <h4>Explore Nature</h4>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem architecto, voluptates fugit perspiciatis eos corrupti? </p>
            </div>

            <div>
                <img src={image3} alt='' />
                <h4>Experience Living in the Lush Green</h4>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem architecto, voluptates fugit perspiciatis eos corrupti? </p>
            </div>

            <div>
                <img src={image4} alt='' />
                <h4>Give yourself some Peace of Mind</h4>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem architecto, voluptates fugit perspiciatis eos corrupti? </p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Destinations