export default class ItemView {
   constructor(itemModel) {
       this.itemModel = itemModel;
   }

   toHtml() {
       return `
           <tr>
               <td>
                   ${this.itemModel.title}
               </td>
               <td>
                   <button data-id="${this.itemModel.id}" class="show-button">Show</button>
               </td>
               <td>
                   <button data-id="${this.itemModel.id}" class="del-button">Delete</button>
               </td>
               <td>
                   <button data-id="${this.itemModel.id}" class="change-button">Change</button>
               </td>
           </tr>`;
   }
}