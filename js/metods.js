user={name:"",age:""},user.name=prompt(""," Ваше имя ?"),user.age=prompt(""," Сколько вам лет ?"),console.log(user);for(var r=[],o=0;o<5;o++)r[o]=prompt("Введите любое имя",+o);console.log(r.reverse());for(r=[],o=0;o<5;)r[o]=prompt("Введите любое имя",+o),o++;console.log(r.reverse());var e={},p=prompt("Введите количество пробуктов в магазине: ");e.name=prompt("Введите имя магазина: "),e.products=[];for(o=0;o<p;o++)e.products[o]={},e.products[o].name=prompt("Введите название продукта "),e.products[o].price=Number(prompt("Введите цену"));