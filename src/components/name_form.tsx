import React from 'react'

export default class NameForm extends React.Component<{}, {}> {
  private nameRef = React.createRef<HTMLInputElement>()

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (this.nameRef.current) {
      console.log(this.nameRef.current.value)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <input type="text" ref={this.nameRef} />
          <button>Submit</button>
      </form>
    )
  }
}