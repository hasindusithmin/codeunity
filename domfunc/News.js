
export default function News(){
    const panel = document.getElementById('panel');
    panel.innerHTML = null;
    panel.style.maxHeight = '700px';
    panel.style.overflow = 'scroll';
    const currencies = ['eurusd','usdjpy', 'gbpusd', 'audusd', 'nzdusd', 'eurjpy', 'gbpjpy', 'eurgbp', 'eurcad', 'eursek', 'eurchf', 'eurhuf', 'eurjpy', 'usdcny', 'usdhkd', 'usdsgd', 'usdinr', 'usdmxn', 'usdphp', 'usdidr', 'usdthb', 'usdmyr', 'usdzar', 'usdrub']
    const select = document.createElement('select');
    select.className = 'w3-input w3-round';
    select.id = 'select_getinfo';
    for (let currency of currencies) {
        const opt = document.createElement('option');
        opt.value = currency;
        opt.innerHTML = currency.toUpperCase();
        select.appendChild(opt);
    }
    panel.appendChild(select);
    const submit = document.createElement('button');
    submit.innerHTML = 'GetNews';
    submit.className = "w3-btn w3-block";
    submit.onclick = async()=>{
        const widgets = document.querySelectorAll('div [title=widget]');
        if (widgets) for (let widget of widgets) widget.remove();
        submit.innerHTML = 'GetNews&nbsp;<i class="fa fa-spinner w3-spin"></i>';
        const currency_pair = document.getElementById('select_getinfo').value.trim();
        const res = await fetch(`https://forex-codeunity.herokuapp.com/yahoo/news/${currency_pair}`)
        if (res.status === 200) {
            submit.innerHTML = 'GetNews';
            const data = await res.json();
            for (let dt of data) {
                const {type,publisher,providerPublishTime,title,link} = dt;
                const div = document.createElement('div');
                div.className = 'w3-card-4 test w3-margin-top';
                div.title = 'widget';
                const txt = `<header class="w3-container w3-light-grey">
                  <h3 class="w3-wide">${type}&nbsp;&nbsp;<span class="w3-tag w3-small">${currency_pair}</span></h3>
                </header>
                <div class="w3-container">
                  <p><b>${publisher}</b> <span class="w3-tag w3-round w3-grey w3-border w3-border-white">${new Date(providerPublishTime).toLocaleString()}</span></p>
                  <hr>
                  <div>
                  <img src="/news.png" alt="news" class="w3-circle w3-image" style="width:60px">
                  <span class="w3-center">${title}.</span>
                  </div>
                  <br>
                </div>
                <a class="w3-button w3-block w3-dark-grey" href="${link}" target="_blank">+ Link</a>`
                div.innerHTML = txt;
                panel.appendChild(div)
            }
        }
    }
    panel.appendChild(submit);
}