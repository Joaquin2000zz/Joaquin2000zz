document.addEventListener('DOMContentLoaded', () => {
    const age_elem = document.getElementById('age');
    const birth_year = 2000;
    const birth_month = 1;
    const birth_day = 19;
    const current_year = new Date().getFullYear();
    const current_month = new Date().getMonth() + 1;
    const current_day = new Date().getDate();
    let age = 0;
    if (current_month < birth_month) {
      age = current_year - birth_year - 1; 
    } else if (birth_month == current_month) {
      age = current_day < birth_day ? current_year - birth_year - 1 : current_year - birth_year; 
    } else {
      age = current_year - birth_year
    }
    const age_text = document.createTextNode(String(age));
     age_elem.appendChild(age_text);
})