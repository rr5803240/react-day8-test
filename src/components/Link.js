import React from 'react'

const STATUS = {
    HOVERED:'hovered',
    NORMAL:'normal'
}

export default class Link extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            class: STATUS.NORMAL,
        }

        this.mouseEnter =  this.mouseEnter.bind(this)
        this.mouseLeave = this.mouseLeave.bind(this)
    }

    mouseEnter(){
         this.setState({class: STATUS.HOVERED})
    }

    mouseLeave(){
        this.setState({class: STATUS.HOVERED})
   }
   render(){
       return(
           <a className={this.state.class} href={this.props.page || '#'} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>{this.props.children}</a>
       )
   }
}