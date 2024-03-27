document.addEventListener("DOMContentLoaded", function() {
    var Btn1 = document.querySelector('.btn-detektif1');
    var Btn2 = document.querySelector('.btn-detektif2');
    var detektifContainer = document.querySelector('.index1');
    var teknisiContainer = document.querySelector('.index2');
    var mahasiswaContainer = document.querySelector('.index3');
    
    Btn1.addEventListener('click', function() {
        detektifContainer.style.display = 'none';
        teknisiContainer.style.display = 'block';
        mahasiswaContainer.style.display = 'none';
    });
    
    Btn2.addEventListener('click', function() {
        detektifContainer.style.display = 'none';
        teknisiContainer.style.display = 'none';
        mahasiswaContainer.style.display = 'block';
    });
});
