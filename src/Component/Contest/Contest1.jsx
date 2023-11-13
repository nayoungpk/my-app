import myImage from 'C:/Users/박나영/Desktop/sample/src/images2/007-1.png';
import myImage2 from 'C:/Users/박나영/Desktop/sample/src/images2/007-2.png'; 
import myImage3 from 'C:/Users/박나영/Desktop/sample/src/images2/007-3.png'; 
import myImage4 from 'C:/Users/박나영/Desktop/sample/src/images2/007-4.png'; 
import myImage6 from 'C:/Users/박나영/Desktop/sample/src/images2/007-6.png'; 
import myImage7 from 'C:/Users/박나영/Desktop/sample/src/images2/007-7.png'; 
import myImage8 from 'C:/Users/박나영/Desktop/sample/src/images2/007-8.png'; 
import myImage10 from 'C:/Users/박나영/Desktop/sample/src/images2/007-10.png'; 

const Contest1 = () => {
  return (
    <div >
    <img src={myImage} alt= "header" />
    <id class="butt">
        <a href="https://www.instagram.com/na_young_park/">
            <img src={myImage2} alt="butt1" />
        </a>
        <a href="https://www.youtube.com/watch?v=xfuskC7G7R8">
            <img src={myImage3} alt="butt2" />
        </a>
        <a href="https://blog.naver.com/youngjjng1">
            <img src={myImage4} alt="butt3" />
        </a>
    </id>
    < id class = "intr" >
        <h3>NEWS+</h3>
    </id>
    <id class="context" style={{display:'flex', flexDirection: 'row'}}>
        <a href="https://blog.naver.com/youngjjng1/221985155216">
        <img src={myImage6} alt= "context" /></a>
        <a href="/">
        <img src={myImage7} alt= "context" /></a>
        <a href="/">
        <img src={myImage8} alt= "context" /></a>
        <a href="https://blog.naver.com/youngjjng1/222892162075">
        <img src={myImage10} alt= "context" /></a>
    </id>
    </div> );
};

export default Contest1;