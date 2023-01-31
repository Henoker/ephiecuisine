export default function Testimonial() {
    return (
        <section className="section testi text-center has-bg-image"
        style={{ backgroundImage: 'url("images/injera.JPG")'}}
        aria-label="testimonials">
        <div className="container">

          <div className="quote">”</div>

          <p className="headline-2 testi-text">
            All our foods are prepared with authentic ethiopian spices that are made in our own facility in Addis Ababa, Ethiopia.
          </p>

          <div className="wrapper">
            <div className="separator"></div>
            <div className="separator"></div>
            <div className="separator"></div>
          </div>

          <div className="profile">
            {/* <img src="./assets/images/testi-avatar.jpg" width="100" height="100" loading="lazy" alt="Sam Jhonson"
              class="img"> */}

            {/* <p class="label-2 profile-name">Sam Jhonson</p> */}
          </div>

        </div>
      </section>
    )
}