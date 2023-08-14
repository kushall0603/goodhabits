function displayHabit(habit) {
    var info;

    switch (habit) {
        case 'brushing':
            info = "Brushing your teeth twice a day keeps them healthy and strong!";
            break;
        case 'washing':
            info = "Washing your hands often helps to keep germs away!";
            break;
        case 'sleeping':
            info = "Sleeping early helps you stay fresh and energetic!";
            break;
    }

    document.getElementById('habit-info').innerHTML = `<h2>${info}</h2>`;
}
