document.querySelector('form').addEventListener('submit', () => {
    event.preventDefault();

    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value);

    document.querySelector('#link-input').value = encrypted;
})