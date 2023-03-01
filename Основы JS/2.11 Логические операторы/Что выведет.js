//Что выведет alert (ИЛИ)?
alert(null || 2 || undefined); //2

//Что выведет alert (ИЛИ)?
alert(alert(1) || 2 || alert(3)); //  1 и 2

//Что выведет alert (И)?
alert(1 && null && 2); // null

//Что выведет alert (И)?
alert(alert(1) && alert(2)); // 1 и undefined

//Что выведет этот код?
alert(null || (2 && 3) || 4); //3
