function changeMessage() {
    const name = prompt("¿Como te llamas, amor?");
    if (name) {
        document.getElementById("nombre").innerText = name;
        alert("Tu nombre es tan hermoso como tu, " + name + "!");
    }
}

