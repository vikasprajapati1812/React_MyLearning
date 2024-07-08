import { createRoot } from 'react-dom/client'
import "./style.css"

// const card=<div className='card'>
//     <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEvOzPMLPYFJgHPQfUUNj24HjmCAs6mt7r3A&s' alt='iphonw'/>
//     <div className="card-content">
//     <h3>Iphone 15</h3>
//     <p>Apple</p>
//     <p><b>$999</b></p>
//     </div>
// </div>

// const container=[
//         card,card,card,card,card,card,card,card,card,card]
//     const root = createRoot(document.getElementById('root'))

//     // root.render([card,card])
//     root.render(container);    
   
   
   
   
   
   
   
    function Card(key){
        return<div className='card'  key={key}>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEvOzPMLPYFJgHPQfUUNj24HjmCAs6mt7r3A&s' alt='iphonw'/>
    <div className="card-content">
    <h3>Iphone 15</h3>
    <p>Apple</p>
    <p><b>$999</b></p>
    </div>
</div>
}
// console.log(Card())

const container=[Card(1),Card(2),Card(3),Card(4),Card(5),Card(6),Card(7),
    Card(8),Card(9),Card(10)]


// const container=[Card(1),Card(2),Card()]    // it will give error "Each card should have unique key"
const root = createRoot(document.getElementById('root'))

root.render(<div className='container'>{container}</div>)
console.log('Hello world!!!')