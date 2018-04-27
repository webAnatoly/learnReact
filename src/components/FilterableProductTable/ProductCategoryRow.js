import React from 'react';

export default class ProductCategoryRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}