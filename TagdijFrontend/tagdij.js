//oldal betöltésekor a képsőbb betöltődő képek helyét már mutatja
document.addEventListener('DOMContentLoaded', function () {
    const insertButton = document.getElementById('create');
    const readButton = document.getElementById('read');
    const updateButton = document.getElementById('update');
    const deleteButton = document.getElementById('delete');
    insertButton.addEventListener('click', async function () {
        let baseUrl = "http://localhost/Tagdij_front_backend/TagdijBackend/index.php?ugyfel";
        let dataJSON = {
            "nev": document.getElementById('nev').value,
            "irszam": document.getElementById('irszam').value,
            "orsz": document.getElementById('orsz').value,
            "szulev": document.getElementById('szulev').value
        };
        let options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(dataJSON)
        };
        let response = await fetch(baseUrl, options);
        let data = await response.json();
        console.log(data);
    })
});