import React, { Component, PropTypes } from 'react';

class Header extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    isLoading: PropTypes.bool,
    submit: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['news','photos']),
    user: PropTypes.shape({
      name: PropTypes.string,
      age: PropTypes.number
    }),
    users: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number
      })
    )
  };
  
  render() {
    return (
     <ul>

       {this.props.items.map((item, index)=>
        <li key={index}>
          <a href={item.link}>{item.label}</a>
        </li>
       )}

     </ul>
    )
  }
}

export default Header;