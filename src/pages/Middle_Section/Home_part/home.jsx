import React from 'react';
import "../Home_part/home.css"

import img1 from  "../Home_part/images/musictrans.png"
import img2 from  "../Home_part/images/music2trans.png"
import img3 from  "../Home_part/images/music3trans.png"
import img4 from "../Home_part/images/dance1trans.png"
import img5 from "../Home_part/images/dance2trans.png"
import img6 from "../Home_part/images/dance3trans.png"
import img7 from "../Home_part/images/esportstrans.png"
import img8 from "../Home_part/images/codingtrans.png"

class Home extends React.Component {
    state = {x:0,y:0}
    mouse_move = (e) =>{
        this.setState({x:e.clientX,y:e.clientY})
        document.querySelectorAll(".object").forEach(object =>{
            const speed = object.getAttribute("data-value");

            const x = (window.innerWidth - e.pageX*speed)/100             
            const y = (window.innerHeight - e.pageY*speed)/100

            object.style.transform = `translateX(${x}px) translateY(${y}px)`
        })
        
    }

 render() {
    const {x, y} = this.state
    return (
        <div className="home-container">
        <div className='container-p' onMouseMove={this.mouse_move} >
            {/* start coding here */}
            <h2 className='object' data-value="3">Cllg<br></br><span>Clubs</span></h2>

            <img src={img1} className='object' data-value="-2" alt="image"></img>
            <img src={img2} className='object' data-value="6" alt="image"></img>
            <img src={img3} className='object' data-value="4" alt="image"></img>
            <img src={img4} className='object' data-value="-6" alt="image"></img>
            <img src={img5} className='object' data-value="8" alt="image"></img>
            <img src={img6} className='object' data-value="-4" alt="image"></img>
            <img src={img7} className='object' data-value="5" alt="image"></img>
            <img src={img8} className='object' data-value="-9" alt="image"></img>

        </div>
        </div>
    )
}
}
    // nneed to add paraalx events
//     document.addEventListener("mousemove",parallx)
//     function parallx(e){
//         document.querySelectorAll(".object").forEach(object => {
//             const speed = object.getAttribute("data-speed");

//             const x = (window.innerWidth - e.pageX*speed)/100
//             const y = (window.innerHeight - e.pageY*speed)/100

//             object.style.transform = `translateX(${x}px) translateY(${y}px)`
//         })
//     }

//     return (
        
//     );
// }
// rework is there for this after going to home

export default Home;
