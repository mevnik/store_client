import {fetchOneDevice} from '../../http/deviceApi.js'





export const cartHelper = function(userBasket){

    let item_in_basket = {} // позиция в корзине
    let count =0; // общее количество товаров в козине
    let basket = [] // содержимое корзины с полной информацией о каждом товаре
    let list_items = new Set() // создаем список выбранных id товаров в корзине
    let cart = [] // создаем массив выбранных товаров в корзине с указанием id и количества данного товара
        userBasket.forEach((value) => {
              count += 1
          if(!list_items.has(value.device_id))  {

              cart.push({device:value, all:1})

            list_items.add(value.device_id)

          }
          else {
            cart.find((item) => item.device.device_id === value.device_id).all += 1;
          }

        })

        cart.forEach((value) => { // здесь получаем инфо о каждом товаре и создаем массив объектов в корзине
        fetchOneDevice(value.device.device_id).then((result) => {

             item_in_basket = {
                  device: result,
                  count_device_id: value.all

                }

              basket.push(item_in_basket)

          })

       }
       )

            return [basket,count];
}