function calculateBMI() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const bmi = weight / ((height/100) * (height/100));
    const result = document.getElementById("result");
    const category = document.getElementById("category");

    result.value = bmi.toFixed(2);

    if(bmi < 18.5) {
        category.value = 'You are Underweight';
    } else if(18.5<=bmi&&bmi<=24.9) {
        category.value = 'You are Normal Weight';
    } else if(25<=bmi&&bmi<=29.9) {
        category.value = 'You are Overweight';
    } else if(30<=bmi) {
        category.value = 'You are Obesity';
    }
}