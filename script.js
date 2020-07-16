document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const ru = document.getElementById('ru'),
        en = document.getElementById('en'),
        btn = document.getElementById('btn'),
        reset = document.getElementById('reset');
    reset.addEventListener('click', () => {
        ru.value = en.value = '';
    });

    btn.addEventListener('click', () => {
        let lang,
            text,
            outputField;
        if(ru.value && en.value){
            alert('Введите слово только в одно из полей');
            ru.value = en.value = '';
            return;
        } else if(!ru.value && !en.value){
            alert('Введите слово в одно из полей');
            ru.value = en.value = '';
            return;
        } else if(ru.value){
            lang = 'ru-en';
            text = ru.value;
            outputField = en;
        } else if(en.value){
            lang = 'en-ru';
            text = en.value;
            outputField = ru;
        }

        const key = 'trnsl.1.1.20190704T212630Z.c409bb9604ae7251.df09dbd89372575b02298ed0970f8e45c749648b',
        url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${key}&text=${text}&lang=${lang}`;

        const postData = (url) => {
            return fetch(url, {
                method: 'POST',
                headers: {
                'Content-Type': 'multipart/form-data',
                },
                mode: 'cors',
                cache: 'default',
                redirect: 'follow'
            });
        };

        postData(url)
            .then((response) => {
                if (response.status !== 200){
                    throw new Error('Status network not 200.');
                }
                return (response.json());
            })
            .then((data) => {
                outputField.value = data.text[0];
            })
            .catch((error) => console.error(error));

    });

});

