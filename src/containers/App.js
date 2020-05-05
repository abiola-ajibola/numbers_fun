import React, { Fragment } from 'react';
import { Button } from '../components/Button';
import { DateInput } from '../components/DateInput';
import { Display } from '../components/Display';
import { NumberInput } from '../components/NumberInput';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      displayContent: '',
      queryString: '',
      random: 'random/math',
      today: `${((new Date()).getMonth() + 1).toString()}/${(new Date()).getDate().toString()}/date`
    }

  }

  render() {

    const onBtnClick = (query) => {
      fetch(`http://numbersapi.com/${query}?json`)
        .then(response => response.json())
        .then(info => {
          console.log(info);
          this.setState({ displayContent: info.text });
        })
    }

    return (
      <Fragment>
        <Display content={this.state.displayContent} />
        <Button text={'Today in history'} clicked={() => {
          let temp_today_date = new Date(),
            temp_this_month = (temp_today_date.getMonth() + 1).toString(),
            temp_this_day = (temp_today_date.getDate()).toString();
            console.log(1, temp_this_day +'/'+ temp_this_month);
          this.setState({ today: temp_this_month + '/' + temp_this_day + '/date' });
          console.log(this.state.today)
          onBtnClick(this.state.today);
        }} />
        <Button text={'Random math trivia'} clicked={() => {
          this.setState({ queryString: 'random/math' });

          onBtnClick(this.state.random);
        }
        } />
        <div className='input-wrapper'>
          <NumberInput changedNumber={(e) => {
            this.setState({ queryString: Math.floor(Math.abs(e.target.value)).toString() })
            console.log(this.state.queryString);
          }} />
          <Button text={'Get number trivia'} clicked={() => {
            onBtnClick(this.state.queryString);
            console.log(this.state.queryString);
          }} />
        </div>
        <div className='input-wrapper'>
          <DateInput changedDate={(e) => {
            let temp = new Date(e.target.value),
              month = (temp.getMonth() + 1).toString(),
              date = temp.getDate().toString();
            this.setState({ queryString: month + '/' + date + '/date' });
            console.log(e.target.value, this.state);
          }
          } />
          <Button text='Date in history' clicked={() => {
            onBtnClick(this.state.queryString);
            console.log(this.state.queryString);
          }} />
        </div>
      </Fragment>
    );
  }
}

export default App;
