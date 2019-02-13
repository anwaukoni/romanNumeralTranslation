import React, { Component } from 'react';
import RenderTranslator from './components/RenderTranslator.jsx';
import * as TranslatorAPI from './TranslatorAPI';

class App extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      numberToRomanNumeral: { query: '', result: ''},
      romanNumeralToNumber: { query: '', result: ''}
    }
  }

  _translateNumber = (query) => {
    if (query.length > 0) {
      TranslatorAPI.getNumberToRomanNumeralTranslation(query)
      .then(({ query, result }) => this.setState(
        {
          numberToRomanNumeral: { 
            query,
            result
          }
        }
      ))
    } else {
      alert ('Please insert a number in the input box.')
    }
  }

  _translateRomanNumeral = (query) => {
    if (query.length > 0) {
      TranslatorAPI.getRomanNumeralToNumberTranslation(query)
      .then(({ query, result }) => this.setState(
        {
          romanNumeralToNumber: { 
            query,
            result
          }
        }
      ))
    } else {
      alert ('Please insert a number in the input box.')
    }
  } 


  render() {
    const { numberToRomanNumeral, romanNumeralToNumber } = this.state;

    return (
      <div style={{display: 'flex', justifyContent: 'center', paddingTop: '5rem'}}>
        <div style={{ width: '50%', paddingLeft: '20px', paddingRight: '20px', textAlign:'center' }}>
          <RenderTranslator
            name='translateToRomanNumerals'
            type='number'
            placeholder='number'
            buttonText='Translate To Roman'
            onTranslate={ this._translateNumber }
            label='Number to Roman Numerals'
          />
          <div style={{ border: '1px solid #ccc', borderRadius: '4px', textAlign: 'center', padding: '4px 0px'}}>
            { 
              numberToRomanNumeral.result ? (
                <span>{numberToRomanNumeral.query} = {numberToRomanNumeral.result}</span>
              ):(
                <span>Example : 19</span>
              )
            }
          </div>
        </div>
        <div style={{ width: '50%',  paddingLeft: '20px', paddingRight: '20px', textAlign:'center' }}>
          <RenderTranslator
            name='translateToNumber'
            type='text'
            placeholder='Roman Numeral'
            buttonText='Translate To Number'
            onTranslate={ this._translateRomanNumeral }
            label='Roman Numerals To Number'
          />
          <div style={{ border: '1px solid #ccc', borderRadius: '4px', textAlign: 'center', padding: '4px 0px'}}>
            { 
              romanNumeralToNumber.result ? (
                <span>{romanNumeralToNumber.query} = {romanNumeralToNumber.result}</span>
              ):(
                <span>Example : XIX</span>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
