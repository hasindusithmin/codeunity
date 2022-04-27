
export default function GetInfo(){
    const root = document.getElementById('panel');
    const currencies = ['eurusd', 'gbpusd', 'audusd', 'nzdusd', 'eurjpy', 'gbpjpy', 'eurgbp', 'eurcad', 'eursek', 'eurchf', 'eurhuf', 'eurjpy', 'usdcny', 'usdhkd', 'usdsgd', 'usdinr', 'usdmxn', 'usdphp', 'usdidr', 'usdthb', 'usdmyr', 'usdzar', 'usdrub']
    if (!root.hasChildNodes()) {
        const select = document.createElement('select');
        select.className = 'w3-input w3-round';
        select.id = 'select_getinfo';
        for (let currency of currencies) {
            const opt = document.createElement('option');
            opt.value = currency;
            opt.innerHTML = currency.toUpperCase();
            select.appendChild(opt);
        }
        root.appendChild(select);
        const submit = document.createElement('button');
        submit.innerHTML = 'GetInfo';
        submit.className = "w3-btn w3-block";
        submit.onclick = async()=>{
            submit.innerHTML = 'GetInfo&nbsp;<i class="fa fa-spinner w3-spin"></i>';
            const currency_pair = document.getElementById('select_getinfo').value.trim();
            const res = await fetch(`https://forex-codeunity.herokuapp.com/yahoo/info/${currency_pair}`)
            if (res.status === 200) {
                submit.innerHTML = 'GetInfo';
                if (document.getElementById('tbl')) {
                    document.getElementById('tbl').remove();
                }
                const data = await res.json();
                console.log("#####fetched#####");
                const table = document.createElement('table');
                table.className = 'w3-table-all w3-striped';
                table.id = 'tbl';
                for (let [key,value] of Object.entries(data)) {
                    if (value !== null) {
                        const tr = document.createElement('tr');
                        const k =  document.createElement('td');
                        k.innerHTML = key;
                        tr.appendChild(k);
                        const v = document.createElement('td');
                        v.innerHTML = value;
                        tr.appendChild(v);
                        table.appendChild(tr);
                    }
                }
                root.appendChild(table);
            }
        }
        root.appendChild(submit);
    }
    
}