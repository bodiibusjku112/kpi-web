import React from 'react';

export default class List extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         items: []
      }
      this.addItem = this
      .addItem
      .bind(this);
   }

   addItem() {
      const title = prompt('Enter title:', '');
      if (title === null || title === "") return;
      const url = prompt('Enter URL:', '');
      if (url === null || url === "") return;
      let newItems = this.state.items.slice();
      const id = Math.floor(Math.random() * 10000);
      newItems.push({id: id, title: title, url: url});
      this.setState({items: newItems});
   }

   show(index) {
      alert(this.state.items[index].url);
   }

   delete(index) {
      this.state.items.splice(index, 1);
      this.setState({items: this.state.items});
   }

   edit(index) {
      const newUrl = prompt("Enter new URL:", "");
      let newItems = this.state.items.slice();
      newItems[index].url = newUrl;
      this.setState({items: newItems});
   }

   render() {
      return (<div><table>
         <tr>
            <th id="title">Title</th>
            <th>Show</th>
            <th>Edit</th>
            <th>Delete</th>
         </tr>
         {this.state.items.map((item, index) => {
            return (<tr><td>{item.title}</td>
               <td>
                  <button key={item.id} onClick={() => {this.show(index)}}>Show</button>
               </td>
               <td>
                  <button key={item.id} onClick={() => {this.delete(index)}}>Delete</button>
               </td>
               <td>
                  <button key={item.id} onClick={() => {this.edit(index)}}>Edit</button>
               </td>
               </tr>);
         }, this)}
      </table>
      <button onClick={this.addItem}>Add Item</button>
      </div>);
   }
}