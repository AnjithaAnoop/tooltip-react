
import {useEffect, useState} from 'react';
import Tooltip from './Tooltip';

function Hoverme() {

    const [position,setPosition] = useState();
// for setting position to top,left,right and bottom. 
    const [mouseCoordinates, setMouseCoordinates] = useState({x:0, y:0});
    // to get the position of coordinates.
    const [isHovering, setIsHovering] = useState(false);
 //to check whether hovered or not.
  	const mouseMoveHandler = (event) => {
    	setMouseCoordinates({
      		x:event.clientX,
      		y:event.clientY
    	});
  	}
      const handleMouseOver = () => {
        setIsHovering(true);
      };

      const handleMouseOut = () => {
        setIsHovering(false);
      };
      useEffect(()=>{
    	window.addEventListener('mousemove', mouseMoveHandler);
    	return(()=>{
      		window.removeEventListener('mousemove', mouseMoveHandler);
    	})
  	}, [])

    return <>
            <div style={styles.container}>
            <button style={styles.mystyle}
            ref={el => {
                if (!el) return;

                 if(el.getBoundingClientRect().left < mouseCoordinates.x && el.getBoundingClientRect().right > mouseCoordinates.x &&
                 el.getBoundingClientRect().top > mouseCoordinates.y && el.getBoundingClientRect().bottom > mouseCoordinates.y){
                    setPosition('top');
                 }
                 else if(el.getBoundingClientRect().left < mouseCoordinates.x && el.getBoundingClientRect().right > mouseCoordinates.x &&
                 el.getBoundingClientRect().top < mouseCoordinates.y && el.getBoundingClientRect().bottom < mouseCoordinates.y){
                    setPosition('bottom');
                 }
                 else if(el.getBoundingClientRect().left > mouseCoordinates.x && el.getBoundingClientRect().right > mouseCoordinates.x &&
                 el.getBoundingClientRect().top < mouseCoordinates.y && el.getBoundingClientRect().bottom > mouseCoordinates.y){
                    setPosition('left');
                 }
                 else if(el.getBoundingClientRect().left < mouseCoordinates.x && el.getBoundingClientRect().right < mouseCoordinates.x &&
                 el.getBoundingClientRect().top < mouseCoordinates.y && el.getBoundingClientRect().bottom > mouseCoordinates.y){
                    setPosition('right');
                 }

              }}
               //fetching position from which it was hovered and passing it as props.
             onMouseOver={handleMouseOver}
             onMouseOut={handleMouseOut}>Hover over me!
             {isHovering && (
                <Tooltip position={position}/>
             )}
             </button>


            </div>
           </>

  }

  const styles ={
    mystyle:{
        color:'grey',
        fontSize:'18px',
        backgroundColor:'black',
        position:'relative',
        borderRadius:'8px',
        padding:'10px'
    },
    container:{
        margin:'10%'
    }

}

  export default Hoverme;