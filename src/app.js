
class IndecisionApp extends React.Component {
  render() {
    const title = "indecision app";
    const subtitle = "Put your life in the hands of a computer";
    const options = ["Thing One", "THing 2", "THing 3"];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert("handlePick");
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

// set up otions prop for options component
// render length of the array

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.removeAll = this.removeAll.bind(this);
  }
  removeAll() {
    console.log(this.props.options);
    alert("Remove all button");
  }
  render() {
    return (
      <div>
        <button onClick={this.removeAll}>Remove All</button>
        {this.props.options.map(option => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}



class AddOption extends React.Component {
  handleAddOption(event) {
    event.preventDefault();

    const option = event.target.elements.option.value.trim();

    if (option) {
      alert(option)
    }
  }
  render() {
    return (
    <div>
      <form onSubmit={this.handleAddOption}>
        <input type="text" name="option"/>
        <button>Add option</button>
      </form>
    </div>);
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
