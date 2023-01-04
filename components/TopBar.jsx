export default function TopBar() {
    return (
        <div className="topbar">
        <div className="container">
          <address className="topbar-item">
            <div className="icon">
              <ion-icon name="location-outline" aria-hidden="true" />
            </div>
            <span className="span">
             488 Mowry Ave Fremont, CA 94536
            </span>
          </address>
  
          <div className="separator" />
          <div className="topbar-item item-2">
            <div className="icon">
              <ion-icon name="time-outline" aria-hidden="true" />
            </div>
            <span className="span">Daily : 8.00 am to 10.00 pm</span>
          </div>
          <a href="tel: +1 510-894-1894" className="topbar-item link">
            <div className="icon">
              <ion-icon name="call-outline" aria-hidden="true" />
            </div>
            <span className="span">+1 510-894-1894</span>
          </a>
          <div className="separator" />
          <a href="mailto:booking@restaurant.com" className="topbar-item link">
            <div className="icon">
              <ion-icon name="mail-outline" aria-hidden="true" />
            </div>
            <span className="span">booking@restaurant.com</span>
          </a>
        </div>
      </div>
    )
}