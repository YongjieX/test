import React from 'react'
import restaurantFood from '../assets/restauranfood.jpg'
import salad from '../assets/greek salad.jpg'
import CardSpecial from '../components/CardSpecial'

export const HomePage = () => {
  return (
    <>
      <section>
        <article className='hero'>
          <div>
            <div>
              <h1 className='hero-title'>Little Lemon</h1>
              <h3>Chicago</h3>
              <p>Welcome to Little Lemon - a place where culinary expertise meets the coziness of home cooking. Our journey began with a simple passion for good food that brings people together. Nestled in the heart of our community, we've created a haven for food lovers and friends to enjoy hearty, delicious meals made from locally-sourced ingredients.
              </p>
            </div>
            <a className='hero-button' href="/reservations" role="button">Reserve a table</a>
          </div>
          <img className='hero-image' src={restaurantFood} alt="restaurant hero" />
        </article>

        <article className='specials'>
          <h2>Specials</h2>
          <div className='cards'>
            <CardSpecial
              img={salad}
              dish={{ title: "greek salad", price: 10 }}
            />
            <CardSpecial
              img={salad}
              dish={{ title: "greek salad", price: 10 }}
            />
            <CardSpecial
              img={salad}
              dish={{ title: "greek salad", price: 10 }}
            />
          </div>
        </article>
      </section>
    </>
  )
}
