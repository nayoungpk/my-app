import '../CSS/Selfintro.css';
import myImage from 'C:/Users/박나영/Desktop/sample/src/images2/003.png'; // 이미지 파일의 경로를 지정

const SelfIntro = () => {
  return (
    <div>
	<img src={myImage} alt="나의 이미지" />
	{/* 다른 이력서 컨텐츠 추가 */}
  </div> 
  );
    
};

export default SelfIntro;