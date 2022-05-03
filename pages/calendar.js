import Image from "next/image"
import { useEffect } from "react"
export default function Calendar() {
    useEffect(()=>{
        const script = document.createElement('script')
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-events.js'
        script.async = true
        const height = navigator.userAgentData.mobile ? '300':'610'
        script.innerText = `{ "width": "100%", "height": ${height}, "colorTheme": "light","locale": "en", "importanceFilter": "-1,0,1", "currencyFilter": "USD,AUD,BEF,CAD,EUR,DEM,HKD,NZD,JPY,GBP,CHF,SGD" }`
        document.getElementById('calendar').appendChild(script)
    },[])
    return (
        <div className="w3-content w3-section">
            <div className="tradingview-widget-container" id="calendar">
                <div className="tradingview-widget-container__widget"></div>
                <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/markets/currencies/economic-calendar/"><span className="blue-text">Economic Calendar</span></a> by TradingView</div>
            </div>
        </div>
    )
}