
export default function Pivot(){
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
    submit.innerHTML = 'Pivot Point';
    submit.className = "w3-btn w3-block";
    submit.onclick = async()=>{ 
        if (document.getElementById('tbl')) document.getElementById('tbl').remove();
        submit.innerHTML = 'Pivot Point&nbsp;<i class="fa fa-spinner w3-spin"></i>';
        const currency_pair = document.getElementById('select_currency').value.trim();
        const timeframe = document.getElementById('select_timeframe').value.trim();
        const res = await fetch(`https://forex-codeunity.herokuapp.com/invest/pivot_points/${currency_pair}?timeframe=${timeframe}`)
        if (res.status === 200) {
            submit.innerHTML = 'Pivot Point';
            const data = await res.json();
            const table = document.createElement('table');
            table.id = 'tbl';
            table.className = 'w3-table-all w3-striped';
            const thead =  document.createElement('tr');
            thead.innerHTML = '<th>name</th><th>s3</th><th>s2</th><th>s1</th><th>**</th><th>r1</th><th>r2</th><th>r3</th>';
            table.appendChild(thead);
            for(let dt of data) {
                const {name,s3,s2,s1,pivot_points,r1,r2,r3} = dt;
                const tr = document.createElement('tr');
                tr.innerHTML = `<td>${name}</td><td>${s3}</td><td>${s2}</td><td>${s1}</td><td>${pivot_points}</td><td>${r1}</td><td>${r2}</td><td>${r3}</td>`;
                table.appendChild(tr);
            }
            panel.appendChild(table);
        }
    }
    panel.appendChild(submit);


}