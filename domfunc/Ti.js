
export default function Ti(){
    const panel = document.getElementById('panel');
    panel.innerHTML = null;
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
    submit.innerHTML = 'Technical Indicators';
    submit.className = "w3-btn w3-block";
    submit.onclick = async()=>{ 
        if (document.getElementById('tbl')) document.getElementById('tbl').remove();
        submit.innerHTML = 'Technical Indicators&nbsp;<i class="fa fa-spinner w3-spin"></i>';
        const currency_pair = document.getElementById('select_currency').value.trim();
        const timeframe = document.getElementById('select_timeframe').value.trim();
        const res = await fetch(`https://forex-codeunity.herokuapp.com/invest/technical_indicators/${currency_pair}?timeframe=${timeframe}`)
        if (res.status === 200) {
            submit.innerHTML = 'Technical Indicators';
            const data = await res.json();
            const table = document.createElement('table');
            table.id = 'tbl';
            table.className = 'w3-table-all w3-striped';
            const thead =  document.createElement('tr');
            thead.innerHTML = '<th>indicator</th><th>value</th><th>signal</th>';
            table.appendChild(thead);
            for(let dt of data) {
                const {technical_indicator,value,signal} = dt;
                const tr = document.createElement('tr');
                tr.innerHTML = `<td>${technical_indicator}</td><td>${value}</td><td>${signal}</td>`;
                table.appendChild(tr);
            }
            panel.appendChild(table);
        }
    }
    panel.appendChild(submit);


}