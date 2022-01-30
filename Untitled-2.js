const loginButton = document.getElementById('login')
const accountInput = document.getElementById('account')
const passwordInput = document.getElementById('password')
const resultOutput = document.getElementById('result')

function login() {
    resultOutput.style.color = '#00f'
    resultOutput.innerText = 'Login..'
    setTimeout(function() {
        const accountValue = accountInput.value
        passwordValue = passwordInput.value
        if (accountValue === 'GORDAN' &&
            passwordValue === '664089') {
            resultOutput.style.color = '#0f0'
            window.location.href = 'https://zxasqwedf.github.io/1/停服.html';
        } else
        if (accountValue === 'hoikahei' &&
            passwordValue === '070608') {
            resultOutput.style.color = '#0f0'
            window.location.href = 'https://zxasqwedf.github.io/1/hoikahei.html';
        } else
        if (accountValue === '7174007' &&
            passwordValue === '123ABCacb0') {
            resultOutput.style.color = '#0f0'
            window.location.href = 'https://zxasqwedf.github.io/1/停服.html';
        } else {
            resultOutput.style.color = '#f00'
            resultOutput.innerText = '帳號或密碼不正確'
        }
    }, 2000)
}
loginButton.addEventListener('click', login) // JavaScript Document