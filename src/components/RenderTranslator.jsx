import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input, FormGroup } from 'reactstrap';

export default class RenderTranslator extends React.Component {
  constructor(props, context){
    super(props, context)

    this.state = {
      query: ''
    }

    this._translateQuery = this._translateQuery.bind(this);
  }

  _updateQuery(event) {
    this.setState({ query: event.target.value });
  }

  _translateQuery() {
    this.props.onTranslate(this.state.query);
    this.setState({ query: '' });
  }

  render() {
    const { name, type, placeholder, buttonText, label } = this.props;

    return (
      <FormGroup style={{ backgroundColor: '#e2f0c6', borderRadius: '4px', padding: '12px'}}>
        <Label for={name}>{ label }</Label>
        <div>
          <div style={{ display: 'inline-block', paddingRight: '16px', paddingBottom: '12px', verticalAlign: 'top', width: '60%' }}>
            <Input
              name={name}
              type={type}
              placeholder={placeholder}
              value={this.state.query}
              onChange={ event => this._updateQuery(event) }
              aria-label={name}
              aria-describedby="basic-addon2"
            />
          </div>
            <button 
              style={{
                color: '#fff',
                backgroundColor: '#337ab7',
                borderColor: '#2e6da4',
                display: 'inline-block',
                marginBottom: 0,
                fontWeight: 400,
                textAlign: 'center',
                verticalAlign: 'middle',
                padding: '6px 12px',
                fontSize: '14px',
                lineHeight: '1.42857143',
                borderRadius: '4px'
              }}  
              onClick={this._translateQuery}
            >
              { buttonText }
            </button>
        
        </div>
      </FormGroup>
    );
  }
}

RenderTranslator.propTypes = {
  onTranslate: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired
};