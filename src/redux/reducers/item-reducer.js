const initialState = [
    {
        id:Math.random(),
        name:'Iphone 7S',
        image: 'https://cdn.tgdd.vn/Products/Images/42/182153/oppo-f9-red-1.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, quia? Ex sapiente incidunt rerum tempore asperiores obcaecatimolestiae eius perferendis!',
        price:500
    },
    {
        id:Math.random(),
        name:'Samsung Galaxy',
        image: 'https://boygeniusreport.files.wordpress.com/2017/11/iphone-x-photo.jpg?quality=98&strip=all&w=782',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, quia? Ex sapiente incidunt rerum tempore asperiores obcaecatimolestiae eius perferendis!',
        price:800
    },
    {
        id:Math.random(),
        name:'Oppo F7',
        image: 'https://hoanghamobile.com/Uploads/Originals/2018/08/10/201808100934091115_mg-6364-1.jpg;watermark=logo;crop=auto;quality=80;format=jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, quia? Ex sapiente incidunt rerum tempore asperiores obcaecatimolestiae eius perferendis!',
        price:300
    },
    {
        id:Math.random(),
        name:'BlackBerry',
        image: 'https://didongthongminh.vn/upload_images/2017/10/blackberry-key-one-silver.png',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, quia? Ex sapiente incidunt rerum tempore asperiores obcaecatimolestiae eius perferendis!',
        price:150
    },
    {
        id:Math.random(),
        name:'iPhone X 64GB',
        image: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-1-400x460.png',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, quia? Ex sapiente incidunt rerum tempore asperiores obcaecatimolestiae eius perferendis!',
        price:1000
    },
    {
        id:Math.random(),
        name:'Huawei P30 Lite',
        image: 'https://cdn.tgdd.vn/Products/Images/42/198985/huawei-p30-lite-400x460.png',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, quia? Ex sapiente incidunt rerum tempore asperiores obcaecatimolestiae eius perferendis!',
        price:600
    }
]

const itemReducer = (state = initialState,action) => {
    switch(action.type){

        default: return [...state]
    }
}
export default itemReducer