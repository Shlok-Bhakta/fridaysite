function checkIfFriday() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const answerElement = document.getElementById('answer');
    
    if (dayOfWeek === 5) {
        answerElement.textContent = 'YES! 🎉';
        answerElement.className = 'answer friday';
    } else {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        answerElement.textContent = `No, it's ${daysOfWeek[dayOfWeek]} 😔`;
        answerElement.className = 'answer not-friday';
    }
}

checkIfFriday();

setInterval(checkIfFriday, 60000);
