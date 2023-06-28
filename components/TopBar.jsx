export default function TopBar() {
    return (
        <div className="topbar">
        <div className="container">
  
          <div className="separator" />
          {/* <div className="topbar-item item-2">
            <div className="icon">
              <ion-icon name="time-outline" aria-hidden="true" />
            </div>
            <span className="span">Daily : 4.00 pm to 8.00 pm</span>
          </div> */}
          <a href="tel: +1 510-894-1894" className="topbar-item link">
            <div className="icon">
              <ion-icon name="call-outline" aria-hidden="true" />
            </div>
            <span className="span">+1 510-894-1894</span>
          </a>
          <div className="separator" />
          <a href="mailto:ephesonbeyene@gmail.com" className="topbar-item link">
            <div className="icon">
              <ion-icon name="mail-outline" aria-hidden="true" />
            </div>
            <span className="span">ephieethiopiankitchen@gmail.com</span>
          </a>
          <div className="separator" />
          <a href="https://www.doordash.com/store/ephie's-ethiopian-kitchen-(mowry-ave)-fremont-1187321/" className="topbar-item link">
            <div className="icon">
              <ion-icon name="bicycle-outline" aria-hidden="true" />
            </div>
            <span className="span">DOORDASH</span>
          </a>
          <div className="separator" />
          <a href="https://www.ubereats.com/store/ephie-ethiopian-kitchen/90iRW742QPqH9tf3r3GIuw" className="topbar-item link">
            <div className="icon">
              <ion-icon name="bicycle-outline" aria-hidden="true" />
            </div>
            <span className="span">UberEats</span>
          </a>
          <div className="separator" />
          <a href="https://www.grubhub.com/restaurant/ephie-ethiopian-kitchen-488-mowry-ave-fremont/2377689/" className="topbar-item link">
            <div className="icon">
              <ion-icon name="bicycle-outline" aria-hidden="true" />
            </div>
            <span className="span">GrubHub</span>
          </a>
        </div>
         
      </div>
    )
}