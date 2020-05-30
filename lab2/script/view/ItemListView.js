import ItemView from './ItemView.js';
export default class ItemListView {
   constructor(itemListModel) {
      this.itemListModel = itemListModel;
      this.controllerOnChange = null;
      this.controllerOnAddItem = null;
      this.controllerOnDelItem = null;
      this.controllerOnShow = null;
      document.querySelector('#list').addEventListener('click', (e) => this.onClick(e)); // 'this' changes
   }

   setControllerOnChange(controllerOnChange) {
      this.controllerOnChange = controllerOnChange;
   }

   setControllerOnAddItem(controllerOnAddItem) {
      this.controllerOnAddItem = controllerOnAddItem;
   }

   setControllerOnDelItem(controllerOnDelItem) {
      this.controllerOnDelItem = controllerOnDelItem;
   }

   setControllerOnShow(controllerOnShow) {
      this.controllerOnShow = controllerOnShow;
   }

   onClick(e) {
      if (e.target.className === 'show-button') {
         this.controllerOnShow(e.target.dataset.id);
         return;
      }
      if (e.target.className === 'change-button') {
         this.controllerOnChange(e.target.dataset.id);
         return;
      }
      if (e.target.className === 'del-button') {
         this.controllerOnDelItem(e.target.dataset.id);
         return;
      }
   }

   onAddItem() {
      const title = prompt('Enter title:', '');
      if (title === null) return;
      const url = prompt('Enter URL:', '');
      if (url === null) return;
      this.controllerOnAddItem(title, url);
   }

   toHtml() {
      const itemsHtml = this.itemListModel.items.map((item) => {
         const itemView = new ItemView(item);
         return itemView.toHtml();
      }).join("");
      return `<table border="1">
      <tr>
      <th>Title</th>
      <th>Show</th>
      <th>Delete</th>
      <th>Change</th>
      </tr>
      ${itemsHtml}
      </table>`;
   }
}