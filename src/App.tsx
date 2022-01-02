import React from 'react'
import './blocks/customblocks'
import './generator/generator'
// import final from './images/Screenshot (629).png'
import swing from './images/swing+kid.png'
import park from './images/parksetting2.png'
import BlocklyJS from 'blockly/javascript'
import BlocklyComponent, { Block, Value, Field, Shadow } from './Blockly'
import { Button } from '@mui/material'

import './App.css'

function App() {
  const simpleWorkspace : any = React.createRef()

  function generateCode() {
    var code = BlocklyJS.workspaceToCode(
      simpleWorkspace.current.workspace
    );
    console.log(code)
    if (code === '12') {
      var swing = document.getElementById("swing_kid");
      swing.style.animation = "swing1f 1s ease-in-out";
      setTimeout(function(){
        swing.style.animation = '';
      }, 1000);
      document.getElementById("score").innerHTML = (parseInt(document.getElementById("score").innerHTML) + 2).toString();
    }
    if(code === '812') {
      var swing2 = document.getElementById("swing_kid");
      swing2.style.animation = "swing2f 1s ease-in-out";
      setTimeout(function(){
        swing2.style.animation = '';
      }, 1000);
      document.getElementById("score").innerHTML = (parseInt(document.getElementById("score").innerHTML) - 1).toString();
    }
    if(code === '512') {
      var swing3 = document.getElementById("swing_kid");
      swing3.style.animation = "swing1b 1s ease-in-out";
      setTimeout(function(){
        swing3.style.animation = '';
      }, 1000);
      document.getElementById("score").innerHTML = (parseInt(document.getElementById("score").innerHTML) + 2).toString();
    }
    if(code === '5812') {
      var swing4 = document.getElementById("swing_kid");
      swing4.style.animation = "swing2b 1s ease-in-out";
      setTimeout(function(){
        swing4.style.animation = '';
      }, 1000);
      document.getElementById("score").innerHTML = (parseInt(document.getElementById("score").innerHTML) - 1).toString();
    }
  }
  return (
    <>
      {/* <div id="bg" style={{ margin: 'auto', width: '50%', textAlign: 'center', backgroundImage: park }}>
        <img className="swing_kid" src={swing} alt='swing' />
      </div> onClick="label_emotions()"*/}
      <div className="topnav">
        <button>
          <img
            src="https://assets.dryicons.com/uploads/icon/svg/2468/apple.svg"
            height="68"
            alt="apple"
          />
          <div id="score">0</div>
        </button>

        <button id="myBtn" onClick={() => {
          var modal = document.getElementById("myModal");
          modal.style.display = "block";
        }}>
          <img src="https://www.svgrepo.com/show/372448/form.svg" height="70" alt="form" />
          <div>भावनाओं को नाम दें</div>
        </button>

        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => {
              var modal = document.getElementById("myModal");
              modal.style.display = "none";
            }}>&times;</span>
            <span>भावनाओं को नाम दें <br />(Name the feelings)<br /></span>
            <form className="para" id='myForm'>
              <ul>
                <p className="para">
                  <li>आपके अनुसार झूला झूल रहा बच्चा क्या भावना महसूस कर रहा है? (What emotion according to you the kid on swing is feeling?)</li>
                </p>
                <input type="radio" id="happy" name="feeling" />प्रसन्न (Happy)<br />
                <input type="radio" id="scared" name="feeling" />डरा हुआ (Scared)<br />
                <input type="radio" id="no" name="feeling" />कोई भावना नहीं (No emotion)<br /><br />
                <p className="para" font-weight="600">
                  <li>आप क्या भावना महसूस कर रहे हैं? (What emotion are you feeling?)</li>
                </p>
                <input type="radio" id="happy" name="feeling2" />प्रसन्न (Happy)<br />
                <input type="radio" id="scared" name="feeling2" />डरा हुआ (Scared)<br />
                <input type="radio" id="no" name="feeling2" />कोई भावना नहीं (No emotion)<br />
              </ul>
            </form>
            <button className="button button1" onClick={() => {
              var modal = document.getElementById("myModal");
              modal.style.display = "none";
            }}>Submit</button>
          </div>
        </div>

        <button id="myb" onClick={() => {
          var modal = document.getElementById("myM");
          modal.style.display = "block";
        }}>
          <img src="https://www.svgrepo.com/show/132885/woman.svg" height="70" alt="woman" />
          <div>मेरी मदद करो</div>
        </button>

        <div id="myM" className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => {
              var modal = document.getElementById("myM");
              modal.style.display = "none";
            }}>&times;</span>
              <span>फ्लेमिंग लेफ्ट हैंड रूल<br />(Fleming's Left Hand Rule)<br /><br /></span>
              <p>स्पष्टीकरण के लिए इस वीडियो को देखें<br />(Check out this video for explanation!)<br /></p>
              <iframe width="386" height="237" src="https://www.youtube.com/embed/Y8ru1CMgJM0" title="embed clip" />
          </div>
        </div>

      </div>
      <div style={{ margin: 'auto', width: '50%', textAlign: 'center' }}>
        <img style={{ height: '40vh' }} className="parksetting" src={park} alt="Park setting" />
        <img style={{ height: '140px', left: '710px', top: '85px' }} id="swing_kid" src={swing} alt="Swing kid" />
      </div>
      {/* <div style={{ margin: 'auto', width: '50%', textAlign: 'center' }}>
        <img src={final} style={{ height: '40vh' }} className="App-logo" alt="logo" />
      </div> */}
      <div style={{ margin: 'auto', width: '50%', textAlign: 'center' }}>
        <Button variant='outlined' onClick={ () => generateCode() }>Run</Button>
      </div>
      <BlocklyComponent
        ref={simpleWorkspace}
        readOnly={false}
        trashcan={true}
        media={'media/'}
        move={{
          scrollbars: true,
          drag: true,
          wheel: true
        }}
        initialXml={`<xml xmlns="http://www.w3.org/1999/xhtml"><block type="connect" x="0" y="0"></block></xml>`}
      >
        <Block type="battery" />
        <Block type="increase" />
        <Block type="connect" />
        <Block type="wire_red" />
        <Block type="wire_black" />
        <Block type="rotate" />
        <Block type="magnet" />
        <Block type="disconnect" />
        <Block type="controls_repeat_ext">
          <Value name="TIMES">
            <Shadow type="math_number">
              <Field name="NUM">10</Field>
            </Shadow>
          </Value>
        </Block>
      </BlocklyComponent>
    </>
  );
}

export default App;
