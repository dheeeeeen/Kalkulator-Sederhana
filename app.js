document.getElementById("tombolSubmit").addEventListener('click', (e) => {
    e.preventDefault();
    const angkaPertama = Number(document.getElementById('angkaPertama').value);
    const operator = document.getElementById('operator').value;
    const angkaKedua = Number(document.getElementById('angkaKedua').value);  
    let hasil;  

    if (operator == '+'){
        hasil = angkaPertama + angkaKedua
    } else if (operator == '-'){
        hasil = angkaPertama - angkaKedua
    } else if (operator == '*'){
        hasil = angkaPertama * angkaKedua
    } else if (operator == '/'){
        hasil = angkaPertama / angkaKedua
    }

    const paragrafHasil = document.createElement('p');
    paragrafHasil.textContent = `Hasilnya adalah ${hasil}`;
    document.getElementById('hasilPerhitungan').textContent = '';
    document.getElementById('hasilPerhitungan').appendChild(paragrafHasil)
    } );