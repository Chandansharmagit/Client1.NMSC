import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import '../new_component/benefitss.css'
export default function Benefits() {

    //animating the page while scrolling the page 
    const animatedRef = useRef(null);

    //making the not selectable in the text in the webnisy of nepal model secondary school

    const not_select = useRef(null);

    useEffect(() => {
        if (not_select.current) {
            not_select.current.style.userSelect = 'none';
        }
    }, [not_select]);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('fade-in'); // Add the 'fade-in' class when the element is in view
            } else {
              entry.target.classList.remove('fade-in'); // Remove the class when the element is out of view
            }
          });
        },
        { threshold: 0.5 } // Customize the threshold as needed
      );
  
      if (animatedRef.current) {
        observer.observe(animatedRef.current);
      }
  
      return () => {
        if (animatedRef.current) {
          observer.unobserve(animatedRef.current);
        }
      };
    }, []); // Run this effect only once on mount
  
    //making the  not copy the text in the features of the react js page in the massage of benefits of nepal secondary school

    const handlecopy = (event) => {
        event.preventDefault();
        alert("Copying is not allowed. This content is protected by copyright.")
    }
    return (
        <div ref={not_select} className='img-png-png'>

            <div className='benefits-pregiantions' onCopy={handlecopy}>
                <div className="benefits"><span className='means'ref={animatedRef} id="animated-container"><img src="https://th.bing.com/th/id/R.1d9a010c2ccf739d0252bea3df31ecee?rik=Su4eLGbyIOFkUA&riu=http%3a%2f%2fclipground.com%2fimages%2fgreen-triangles-clipart-1.jpg&ehk=L%2fYnBYLDv%2fOqQI3xiRFrqacM%2bMCgOZNIn54sAh6QqSw%3d&risl=&pid=ImgRaw&r=0" alt="" className='arrow' /></span>
                    <h1 className="explorinh">
                        Explore The Benefits of Nepal Model Secondary School for Students
                    </h1>
                    <hr />
                    <p className="exploring-text" onCopy={handlecopy}>
                        Black Board Learn+ is an academy school management system that is comprehensive and well organized to exceed the customary ways of academics and automatically helps the teachers and students find their day-to-day motivation. A dynamic school management software, which allows the teachers to meet students at their level, makes the entire program into a personalized discussion.
                    </p>
                </div>





                <div className="containerrs">


                    


                    <div className="item"ref={animatedRef} id="animated-container">
                        
                       
                        <img src='https://cdn.dribbble.com/users/153771/screenshots/3368653/media/af59890d0f3e94008d4fa56f487bd8b9.gif' alt="" className='images-pregination-grid' />
                        <div className="color">
                            <h3>Transportation </h3>
                        </div>
                        <div className="para"ref={animatedRef} id="animated-container">
                            <p className="back">School bus transportation is the safest, most convenient way to get your kids to school. With our experienced drivers and modern fleet of buses, we can get your kids to school on time.</p>
                        </div>
                       
                    </div>

                    <div className="item"ref={animatedRef} id="animated-container">
                        <img src='https://i.pinimg.com/originals/0e/e9/61/0ee961aa770d96ac9d36b22bc28f3e64.gif' alt="" className='images-pregination-grid' />
                        <div className="color">

                            <h3>Computer lab </h3>
                        </div>
                        <div className="para">
                            <p className="back">With our computer lab, you'll be able to develop the skills you need to succeed in today's competitive marketplace.</p>
                        </div>
                       
                    </div>

                    
                    <div className="item"ref={animatedRef} id="animated-container">
                        <img src='https://i.pinimg.com/originals/23/a0/a4/23a0a4771b5e76d2fe5173348ff0b3c2.gif' alt="" className='images-pregination-grid' />
                        <div className="color">

                            <h3>Library </h3>
                        </div>
                        <div className="para">
                            <p className="back">The library is a place for people of all ages to explore, learn, and discover new things. With a variety of resources, the library is a great place to start your journey of lifelong learning.</p>
                        </div>
                       

                        
                    </div>
                    <div className="item"ref={animatedRef} id="animated-container">
                        <img src='https://static.vecteezy.com/system/resources/thumbnails/006/408/131/small/top-view-of-green-football-pitch-or-soccer-field-vector.jpg' alt="" className='images-pregination-grid' />
                        <div className="color">

                            <h3>Playground </h3>
                        </div>
                        <div className="para">
                            <p className="back">Playground is the perfect place for kids to explore and play. With tons of activities and games, they'll never get bored.</p>
                        </div>
                        
                        
                    </div>
                    <div className="item"ref={animatedRef} id="animated-container">
                        <img src='https://media.istockphoto.com/id/877759952/vector/first-aid-symbol-vector.jpg?s=612x612&w=0&k=20&c=B6AR8gGjncqSO-4HyPko4ryPa4J6GubO9hbwxZEe4M8=' alt="" className='images-pregination-grid' />
                        <div className="color">

                            <h3>First aid </h3>
                        </div>
                        <div className="para">
                            <p className="back">First Aid provides a natural and effortless way to support your body in the healing process.</p>
                        </div>
                       
                    </div>
                    <div className="item"ref={animatedRef} id="animated-container">
                        <img src='https://cdn.dribbble.com/users/68398/screenshots/5711038/media/4f1f7c3cdc6f763eb348def47b9b1be1.gif' alt="" className='images-pregination-grid' />
                        <div className="color">

                            <h3>Scholorship </h3>
                        </div>
                        <div className="para">
                            <p className="back">We can help you find scholarships that fit your unique talents and interests.</p>
                        </div>
                        
                       
                    </div>

                    
                   


                  




                </div>
                
                <span className='new-arm'><img src="https://th.bing.com/th/id/R.1d9a010c2ccf739d0252bea3df31ecee?rik=Su4eLGbyIOFkUA&riu=http%3a%2f%2fclipground.com%2fimages%2fgreen-triangles-clipart-1.jpg&ehk=L%2fYnBYLDv%2fOqQI3xiRFrqacM%2bMCgOZNIn54sAh6QqSw%3d&risl=&pid=ImgRaw&r=0" alt="" className='new-arr' /></span>

                <Link to='/plustwplevel/our_program'><button type="button" class="btn btn-primary"id='level'>Checkout our Courses for +2 Level</button></Link>







            </div>
            <div className="transparent" onCopy={handlecopy}>
                <div class="backgrounda">
                    <h1 className='looking'>Are you looking for an incredible learning experience for your child?</h1>
                    <p className="explain">Look no further than Nepal Model Secondary School located at Devchuli-7, Keureni, Nawalpur Nepal! Nepal Model Secondary, we are dedicated to providing top-notch academic education and a comprehensive range of extracurricular activities.</p>
                </div>
                {/* <div class="backgroundb">
                    <h1 className='looking'>Are you looking for an incredible learning experience for your child?</h1>
                    <p className="explain">Look no further than Nepal Model Secondary School located at Devchuli-7, Keureni, Nawalpur Nepal! Nepal Model Secondary, we are dedicated to providing top-notch academic education and a comprehensive range of extracurricular activities.</p>
                </div> */}
            </div>

        </div>
    )
}
