//Csajbók-Reményi László SZOFT I/2/E 2023.03.04.

const tbody = document.querySelector("#tbody");
const lista = [
    { id: 1, name: "cassic", Kerek: 28, Hasznalat: "offroad", Ar: 557900 },
    { id: 2, name: "Alboin 900", Kerek: 28, Hasznalat: "trekking", Ar: 519900 },
    { id: 3, name: "Asgard", Kerek: 29, Hasznalat: "technikás utak", Ar: 519900 },
    { id: 4, name: "Ruga", Kerek: 29, Hasznalat: "hegyi", Ar: 372900 },
    { id: 5, name: "Reptila", Kerek: 28, Hasznalat: "városi", Ar: 308900 },
    { id: 6, name: "Sirmium", Kerek: 29, Hasznalat: "hegyi", Ar: 264900 }
];

function generateTable() {
    lista.forEach((adat) => {
        let tr = document.createElement('tr');
        let tdName = document.createElement('td');
        let tdKerek = document.createElement('td');
        let tdHasznalat = document.createElement('td');
        let tdAr = document.createElement('td');

        tdName.textContent = adat.name;
        tdKerek.textContent = adat.Kerek;
        tdHasznalat.textContent = adat.Hasznalat;
        tdAr.textContent = adat.Ar;

        tbody.append(tr);
        tr.append(tdName);
        tr.append(tdKerek);
        tr.append(tdHasznalat);
        tr.append(tdAr);
    });
}

generateTable();