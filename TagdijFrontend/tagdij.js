//oldal betöltésekor a képsőbb betöltődő képek helyét már mutatja
document.addEventListener('DOMContentLoaded', function () {
    const insertButton = document.getElementById('create');
    const readButton = document.getElementById('read');
    const updateButton = document.getElementById('update');
    const deleteButton = document.getElementById('delete');

    insertButton.addEventListener('click', function () {
        const formm = new FormData(document.getElementById('formm'));
        let baseUrl = "http://localhost/Tagdij_front_backend/TagdijBackend/index.php?ugyfel";
        let options = {
            method: 'POST',
            mode: "cors",
            headers: {
            },
            body: formm
        };
        let response = fetch(baseUrl, options);
        alert("Sikeres feltöltés");
    })

});