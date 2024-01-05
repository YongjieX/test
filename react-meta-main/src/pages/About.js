import React from 'react'
import chef from "../assets/restaurant chef B.jpg";
import restaurant from "../assets/restaurant.jpg";

export const About = () => {
  return (
    <section style={{ margin: "auto", marginBottom: "5rem", marginTop: "2rem", width: "90%", padding: "1rem 2rem" }}>
      <h1 style={{ fontSize: "4rem", marginBottom: "5rem", textAlign: "center" }}> About us</h1>
      <article style={{ marginBottom: "5rem" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Who are we?</h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <p
            style={{
              maxWidth: "50%",
              marginRight: "4rem"
            }}
          >Welcome to Little Lemon - a place where culinary expertise meets the coziness of home cooking. Our journey began with a simple passion for good food that brings people together. Nestled in the heart of our community, we've created a haven for food lovers and friends to enjoy hearty, delicious meals made from locally-sourced ingredients.
          </p>

          <img src={chef} alt="chef"
            width={"20%"}
          />
        </div>
      </article>

      <article >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Where we are?</h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"

          }}
        >
          <img src={restaurant} alt="chef"
            width={"20%"}
          />
          <p
            style={{
              maxWidth: "50%",
              marginLeft: "4rem"
            }}
          >Find your flavor oasis at Little Lemon, located on the bustling Main Street of our vibrant town. Our doors open to a warm and inviting atmosphere, perfect for family dinners, romantic evenings, or a casual lunch with colleagues. Come in and experience the taste of tradition, innovation, and the zest of life with every dish.
          </p>


        </div>
      </article>
    </section>
  )
}
