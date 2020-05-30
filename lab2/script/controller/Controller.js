import Item from "../model/Item.js";

export default class Controller {
   constructor(itemListModel, itemListView) {
      this.itemListModel = itemListModel;
      this.itemListView = itemListView;
      this.itemListModel.setOnChangeCallback((e) => this.onChangeCallback(e));
      this.itemListView.setControllerOnAddItem(this.addItem);
      this.itemListView.setControllerOnDelItem(this.delItem);
      this.itemListView.setControllerOnChange(this.changeItem);
      this.itemListView.setControllerOnShow(this.showItem);
      this.initOnModelChange();
      document.querySelector('#add-item').addEventListener('click', (e) => itemListView.onAddItem(e));
   }

   onChangeCallback() {
      document.querySelector('#list').innerHTML = this.itemListView.toHtml();
   }

   showItem(id) {
      this.itemListModel.show(id);
   }

   changeItem(id) {
      this.itemListModel.change(id);
   }

   addItem(title, url) {
      const item = new Item(title, url);
      this.itemListModel.add(item);
   }

   delItem(id) {
      this.itemListModel.delete(id);
   }

   initOnModelChange() {
      let handler = {
         set: (obj, prop, val) => {
            obj[prop] = val;
            document.querySelector('#list').innerHTML = this.itemListView.toHtml();
            return true;
         }
      }
      this.itemListModel.items = new Proxy(this.itemListModel.items, handler);
   }
}