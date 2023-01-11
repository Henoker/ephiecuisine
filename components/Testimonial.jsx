export default function Testimonial() {
    return (
        <section class="section testi text-center has-bg-image"
        style={{ backgroundImage: 'url("images/injera.JPG")'}}
        aria-label="testimonials">
        <div class="container">

          <div class="quote">”</div>

          <p class="headline-2 testi-text">
            All our foods are prepared with authentic ethiopian spices that are made in our own facility in Addis Ababa, Ethiopia.
          </p>

          <div class="wrapper">
            <div class="separator"></div>
            <div class="separator"></div>
            <div class="separator"></div>
          </div>

          <div class="profile">
            {/* <img src="./assets/images/testi-avatar.jpg" width="100" height="100" loading="lazy" alt="Sam Jhonson"
              class="img"> */}

            {/* <p class="label-2 profile-name">Sam Jhonson</p> */}
          </div>

        </div>
      </section>
    )
}