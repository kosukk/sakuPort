import React from 'react';
class Button extends React.Component {
  constructor(props){
  super(props);
this.state={value:(<div id="start">上のボタンをクリックしてね！</div>)};
  }
  showPage2() {
    this.setState({ value: (<div className="skill-main">
      <table border="0" align="center">
        <tr>
          <th scope="col">言語</th>
          <th scope="col">実装経験</th>
          <th scope="col" id="sub">補足</th>
        </tr>
        <tr>
          <th>
           C
          </th>
          <th>
          なし
          </th>
          <th id="sub">
          一番長く触れている言語です
          </th>
        </tr>
        <tr>
          <th>Java</th>
          <th>なし</th>
          <th>授業で扱った程度です</th>
        </tr>
        <tr>
          <th>
            Python
          </th>
          <th>
            なし
          </th>
          <th id="sub">
            研究室で主に使用してます
          </th>
        </tr>
        <tr>
          <th>HTML&CSS</th>
          <th>ポートフォリオ</th>
          <th id="sub">このポートフォリオを作成するために勉強しました</th>
        </tr>
        <tr>
          <th>JavaScript</th>
          <th>ポートフォリオ</th>
          <th>React.jsも勉強しています</th>
        </tr>
      </table>
    </div>) });
  }

  showPage1() {
    this.setState({ value: (<div id="about-body">
    <img id="me" src="./sd2.jpg" />
明治大学理工学部情報科学科の3年生です。林陽一教授の人工知能研究室に配属しており、ビッグデータの解析やブラックボックスの透明化の研究を行なっています。
プログラミングは大学から始めたので実装経験はほとんどなく、授業で触れた程度です。このポートフォリオはこれを是正するための手段の一つです。LFrog
    </div>) });
  }

  showPage3() {
    this.setState({ value: (<div>
      <ur id="contact">
      <li>
      <a href="https://github.com/zazazan">
      Githubはこちら！
      </a>
      </li>
      <li>
      <a href="mailto:kbasketk@gmail.com">
      メールはこちら！
      </a>
      </li>
      </ur>
      </div>) });
  }
  showPage4(){
    this.setState({ value:(<div id="start">まだ、実績と呼べるものはないです、、すみません</div>)});
  }
  render() {
    return (
    <div>
    <button type="button" name="about" value="about" onClick={() => this.showPage1()}>
         about
    </button>
    <button type="button" name="skill" value="skill" onClick={() => this.showPage2()}>
        skill
    </button>
    <button type="button" name="info" value="info" onClick={() => this.showPage3()}>
        contact
    </button>
    <button type="button" name="skills" value="skills" onClick={() => this.showPage4()}>
        performance
    </button>
    <p>{this.state.value}</p>
    </div>
    );
  }
}
export default Button;

