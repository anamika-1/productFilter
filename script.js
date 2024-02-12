document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            const filterValue = this.id;
            const products = document.querySelectorAll('.card');

            products.forEach(function(product) {
                product.style.display = 'none';
            });

            if (filterValue === 'all') {
                const smartPhones = document.querySelectorAll('.card');
                smartPhones.forEach(function(products) {
                    products.style.display = 'flex';
                });
            }

            else if (filterValue === 'smartPhone') {
                const smartPhones = document.querySelectorAll('.smartphone');
                smartPhones.forEach(function(smartPhone) {
                    smartPhone.style.display = 'flex';
                });
            } else if (filterValue === 'lapTop') {
                const laptops = document.querySelectorAll('.laptop');
                laptops.forEach(function(laptop) {
                    laptop.style.display = 'flex';
                });
            } else if (filterValue === 'earPhone') {
                const earphones = document.querySelectorAll('.earphone');
                earphones.forEach(function(earphone) {
                    earphone.style.display = 'flex';
                });
            }
        });
    });
});
