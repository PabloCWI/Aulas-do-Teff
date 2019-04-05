import React from "react";

class VoiceCard extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.voiceList = window.speechSynthesis.getVoices();
  //   this.textToSpeak = textToSpeak.bind(this);
  // }
  render() {
    return (
      <div>
      </div>
      // <div>
      //   <input onChange={this.textToSpeak} />
      //     {this.voiceList.map((item, index) => (
      //       <span key={index}>{index}</span>
      //       // <CardComp {...item} key={index}  />
      //     ))}
      //</div>
    );
  }
}

// function textToSpeak(e) {
//   console.log(e.target.value);
// }

// const CardComp = props => {
//     console.log(props)
//   return (
//     <div >
//       Lang: {props.lang}
//       Name: {props.name}
//       <span>
//         <button>Play</button>
//       </span>
//     </div>
//   );
// };

export default VoiceCard;
