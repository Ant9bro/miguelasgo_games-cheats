// Este hack está EN PRUEBAS
// Forma con interfaz gráfica (copiar TODO y pegar en la consola, tal como se explica en el README). 
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
        <h3>BlackHole Hacks</h3>
        <h4>por Ant9bro (GitHub)</h4>
        <button onclick="enabledev()" id="devMode">Activar Modo Desarrollador</button><br><br>
        <button onclick="disabledev()" id="disableDevMode">Desactivar Modo Desarrollador</button><br><br>
        <button onclick="materiahack()" id="coinsHack">Dar Materia</button><br><br>
        <input type="text" id="materiaValue" placeholder="Materia por añadir"><br><br>
        <button onclick="materiachange()" id="applyCoinsChange">Cambiar materia</button><br><br>
        <input type="text" id="materiaNumber" placeholder="Materia para cambiar"><br><br>
        <button onclick="setammo()" id="addAmmo">Cambiar munición</button><br><br>
        <input type="text" id="abcNumber" placeholder="Munición para cambiar"><br><br>
    `;
    document.body.appendChild(hacks_gui);

    // Crear funciones de los hacks (esto también hay que copiarlo junto con la interfaz gráfica, si no solo tendrás unos botones que no sirven para nada)
    function materiahack(){
        const materiaValue = document.getElementById('materiaValue').value
        game.materia=Number(game.materia)+Number(materiaValue)}

    function materiachange(){
        const materiaNumber = document.getElementById('materiaNumber').value
        game.materia = materiaNumber}
