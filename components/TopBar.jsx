export default function TopBar() {
    return (
        <div className="topbar">
        <div className="container">
          <div className="separator" />
          <a href="mailto:ephesonbeyene@gmail.com" className="topbar-item link">
            <div className="icon">
              <ion-icon name="mail-outline" aria-hidden="true" />
            </div>
            <span className="span">ephieethiopiankitchen@gmail.com</span>
          </a>
          <div className="separator" />
          <a href="https://order.online/store/ephie's-ethiopian-kitchen-(mowry-ave)-fremont-1187321/?delivery=true&hideModal=true" target="_blank" className="topbar-item link" rel="noreferrer">
            <div className="icon">
              <ion-icon name="bicycle-outline" aria-hidden="true" />
            </div>
            <span className="span">DOORDASH</span>
          </a>
          <div className="separator" />
        </div>
         
      </div>
    )
}