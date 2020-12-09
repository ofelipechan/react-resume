import React, { Component } from 'react';
import './styles.scss';

export default class Menu extends Component<any, { text: string }> {
    finalText = `Hello! I'm Felipe Chan`;
    speed = 90;
    characterCount = 0;

    constructor(props: any) {
        super(props);
        this.state = {
            text: ''
        };
        this.typeWriter = this.typeWriter.bind(this);
    }

    componentDidMount() {
        this.typeWriter();
    }

    typeWriter() {
        if (this.characterCount < this.finalText.length) {
            this.setState({ text: this.state.text + this.finalText.charAt(this.characterCount) });
            this.characterCount++;
            setTimeout(this.typeWriter, this.speed);
        }
    }

    render() {
        return (
            <div className="background-home">
                <div className="title">
                    <h1>{this.state.text}</h1>
                </div>
            </div>
        );
    }
}
