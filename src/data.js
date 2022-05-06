  import {v4 as uuid4} from 'uuid';
  
  const chillHop = () => {
    return [
        {
            name:"Glow",
            artist:"Ian Ewin, Strehlow",
            cover:"https://chillhop.com/wp-content/uploads/2022/03/efb56e836d82d26e857b341a951f0337ace66b8b-1024x1024.jpg",
            id: uuid4(),
            
            color:['#BA4A46', '#FDF0DD'],
            audio:'https://mp3.chillhop.com/serve.php/?mp3=32854',
            active:true,
        },
        {
            name:"Parasol",
            artist:"Plusma, Guillaume Muschalle",
            cover:"https://chillhop.com/wp-content/uploads/2022/04/c46e7efae453e56f839e3683926e809639f167b0-1024x1024.jpg",
            id: uuid4(),
            active:false,
            color:['#BA4A46', '#FDF0DD'],
            audio:'https://mp3.chillhop.com/serve.php/?mp3=28901'
        },
    ];
  }
  
  export default chillHop