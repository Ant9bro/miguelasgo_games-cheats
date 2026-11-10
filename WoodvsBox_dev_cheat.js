// Este hack es para darte modo desarrollador sin tener que poner el código.

// Forma corta (copiar y pegar en la consola, tal como se explica en el README)
dev=true;lobby();$('#dt').classList.add('on');$('#code').value=''


// Forma larga abajo (ignorar si eres un usuario normal)

// Crear la función para poder ejecutarlo más fácil
function enabledev(){dev=true;lobby();$('#dt').classList.add('on');$('#code').value=''}
// Ejecutar la función
enabledev()

// Forma con interfaz gráfica (en pruebas)
    const hacks_gui = document.createElement('div');
    hacks_gui.style.position = 'fixed';
    hacks_gui.style.top = '10px';
    hacks_gui.style.left = '10px';
    hacks_gui.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
    hacks_gui.style.color = 'white';
    hacks_gui.style.padding = '10px';
    hacks_gui.style.zIndex = '1000';
    hacks_gui.style.borderRadius = '5px';
    hacks_gui.style.fontFamily = 'Arial, sans-serif';
    hacks_gui.innerHTML = `
        <h3>WoodvsBox Hacks</h3>
        <button onclick="enabledev()" id="devMode">Activar Modo Desarrollador</button><br><br>
        <button onclick="disabledev()" id="disableDevMode">Desactivar Modo Desarrollador</button><br><br>
        <button onclick="coinshack()" id="coinsHack">Dar Monedas</button><br><br>
        <input type="text" id="coinsValue" placeholder="Monedas"><br><br>
        <button id="applyNameChange">Change Name</button><br><br>
        <input type="text" id="audioURL" placeholder="Enter YouTube Audio URL"><br><br>
        <button id="applyAudioChange">Change Audio</button><br><br>
    `;
    document.body.appendChild(hacks_gui);

    // Crear funciones de los hacks
    function enabledev(){dev=true;lobby()}
    function disabledev(){dev=false;lobby()}
    function coinshack(){
        const coinsValue = document.getElementById('coinsValue').value
        D.coins+=coinsValue;save();chk()}
