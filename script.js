function changeMessage() {
    const name = prompt("�C�mo te llamas, amor?");
    if (name) {
        document.getElementById("nombre").innerText = name;
        alert("Tu nombre es tan hermoso como t�, " + name + "!");
    }
}
