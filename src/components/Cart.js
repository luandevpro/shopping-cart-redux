import React, {Component} from 'react';

class Cart extends Component {
  render() {
    var { children , cart } = this.props 
    return (
      <section className="section">
        <div className="table-responsive">
          <table className="table product-table">
            {
               cart.length > 0 ?
                  <thead>
                     <tr>
                        <th></th>
                        <th>Sản Phẩm</th>
                        <th>Giá</th>
                        <th>Số Lượng</th>
                        <th>Tổng Cộng</th>
                        <th></th>
                     </tr>
                  </thead>
               : null
            }
            <tbody>
              { children }
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default Cart;