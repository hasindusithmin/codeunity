

export default function Ma(){
    const panel = document.getElementById('panel');
    panel.innerHTML = null;
    panel.style.maxHeight = '700px';
    panel.style.overflow = 'scroll';
    const currencies = ['eurusd','usdjpy', 'gbpusd', 'audusd', 'nzdusd', 'eurjpy', 'gbpjpy', 'eurgbp', 'eurcad', 'eursek', 'eurchf', 'eurhuf', 'eurjpy', 'usdcny', 'usdhkd', 'usdsgd', 'usdinr', 'usdmxn', 'usdphp', 'usdidr', 'usdthb', 'usdmyr', 'usdzar', 'usdrub']
    const timeframes = ['5mins', '15mins', '30mins','lhour'];
    const select1 = document.createElement('select');
    select1.className = 'w3-input w3-round w3-half';
    select1.id = 'select_currency';
    for (let currency of currencies) {
        const opt = document.createElement('option');
        opt.value = currency;
        opt.innerHTML = currency.toUpperCase();
        select1.appendChild(opt);
    }
    const select2 = document.createElement('select');
    select2.className = 'w3-input w3-round w3-half';
    select2.id = 'select_timeframe';
    for (let timeframe of timeframes) {
        const opt = document.createElement('option');
        opt.value = timeframe;
        opt.innerHTML = timeframe;
        select2.appendChild(opt);
    }
    panel.appendChild(select1);
    panel.appendChild(select2);
    const submit = document.createElement('button');
    submit.innerHTML = 'Moving Avarage';
    submit.className = "w3-btn w3-block";
    submit.onclick = async()=>{ 
        if (document.getElementById('tbl')) document.getElementById('tbl').remove()
        submit.innerHTML = 'Moving Avarage&nbsp;<i class="fa fa-spinner w3-spin"></i>';
        const currency_pair = document.getElementById('select_currency').value.trim();
        const timeframe = document.getElementById('select_timeframe').value.trim();
        const res = await fetch(`https://forex-codeunity.herokuapp.com/invest/moving_averages/${currency_pair}?timeframe=${timeframe}`)
        if (res.status === 200) {
            submit.innerHTML = 'Moving Avarage';
            const data = await res.json();
            const table = document.createElement('table');
            table.id = 'tbl';
            table.className = 'w3-table-all w3-striped';
            const thead =  document.createElement('tr');
            thead.innerHTML = '<th>period</th><th>sma_value</th><th>sma_signal</th><th>ema_value</th><th>ema_signal</th>';
            table.appendChild(thead);
            for(let dt of data) {
                const {period,sma_value,sma_signal,ema_value,ema_signal} = dt;
                const tr = document.createElement('tr');
                tr.innerHTML = `<td>${period}</td><td>${sma_value}</td><td>${sma_signal}</td><td>${ema_value}</td><td>${ema_signal}</td>`;
                table.appendChild(tr);
            }
            panel.appendChild(table);
        }
    }
    panel.appendChild(submit);

}
