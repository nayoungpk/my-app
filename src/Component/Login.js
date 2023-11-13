import React, { Component } from 'react';
import "./CSS/Login.css";
import myImage11 from 'C:/Users/박나영/Desktop/sample/src/images2/008.jpg';
import myImage2 from 'C:/Users/박나영/Desktop/sample/src/images2/007-2.png'; 
import myImage3 from 'C:/Users/박나영/Desktop/sample/src/images2/007-3.png'; 
import myImage4 from 'C:/Users/박나영/Desktop/sample/src/images2/007-4.png'; 

class Login extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false,
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleLogin = () => {
    const { username, password } = this.state;

    // 이 부분에서 실제 로그인 검증 로직을 구현해야 합니다.
    // 아래는 간단한 예제입니다.
    if (username === '1234' && password === '1234') {
      this.setState({ isLoggedIn: true });
    } else {
      alert('로그인 실패. 사용자 이름 또는 비밀번호가 올바르지 않습니다.');
    }
  }

  render() {
    return (
      <div>
        {this.state.isLoggedIn ? (
           <a href = "/"></a>
        ) : (
          <div>
            <h1>로그인</h1>
            <input
              type="text"
              name="username"
              placeholder="사용자 이름"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
            <br />
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <br />< id class ="yt">
            <button onClick={this.handleLogin}>로그인</button>
            </id>
            
          </div>
        )}
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
      </div>
    );
  }
}

export default Login;