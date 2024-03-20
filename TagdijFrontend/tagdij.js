//oldal betöltésekor a képsőbb betöltődő képek helyét már mutatja
document.addEventListener('DOMContentLoaded', function () {
    const insertButton = document.getElementById('create');
    const readButton = document.getElementById('read');
    const updateButton = document.getElementById('update');
    const deleteButton = document.getElementById('delete');

    insertButton.addEventListener('click', async function () {
        const formm = new FormData(document.getElementById('formm'));
        let baseUrl = "http://localhost/Tagdij_front_backend/TagdijBackend/index.php?ugyfel";
        let options = {
            method: 'POST',
            mode: "cors",
            body: formm
        };
        let response = await fetch(baseUrl, options);
        alert("Sikeres feltöltés");
    });

    readButton.addEventListener('click', async function () {
        let baseUrl = "http://localhost/Tagdij_front_backend/TagdijBackend/index.php?ugyfel";
        let options = {
            method: 'GET',
            mode: "cors",   
        };
        let response = await fetch(baseUrl, options);
        if (response.ok) {
            let data = await response.json();
            console.log(data);
        } else {
            console.error('Hiba a szerver válaszában');
        };
    });

    updateButton.addEventListener('click', async function () {
        let baseUrl = "http://localhost/Tagdij_front_backend/TagdijBackend/index.php?ugyfel";
        let options = {
            method: 'PUT',
            mode: "cors",   
        };
    });
});