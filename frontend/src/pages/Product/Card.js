import React,{useEffect, useRef} from "react";
import './Card.css';

function Card(props){
    const product = props.product;
    const canvasRef = useRef(null);
    useEffect(()=>{
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        const img = new Image();
        img.src = product.image;
    
        img.onload = () => {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
        };
        
    },[product.image]);
    return (
        <div className="card">
            <canvas className="card-image" ref={canvasRef} />
            <div className="card-content" dangerouslySetInnerHTML={{__html:product.bodyHtml.substring(0,500)}}></div>
        </div>
    );
}
export default Card;