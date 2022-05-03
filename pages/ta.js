import { useEffect } from "react"
import Head from "next/head"
export default function Ta() {

    useEffect(() => {
        const markets = ['FX:GBPUSD', 'FX:USDJPY', 'FX:AUDUSD', 'FX:EURUSD', 'FX:GBPJPY', 'FX:USDCAD', 'FX:EURJPY', 'FX:NZDUSD', 'FX:CADJPY', 'FX:GBPCHF']
        const nodeList = []
        for (let market of markets) {
            const root = document.createElement('div')
            root.className = 'w3-half'
            root.id = market
            const div = document.createElement('div')
            div.className = 'tradingview-widget-container';
            div.innerHTML = '<div class="tradingview-widget-container__widget"></div>'
            const script = document.createElement('script');
            script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js'
            script.async = true;
            const height = navigator.userAgentData.mobile ? '250':'450'
            script.innerText = `{ "interval": "1m", "width": "100%", "isTransparent": false, "height": ${height}, "symbol": "${market}", "showIntervalTabs": true, "locale": "en", "colorTheme": "light" }`
            div.appendChild(script)
            root.appendChild(div)
            nodeList.push(root)
        }
        const list = []
        for(let i = 0;i<10;i+=2){
            list.push(nodeList.slice(i,i+2))
        }
        for(let li of list) {
            const div = document.createElement('div')
            div.className = "w3-row"
            for(let l of li) {
               div.appendChild(l)
            }
            document.getElementById('root').appendChild(div)
        }
    }, [])
    return (
        <>
            <Head>
                <title>Technical Analysis</title>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
            </Head>
            <div id="root" className="w3-content w3-section"></div>

        </>
    )
}