// Tom array for billet liste
let billettListe = [];

// Funksjon for å legge til billetter
function addBillett() {
    if (checkInput()) {
        let billett = {
            film: document.getElementById('filmNames').value,
            antall: document.getElementById('antall').value,
            fornavn: document.getElementById('fornavn').value,
            etternavn: document.getElementById('etternavn').value,
            telefonnr: document.getElementById('telefonnr').value,
            epost: document.getElementById('epost').value
        };
        billettListe.push(billett);
        listBilletter();
        resetForm();
    }
}

// Input valideringer
function checkInput() {
    let isValid = true;


    // validering for filmutvalg
    let film = document.getElementById("filmNames").value;
    let filmAdv = document.getElementById("filmAdv");
    if (film === "") {
        filmAdv.innerText = "Vennligst velg en film";
        filmAdv.style.display = "inline-block";
        isValid = false;
    } else {
        filmAdv.style.display = "none";
    }


    // Antall validation
    let antall = document.getElementById('antall').value;
    let antallAdv = document.getElementById("antallAdv");
    if (parseInt(antall) < 1 || isNaN(parseInt(antall))) {
        antallAdv.innerText = "Må skrive noe inn i antall";
        antallAdv.style.display = "inline-block"; // vis feilmelding
        isValid = false;
    } else {
        antallAdv.style.display = "none"; // skjul feilmelding
    }

    // Fornavn validation
    let fornavn = document.getElementById("fornavn").value;
    let fornavnAdv = document.getElementById("fornavnAdv");
    if (!/^[a-zA-ZæøåÆØÅ\s]+$/.test(fornavn) || fornavn.length < 2) {
        fornavnAdv.innerText = "Må skrive noe inn i fornavnet";
        fornavnAdv.style.display = "inline-block";
        isValid = false;
    } else {
        fornavnAdv.style.display = "none";
    }

    // Etternavn validation
    let etternavn = document.getElementById("etternavn").value;
    let etternavnAdv = document.getElementById("etternavnAdv");
    if (!/^[a-zA-ZæøåÆØÅ\s]+$/.test(etternavn) || etternavn.length < 2) {
        etternavnAdv.innerText = "Må skrive noe inn i etternavnet";
        etternavnAdv.style.display = "inline-block";
        isValid = false;
    } else {
        etternavnAdv.style.display = "none";
    }

    // Telefonnr validation
    let telefonnr = document.getElementById("telefonnr").value;
    let telAdv = document.getElementById("telAdv");

    if (!/^\d{8}$/.test(telefonnr)) {
        telAdv.innerText = "Vennligst skriv inn i gyldig telefonnummer med 8 siffer";  // Telefonnumre i Norge består av 8 sifre.

        telAdv.style.display = "inline-block"; // Vis feilmelding
        isValid = false;
    } else {
        telAdv.style.display = "none"; // Skjul feilmelding
    }


    // Epost validation
    let epost = document.getElementById("epost").value;
    let epostAdv = document.getElementById("epostAdv");
// regex for e post validering
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(epost)) {
        epostAdv.innerText = "Vennligst skriv inn gyldig epost som feks.(bruker@gmail.no)";
        epostAdv.style.display = "inline-block"; // Vis feilmelding
        isValid = false;
    } else {
        epostAdv.style.display = "none"; // Skjul feilmelding
    }

    return isValid;

}


// Funksjon for tilbakestilling av skjema
function resetForm() {
    document.getElementById('billettForm').reset();
    // Skjul alle advarselsmeldinger
    let warnings = document.querySelectorAll('.validation-error');
    warnings.forEach(function(warning) {
        warning.style.display = 'none';
    });
}

// Funksjon for å oppdatere og vise billettliste
function listBilletter() {
    let alleBilletterDiv = document.getElementById('alleBilletter');
    alleBilletterDiv.innerHTML = ''; // Slett gjeldende liste
    billettListe.forEach(function(billett) {
        alleBilletterDiv.innerHTML += `<p>${billett.film} ${billett.antall} ${billett.fornavn} ${billett.etternavn} ${billett.telefonnr} ${billett.epost}</p>`;
    });
}

// Funksjon for å slette alle billetter
function slettAlleBilletter() {
    billettListe = [];
    listBilletter();
}
