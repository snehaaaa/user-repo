import React from "react";

export default class InputElement extends React.PureComponent {
  constructor(props) {
    super();
    this.state = {
      value: props.value || ""
    };
    this.onFieldChange = this.onFieldChange.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value || ""
    });
  }
  onFieldChange(ev) {
    if (this.props.onChange) this.props.onChange(ev, ev.target.value);
  }

  render() {
    const {
      className,
      placeholder,
      type,
      autoComplete,
      errorText
    } = this.props;
    return (
      <>
        <input
          className={className}
          autoComplete={autoComplete ? autoComplete : "off"}
          type={type ? type : "text"} 
          placeholder={placeholder || ""}
          value={this.state.value}
          onChange={this.onFieldChange}
          disabled={this.props.disabled}
        />
        {errorText && (
          <div className="errorText">
            <span style={{ marginLeft: 15 }}>{errorText}</span>
          </div>
        )}
      </>
    );
  }
}
