$(document).ready(function () {
    //Les dejo 3 funciones "traducidas" de JS Vanilla a JQuery. 
    
        $('.card-number-input').on('input', () => {
            $('.card-number-box').text($('.card-number-input').val());
        })
    
        $('.card-holder-input').on('input', () => {
            $('.card-holder-name').text($('.card-holder-input').val());
        })
    
        $('.cvv-input').on('mouseenter', () => {
            $('.front').css({
                'transform': 'perspective(1000px) rotateY(-180deg)'
            });
            $('.back').css({
                'transform': 'perspective(1000px) rotateY(0)'
            });
    
        })
       
        document.querySelector('.month-input').oninput = () => {
            document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
        }
    
        document.querySelector('.year-input').oninput = () => {
            document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
        }
    
        document.querySelector('.cvv-input').onmouseleave = () => {
            document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
            document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
        }
    
        document.querySelector('.cvv-input').oninput = () => {
            document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
        }
    })