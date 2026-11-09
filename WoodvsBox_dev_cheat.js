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
    gui.style.position = 'fixed';
    gui.style.top = '10px';
    gui.style.left = '10px';
    gui.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
    gui.style.color = 'white';
    gui.style.padding = '10px';
    gui.style.zIndex = '1000';
    gui.style.borderRadius = '5px';
    gui.style.fontFamily = 'Arial, sans-serif';
    gui.innerHTML = `
        <h3>WoodvsBox Hacks</h3>
        <button id="devMode">Modo Desarrollador</button><br><br>
        <button id="speedBoost">Speed Boost</button><br><br>
        <button id="characterChanger">Change Character</button><br><br>
        <input type="text" id="nameChanger" placeholder="Enter New Name"><br><br>
        <button id="applyNameChange">Change Name</button><br><br>
        <input type="text" id="audioURL" placeholder="Enter YouTube Audio URL"><br><br>
        <button id="applyAudioChange">Change Audio</button><br><br>
    `;
    document.body.appendChild(hacks_gui);
