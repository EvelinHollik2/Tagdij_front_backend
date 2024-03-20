//oldal betöltésekor a képsőbb betöltődő képek helyét már mutatja
document.addEventListener('DOMContentLoaded', function () {
    const insertButton = document.getElementById('create');
    const readButton = document.getElementById('read');
    const updateButton = document.getElementById('update');
    const deleteButton = document.getElementById('delete');
    const dolgozoForm = document.getElementById('dolgozoForm');
    const dolgozolista = document.getElementById('dolgozolista');
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
        dolgozoForm.classList.add('d-none');
        dolgozoForm.classList.remove('d-none');
        let baseUrl = "http://localhost/Tagdij_front_backend/TagdijBackend/index.php?ugyfel";
        let options = {
            method: 'GET',
            mode: "cors",
        };
        let response = await fetch(baseUrl, options);
        if (response.ok) {
            let data = await response.json();
            dolgozokListazasa(data);
        } else {
            console.error('Hiba a szerver válaszában');
        };
    });

    function dolgozokListazasa(dolgozok) {
        let dolgozokDiv = document.getElementById('ugyfellista');
        let tablazat = dolgozoFejles();
        for (let dolgozo of dolgozok) {
            tablazat += dolgozoSor(dolgozo);

        }
        dolgozokDiv.innerHTML = tablazat + '</tbody></table>';
    }
    function dolgozoSor(dolgozo) {
        let sor = `<tr>
        <td>${dolgozo.azon}</td>
        <td>${dolgozo.nev}</td>
        <td>${dolgozo.szulev}</td>
        <td>${dolgozo.irszam}</td>
        <td>${dolgozo.orsz}</td>
        <td><button type="button" class="btn btn-outline-secondary" onclick="adatBetoltes(${dolgozo.azon})"><i class="fa-regular fa-hand-point-left"></i></button></td>
    </tr>`;
    return sor;
    }


    function dolgozoFejles() {
        let fejlec = `<table class="table table-sprited">
        <thead>
            <tr>
                <th>Azonosító</th>
                <th>Név</th>
                <th>Születési év</th>
                <th>Irányítószám</th>
                <th>Ország</th>
                <th>Művelet</th>
            </tr>
        </thead>
        <tbody>`;
    }

});