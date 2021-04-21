import React from 'react'
import './PuyoGame.css'
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';

class PuyoGame extends React.Component {
    constructor(props) {
        super(props)
    
        this.handleKeyDown = this.handleKeyDown.bind(this)
        let imageObj = new window.Image()
        imageObj.src = '../public/image/puyo_green.JPG';
         this.state = {
             faceSize:25,
             isGameOver: false,
             gameLoopTimeout: 50,
             timeoutId: 0,
             image: imageObj,
             x:100,
             y:100 

         }
    }
    
  componentDidMount() {
    this.initGame()
    window.addEventListener('keydown', this.handleKeyDown)
    this.gameLoop()
  }
  initGame(){
    let percentageWidth = this.props.percentageWidth || 40
    let width =
      document.getElementById('GameBoard').parentElement.offsetWidth *
      (percentageWidth / 100)
    width -= width % 30
    if (width < 30) width = 30
    let height = (width / 3) * 2
    let blockWidth = width / 30
    let blockHeight = height / 30
    alert("width - "+width)
    alert("blockWidth - "+blockWidth)
    alert("blockHeight - "+blockHeight)
  }
  gameLoop(){ 
    let index =0
    let timeoutId = setTimeout(() => {
        if (!this.state.isGameOver) {
        //   this.moveSnake()
        //   this.tryToEatSnake()
        //   this.tryToEatApple()
        // alert("game loop called")
          this.setState({ directionChanged: false,x:this.state.x+20,y:this.state.y+20 })
        }
        if(index++ <=10)
            this.gameLoop()

      }, this.state.gameLoopTimeout)
  
      this.setState({ timeoutId })
  
  }
  handleKeyDown(event) {
    if(event.keyCode === 32){
        alert("space bar clicked");
    }

  }
  
  render(){
      return (<div><div id="GameBoard">
          <img x={this.state.x} y={this.state.y} src = '../image/puyo_green.JPG' />
          
          </div>
      
      </div>) 
  }
    
}
export default PuyoGame

