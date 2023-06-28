import { useForm } from "react-hook-form";
import { toast } from "react-toastify";


export default function Contact() {
  const {register, handleSubmit, reset, formState:{errors}} = useForm()

  function submitHandler(data){
    console.log(data)
    fetch("/api/contact", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    toast('Thank you! Your message is sent successfully', { hideProgressBar: true, autoClose: 2000, type: 'success', theme: "dark", position: "bottom-center" })
    reset()
    
  }
    return (
        <section className="reservation" id="contact">
  <div className="container">
    <div className="form reservation-form bg-black-10">
      <form onSubmit={handleSubmit(submitHandler)}  className="form-left">
        <h2 className="headline-1 text-center">Contact Us</h2>
        <p className="form-text text-center">
         email us{" "}
          <a href="mailto:ephesonbeyene@gmail.com">
          ephieethiopiankitchen@gmail.com <br></br>
          </a>
          or send your message below. 
        </p>
        <div className="input-wrapper">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            autoComplete="off"
            className="input-field"
            {...register('Name', {required: 'Please Enter Name'})}
          />
         {errors.Name && errors.Name.message}
          
          <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
            className="input-field"
            {...register('Email', {required: 'Please enter valid email'})}
          />
        </div>
        {errors.Email && errors.Email.message}
        {/* <div className="input-wrapper">
          <div className="icon-wrapper">
            <ion-icon name="person-outline" aria-hidden="true" />
            <select name="person" className="input-field">
              <option value="1-person">1 Person</option>
              <option value="2-person">2 Person</option>
              <option value="3-person">3 Person</option>
              <option value="4-person">4 Person</option>
              <option value="5-person">5 Person</option>
              <option value="6-person">6 Person</option>
              <option value="7-person">7 Person</option>
            </select>
            <ion-icon name="chevron-down" aria-hidden="true" />
          </div>
          <div className="icon-wrapper">
            <ion-icon name="calendar-clear-outline" aria-hidden="true" />
            <input
              type="date"
              name="reservation-date"
              className="input-field"
            />
            <ion-icon name="chevron-down" aria-hidden="true" />
          </div>
          <div className="icon-wrapper">
            <ion-icon name="time-outline" aria-hidden="true" />
            <select name="person" className="input-field">
              <option value="08:00am">08 : 00 am</option>
              <option value="09:00am">09 : 00 am</option>
              <option value="010:00am">10 : 00 am</option>
              <option value="011:00am">11 : 00 am</option>
              <option value="012:00am">12 : 00 am</option>
              <option value="01:00pm">01 : 00 pm</option>
              <option value="02:00pm">02 : 00 pm</option>
              <option value="03:00pm">03 : 00 pm</option>
              <option value="04:00pm">04 : 00 pm</option>
              <option value="05:00pm">05 : 00 pm</option>
              <option value="06:00pm">06 : 00 pm</option>
              <option value="07:00pm">07 : 00 pm</option>
              <option value="08:00pm">08 : 00 pm</option>
              <option value="09:00pm">09 : 00 pm</option>
              <option value="10:00pm">10 : 00 pm</option>
            </select>
            <ion-icon name="chevron-down" aria-hidden="true" />
          </div>
        </div> */}
        <textarea
          name="message"
          placeholder="Message and Phone"
          autoComplete="off"
          className="input-field"
          {...register('Message', {required: 'Please enter booking details'})}
        />
        {errors.Message && errors.Message.message}
        <button type="submit" className="btn btn-secondary">
          <span className="text text-1">Send</span>
          <span className="text text-2" aria-hidden="true">
            Send
          </span>
        </button>
      </form>
    
      <div
        className="form-right text-center"
        style={{ backgroundImage: 'url("./assets/images/form-pattern.png")' }}
      >
        <h2 className="headline-1 text-center">Order On</h2>
        
        {/* <address className="body-4">
          488 Mowry Ave  <br />
        Fremont, CA 94536
        </address> */}
        <li>
          <a href="https://order.online/business/ephies-ethiopian-kitchen-mowry-ave-554727" target="_blank" className="label-2 footer-link hover-underline" rel="noreferrer">
            DOORDASH
          </a>
        </li>
        {/* <p className="contact-label">Lunch Time</p>
        <p className="body-4">
          Monday to Sunday <br />
          11.00 am - 2.30pm
        </p> */}
        {/* <p className="contact-label">Dinner Time</p>
        <p className="body-4">
          Monday to Sunday <br />
          04.00 pm - 8.00pm
        </p> */}
      </div>
    </div>
  </div>
</section>

    )
}