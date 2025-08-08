function changeMessage() {
    const name = prompt("¿Cómo te llamas, amor?");
    if (name) {
        document.getElementById("nombre").innerText = name;
        alert("Tu nombre es tan hermoso como tú, " + name + "!");
    }
}
