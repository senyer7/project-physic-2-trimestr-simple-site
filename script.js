// КИНЕМАТИКА: Равноускоренное движение
function solveKinematics() {
    const v0 = parseFloat(document.getElementById('v0').value);
    const a = parseFloat(document.getElementById('a').value);
    const t = parseFloat(document.getElementById('t').value);

    // Проверка корректности входных данных
    if (isNaN(v0) || isNaN(a) || isNaN(t) || t <= 0) {
        alert('Пожалуйста, введите корректные значения. Время должно быть > 0');
        return;
    }

    // Формула: s = v0*t + (a*t²)/2
    const s = v0 * t + (a * t * t) / 2;
    
    // Формула: v = v0 + a*t
    const v = v0 + a * t;
    
    // Средняя скорость: v_avg = (v0 + v)/2
    const vAvg = (v0 + v) / 2;

    // Вывод результатов с 2 знаками после запятой
    document.getElementById('resultS').textContent = s.toFixed(2) + ' м';
    document.getElementById('resultV').textContent = v.toFixed(2) + ' м/с';
    document.getElementById('resultVavg').textContent = vAvg.toFixed(2) + ' м/с';

    // Показываем блок результатов
    document.getElementById('kinematicsResults').classList.add('show');
}

function clearKinematics() {
    document.getElementById('v0').value = '0';
    document.getElementById('a').value = '2';
    document.getElementById('t').value = '5';
    document.getElementById('kinematicsResults').classList.remove('show');
}

// ДИНАМИКА: Второй закон Ньютона
function solveDynamics() {
    const m = parseFloat(document.getElementById('m').value);
    const f = parseFloat(document.getElementById('f').value);
    const friction = parseFloat(document.getElementById('friction').value);
    const g = parseFloat(document.getElementById('g').value);

    // Проверка корректности входных данных
    if (isNaN(m) || isNaN(f) || isNaN(friction) || isNaN(g) || m <= 0) {
        alert('Пожалуйста, введите корректные значения. Масса должна быть > 0');
        return;
    }

    // Вес: P = m*g
    const p = m * g;
    
    // Результирующая сила: F_net = F - f
    const fNet = f - friction;
    
    // Ускорение: a = F_net / m
    const a = fNet / m;

    // Вывод результатов
    document.getElementById('resultP').textContent = p.toFixed(2) + ' Н';
    document.getElementById('resultFnet').textContent = fNet.toFixed(2) + ' Н';
    document.getElementById('resultA').textContent = a.toFixed(2) + ' м/с²';

    // Показываем блок результатов
    document.getElementById('dynamicsResults').classList.add('show');
}

function clearDynamics() {
    document.getElementById('m').value = '10';
    document.getElementById('f').value = '50';
    document.getElementById('friction').value = '10';
    document.getElementById('g').value = '9.8';
    document.getElementById('dynamicsResults').classList.remove('show');
}

// ЭНЕРГИЯ: Кинетическая и потенциальная энергия
function solveEnergy() {
    const m = parseFloat(document.getElementById('m2').value);
    const v = parseFloat(document.getElementById('v2').value);
    const h = parseFloat(document.getElementById('h').value);
    const g = parseFloat(document.getElementById('g2').value);

    // Проверка корректности входных данных
    if (isNaN(m) || isNaN(v) || isNaN(h) || isNaN(g) || m <= 0) {
        alert('Пожалуйста, введите корректные значения. Масса должна быть > 0');
        return;
    }

    // Кинетическая энергия: E_k = (m*v²)/2
    const ek = (m * v * v) / 2;
    
    // Потенциальная энергия: E_p = m*g*h
    const ep = m * g * h;
    
    // Полная механическая энергия: E_total = E_k + E_p
    const eTotal = ek + ep;

    // Вывод результатов
    document.getElementById('resultEk').textContent = ek.toFixed(2) + ' Дж';
    document.getElementById('resultEp').textContent = ep.toFixed(2) + ' Дж';
    document.getElementById('resultEtotal').textContent = eTotal.toFixed(2) + ' Дж';

    // Показываем блок результатов
    document.getElementById('energyResults').classList.add('show');
}

function clearEnergy() {
    document.getElementById('m2').value = '5';
    document.getElementById('v2').value = '10';
    document.getElementById('h').value = '20';
    document.getElementById('g2').value = '9.8';
    document.getElementById('energyResults').classList.remove('show');
}

// Переключение вкладок
function switchTab(tabName) {
    // Скрыть все вкладки
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Убрать активный класс со всех кнопок
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Показать выбранную вкладку
    document.getElementById(tabName).classList.add('active');

    // Добавить активный класс на нажатую кнопку
    event.target.classList.add('active');
}