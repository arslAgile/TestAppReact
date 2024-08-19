import React, {useState} from 'react'; 
import {FaArrowCircleUp} from 'react-icons/fa'; 

const ScrollButton = () =>{ 

const [visible, setVisible] = useState(false) 

const toggleVisible = () => { 
	const scrolled = document.documentElement.scrollTop; 
	if (scrolled > 300){ 
	setVisible(true) 
	} 
	else if (scrolled <= 300){ 
	setVisible(false) 
	} 
}; 

const scrollToTop = () =>{ 
	window.scrollTo({ 
	top: 0, 
	behavior: 'smooth'
	}); 
}; 

window.addEventListener('scroll', toggleVisible); 

return ( 
	<button className='fixed w-full left-[47%] bottom-4 text-4xl z-10 cursor-pointer'> 
	<FaArrowCircleUp className='text-green-400' onClick={scrollToTop} 
	style={{display: visible ? 'inline' : 'none'}} /> 
	</button> 
); 
} 

export default ScrollButton; 
