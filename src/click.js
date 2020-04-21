export const onBtnClick = (query) => {
    fetch(`http://numbersapi.com/${query}?json`)
    .then(response => response.json())
    .then(info => {
      console.log(info)
      //this.setState({displayContent: info.text})
    })
  }