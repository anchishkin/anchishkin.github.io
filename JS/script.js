const url = "https://randomuser.me/api/";
fetch(url)
    .then(response => {
        // Проверяем, успешен ли ответ
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        return response.json(); // Парсим JSON из ответа
    })
    .then(data => {
        console.log("Полученные данные:", data); // Работаем с данными

        let emailField = document.getElementById('email'),
            username = document.getElementById('username'),
            password = document.getElementById('password'),
            city = document.getElementById('city'),
            img = document.getElementById('img');

        emailField.innerHTML = data.results[0].email;
        username.innerHTML = data.results[0].login.username;
        password.innerHTML = data.results[0].login.password;
        city.innerHTML = data.results[0].location.city;
        // newDiv.innerHTML = data.results[0].email;
        // document.body.appendChild(newDiv);

    })
    .catch(error => {
        console.error("Произошла ошибка:", error); // Обрабатываем ошибки
    });