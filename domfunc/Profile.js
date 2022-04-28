


export default async function Profile({id,email}){
    const panel = document.getElementById('panel');
    panel.innerHTML = null;
    const res = await fetch(`https://data.mongodb-api.com/app/application-0-nfogs/endpoint/getuser?user_id=${id}`)
    if (res.status === 200) {
        const data = await res.json();
        if (data !== null) {
            const table = document.createElement('table');
            table.className = 'w3-table w3-table-all w3-striped';
            for (let [key,value] of Object.entries(data)) {
                if (key != '_id' && key != 'user_id') {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `<th>${key}</th><td>${value}</td>`
                    table.appendChild(tr);
                }
            }
            const tr = document.createElement('tr');
            tr.innerHTML = `<th>email</th><td>${email}</td>`
            table.appendChild(tr);
            panel.appendChild(table);
        }
    }
}