import {fetchOneDevice} from '../../http/deviceApi.js'





export const cartHelper_test = function(userBasket){

    let list_id = new Set()
    let ob = {}
    let counts_device_id = {}
    let count =0;
    let temp_list = []

const F = function(n){
  for(let i =0; i<n; i++){
    count += 1;
  }
}
F(8);
/*
        userBasket.forEach((value) => {
        fetchOneDevice(value.device_id).then((result) => {
          

         
        //  data.device.then((result) => {

             ob = {
                  device_id: String(result.id),
                  device: result,
                  count_device_id: counts_device_id[result.id]

                }


            if(!list_id.has(ob.device_id))  {

              temp_list.push(ob)
              count += 1



            list_id.add(String(result.id))

          }
        //  })

})
       }
       )

     // console.log('temp_list',temp_list)
            */
      console.log('count_test',count)
            return count;
}