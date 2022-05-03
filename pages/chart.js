
import Image from "next/image"
import { useEffect } from "react"
export default function Chart() {
    useEffect(() => {
        const script1 = document.createElement('script');
        script1.src = 'https://s3.tradingview.com/tv.js'
        document.body.appendChild(script1)
        setTimeout(() => {
            const script2 = document.createElement('script');
            script2.innerText = 'new TradingView.widget( { "width": 960, "height": 610, "symbol": "FX:EURUSD", "interval": "D", "timezone": "Asia/Kolkata", "theme": "light", "style": "1", "locale": "en", "toolbar_bg": "#f1f3f6", "enable_publishing": false, "allow_symbol_change": true, "container_id": "tradingview_b9b10" })'
            document.getElementById('root').appendChild(script2)
        }, 1000)
    }, [])
    return (
        <div className="w3-content w3-section">
            <div className="tradingview-widget-container w3-margin-top" id="root">
                <div id="tradingview_b9b10"></div>
                <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/EURUSD/?exchange=FX"><span className="blue-text">EURUSD Chart</span></a> by TradingView</div>
            </div>
        </div>
    )
}