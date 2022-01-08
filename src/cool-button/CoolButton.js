import 'bulma/css/bulma.css';
import React from 'react';
import './CoolButton.css'

class CoolButton extends React.Component {
  render() {
    // this.props { isSmall: true, isDanger: true, className: "is-rounded my-class" }

    let klassEl = ['button']

    if (this.props.className) {
      klassEl.push(this.props.className)
    }

    if (this.props.isSmall) { klassEl.push(' is-small') } 
    if (this.props.isDanger) { klassEl.push(' is-danger') }
    if (this.props.isSuccess) { klassEl.push(' is-success') }
/*     if (this.props.className === 'is-rounded') { klassEl.push(' is-rounded')}
    if (this.props.className === 'my-class') { klassEl.push(' my-class')} */

    /* let klass = "button"
    if (this.props.isSmall) {
      klass += ' is-small'
    } */

    // <button class="button is-rounded my-class is-danger is-small">Button 1</button>
    // <button class="button is-small is-success">Button 2</button>

    return (
      <div>
        <button className={klassEl.join(' ')}>{this.props.children}</button>
      </div>
    )
  }
}

export default CoolButton
//export {CoolButton} // named-export