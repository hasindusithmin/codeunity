

export default async function Ec(){
    const panel = document.getElementById('panel');
    panel.innerHTML = null;
    const res = await fetch('https://forex-codeunity.herokuapp.com/invest/economic_calendar')
    if (res.status === 200) {
        const data = await res.json();
        const table = document.createElement('table');
        const thead = document.createElement('tr');
        thead.innerHTML = '<th>id</th> <th>date</th> <th>time</th> <th>zone</th> <th>currency</th> <th>importance</th> <th>event</th> <th>actual</th> <th>forecast</th> <th>previous</th> '
        table.appendChild(thead);
        table.className = 'w3-table-all w3-striped';
        for (let dt of data) {
            const {id,date,time,zone,currency,importance,event,actual,forecast,previous} = dt;
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${id}</td> <td>${date}</td> <td>${time}</td> <td>${zone}</td> <td>${currency}</td> <td>${importance}</td> <td class="w3-small">${event}</td> <td>${actual}</td> <td>${forecast}</td> <td>${previous}</td>`
            table.appendChild(tr)
        }
        panel.appendChild(table);
    }
    
}